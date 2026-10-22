import type { CSSProperties, ReactNode } from "react";
import { Face } from "../../devday/Face";
import { AiLabsLogo, CodexWordmark, OpenAIWordmark } from "../../devday/Brand";
import { DEVDAY_EVENT } from "../../devday/event";
import { firstName, type Speaker } from "../../devday/speakers";
import { FACE_PALETTE, type FaceConfig } from "../../devday/faces";
import { Crowd } from "./Crowd";
import { coverCrowd, coverMarks } from "./crowd";
import { useSlideInfo } from "./SlideInfo";
import "./kit.css";

/* ------------------------------------------------------------------ */
/* Building blocks: use these inside your own slides.                  */
/* ------------------------------------------------------------------ */

/** Every DevDay slide: 16:9 canvas, event footer with the speaker's face and the slide number. */
export function SlideFrame({
  children,
  className = "",
  label,
  footer = true,
}: {
  children: ReactNode;
  className?: string;
  /** Accessible name of the slide; defaults to nothing (the heading names it). */
  label?: string;
  footer?: boolean;
}) {
  const info = useSlideInfo();
  return (
    <section className={`slide-canvas dd-slide ${className}`} aria-label={label}>
      {children}
      {footer && (
        <footer className="dd-footer">
          <span className="dd-footer-who">
            {info?.speaker && (
              <span className="dd-footer-face" aria-hidden="true">
                <Face config={info.speaker.face} />
              </span>
            )}
            {info?.speaker ? `${info.speaker.name} · ` : ""}
            {info?.deckTitle ?? `${DEVDAY_EVENT.name} ${DEVDAY_EVENT.city}`}
          </span>
          <span className="dd-footer-event">
            {DEVDAY_EVENT.name} {DEVDAY_EVENT.city}
            {info && (
              <span className="dd-footer-number">
                {info.number}
                <span> / {info.total}</span>
              </span>
            )}
          </span>
        </footer>
      )}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="dd-eyebrow">{children}</p>;
}

/** Tag in the event palette, e.g. the announcement a talk builds on. */
export function Pill({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <span className="dd-pill" style={color ? ({ "--pill": color } as CSSProperties) : undefined}>
      {children}
    </span>
  );
}

/** A face in slide units (cqw). Decorative: put the name in visible text. */
export function SlideFace({
  face,
  size,
  className = "",
  style,
}: {
  face: FaceConfig;
  size: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span className={`dd-face ${className}`} style={{ "--size": `${size}cqw`, ...style } as CSSProperties} aria-hidden="true">
      <Face config={face} />
    </span>
  );
}

export type CardItem = {
  title: string;
  body?: string;
  face?: FaceConfig;
  /** Fills the card with an event color; text turns white on charcoal. */
  color?: string;
  tag?: string;
};

/** 2–4 cards in a row: comparisons, announcements, options. */
export function Cards({ items, columns = items.length }: { items: CardItem[]; columns?: number }) {
  return (
    <div className="dd-cards" style={{ "--columns": columns } as CSSProperties}>
      {items.map((item) => (
        <article
          key={item.title}
          className={`dd-card ${item.color ? "dd-card--filled" : ""} ${item.color === FACE_PALETTE.charcoal ? "dd-card--night" : ""}`}
          style={item.color ? ({ "--card": item.color } as CSSProperties) : undefined}
        >
          {item.tag && <span className="dd-card-tag">{item.tag}</span>}
          <h3>{item.title}</h3>
          {item.body && <p>{item.body}</p>}
          {item.face && <SlideFace face={item.face} size={6.4} className="dd-card-face" />}
        </article>
      ))}
    </div>
  );
}

/** A numbered sequence: a flow, a demo, a recipe. */
export function Steps({ items }: { items: { title: string; body?: string }[] }) {
  return (
    <ol className="dd-steps" style={{ "--columns": items.length } as CSSProperties}>
      {items.map((item, index) => (
        <li key={item.title}>
          <span className="dd-step-number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          {item.body && <p>{item.body}</p>}
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Complete slides shared by every deck.                               */
/* ------------------------------------------------------------------ */

/** Slide 00: the holding screen while people take their seats. */
export function DevDayCoverSlide() {
  return (
    <section className="slide-canvas dd-slide dd-cover" aria-label={`OpenAI ${DEVDAY_EVENT.name} ${DEVDAY_EVENT.city}, organizado por ${DEVDAY_EVENT.organizer}`}>
      <Crowd faces={coverCrowd} marks={coverMarks} className="dd-cover-crowd" />
      <div className="dd-cover-title">
        <OpenAIWordmark className="dd-cover-openai" />
        <h1>
          {DEVDAY_EVENT.name}
          <br />
          {DEVDAY_EVENT.edition}
        </h1>
      </div>
      <div className="dd-cover-meta">
        <span>
          {DEVDAY_EVENT.city} · {DEVDAY_EVENT.venue} · {DEVDAY_EVENT.date}
        </span>
        <span className="dd-cover-brands">
          <CodexWordmark className="dd-cover-codex" />
          <span className="dd-cover-rule" aria-hidden="true" />
          <span className="dd-cover-org">Organiza</span>
          <AiLabsLogo className="dd-cover-ailabs" />
        </span>
      </div>
    </section>
  );
}

/** Slide 01 of a talk: title, speaker and the announcement it builds on. */
export function TalkCover({ title, topic, speaker, accent }: { title: string; topic: string; speaker: Speaker; accent: string }) {
  return (
    <SlideFrame className="dd-talk-cover">
      <div className="dd-talk-cover-top">
        <Pill color={accent}>{topic}</Pill>
        <OpenAIWordmark className="dd-talk-cover-openai" />
      </div>
      <h1 className="dd-display">{title}</h1>
      <div className="dd-talk-cover-speaker">
        <SlideFace face={speaker.face} size={5.2} />
        <div>
          <strong>{speaker.name}</strong>
          {speaker.role && <span>{speaker.role}</span>}
        </div>
      </div>
      <SlideFace face={speaker.face} size={30} className="dd-talk-cover-face" />
    </SlideFrame>
  );
}

/** "Un gusto, soy…": portrait when there is one, the speaker's face otherwise. */
export function SpeakerIntro({ speaker, about }: { speaker: Speaker; about: string }) {
  const [first, ...rest] = speaker.name.split(" ");
  return (
    <SlideFrame className="dd-speaker">
      <div className="dd-speaker-text">
        <Eyebrow>Un gusto, soy {firstName(speaker)}</Eyebrow>
        <h1 className="dd-display">
          {first}
          <br />
          {rest.join(" ")}
        </h1>
        <p className="dd-lead">{speaker.role ?? "Speaker · DevDay Exchange San Salvador"}</p>
        <p className="dd-speaker-about">{about}</p>
      </div>
      <div className="dd-speaker-visual">
        <SlideFace face={speaker.face} size={speaker.photo ? 12 : 26} className="dd-speaker-face" />
        {speaker.photo && <img className="dd-speaker-photo" src={speaker.photo} alt={`Retrato de ${speaker.name}`} draggable={false} />}
      </div>
    </SlideFrame>
  );
}

/** Placeholder for a slide whose title is decided but whose content the speaker still has to build. */
export function DraftSlide({ kicker, title, intro, speaker }: { kicker: string; title: string; intro: string; speaker: Speaker }) {
  return (
    <SlideFrame className="dd-draft">
      <Eyebrow>{kicker}</Eyebrow>
      <h2 className="dd-heading">{title}</h2>
      <div className="dd-draft-area">
        <SlideFace face={{ ...speaker.face, expression: "sleepy", gaze: { x: 0, y: 0.5 } }} size={6} />
        <div>
          <strong>Contenido pendiente · {firstName(speaker)}</strong>
          <p>{intro}</p>
        </div>
      </div>
    </SlideFrame>
  );
}

/** Last slide of a talk: questions and the event hashtag. */
export function ClosingSlide({ speaker, title }: { speaker: Speaker; title: string }) {
  return (
    <SlideFrame className="dd-closing">
      <Eyebrow>{title}</Eyebrow>
      <h1 className="dd-display">
        ¿Preguntas?<SlideFace face={speaker.face} size={9} className="dd-closing-face" />
      </h1>
      <p className="dd-lead">
        Gracias. Seguimos la conversación en la terraza con <strong>{DEVDAY_EVENT.hashtag}</strong>.
      </p>
    </SlideFrame>
  );
}
