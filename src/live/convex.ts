import { ConvexReactClient } from "convex/react";
import { sessionsApi } from "./api";
import {
  ensureParticipantToken,
  newSessionId,
  randomToken,
  readCredentials,
  saveCredentials,
} from "./credentials";
import { validateManifest } from "./rules";
import type { LiveTransport } from "./types";
import {
  convexRequest,
  normalizeConvexError,
  isPresenterAccessError,
  PresenterAccessError,
} from "./errors";

export function createConvexTransport(
  url: string,
  namespace: string,
): LiveTransport {
  const parsed = new URL(url);
  if (
    !["http:", "https:"].includes(parsed.protocol) ||
    parsed.username ||
    parsed.password ||
    parsed.search ||
    parsed.hash ||
    parsed.pathname !== "/"
  )
    throw new Error("La URL de Convex no es válida.");
  const client = new ConvexReactClient(parsed.origin, {
    unsavedChangesWarning: false,
  });
  // Only retained for this transport's lifetime. Never put the shared password
  // in persistent browser storage, session metadata or subscription arguments.
  let presenterPassword: string | undefined;
  let authorizationAttempt = 0;

  async function presenterRequest<T>(
    request: (password: string) => Promise<T>,
  ): Promise<T> {
    const password = presenterPassword;
    if (!password)
      throw new PresenterAccessError(
        "PRESENTER_PASSWORD_REQUIRED",
        "Ingresá la contraseña del moderador para continuar.",
      );
    try {
      return await convexRequest(request(password));
    } catch (reason) {
      if (isPresenterAccessError(reason) && presenterPassword === password)
        presenterPassword = undefined;
      throw reason;
    }
  }

  return {
    mode: "convex",
    hasPresenterAccess: () => presenterPassword !== undefined,
    async authorizePresenter(password, signal) {
      const attempt = ++authorizationAttempt;
      presenterPassword = undefined;
      if (signal?.aborted) throw new Error("Validación cancelada.");
      await convexRequest(
        client.mutation(sessionsApi.authorizePresenter, { password }),
      );
      if (signal?.aborted || attempt !== authorizationAttempt)
        throw new Error("Validación cancelada.");
      presenterPassword = password;
    },
    async createSession(input) {
      return presenterRequest((password) => {
        validateManifest(input);
        const sessionId = newSessionId();
        const presenterKey = randomToken();
        // Save before the mutation: reconnects or a refresh must not lose ownership.
        saveCredentials(namespace, sessionId, { presenterKey });
        return client.mutation(sessionsApi.create, {
          namespace,
          sessionId,
          presenterKey,
          ...input,
          presenterPassword: password,
        });
      });
    },
    subscribe(sessionId, next, error, options) {
      let stopWatch = () => {};
      let timeout: ReturnType<typeof setTimeout> | undefined;
      let disposed = false;
      const subscribe = () => {
        stopWatch();
        if (timeout) clearTimeout(timeout);
        try {
          const watch = client.watchQuery(sessionsApi.snapshot, {
            namespace,
            sessionId,
            ...(options?.publicOnly
              ? {}
              : readCredentials(namespace, sessionId)),
          });
          const deliver = () => {
            if (disposed) return;
            try {
              const value = watch.localQueryResult();
              if (value !== undefined) {
                if (timeout) clearTimeout(timeout);
                next(value);
              }
            } catch (reason) {
              if (timeout) clearTimeout(timeout);
              error(normalizeConvexError(reason));
            }
          };
          timeout = setTimeout(
            () =>
              error(
                new Error(
                  "No pudimos conectar con Convex. Revisa tu conexión y que npm run convex:dev esté funcionando.",
                ),
              ),
            12000,
          );
          stopWatch = watch.onUpdate(deliver);
          deliver();
        } catch (reason) {
          error(normalizeConvexError(reason));
        }
      };
      subscribe();
      const onStorage = () => subscribe();
      // Projections stay public even when a moderator logs in in another tab.
      if (!options?.publicOnly) {
        window.addEventListener("grok-credentials-changed", subscribe);
        window.addEventListener("storage", onStorage);
      }
      return () => {
        disposed = true;
        stopWatch();
        if (timeout) clearTimeout(timeout);
        window.removeEventListener("grok-credentials-changed", subscribe);
        window.removeEventListener("storage", onStorage);
      };
    },
    async join(sessionId) {
      const participantToken = ensureParticipantToken(namespace, sessionId);
      await convexRequest(
        client.mutation(sessionsApi.join, {
          namespace,
          sessionId,
          participantToken,
        }),
      );
    },
    async update(sessionId, action) {
      const { presenterKey } = readCredentials(namespace, sessionId);
      if (!presenterKey)
        throw new Error("Solo el presentador puede controlar esta sesión.");
      await presenterRequest((password) =>
        client.mutation(sessionsApi.update, {
          namespace,
          sessionId,
          presenterKey,
          action,
          presenterPassword: password,
        }),
      );
    },
    async vote(sessionId, optionIds, slideSlug) {
      const { participantToken } = readCredentials(namespace, sessionId);
      if (!participantToken)
        throw new Error("Únete a la sesión antes de responder.");
      await convexRequest(
        client.mutation(sessionsApi.vote, {
          namespace,
          sessionId,
          participantToken,
          slideSlug,
          optionIds,
        }),
      );
    },
    close() {
      authorizationAttempt++;
      presenterPassword = undefined;
      void client.close();
    },
  };
}
