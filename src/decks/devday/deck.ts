import type { Deck, SlideDefinition } from "../types";
import { devdayCoverSlide } from "../kit/talk";
import { withSlideInfo } from "../kit/SlideInfo";
import { AfterSlide, AgendaSlide, AnnouncementsSlide, JoinSlide, WelcomeSlide } from "./EventSlides";

const deckTitle = "Bienvenida";
const total = "05";
const info = (n: number) => ({ deckTitle, number: String(n).padStart(2, "0"), total });

const slides: SlideDefinition[] = [
  devdayCoverSlide,
  {
    slug: "bienvenida",
    title: "Una tarde para construir con IA",
    kicker: "Bienvenida · 1:00",
    component: withSlideInfo(WelcomeSlide, info(1)),
    guide: {
      intro:
        "Bienvenido a DevDay Exchange San Salvador, un evento de comunidad organizado por Ai Labs a partir de los anuncios de OpenAI DevDay 2026.",
      takeaway: "Esta guía te acompaña toda la tarde: cada charla tiene la suya.",
    },
    question: {
      id: "bienvenida-uso-ia",
      prompt: "¿Cuánto usás IA para construir hoy?",
      type: "single",
      options: [
        { id: "diario", label: "Todos los días" },
        { id: "semanal", label: "Algunas veces por semana" },
        { id: "probando", label: "Estoy empezando" },
        { id: "nada", label: "Todavía no" },
      ],
    },
    speakerNotes: { script: "Saludo, quién organiza y qué va a pasar en la tarde.", timing: "1:00" },
  },
  {
    slug: "anuncios",
    title: "Lo que trajo DevDay",
    kicker: "Contexto · 1:30",
    component: withSlideInfo(AnnouncementsSlide, info(2)),
    guide: {
      intro: "OpenAI presentó DevDay 2026 el 29 de septiembre en San Francisco. Estas son las piezas que recorren las charlas de hoy.",
      sections: [
        { title: "GPT-6.1 Sol y GPT-6 Astra", body: "Sol apunta al trabajo diario, con código agéntico y uso de computadora a menor costo. Astra es el modelo más capaz y el que mueve a Dots." },
        { title: "Dots", body: "Agentes siempre activos dentro de ChatGPT, con su propia computadora y navegador en la nube." },
        { title: "Codex en la nube", body: "Las tareas de Codex pueden correr en entornos cloud, además de la computadora local." },
        { title: "Agents API y Decisions API", body: "Agents API suma computer use y varios agentes; Decisions API, en preview limitado, elige entre respuestas predefinidas con Luna." },
      ],
      takeaway: "Cada speaker profundiza en una de estas piezas.",
    },
    speakerNotes: {
      script: "Recorrido rápido, sin entrar en detalle: cada charla se encarga de una pieza.",
      timing: "1:30",
      cues: ["Verificar nombres y disponibilidad contra openai.com/index/devday-2026 antes del evento."],
    },
  },
  {
    slug: "agenda",
    title: "La agenda de hoy",
    kicker: "Agenda · 1:00",
    component: withSlideInfo(AgendaSlide, info(3)),
    guide: {
      intro: "Seis charlas de quince minutos. Al final, demos y conversación en la terraza.",
    },
    speakerNotes: { script: "Presentá a cada speaker por nombre, en orden.", timing: "1:00" },
  },
  {
    slug: "participa",
    title: "Participá desde tu teléfono",
    kicker: "Cómo participar · 0:45",
    component: withSlideInfo(JoinSlide, info(4)),
    guide: {
      intro: "Cada charla tiene un QR para seguirla en el teléfono, con su guía y sus encuestas.",
      takeaway: "Usá las flechas para leer a tu ritmo y «Volver al vivo» para alcanzar al speaker.",
    },
    speakerNotes: { script: "Mostrá el QR en proyección mientras explicás.", timing: "0:45", interaction: "Mostrar QR en proyección." },
  },
  {
    slug: "despues",
    title: "Después de las charlas",
    kicker: "Cierre · 0:45",
    component: withSlideInfo(AfterSlide, info(5)),
    guide: {
      intro: "La conversación sigue en la terraza. Compartí lo que te llevás con #DevDayCommunity.",
    },
    speakerNotes: { script: "Invitá a la primera charla.", timing: "0:45" },
  },
];

export const eventDeck: Deck = {
  slug: "devday-exchange-san-salvador",
  title: "DevDay Exchange San Salvador",
  description:
    "La apertura del evento: bienvenida, lo que trajo DevDay 2026, la agenda de las seis charlas y cómo participar desde el teléfono.",
  category: "Apertura",
  duration: "5 min",
  accent: "#0066ff",
  firstSlideNumber: 0,
  slides,
};
