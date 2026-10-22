import type { SlideDefinition } from "../types";
import { AmbientLoopSlide } from "./AmbientLoopSlide";

/** Slide 00 is a waiting screen, separate from each talk's timed opening. */
export const meetupCoverSlide: SlideDefinition = {
  slug: "espera",
  title: "SpaceXAI × AI Labs",
  kicker: "Antes de empezar · Fuera del tiempo de charla",
  component: AmbientLoopSlide,
  ambientMotion: true,
  guide: {
    intro: "SpaceXAI y AI Labs. La charla comienza en unos momentos.",
    takeaway: "La presentación empieza en la siguiente slide.",
  },
  speakerNotes: {
    script: "Dejá esta portada mientras entra el público. Al comenzar, avanzá a la presentación de la charla.",
    timing: "Espera · fuera del tiempo de exposición",
    cues: ["Empezar a contar el tiempo al pasar a la slide 01."],
  },
};
