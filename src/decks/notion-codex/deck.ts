import { speakers } from "../../devday/speakers";
import { defineTalk } from "../kit/talk";

export const notionCodexDeck = defineTalk({
  "slug": "notion-codex",
  "title": "Notion × Codex: de tus notas al trabajo hecho",
  "description": "Convertí notas y pendientes de Notion en un encargo claro para Codex, revisá el resultado y dejalo registrado para tu equipo.",
  "topic": "Notion · Trabajo en equipo",
  "speaker": speakers.daniela,
  "accent": "#ff7900",
  "brief": {
    "goal": "Pasá de notas sueltas a un resultado compartido.",
    "topics": [
      "Ordenar objetivo, contexto y pendientes en Notion.",
      "Conectar la información que Codex puede consultar.",
      "Revisar el entregable y actualizar la página del equipo."
    ],
    "demo": "Partir de notas de una reunión en Notion, preparar con Codex un brief para una actividad y guardar la versión revisada en la página.",
    "takeaway": "Un circuito simple: notas → encargo → resultado → revisión.",
    "preparation": [
      "Preparar una página de Notion con datos de ejemplo y comprobar la conexión antes de la charla.",
      "Mostrar qué puede leer y editar la conexión. Explicar MCP como un puente entre herramientas, sin instalarlo en vivo.",
      "La demo debe terminar con un entregable visible y el estado actualizado en Notion; no necesita código ni un PR.",
      "Distinguir la conexión MCP del anuncio Sign in with ChatGPT: son integraciones diferentes. No prometer acceso o consumo del plan sin comprobar la cuenta.",
      "Explicar cada sigla y dejar una captura del resultado como respaldo."
    ]
  },
  "openingQuestion": {
    "id": "notion-codex-specs",
    "prompt": "¿Dónde anotás las tareas de tu equipo?",
    "type": "single",
    "options": [
      {
        "id": "notion",
        "label": "En Notion"
      },
      {
        "id": "docs",
        "label": "En Docs o Drive"
      },
      {
        "id": "tickets",
        "label": "En un tablero de tareas"
      },
      {
        "id": "cabeza",
        "label": "En chats o de memoria"
      }
    ]
  },
  "outline": [
    {
      "slug": "el-contexto-esta-lejos",
      "title": "Las notas no avanzan solas",
      "kicker": "Problema · 1:00",
      "guide": {
        "intro": "Después de una reunión quedan decisiones y tareas repartidas. El primer paso es reunirlas y dejar claro qué hay que entregar."
      }
    },
    {
      "slug": "notion-es-la-memoria",
      "title": "Una página que se entiende",
      "kicker": "Práctica · 1:00",
      "guide": {
        "intro": "En Notion anotá objetivo, público, información disponible, pendientes y qué significa terminado. Así el equipo y Codex parten del mismo contexto."
      }
    },
    {
      "slug": "el-puente",
      "title": "Conectá Notion con Codex",
      "kicker": "Concepto · 1:30",
      "guide": {
        "intro": "Una conexión permite consultar y, con los permisos adecuados, actualizar páginas. MCP es el nombre del puente que conecta estas herramientas."
      }
    },
    {
      "slug": "demo",
      "title": "Demo: de la reunión al brief",
      "kicker": "Demo · 3:00",
      "guide": {
        "intro": "Tomamos notas de una reunión, preparamos un brief para una actividad y revisamos si respeta las decisiones. Después guardamos el resultado en Notion."
      }
    },
    {
      "slug": "un-spec-legible",
      "title": "Pedí cambios sin empezar de cero",
      "kicker": "Práctica · 1:30",
      "guide": {
        "intro": "Corregí una instrucción concreta: público, fecha, tono o alcance. Compará el nuevo resultado con las notas originales."
      }
    },
    {
      "slug": "manos-humanas",
      "title": "Cerrá el círculo con tu equipo",
      "kicker": "Cierre · 2:00",
      "guide": {
        "intro": "Dejá el entregable y el estado en la página original. El equipo sigue decidiendo prioridades, revisando datos y aprobando lo que se comparte."
      }
    }
  ]
});
