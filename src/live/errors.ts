import { ConvexError } from "convex/values";

export type PresenterAccessCode =
  | "PRESENTER_PASSWORD_REQUIRED"
  | "PRESENTER_PASSWORD_INVALID"
  | "PRESENTER_PASSWORD_NOT_CONFIGURED";

export class PresenterAccessError extends Error {
  constructor(public readonly code: PresenterAccessCode, message: string) {
    super(message);
    this.name = "PresenterAccessError";
  }
}

export function isPresenterAccessError(reason: unknown): reason is PresenterAccessError {
  return reason instanceof PresenterAccessError;
}

export function normalizeConvexError(reason: unknown): Error {
  if (reason instanceof PresenterAccessError) return reason;
  if (reason instanceof ConvexError && typeof reason.data === "object" && reason.data !== null) {
    const data = reason.data as { code?: unknown; message?: unknown };
    if ((data.code === "PRESENTER_PASSWORD_REQUIRED" || data.code === "PRESENTER_PASSWORD_INVALID" || data.code === "PRESENTER_PASSWORD_NOT_CONFIGURED") && typeof data.message === "string") {
      return new PresenterAccessError(data.code, data.message);
    }
  }
  if (reason instanceof ConvexError && typeof reason.data === "string") return new Error(reason.data);
  const message = reason instanceof Error ? reason.message : String(reason);
  if (/could not find public function|function.*not found|no function registered/i.test(message)) {
    return new Error("Convex está configurado, pero faltan las funciones de la presentación. Ejecuta npm run convex:dev y vuelve a intentar.");
  }
  if (/network|fetch|websocket|connection|connect|offline|timed? ?out/i.test(message)) {
    return new Error("No pudimos conectar con Convex. Revisa tu conexión y que npm run convex:dev esté funcionando.");
  }
  return new Error("Convex no pudo completar esta acción. Revisa que npm run convex:dev termine sin errores y vuelve a intentar.");
}

export async function convexRequest<T>(request: Promise<T>): Promise<T> {
  try { return await request; }
  catch (reason) { throw normalizeConvexError(reason); }
}
