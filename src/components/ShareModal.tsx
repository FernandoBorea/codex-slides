import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Check, Copy, ArrowUpRight, DeviceMobile } from "@phosphor-icons/react";
import { Modal } from "./Modal";
import { useLive } from "../live/LiveProvider";
import { currentPublicSessionUrl } from "./publicSessionUrl";

export function ShareModal({
  sessionId,
  deckSlug,
  onClose,
  question,
}: {
  sessionId: string;
  deckSlug: string;
  onClose: () => void;
  question?: string;
}) {
  const { mode } = useLive();
  const [copied, setCopied] = useState<"session" | "slides" | null>(null);
  const [copyError, setCopyError] = useState(false);
  const isLocalHost = ["localhost", "127.0.0.1", "[::1]"].includes(
    window.location.hostname,
  );
  const url = currentPublicSessionUrl(sessionId, mode);
  const slidesUrl = new URL(`/slides/${encodeURIComponent(deckSlug)}`, url).href;
  async function copy(value: string, kind: "session" | "slides") {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      setCopyError(false);
    } catch {
      setCopied(null);
      setCopyError(true);
    }
  }
  return (
    <Modal
      title={question || "La conversación empieza aquí."}
      onClose={onClose}
      className="share-modal"
    >
      <p className="muted">
        Escaneá una vez y seguí las slides en vivo. También podés explorar a
        tu ritmo y volver al vivo cuando quieras.
      </p>
      <div className="qr-wrap">
        <QRCodeSVG
          value={url}
          size={224}
          level="M"
          marginSize={2}
          title="QR para entrar a la sesión"
        />
      </div>
      <div className="qr-caption">
        <DeviceMobile size={18} />
        Sin registro. Con tu propio bot.
      </div>
      <label className="field-label" htmlFor="join-url">
        Enlace para el público
      </label>
      <div className="copy-field">
        <input
          id="join-url"
          value={url}
          readOnly
          onFocus={(e) => e.target.select()}
        />
        <button
          className="icon-button"
          aria-label="Copiar enlace"
          onClick={() => void copy(url, "session")}
        >
          {copied === "session" ? <Check /> : <Copy />}
        </button>
      </div>
      <div role="status" className="small copy-status">
        {copied
          ? copied === "slides" ? "Enlace de las slides copiado." : "Enlace de la sesión copiado."
          : copyError
            ? "Selecciona el enlace y cópialo manualmente."
            : "\u00a0"}
      </div>
      <a
        className="button primary full-width"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Abrir vista del público <ArrowUpRight size={18} />
      </a>
      <section className="share-static-slides" aria-label="Slides después del evento">
        <h3>Para revisar después</h3>
        <p className="small muted">Recorré las slides a tu ritmo, sin entrar a una sesión.</p>
        <label className="field-label" htmlFor="slides-url">Enlace permanente de las slides</label>
        <div className="copy-field">
          <input id="slides-url" value={slidesUrl} readOnly onFocus={(e) => e.target.select()} />
          <button className="icon-button" aria-label="Copiar enlace de las slides" onClick={() => void copy(slidesUrl, "slides")}>
            {copied === "slides" ? <Check /> : <Copy />}
          </button>
        </div>
        <a className="button secondary full-width" href={slidesUrl} target="_blank" rel="noopener noreferrer">
          Ver slides <ArrowUpRight size={18} />
        </a>
      </section>
      {mode === "local" && (
        <div className="notice">
          Modo local: abre el enlace en otra pestaña de este navegador para
          probar. Otros dispositivos necesitan Convex configurado.
        </div>
      )}
      {mode === "convex" && isLocalHost && !import.meta.env.VITE_PUBLIC_URL && (
        <p className="small muted" style={{ margin: "15px 0 0" }}>
          {__DEV_LAN_HOST__
            ? "QR de desarrollo: conecta tu teléfono a la misma red Wi-Fi que esta Mac."
            : "Para usar el QR en otro dispositivo, abre esta app con la dirección de red de Vite o configura VITE_PUBLIC_URL."}
        </p>
      )}
    </Modal>
  );
}
