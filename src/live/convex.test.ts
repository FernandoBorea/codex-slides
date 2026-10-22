import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ConvexError } from "convex/values";
import { createConvexTransport } from "./convex";
import { sessionsApi } from "./api";
import * as credentials from "./credentials";
import { emptySnapshot } from "./types";
import type { LiveTransport, SessionSnapshot } from "./types";

const client = vi.hoisted(() => ({
  watchQuery: vi.fn(),
  mutation: vi.fn(),
  close: vi.fn(),
}));
vi.mock("convex/react", () => ({
  ConvexReactClient: class {
    watchQuery = client.watchQuery;
    mutation = client.mutation;
    close = client.close;
  },
}));

const transports: LiveTransport[] = [];
const stops: (() => void)[] = [];
let serverSnapshot: SessionSnapshot;
let updates: Set<() => void>;
let browserStorage: Map<string, string>;

beforeEach(() => {
  vi.clearAllMocks();
  client.mutation.mockReset().mockResolvedValue(null);
  vi.stubGlobal("window", new EventTarget());
  browserStorage = new Map();
  vi.stubGlobal("localStorage", {
    getItem: (key: string) => browserStorage.get(key) ?? null,
    setItem: (key: string, value: string) => browserStorage.set(key, value),
  });
  serverSnapshot = emptySnapshot;
  updates = new Set();
  client.watchQuery.mockImplementation(() => ({
    localQueryResult: () => serverSnapshot,
    onUpdate: (update: () => void) => {
      updates.add(update);
      return () => updates.delete(update);
    },
  }));
});

const manifest = {
  deckSlug: "demo",
  deckTitle: "Demo",
  slides: [{
    slug: "first", title: "Primera", kicker: "01",
    guide: { intro: "Guía" },
  }],
};
const testPassword = "test-only-presenter-password";

describe("contraseña del moderador en el transporte", () => {
  it("no crea ni controla sesiones sin acceso, aunque conserve la clave de presentador", async () => {
    const { transport, sessionId } = setup();
    expect(transport.hasPresenterAccess()).toBe(false);
    await expect(transport.createSession(manifest)).rejects.toMatchObject({ code: "PRESENTER_PASSWORD_REQUIRED" });
    await expect(transport.update(sessionId, { type: "end" })).rejects.toMatchObject({ code: "PRESENTER_PASSWORD_REQUIRED" });
    expect(client.mutation).not.toHaveBeenCalled();
  });

  it("valida en el servidor y adjunta la contraseña solo a las mutaciones del moderador", async () => {
    const { transport, sessionId, namespace, saved } = setup();
    await transport.authorizePresenter(testPassword);
    expect(client.mutation).toHaveBeenLastCalledWith(sessionsApi.authorizePresenter, { password: testPassword });
    expect(transport.hasPresenterAccess()).toBe(true);

    await transport.createSession(manifest);
    const createArgs = client.mutation.mock.calls[1][1];
    expect(createArgs).toMatchObject({ ...manifest, namespace, presenterPassword: testPassword });
    expect(credentials.readCredentials(namespace, createArgs.sessionId)).toEqual({ presenterKey: createArgs.presenterKey });
    await transport.update(sessionId, { type: "end" });
    expect(client.mutation).toHaveBeenLastCalledWith(sessionsApi.update, {
      namespace, sessionId, presenterKey: saved.presenterKey,
      presenterPassword: testPassword, action: { type: "end" },
    });

    stops.push(transport.subscribe(sessionId, vi.fn(), vi.fn()));
    expect(client.watchQuery.mock.calls[0][1]).toEqual({ namespace, sessionId, ...saved });
    await transport.join(sessionId);
    expect(client.mutation.mock.lastCall?.[1]).toEqual({ namespace, sessionId, participantToken: saved.participantToken });
    await transport.vote(sessionId, ["yes"], "first");
    expect(client.mutation.mock.lastCall?.[1]).toEqual({ namespace, sessionId, participantToken: saved.participantToken, optionIds: ["yes"], slideSlug: "first" });
    expect([...browserStorage.values()].join()).not.toContain(testPassword);
  });

  it("pierde el acceso al cerrar o recrear el transporte", async () => {
    const { transport, namespace } = setup();
    await transport.authorizePresenter(testPassword);
    transport.close?.();
    expect(transport.hasPresenterAccess()).toBe(false);
    const fresh = createConvexTransport("https://example.convex.cloud", namespace);
    transports.push(fresh);
    expect(fresh.hasPresenterAccess()).toBe(false);
    await expect(fresh.createSession(manifest)).rejects.toMatchObject({ code: "PRESENTER_PASSWORD_REQUIRED" });
  });

  it.each(["PRESENTER_PASSWORD_INVALID", "PRESENTER_PASSWORD_NOT_CONFIGURED"])("descarta el acceso si el backend devuelve %s", async (code) => {
    const { transport, sessionId } = setup();
    await transport.authorizePresenter(testPassword);
    client.mutation.mockRejectedValueOnce(new ConvexError({ code, message: "Acceso denegado." }));
    await expect(transport.update(sessionId, { type: "end" })).rejects.toMatchObject({ code });
    expect(transport.hasPresenterAccess()).toBe(false);
    await expect(transport.createSession(manifest)).rejects.toMatchObject({ code: "PRESENTER_PASSWORD_REQUIRED" });
    expect(client.mutation).toHaveBeenCalledTimes(2);
  });

  it("no conserva una contraseña cuya validación falla", async () => {
    const { transport } = setup();
    client.mutation.mockRejectedValueOnce(new ConvexError({ code: "PRESENTER_PASSWORD_INVALID", message: "Contraseña incorrecta." }));
    await expect(transport.authorizePresenter(testPassword)).rejects.toThrow("Contraseña incorrecta.");
    expect(transport.hasPresenterAccess()).toBe(false);
    expect([...browserStorage.values()].join()).not.toContain(testPassword);
  });

  it("descarta una validación que responde después de cancelar el diálogo", async () => {
    const { transport } = setup();
    const controller = new AbortController();
    let finish!: () => void;
    client.mutation.mockReturnValueOnce(new Promise<void>((resolve) => { finish = resolve; }));
    const authorization = transport.authorizePresenter(testPassword, controller.signal);
    controller.abort();
    finish();
    await expect(authorization).rejects.toThrow("cancelada");
    expect(transport.hasPresenterAccess()).toBe(false);
    await expect(transport.createSession(manifest)).rejects.toMatchObject({ code: "PRESENTER_PASSWORD_REQUIRED" });
  });

  it("una respuesta anterior no reemplaza el acceso de un intento nuevo", async () => {
    const { transport, sessionId } = setup();
    let finish!: () => void;
    client.mutation.mockReturnValueOnce(new Promise<void>((resolve) => { finish = resolve; }));
    const stale = transport.authorizePresenter("old-password");
    await transport.authorizePresenter(testPassword);
    finish();
    await expect(stale).rejects.toThrow("cancelada");
    await transport.update(sessionId, { type: "end" });
    expect(client.mutation.mock.lastCall?.[1].presenterPassword).toBe(testPassword);
  });
});

afterEach(() => {
  for (const stop of stops.splice(0)) stop();
  for (const transport of transports.splice(0)) transport.close?.();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function setup() {
  const namespace = `remote-${crypto.randomUUID()}`;
  const sessionId = "a123456789abcdef";
  const saved = {
    presenterKey: "a".repeat(48),
    participantToken: "b".repeat(48),
  };
  credentials.saveCredentials(namespace, sessionId, saved);
  const transport = createConvexTransport(
    "https://example.convex.cloud",
    namespace,
  );
  transports.push(transport);
  return { namespace, sessionId, saved, transport };
}

describe("suscripción remota a la presentación", () => {
  it("mantiene la proyección pública sin leer ni enviar credenciales aunque el navegador tenga ambas", () => {
    const { namespace, sessionId, transport, saved } = setup();
    const readCredentials = vi.spyOn(credentials, "readCredentials");
    let projection!: SessionSnapshot;
    const onError = vi.fn();
    stops.push(
      transport.subscribe(
        sessionId,
        (snapshot) => {
          projection = snapshot;
        },
        onError,
        { publicOnly: true },
      ),
    );
    expect(readCredentials).not.toHaveBeenCalled();
    expect(client.watchQuery).toHaveBeenCalledTimes(1);
    expect(client.watchQuery.mock.calls[0][1]).toEqual({
      namespace,
      sessionId,
    });
    expect(projection).toEqual(emptySnapshot);
    expect(client.mutation).not.toHaveBeenCalled();

    // Receiving new credentials must never upgrade the projection to a moderator.
    credentials.saveCredentials(namespace, sessionId, {
      ...saved,
      presenterKey: "c".repeat(48),
    });
    window.dispatchEvent(new Event("storage"));
    expect(readCredentials).not.toHaveBeenCalled();
    expect(client.watchQuery).toHaveBeenCalledTimes(1);
    serverSnapshot = {
      ...emptySnapshot,
      votes: [
        {
          participantId: "one",
          questionId: "q1",
          slideSlug: "first",
          optionIds: ["yes"],
        },
      ],
    };
    for (const update of updates) update();
    expect(projection.votes).toHaveLength(1);
    expect(projection.isPresenter).toBe(false);
    expect(onError).not.toHaveBeenCalled();
  });

  it("conserva las credenciales y la renovación de identidad en suscripciones normales", () => {
    const { namespace, sessionId, transport, saved } = setup();
    stops.push(transport.subscribe(sessionId, vi.fn(), vi.fn()));
    expect(client.watchQuery.mock.calls[0][1]).toEqual({
      namespace,
      sessionId,
      ...saved,
    });
    credentials.saveCredentials(namespace, sessionId, {
      participantToken: "c".repeat(48),
    });
    expect(client.watchQuery).toHaveBeenCalledTimes(2);
    expect(client.watchQuery.mock.calls[1][1]).toEqual({
      namespace,
      sessionId,
      participantToken: "c".repeat(48),
    });
  });
});
