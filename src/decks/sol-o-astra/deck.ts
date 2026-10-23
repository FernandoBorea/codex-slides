import { speakers } from "../../devday/speakers";
import { defineTalk } from "../kit/talk";

export const solOAstraDeck = defineTalk({
  slug: "sol-o-astra",
  title: "Sol o Astra: elegir modelo cuando vos pagás la cuenta",
  description:
    "GPT-6 Astra y GPT-6.1 Sol, comparados desde la factura: cuándo pagar por el modelo más capaz y cuándo Sol alcanza.",
  topic: "GPT-6.1 Sol · GPT-6 Astra",
  speaker: speakers.fernando,
  accent: "#0066ff",
  about: "Pendiente: una frase de Fernando sobre quién es y qué construye.",
  openingQuestion: {
    id: "sol-astra-criterio",
    prompt: "¿Qué pesa más cuando elegís un modelo?",
    type: "single",
    options: [
      { id: "calidad", label: "La calidad del resultado" },
      { id: "costo", label: "El costo por uso" },
      { id: "velocidad", label: "La velocidad" },
      { id: "costumbre", label: "Lo que ya usa el equipo" },
    ],
  },
  outline: [
    {
      slug: "lo-que-cambio",
      title: "Lo que cambió el 29 de septiembre",
      kicker: "Contexto · 1:30",
      guide: {
        intro:
          "DevDay 2026 trajo dos modelos que vas a escuchar toda la tarde: GPT-6 Astra, el más capaz, y GPT-6.1 Sol, pensado para el trabajo diario a menor costo.",
      },
    },
    {
      slug: "astra",
      title: "GPT-6 Astra: el techo de capacidad",
      kicker: "Modelos · 1:30",
      guide: {
        intro:
          "En qué tareas se nota Astra frente a otros modelos y por qué es el modelo que corre detrás de Dots.",
      },
    },
    {
      slug: "sol",
      title: "GPT-6.1 Sol: casi lo mismo, por una fracción",
      kicker: "Modelos · 1:30",
      guide: {
        intro:
          "Sol mejora en código agéntico, uso de computadora y trabajo profesional, con un precio por token bastante menor que el de Astra.",
      },
    },
    {
      slug: "la-cuenta",
      title: "La cuenta de un producto real",
      kicker: "Ejemplo · 2:30",
      guide: {
        intro:
          "Un mismo flujo calculado con cada modelo: tokens por tarea, costo por usuario y el punto en el que cambia la decisión.",
      },
    },
    {
      slug: "cuando-astra",
      title: "Cuándo vale pagar por Astra",
      kicker: "Criterio · 2:00",
      guide: {
        intro:
          "Una regla práctica: empezar con Sol, medir y subir a Astra solo donde la diferencia se nota en el resultado.",
      },
    },
    {
      slug: "manana",
      title: "Qué cambiarías mañana en tu stack",
      kicker: "Cierre · 1:00",
      guide: {
        intro:
          "Una acción concreta para quien ya tiene un producto con IA: revisar qué llamadas podrían pasar a Sol sin perder calidad.",
      },
    },
  ],
});
