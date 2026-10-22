import type { ComponentType } from "react";
import type { SlideMeta } from "../live/types";
import type { Speaker } from "../devday/speakers";

/** Each slide is ordinary React. Its companion guide and question live beside it. */
export type SlideDefinition = SlideMeta & {
  component: ComponentType;
  /** Moderator script; excluded from the live audience metadata. */
  speakerNotes?: {
    script: string;
    timing: string;
    cues?: string[];
    interaction?: string;
    transition?: string;
  };
  /** Presentation-only behavior; never sent to a live session. */
  ambientMotion?: boolean;
  /** Title decided, content pending (a DraftSlide). The library counts these. */
  draft?: boolean;
};

export type Deck = {
  slug: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  accent: string;
  /** Talk decks name their speaker; the event deck has none. */
  speaker?: Speaker;
  /** The shared waiting cover is slide 00, outside the talk's numbered content. */
  firstSlideNumber?: 0 | 1;
  presentationMode?: "standalone";
  slides: SlideDefinition[];
};
