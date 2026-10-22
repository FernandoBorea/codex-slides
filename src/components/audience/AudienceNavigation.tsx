import { Broadcast, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { formatSlideNumber } from "../../decks/slideNumbers";
import type { ReactNode } from "react";

export function AudienceNavigation({
  index,
  presenterIndex,
  slideCount,
  firstSlideNumber = 1,
  questionOpen,
  ended,
  following,
  notification,
  onMove,
  onCatchUp,
}: {
  index: number;
  presenterIndex: number;
  slideCount: number;
  firstSlideNumber?: 0 | 1;
  questionOpen: boolean;
  ended: boolean;
  following: boolean;
  notification?: ReactNode;
  onMove: (index: number) => void;
  onCatchUp: () => void;
}) {
  return (
    <nav className="audience-navigation" aria-label="Navegar la guía">
      {notification}
      <p className="audience-navigation-status" role="status">
        {ended
          ? "La presentación terminó. Puedes seguir explorando."
          : questionOpen
            ? `Encuesta abierta en la slide ${formatSlideNumber(presenterIndex, firstSlideNumber)}`
            : following
              ? "Las slides avanzan con el presentador"
              : `A tu ritmo · Presentador en la slide ${formatSlideNumber(presenterIndex, firstSlideNumber)}`}
      </p>
      <div className="audience-navigation-controls">
        <button
          className="audience-nav-arrow"
          aria-label="Slide anterior"
          disabled={index === 0}
          onClick={() => onMove(index - 1)}
        >
          <CaretLeft size={21} />
        </button>
        <span
          className="audience-page-number"
          aria-label={`Slide ${formatSlideNumber(index, firstSlideNumber)} de ${formatSlideNumber(slideCount - 1, firstSlideNumber)}`}
        >
          {formatSlideNumber(index, firstSlideNumber)}{" "}
          <span>/ {formatSlideNumber(slideCount - 1, firstSlideNumber)}</span>
        </span>
        <button
          className="audience-nav-arrow"
          aria-label="Slide siguiente"
          disabled={index === slideCount - 1}
          onClick={() => onMove(index + 1)}
        >
          <CaretRight size={21} />
        </button>
        <button
          className={`audience-sync-button ${following ? "is-current" : ""}`}
          aria-label={following ? "En vivo: siguiendo al presentador" : "Volver al vivo"}
          aria-pressed={following}
          disabled={ended}
          onClick={onCatchUp}
        >
          <Broadcast size={18} />
          {ended ? "Finalizada" : following ? "En vivo" : "Volver al vivo"}
        </button>
      </div>
    </nav>
  );
}
