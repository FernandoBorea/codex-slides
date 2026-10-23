import { speakers } from "../../devday/speakers";
import { defineTalk } from "../kit/talk";

export const codexCloudDeck = defineTalk({
  "slug": "codex-en-la-nube",
  "title": "De una idea a algo que funciona con Codex",
  "description": "Cómo pedirle ayuda a Codex para crear algo útil, repartir el trabajo y revisar el resultado. No necesitás saber programar para seguir la charla.",
  "topic": "Crear con Codex",
  "speaker": speakers.walter,
  "accent": "#272725",
  "brief": {
    "goal": "Convertí una idea en algo que podés probar.",
    "topics": [
      "Qué hace Codex y qué necesita saber de tu idea.",
      "Cómo repartir investigación, creación y revisión.",
      "Cómo probar el resultado y pedir una mejora."
    ],
    "demo": "Crear una página sencilla para un evento: partir de un encargo, repartir tareas y corregir un detalle frente al público.",
    "takeaway": "Una forma de pedir trabajo: objetivo, contexto y cómo saber si quedó bien.",
    "preparation": [
      "Preparar un proyecto pequeño y una versión terminada de respaldo.",
      "Mostrar el encargo y el resultado antes de explicar las herramientas.",
      "Explicar agente como un asistente que puede usar herramientas; repositorio como la carpeta del proyecto; PR como una propuesta de cambio para revisar.",
      "Relacionar el ejemplo con Codex en la nube y revisión de cambios anunciados en DevDay. Distinguir ejecución local de cloud; no prometer que cerrar la laptop mantiene una tarea local activa.",
      "Mostrar la revisión humana y una corrección real. El objetivo es comprender el recorrido, no aprender comandos."
    ]
  },
  "openingQuestion": {
    "id": "codex-cloud-donde",
    "prompt": "¿Qué te gustaría crear con ayuda de IA?",
    "type": "single",
    "options": [
      {
        "id": "local",
        "label": "Una página para mi proyecto"
      },
      {
        "id": "nube",
        "label": "Una herramienta para mi trabajo"
      },
      {
        "id": "ambos",
        "label": "Mejorar algo que ya existe"
      },
      {
        "id": "ninguno",
        "label": "Todavía estoy explorando"
      }
    ]
  },
  "outline": [
    {
      "slug": "de-la-terminal-a-la-nube",
      "title": "¿Qué podés crear con Codex?",
      "kicker": "Contexto · 1:00",
      "guide": {
        "intro": "Una página, una herramienta sencilla o una mejora a un proyecto. Codex trabaja con archivos y herramientas para producir algo que podés abrir y probar."
      }
    },
    {
      "slug": "entornos",
      "title": "Una idea necesita contexto",
      "kicker": "Práctica · 1:00",
      "guide": {
        "intro": "Contá para quién es, qué problema resuelve y cómo se vería un buen resultado. Compartí ejemplos y archivos útiles."
      }
    },
    {
      "slug": "agents",
      "title": "Repartí el trabajo",
      "kicker": "Concepto · 1:30",
      "guide": {
        "intro": "Podés encargar investigación, creación y revisión por separado. Las tareas independientes pueden avanzar en paralelo; alguien tiene que reunir y comprobar el resultado."
      }
    },
    {
      "slug": "mi-semana",
      "title": "Demo: una página para un evento",
      "kicker": "Demo · 3:00",
      "guide": {
        "intro": "Seguimos el mismo encargo desde la idea hasta una página que podemos abrir. Miramos lo que hizo cada agente y pedimos una corrección."
      }
    },
    {
      "slug": "code-review",
      "title": "Probalo antes de darlo por terminado",
      "kicker": "Práctica · 1:30",
      "guide": {
        "intro": "Abrí la página, probá los botones y compará el resultado con el encargo. Revisar lo que cambió ayuda a encontrar errores antes de compartirlo."
      }
    },
    {
      "slug": "codex-security",
      "title": "Elegí tu primer proyecto",
      "kicker": "Cierre · 2:00",
      "guide": {
        "intro": "Elegí algo pequeño y fácil de comprobar. DevDay amplió las opciones de Codex en la nube y de revisión; empezá por el entorno que puedas supervisar."
      }
    }
  ]
});
