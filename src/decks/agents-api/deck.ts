import { speakers } from "../../devday/speakers";
import { defineTalk } from "../kit/talk";

export const agentsApiDeck = defineTalk({
  slug: "agents-api",
  title: "Agents API: automatizar lo que solo existe en una pantalla",
  description:
    "La Agents API con computer use permite automatizar sistemas que solo tienen interfaz gráfica. Un recorrido práctico para operaciones.",
  topic: "Agents API · Computer use",
  speaker: speakers.saul,
  accent: "#00b449",
  about: "Pendiente: una frase de Saul sobre quién es y qué construye.",
  openingQuestion: {
    id: "agents-api-herramientas",
    prompt: "¿Cuántas herramientas sin API tocás en una semana normal?",
    type: "single",
    options: [
      { id: "ninguna", label: "Ninguna" },
      { id: "pocas", label: "Entre 1 y 3" },
      { id: "varias", label: "Entre 4 y 10" },
      { id: "muchas", label: "Perdí la cuenta" },
    ],
  },
  outline: [
    {
      slug: "trabajo-en-pantallas",
      title: "El trabajo que vive en pantallas",
      kicker: "Contexto · 1:30",
      guide: {
        intro:
          "Mucha operación ocurre en sistemas sin API: portales, paneles internos y formularios. Ahí la automatización clásica se queda corta.",
      },
    },
    {
      slug: "agents-api",
      title: "La Agents API en un diagrama",
      kicker: "Concepto · 2:00",
      guide: {
        intro:
          "Las piezas que OpenAI administra por vos: herramientas, varios agentes trabajando juntos, búsqueda de tools y compactación de contexto.",
      },
    },
    {
      slug: "computer-use",
      title: "Computer use: cuando no hay endpoint",
      kicker: "Concepto · 1:30",
      guide: {
        intro:
          "El agente opera la interfaz gráfica como lo haría una persona: mira la pantalla, hace clic, escribe y verifica el resultado.",
      },
    },
    {
      slug: "un-caso-de-ops",
      title: "Un caso de operación, paso a paso",
      kicker: "Ejemplo · 2:00",
      guide: {
        intro:
          "Un flujo de operación recreado de punta a punta, incluido el momento en que el agente se detiene a pedir confirmación.",
      },
    },
    {
      slug: "que-vigilar",
      title: "Lo que tenés que vigilar",
      kicker: "Criterio · 1:30",
      guide: {
        intro:
          "Costo por ejecución, errores silenciosos, credenciales y permisos. Qué registrar para poder auditar después.",
      },
    },
    {
      slug: "por-donde-empezar",
      title: "Por dónde empezar esta semana",
      kicker: "Cierre · 1:30",
      guide: {
        intro: "Elegí un proceso repetitivo, corto y fácil de verificar como primer candidato.",
      },
    },
  ],
});
