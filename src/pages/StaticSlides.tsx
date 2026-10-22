import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Check, Copy } from "@phosphor-icons/react";
import { staticSlidesRoute } from "../router";
import { findDeck, type Deck } from "../decks";
import { formatSlideNumber } from "../decks/slideNumbers";
import { SlideControls } from "../components/presenter/SlideControls";
import { useSlideTheme } from "../components/presenter/useSlideTheme";
import { useAmbientMotion } from "../components/presenter/useAmbientMotion";
import "./static-slides.css";

/** Public reading mode: the URL is its only navigation state. */
export function StaticSlidesPage() {
  const { deckSlug } = staticSlidesRoute.useParams();
  const { slide: slideSlug } = staticSlidesRoute.useSearch();
  const deck = findDeck(deckSlug);
  if (!deck || !deck.slides.length) {
    return (
      <main className="empty-page">
        <h1>Ese deck todavía no existe.</h1>
        <Link to="/" className="button primary">
          Ver la biblioteca
        </Link>
      </main>
    );
  }
  const activeIndex = slideSlug
    ? deck.slides.findIndex((slide) => slide.slug === slideSlug)
    : 0;
  if (activeIndex < 0) {
    return (
      <main className="empty-page">
        <h1>No encontramos esa slide.</h1>
        <p>Podés recorrer la presentación desde el inicio.</p>
        <Link
          to="/slides/$deckSlug"
          params={{ deckSlug }}
          search={{ slide: undefined }}
          className="button primary"
        >
          Abrir la presentación
        </Link>
      </main>
    );
  }
  return <SlideReader key={deck.slug} deck={deck} activeIndex={activeIndex} />;
}

function SlideReader({
  deck,
  activeIndex,
}: {
  deck: Deck;
  activeIndex: number;
}) {
  const navigate = useNavigate();
  const surface = useRef<HTMLDivElement>(null);
  const [focusMode, setFocusMode] = useState(false);
  const [sharedLink, setSharedLink] = useState<{
    url: string;
    copied: boolean;
  } | null>(null);
  const { theme, toggleTheme } = useSlideTheme(deck.slug);
  const motion = useAmbientMotion();
  const firstSlideNumber = deck.firstSlideNumber ?? 1;
  const slide = deck.slides[activeIndex];
  const Component = slide.component;

  function move(index: number) {
    if (index < 0 || index >= deck.slides.length || index === activeIndex)
      return;
    void navigate({
      to: "/slides/$deckSlug",
      params: { deckSlug: deck.slug },
      search: { slide: deck.slides[index].slug },
    });
  }

  useEffect(() => {
    function keydown(event: KeyboardEvent) {
      if (
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        (event.target instanceof HTMLElement &&
          (event.target.closest("input,textarea,select") ||
            event.target.isContentEditable ||
            (event.key === " " && event.target.closest("button,a"))))
      )
        return;
      const destinations: Record<string, number> = {
        ArrowRight: activeIndex + 1,
        ArrowDown: activeIndex + 1,
        " ": activeIndex + 1,
        ArrowLeft: activeIndex - 1,
        ArrowUp: activeIndex - 1,
        Home: 0,
        End: deck.slides.length - 1,
      };
      if (event.key in destinations) {
        event.preventDefault();
        move(destinations[event.key]);
      }
      if (event.key === "Escape") {
        setFocusMode(false);
        if (document.fullscreenElement) {
          void document.exitFullscreen().catch(() => {
            setFocusMode(Boolean(document.fullscreenElement));
          });
        }
      }
    }
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  });

  useEffect(() => {
    const update = () => setFocusMode(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", update);
    return () => document.removeEventListener("fullscreenchange", update);
  }, []);

  async function toggleFullscreen() {
    if (focusMode) {
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        setFocusMode(false);
      } catch {
        setFocusMode(Boolean(document.fullscreenElement));
      }
    } else {
      setFocusMode(true);
      try {
        await surface.current?.requestFullscreen?.();
      } catch {
        // Keep the focused layout in browsers without fullscreen permission.
      }
    }
  }

  async function copyLink() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setSharedLink({ url, copied: true });
    } catch {
      setSharedLink({ url, copied: false });
    }
  }
  const currentSharedLink =
    sharedLink?.url === window.location.href ? sharedLink : null;

  return (
    <div
      ref={surface}
      className={`static-slides ${focusMode ? "is-focused" : ""}`}
      data-testid="static-slides"
    >
      <header className="static-slides-heading">
        <Link to="/" className="static-slides-back">
          <ArrowLeft size={18} aria-hidden="true" />
          <span>Biblioteca</span>
        </Link>
        <h1>{deck.title}</h1>
        <span className="static-slides-keyboard">← → para avanzar</span>
      </header>
      <main className="static-slides-screen" aria-label={slide.title}>
        <div
          className="slide-stage active-stage static-slides-canvas"
          data-slide-theme={theme}
          data-testid="static-slide"
          data-motion-enabled={!!slide.ambientMotion}
          data-motion-state={
            slide.ambientMotion && motion.running ? "running" : "paused"
          }
        >
          <Component key={slide.slug} />
        </div>
      </main>
      <footer className="static-slides-controls">
        <label className="static-slides-picker">
          <span className="sr-only">Elegir slide</span>
          <select
            value={activeIndex}
            onChange={(event) => move(Number(event.target.value))}
          >
            {deck.slides.map((item, index) => (
              <option key={item.slug} value={index}>
                {formatSlideNumber(index, firstSlideNumber)} · {item.title}
              </option>
            ))}
          </select>
        </label>
        <div className="static-slides-actions">
          <SlideControls
            activeIndex={activeIndex}
            firstSlideNumber={firstSlideNumber}
            slideCount={deck.slides.length}
            title={slide.title}
            busy={false}
            ended={false}
            focusMode={focusMode}
            isLive={false}
            theme={theme}
            ambientMotion={slide.ambientMotion}
            motionPaused={motion.paused}
            reducedMotion={motion.reducedMotion}
            onToggleMotion={motion.toggle}
            onToggleTheme={toggleTheme}
            onMove={move}
            onFullscreen={() => void toggleFullscreen()}
            onShare={() => {}}
          />
          <button
            className="icon-button"
            aria-label={
              currentSharedLink?.copied ? "Enlace copiado" : "Copiar enlace"
            }
            title="Copiar enlace a esta slide"
            onClick={() => void copyLink()}
          >
            {currentSharedLink?.copied ? (
              <Check size={20} />
            ) : (
              <Copy size={20} />
            )}
          </button>
        </div>
        {currentSharedLink && (
          <div className="static-slides-share-status" role="status">
            {currentSharedLink.copied ? (
              <span className="sr-only">Enlace copiado.</span>
            ) : (
              <label>
                No pudimos copiarlo automáticamente. Copiá este enlace:
                <input
                  readOnly
                  value={currentSharedLink.url}
                  onFocus={(event) => event.target.select()}
                />
              </label>
            )}
          </div>
        )}
        <span className="sr-only" role="status">
          Slide {formatSlideNumber(activeIndex, firstSlideNumber)}:{" "}
          {slide.title}
        </span>
      </footer>
    </div>
  );
}
