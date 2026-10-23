import { speakers } from "../../devday/speakers";
import { defineTalk } from "../kit/talk";

export const dotsDeck = defineTalk({
  "slug": "dots",
  "title": "Dots: ayuda que le da seguimiento a tus pendientes",
  "description": "Cómo encargar un seguimiento continuo, elegir las fuentes y recibir avisos útiles mientras te dedicás a otras cosas.",
  "topic": "Dots · Seguimiento continuo",
  "speaker": speakers.saul,
  "accent": "#00b449",
  "brief": {
    "goal": "Delegá un seguimiento sin perder el control.",
    "topics": [
      "Distinguir una consulta puntual de un seguimiento.",
      "Definir objetivo, fuentes y cuándo recibir un aviso.",
      "Revisar qué cambió y decidir el siguiente paso."
    ],
    "demo": "Seguir convocatorias de becas o eventos: mostrar el encargo, un cambio detectado y un aviso con la fuente para revisarlo.",
    "takeaway": "Un objetivo con límites claros y un criterio para avisarte.",
    "preparation": [
      "Comprobar acceso a Dots y preparar un seguimiento con fuentes públicas.",
      "Un seguimiento necesita tiempo: usar un historial real preparado o marcar cualquier recreación como ejemplo. No simular un hallazgo en vivo.",
      "Mostrar cómo cambiar el encargo y detener el seguimiento.",
      "Usar un caso accesible a estudiantes, profesionales y emprendedores; explicar agente como un asistente que actúa con herramientas.",
      "Relacionar el flujo con Dots anunciado en DevDay sin asegurar que toda cuenta tiene acceso."
    ]
  },
  "openingQuestion": {
    "id": "dots-delegar",
    "prompt": "¿A qué te gustaría darle seguimiento?",
    "type": "single",
    "options": [
      {
        "id": "investigacion",
        "label": "Becas y oportunidades"
      },
      {
        "id": "seguimiento",
        "label": "Cambios en un proyecto"
      },
      {
        "id": "reportes",
        "label": "Novedades de mi sector"
      },
      {
        "id": "nada",
        "label": "Primero quiero ver cómo funciona"
      }
    ]
  },
  "outline": [
    {
      "slug": "de-chatear-a-delegar",
      "title": "Hay pendientes que necesitan seguimiento",
      "kicker": "Contexto · 1:00",
      "guide": {
        "intro": "Buscar una convocatoria una vez no alcanza si cambia la fecha o aparece otra oportunidad. Un seguimiento revisa el tema con continuidad."
      }
    },
    {
      "slug": "que-es-un-dot",
      "title": "Qué es un Dot",
      "kicker": "Concepto · 1:00",
      "guide": {
        "intro": "Es un agente de OpenAI pensado para trabajar en responsabilidades continuas usando las herramientas y fuentes que le permitas."
      }
    },
    {
      "slug": "objetivos-no-tareas",
      "title": "Decile qué buscar y cuándo avisar",
      "kicker": "Práctica · 1:30",
      "guide": {
        "intro": "Definí el objetivo, las fuentes, la frecuencia apropiada y qué cambio merece un aviso. Un encargo concreto hace más fácil revisar el resultado."
      }
    },
    {
      "slug": "un-dot-para-gtm",
      "title": "Demo: una oportunidad que no se te pasa",
      "kicker": "Demo · 3:00",
      "guide": {
        "intro": "Recorremos un seguimiento de becas o eventos: qué se pidió, qué cambió y qué fuente respalda el aviso. Los ejemplos preparados se identifican como tales."
      }
    },
    {
      "slug": "limites",
      "title": "Vos decidís qué pasa después",
      "kicker": "Práctica · 1:30",
      "guide": {
        "intro": "Revisá los enlaces y las fechas antes de actuar. Acordá qué puede hacer el agente por su cuenta y qué requiere tu aprobación."
      }
    },
    {
      "slug": "que-delegarias",
      "title": "Elegí un seguimiento para tu semana",
      "kicker": "Cierre · 2:00",
      "guide": {
        "intro": "Pensá en algo que hoy revisás manualmente. Escribí qué querés saber, dónde buscarlo y cuándo sería útil recibir un aviso."
      }
    }
  ]
});
