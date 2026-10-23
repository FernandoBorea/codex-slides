import { speakers } from "../../devday/speakers";
import { defineTalk } from "../kit/talk";

/**
 * The closing talk. Notion keeps the team's context (spec, decisions, status);
 * Codex executes; the Notion MCP server connects both so a spec page becomes
 * a pull request and the page gets the result back.
 */
export const notionCodexDeck = defineTalk({
  slug: "notion-codex",
  title: "Notion × Codex: del spec al pull request",
  description:
    "Notion guarda el contexto del equipo y Codex ejecuta. Cómo conectarlos con MCP para pasar de una página de spec a un pull request.",
  topic: "Codex · Notion MCP",
  speaker: speakers.walter,
  accent: "#272725",
  about: "Pendiente: una frase de Walter sobre quién es y qué construye.",
  openingQuestion: {
    id: "notion-codex-specs",
    prompt: "¿Dónde viven hoy los specs de tu equipo?",
    type: "single",
    options: [
      { id: "notion", label: "En Notion" },
      { id: "docs", label: "En Docs o Drive" },
      { id: "tickets", label: "En los tickets" },
      { id: "cabeza", label: "En la cabeza de alguien" },
    ],
  },
  outline: [
    {
      slug: "el-contexto-esta-lejos",
      title: "El contexto vive lejos del código",
      kicker: "Problema · 1:00",
      guide: {
        intro:
          "Specs, decisiones y prioridades viven en Notion; el código vive en el repositorio. Un agente necesita las dos cosas para hacer un buen trabajo.",
      },
    },
    {
      slug: "notion-es-la-memoria",
      title: "Notion es la memoria del equipo",
      kicker: "Concepto · 1:00",
      guide: {
        intro:
          "Qué dejar en Notion para que un agente lo aproveche: el spec, los criterios de aceptación, las decisiones tomadas y el estado de cada tarea.",
      },
    },
    {
      slug: "codex-ejecuta",
      title: "Codex es quien ejecuta",
      kicker: "Concepto · 1:00",
      guide: {
        intro:
          "Codex toma un encargo concreto, trabaja en el repositorio, en tu máquina o en la nube, y devuelve un cambio que se puede revisar.",
      },
    },
    {
      slug: "el-puente",
      title: "El puente: Notion MCP dentro de Codex",
      kicker: "Configuración · 1:30",
      guide: {
        intro:
          "Con el servidor MCP de Notion configurado en Codex, el agente puede leer la página del spec y actualizarla cuando termina.",
      },
    },
    {
      slug: "un-spec-legible",
      title: "Un spec que un agente puede leer",
      kicker: "Práctica · 1:30",
      guide: {
        intro:
          "La estructura mínima de una página: objetivo, alcance, criterios de aceptación y lo que queda fuera. Sin eso, el agente adivina.",
      },
    },
    {
      slug: "demo",
      title: "Demo: de una página de Notion a un pull request",
      kicker: "Demo · 3:00",
      guide: {
        intro:
          "En vivo: una tarea del tablero de Notion se convierte en un pull request, y la página queda actualizada con el enlace y el estado.",
      },
    },
    {
      slug: "manos-humanas",
      title: "Qué queda en manos humanas",
      kicker: "Cierre · 1:00",
      guide: {
        intro:
          "Priorizar, decidir el alcance y aprobar el merge siguen siendo trabajo del equipo. El agente acorta el camino entre la idea y el cambio.",
      },
    },
  ],
});
