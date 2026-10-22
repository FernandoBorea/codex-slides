import { Link } from "@tanstack/react-router";
import { ArrowLeft, Monitor, Play, Stop } from "@phosphor-icons/react";
import { Brand } from "../Shell";

type PresenterHeaderProps = {
  isLive: boolean;
  standalone?: boolean;
  ended: boolean;
  busy: boolean;
  onStart: () => void;
  onEnd: () => void;
  projectionUrl?: string;
};

export function PresenterHeader({
  isLive,
  standalone,
  ended,
  busy,
  onStart,
  onEnd,
  projectionUrl,
}: PresenterHeaderProps) {
  return (
    <header className="presenter-header">
      <Brand compact />
      <span className="header-separator" />
      <Link to="/" className="back-library">
        <ArrowLeft size={16} /> Biblioteca
      </Link>
      <div className="presenter-header-end">
        <span className="mode-label">
          <span className={`status-dot ${isLive && !ended ? "green" : ""}`} />
          {standalone
            ? "Presentación"
            : isLive
              ? ended
                ? "Sesión finalizada"
                : "Moderador"
              : "Vista previa"}
        </span>
        {isLive && !ended && projectionUrl && (
          <a
            className="button secondary"
            href={projectionUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Monitor size={17} /> Abrir proyección
          </a>
        )}
        {isLive && !ended && (
          <button className="button subtle end-button" onClick={onEnd}>
            <Stop size={15} />
            Finalizar
          </button>
        )}
        {(!isLive || ended) && (
          <button className="button primary" disabled={busy} onClick={onStart}>
            <Play size={17} weight="fill" />
            {standalone
              ? "Presentar"
              : busy
                ? "Preparando…"
                : ended
                  ? "Nueva sesión"
                  : "Iniciar presentación"}
          </button>
        )}
      </div>
    </header>
  );
}
