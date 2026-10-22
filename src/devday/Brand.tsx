import "./brand.css";

/**
 * Event logos. Each one renders both ink versions and CSS picks the one that
 * matches `data-slide-theme` (slides) or the light app chrome (default).
 */
export function OpenAIWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`dd-logo dd-logo--openai ${className}`}>
      <img className="dd-logo-ink" src="/brand/openai-wordmark.png" alt="OpenAI" width={324} height={88} draggable={false} />
      <img className="dd-logo-paper" src="/brand/openai-wordmark-light.png" alt="OpenAI" width={324} height={88} draggable={false} />
    </span>
  );
}

export function AiLabsLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`dd-logo dd-logo--ailabs ${className}`}>
      <img className="dd-logo-ink" src="/brand/ailabs-dark.svg" alt="Ai Labs" width={1295} height={324} draggable={false} />
      <img className="dd-logo-paper" src="/brand/ailabs-light.svg" alt="Ai Labs" width={1295} height={324} draggable={false} />
    </span>
  );
}

/** Monochrome wordmark; see public/brand/codex-assets-source.md for its provenance. */
export function CodexWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`dd-logo dd-logo--codex ${className}`}>
      <img src="/brand/codex-wordmark.svg" alt="Codex" width={91} height={24} draggable={false} />
    </span>
  );
}
