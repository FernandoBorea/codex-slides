import { QRCodeSVG } from "qrcode.react";
import { currentPublicSessionUrl } from "../publicSessionUrl";
import { useLive } from "../../live/LiveProvider";

export function ProjectedQr({ sessionId }: { sessionId: string }) {
  const { mode } = useLive();
  const url = currentPublicSessionUrl(sessionId, mode);
  return (
    <section className="projected-qr" aria-label="QR para participar">
      <div className="projected-qr-copy">
        <p className="projected-qr-kicker">GROK BOT · EN VIVO</p>
        <h1>Sumate a la conversación.</h1>
        <p>
          Escaneá una vez para responder las preguntas y llevarte la guía de la
          charla.
        </p>
        {mode === "local" && (
          <p className="projected-qr-local">
            Sesión de prueba: abrí el enlace en otra pestaña de este navegador.
          </p>
        )}
      </div>
      <div className="projected-qr-code">
        <div className="projected-qr-svg">
          <QRCodeSVG
            value={url}
            size={320}
            level="M"
            marginSize={4}
            title="Entrar a la sesión"
          />
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url.replace(/^https?:\/\//, "")}
        </a>
      </div>
    </section>
  );
}
