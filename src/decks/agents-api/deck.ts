import { speakers } from "../../devday/speakers";
import { defineTalk } from "../kit/talk";

export const agentsApiDeck = defineTalk({
  "slug": "agents-api",
  "title": "Un asistente que trabaja entre tus herramientas",
  "description": "Veamos cómo un agente puede reunir información y completar un proceso entre varias herramientas, con vos al mando.",
  "topic": "Agents API · Uso de herramientas",
  "speaker": speakers.fernando,
  "accent": "#0066ff",
  "brief": {
    "goal": "Conectá los pasos de un trabajo repetitivo.",
    "topics": [
      "Entender qué hace un agente y qué es una conexión.",
      "Ver cuándo usa herramientas y cuándo una pantalla.",
      "Comprobar el resultado antes de confirmar una acción."
    ],
    "demo": "Recibir una solicitud de ejemplo, consultar una lista de horarios y completar un formulario de prueba, deteniéndose antes de enviarlo.",
    "takeaway": "Una forma de elegir un proceso pequeño que vale la pena delegar.",
    "preparation": [
      "Preparar datos ficticios, una lista de horarios y un formulario de prueba sin efectos reales.",
      "Explicar API como una conexión entre programas y computer use como operar una pantalla.",
      "Mostrar entrada, pasos y resultado; dejar la configuración técnica y el código como material opcional.",
      "Distinguir el navegador o entorno preparado para la demo del control irrestricto de una computadora personal.",
      "Relacionar el ejemplo con Agents API y computer use anunciados en DevDay; confirmar acceso y herramientas antes de presentar."
    ]
  },
  "openingQuestion": {
    "id": "agents-api-herramientas",
    "prompt": "¿Qué tarea repetís entre varias herramientas?",
    "type": "single",
    "options": [
      {
        "id": "ninguna",
        "label": "Copiar información"
      },
      {
        "id": "pocas",
        "label": "Coordinar horarios"
      },
      {
        "id": "varias",
        "label": "Completar formularios"
      },
      {
        "id": "muchas",
        "label": "Varias de estas"
      }
    ]
  },
  "outline": [
    {
      "slug": "trabajo-en-pantallas",
      "title": "El trabajo de pasar de una app a otra",
      "kicker": "Contexto · 1:00",
      "guide": {
        "intro": "Copiar datos, consultar un horario y completar un formulario son pasos pequeños que juntos consumen tiempo."
      }
    },
    {
      "slug": "agents-api",
      "title": "Un asistente con herramientas",
      "kicker": "Concepto · 1:00",
      "guide": {
        "intro": "Un agente recibe un objetivo y puede usar herramientas para avanzar. Agents API permite integrar ese comportamiento en una aplicación; API significa una conexión entre programas."
      }
    },
    {
      "slug": "computer-use",
      "title": "Conexiones y pantallas",
      "kicker": "Concepto · 1:30",
      "guide": {
        "intro": "Cuando hay una conexión, el agente usa los datos directamente. Cuando hace falta una interfaz, puede operar una pantalla en un entorno preparado y autorizado."
      }
    },
    {
      "slug": "un-caso-de-ops",
      "title": "Demo: de la solicitud al formulario",
      "kicker": "Demo · 3:00",
      "guide": {
        "intro": "Con datos de ejemplo, el agente lee una solicitud, consulta horarios y completa un formulario de prueba. Se detiene para que una persona revise antes de enviar."
      }
    },
    {
      "slug": "que-vigilar",
      "title": "Revisá antes de confirmar",
      "kicker": "Práctica · 1:30",
      "guide": {
        "intro": "Comprobá nombres, fechas y opciones elegidas. Si falta información, es mejor pedirla que completar datos por suposición."
      }
    },
    {
      "slug": "por-donde-empezar",
      "title": "Elegí un proceso fácil de comprobar",
      "kicker": "Cierre · 2:00",
      "guide": {
        "intro": "Empezá con pocos pasos y un resultado visible. Medí si ahorra tiempo y si podés detectar los errores antes de usarlo con información real."
      }
    }
  ]
});
