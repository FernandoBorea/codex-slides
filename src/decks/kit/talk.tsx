import type { ComponentType } from "react";
import type { Question } from "../../live/types";
import type { Speaker } from "../../devday/speakers";
import type { Deck, SlideDefinition } from "../types";
import { ClosingSlide, DevDayCoverSlide, DraftSlide, TalkBriefSlide, TalkCover } from "./layouts";
import { withSlideInfo } from "./SlideInfo";

/** Slide 00, shared by every deck. No poll and outside the talk's time. */
export const devdayCoverSlide: SlideDefinition = {
  slug: "espera",
  title: "OpenAI DevDay Exchange × Ai Labs",
  kicker: "Antes de empezar · Fuera del tiempo de charla",
  component: DevDayCoverSlide,
  ambientMotion: true,
  guide: {
    intro: "Bienvenido a DevDay Exchange San Salvador, un evento de comunidad organizado por Ai Labs. La charla empieza en unos minutos.",
    takeaway: "Cuando empiece, esta guía cambia sola con cada slide.",
  },
  speakerNotes: {
    script: "Dejá esta portada mientras entra el público. Al comenzar, avanzá a la slide 01.",
    timing: "Espera · fuera del tiempo de exposición",
    cues: ["Empezar a contar el tiempo al pasar a la slide 01."],
  },
};

/**
 * One slide of a talk's outline. Without `component` it renders as a
 * DraftSlide (title + pending area). To build the real slide, write a
 * component with <SlideFrame> and pass it here; slug, title and guide stay.
 */
export type OutlineSlide = Omit<SlideDefinition, "component" | "guide"> & {
  guide: SlideDefinition["guide"];
  component?: ComponentType;
};

export type TalkBrief = {
  goal: string;
  topics: string[];
  demo: string;
  takeaway: string;
  preparation: string[];
};

export type TalkInput = {
  slug: string;
  title: string;
  description: string;
  /** DevDay announcement(s) the talk builds on; shown as the category and the cover pill. */
  topic: string;
  speaker: Speaker;
  accent: string;
  duration?: string;
  /** Slide 02: shared summary for the audience and the person building the deck. */
  brief: TalkBrief;
  pending?: boolean;
  /** Optional poll on the talk cover (slide 01). */
  openingQuestion?: Question;
  outline: OutlineSlide[];
  /** Optional overrides for the fixed slides. */
  coverComponent?: ComponentType;
  speakerComponent?: ComponentType;
  closingComponent?: ComponentType;
};

/**
 * Builds a talk deck: 00 shared cover, 01 talk cover, 02 talk brief,
 * the outline, and a closing slide for questions.
 */
export function defineTalk(talk: TalkInput): Deck {
  const { speaker } = talk;
  const total = String(talk.outline.length + 3).padStart(2, "0");
  const info = (index: number) => ({
    deckTitle: talk.title,
    speaker,
    number: String(index).padStart(2, "0"),
    total,
  });

  const Cover = talk.coverComponent ?? (() => <TalkCover title={talk.title} topic={talk.topic} speaker={speaker} accent={talk.accent} />);
  const Intro = talk.speakerComponent ?? (() => <TalkBriefSlide speaker={speaker} brief={talk.brief} pending={talk.pending} />);
  const Closing = talk.closingComponent ?? (() => <ClosingSlide speaker={speaker} title={talk.title} />);

  const slides: SlideDefinition[] = [
    devdayCoverSlide,
    {
      slug: "portada",
      title: talk.title,
      kicker: `${speaker.name} · 0:30`,
      component: withSlideInfo(Cover, info(1)),
      guide: {
        intro: talk.description,
        takeaway: "Seguí la charla desde acá. Usá las flechas para leer a tu ritmo y «Volver al vivo» para alcanzar al presentador.",
      },
      ...(talk.openingQuestion ? { question: talk.openingQuestion } : {}),
      speakerNotes: { script: "Presentá el título y abrí la encuesta si la hay.", timing: "0:30" },
    },
    {
      slug: speaker.id,
      title: talk.pending ? "Tema pendiente de definir" : "El recorrido de la charla",
      kicker: talk.pending ? "Resumen pendiente" : "Resumen · 1:30",
      component: withSlideInfo(Intro, info(2)),
      ...(talk.pending ? { draft: true } : {}),
      guide: {
        intro: talk.brief.goal,
        sections: [
          { title: "Qué vamos a recorrer", body: talk.brief.topics.join(" · ") },
          { title: "Demo o enfoque", body: talk.brief.demo },
        ],
        takeaway: talk.brief.takeaway,
      },
      speakerNotes: {
        script: "Presentate brevemente y contá qué se va a llevar el público. Este resumen también orienta a quien complete el deck.",
        timing: talk.pending ? "Por definir" : "1:30",
        cues: talk.brief.preparation,
      },
    },
    ...talk.outline.map(({ component, ...slide }, index): SlideDefinition => {
      const Draft = () => <DraftSlide kicker={slide.kicker} title={slide.title} intro={slide.guide.intro} speaker={speaker} />;
      return {
        ...slide,
        component: withSlideInfo(component ?? Draft, info(index + 3)),
        ...(component ? {} : { draft: true }),
      };
    }),
    {
      slug: "preguntas",
      title: "¿Preguntas?",
      kicker: talk.pending ? "Cierre · por definir" : "Preguntas · 3:00",
      component: withSlideInfo(Closing, info(talk.outline.length + 3)),
      guide: {
        intro: `Gracias por acompañar a ${speaker.name}. Si te quedó una pregunta, este es el momento.`,
        takeaway: "La conversación sigue en la terraza después de las charlas.",
      },
      speakerNotes: { script: "Abrí preguntas del público. Cerrá agradeciendo y presentando a quien sigue.", timing: talk.pending ? "Por definir" : "3:00" },
    },
  ];

  return {
    slug: talk.slug,
    title: talk.title,
    description: talk.description,
    category: talk.topic,
    duration: talk.duration ?? "15 min",
    accent: talk.accent,
    speaker,
    firstSlideNumber: 0,
    slides,
  };
}
