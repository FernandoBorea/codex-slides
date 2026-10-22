import { speakers } from "../../devday/speakers";
import { defineTalk } from "../kit/talk";

export const dotsDeck = defineTalk({
  slug: "dots",
  title: "Dots: agentes que siguen trabajando cuando cerrás la laptop",
  description:
    "Dots trae agentes siempre activos a ChatGPT. Qué delegar, cómo darles un objetivo y dónde poner los límites.",
  topic: "Dots · GPT-6 Astra",
  speaker: speakers.daniela,
  accent: "#ff7900",
  about: "Pendiente: una frase de Daniela sobre quién es y qué construye.",
  openingQuestion: {
    id: "dots-delegar",
    prompt: "¿Qué dejarías corriendo con un agente siempre activo?",
    type: "single",
    options: [
      { id: "investigacion", label: "Investigación" },
      { id: "seguimiento", label: "Seguimiento a clientes" },
      { id: "reportes", label: "Reportes" },
      { id: "nada", label: "Todavía no confiaría" },
    ],
  },
  outline: [
    {
      slug: "de-chatear-a-delegar",
      title: "De chatear a delegar",
      kicker: "Contexto · 1:30",
      guide: {
        intro:
          "Hasta ahora el chat esperaba tu siguiente mensaje. Dots cambia la pregunta: qué objetivo podés dejar corriendo mientras hacés otra cosa.",
      },
    },
    {
      slug: "que-es-un-dot",
      title: "Qué es un Dot",
      kicker: "Concepto · 2:00",
      guide: {
        intro:
          "Un agente siempre activo dentro de ChatGPT. Corre sobre GPT-6 Astra, tiene su propia computadora y navegador en la nube, y trabaja hacia el objetivo que le diste.",
      },
    },
    {
      slug: "un-dot-para-gtm",
      title: "Un Dot para GTM: el seguimiento que nadie olvida",
      kicker: "Ejemplo · 2:00",
      guide: {
        intro:
          "Un ejemplo comercial: investigar cuentas, detectar cambios y preparar el siguiente contacto sin depender de que alguien se acuerde.",
      },
    },
    {
      slug: "objetivos-no-tareas",
      title: "Dale un objetivo, no una lista de tareas",
      kicker: "Práctica · 1:30",
      guide: {
        intro:
          "Cómo redactar el encargo: resultado esperado, fuentes que puede usar, cuándo debe avisarte y qué no debe hacer.",
      },
    },
    {
      slug: "limites",
      title: "Permisos, límites y revisión humana",
      kicker: "Criterio · 1:30",
      guide: {
        intro:
          "Qué conviene dejar en manos de una persona (enviar, pagar, publicar) y cómo revisar lo que el Dot hizo mientras no mirabas.",
      },
    },
    {
      slug: "que-delegarias",
      title: "Qué delegarías mañana",
      kicker: "Cierre · 1:30",
      guide: {
        intro: "Un ejercicio rápido: elegí un objetivo de tu semana que podría avanzar solo.",
      },
    },
  ],
});
