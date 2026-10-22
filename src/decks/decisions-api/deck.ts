import { speakers } from "../../devday/speakers";
import { defineTalk } from "../kit/talk";

export const decisionsApiDeck = defineTalk({
  slug: "decisions-api",
  title: "Decisions API: muchas decisiones pequeñas, bien tomadas",
  description:
    "No todo problema necesita un agente. La Decisions API y Luna para decisiones cerradas, frecuentes y medibles.",
  topic: "Decisions API · Luna",
  speaker: speakers.frank,
  accent: "#9146ff",
  about: "Pendiente: una frase de Frank sobre quién es y qué construye.",
  openingQuestion: {
    id: "decisions-api-donde",
    prompt: "¿Dónde tomás hoy muchas decisiones repetidas?",
    type: "single",
    options: [
      { id: "soporte", label: "Soporte" },
      { id: "ventas", label: "Ventas" },
      { id: "contenido", label: "Contenido" },
      { id: "operacion", label: "Operación" },
    ],
  },
  outline: [
    {
      slug: "no-todo-es-un-agente",
      title: "No todo necesita un agente",
      kicker: "Contexto · 1:30",
      guide: {
        intro:
          "Muchas tareas no son conversaciones largas: son elegir una opción entre pocas, miles de veces al día.",
      },
    },
    {
      slug: "decisions-api",
      title: "Decisions API y Luna",
      kicker: "Concepto · 2:00",
      guide: {
        intro:
          "La Decisions API, en preview limitado, usa el modelo Luna para elegir entre respuestas predefinidas a partir de texto o imágenes.",
      },
    },
    {
      slug: "del-if-al-criterio",
      title: "Del if-else al criterio escrito",
      kicker: "Concepto · 1:30",
      guide: {
        intro:
          "Pasar reglas frágiles a un criterio en lenguaje natural que el modelo aplica, sin perder el control sobre las salidas posibles.",
      },
    },
    {
      slug: "casos",
      title: "Soporte, moderación y ruteo",
      kicker: "Ejemplos · 2:00",
      guide: {
        intro: "Tres decisiones pequeñas y frecuentes en las que un conjunto cerrado de respuestas encaja bien.",
      },
    },
    {
      slug: "medir",
      title: "Medir antes de confiar",
      kicker: "Criterio · 1:30",
      guide: {
        intro:
          "Armar ejemplos etiquetados, comparar contra lo que decide una persona y vigilar los casos dudosos.",
      },
    },
    {
      slug: "cuando-escalar",
      title: "Cuándo pasar a un modelo más grande",
      kicker: "Cierre · 1:30",
      guide: {
        intro:
          "Las señales de que la decisión ya no cabe en opciones fijas y conviene pasar a Sol o a un agente.",
      },
    },
  ],
});
