type PublicSessionUrlOptions = {
  origin: string;
  mode: "local" | "convex";
  publicUrl?: string;
  lanHost?: string;
};

/** QR, copy and open must all resolve to the same audience URL. */
export function publicSessionUrl(
  sessionId: string,
  { origin, mode, publicUrl, lanHost }: PublicSessionUrlOptions,
) {
  let base = new URL(origin);
  // A local session belongs to this origin's browser storage.
  if (mode === "convex") {
    const isLoopback = ["localhost", "127.0.0.1", "[::1]"].includes(
      base.hostname,
    );
    if (isLoopback && lanHost) base.hostname = lanHost;
    if (publicUrl) {
      try {
        const configured = new URL(publicUrl);
        if (
          ["http:", "https:"].includes(configured.protocol) &&
          !configured.username &&
          !configured.password
        )
          base = configured;
      } catch {
        // A malformed optional public URL must not break sharing.
      }
    }
  }
  return new URL(`/join/${encodeURIComponent(sessionId)}`, base.origin).href;
}

export function currentPublicSessionUrl(
  sessionId: string,
  mode: "local" | "convex",
) {
  return publicSessionUrl(sessionId, {
    origin: window.location.origin,
    mode,
    publicUrl: import.meta.env.VITE_PUBLIC_URL,
    lanHost: __DEV_LAN_HOST__,
  });
}
