import { speakers } from "../../devday/speakers";
import { defineTalk } from "../kit/talk";
import {
  AiCodingCoverSlide,
  CierreSlide,
  CincoPracticasSlide,
  CodigoVsSoftwareSlide,
  ContextoSlide,
  EspecificacionesSlide,
  HerramientasSlide,
  InstruccionesSlide,
  ReemplazarSlide,
  ResponsabilidadSlide,
  TareasSlide,
  ValidacionSlide,
} from "./Slides";

export const decisionsApiDeck = defineTalk({
  "slug": "decisions-api",
  "title": "AI Coding",
  "description": "Generar código es fácil. Construir software es otra historia: qué cambia cuando la IA escribe código y cinco prácticas para trabajar mejor con Codex.",
  "topic": "AI Coding",
  "speaker": speakers.frank,
  "accent": "#9146ff",
  "coverComponent": AiCodingCoverSlide,
  "brief": {
    "goal": "Generar código es fácil; construir software es otra historia.",
    "topics": [
      "Qué cambia cuando la IA escribe nuestro código.",
      "Por qué escribir código y desarrollar software no son lo mismo.",
      "Cinco prácticas para trabajar mejor con Codex."
    ],
    "demo": "Sin demo en vivo: el recorrido usa ejemplos proyectados — un AGENTS.md, el contexto del proyecto, herramientas MCP y un flujo spec-driven.",
    "takeaway": "Delegar la implementación no significa delegar la responsabilidad: dirigir, dar contexto y verificar siguen siendo nuestro trabajo.",
    "preparation": [
      "Los ejemplos (AGENTS.md, herramientas MCP, flujo spec-driven) son ilustrativos; presentarlos como referencia, no como configuración en vivo.",
      "Mantener la tesis central: la IA puede escribir código; lo que construimos con ella sigue siendo nuestra responsabilidad.",
      "Frase de cierre: «La IA puede escribir código. Lo que construimos con ella sigue siendo nuestra responsabilidad»."
    ]
  },
  "openingQuestion": {
    "id": "ai-coding-reemplazar",
    "prompt": "¿La IA nos va a reemplazar?",
    "type": "single",
    "options": [
      {
        "id": "reemplaza",
        "label": "Sí, nos va a reemplazar"
      },
      {
        "id": "transforma",
        "label": "Va a transformar cómo trabajamos"
      },
      {
        "id": "complementa",
        "label": "Va a ser una herramienta más"
      },
      {
        "id": "indeciso",
        "label": "Todavía no lo tengo claro"
      }
    ]
  },
  "outline": [
    {
      "slug": "reemplazar",
      "title": "¿La IA nos va a reemplazar?",
      "kicker": "Contexto · 0:45",
      "component": ReemplazarSlide,
      "guide": {
        "intro": "La pregunta con la que abre la charla. Un trabajo está compuesto por muchas tareas: la pregunta no es si la IA nos reemplaza, sino cómo cambia la manera en que trabajamos.",
        "takeaway": "La conversación es sobre transformación, no sobre reemplazo."
      },
      "speakerNotes": {
        "script": "Preguntá cuántos han escuchado que la IA reemplazará a los programadores. Compartí brevemente cómo cambió el desarrollo en más de 15 años de experiencia e introducí la idea de que un trabajo está compuesto por muchas tareas.",
        "timing": "0:45",
        "interaction": "Abrí la encuesta de portada antes de esta slide si querés leer la sala."
      }
    },
    {
      "slug": "transformando-tareas",
      "title": "La IA está transformando nuestras tareas",
      "kicker": "Contexto · 1:30",
      "component": TareasSlide,
      "guide": {
        "intro": "No dejamos de programar: cambia cómo invertimos nuestro tiempo. La IA automatiza o acelera algunas tareas, pero no elimina nuestra responsabilidad sobre el resultado.",
        "sections": [
          { "title": "Antes", "body": "Investigar, escribir código, depurar, documentar, probar." },
          { "title": "Ahora", "body": "Definir, dirigir, construir, validar, mejorar." }
        ],
        "takeaway": "Algunas actividades siguen requiriendo conocimientos técnicos y criterio humano."
      },
      "speakerNotes": {
        "script": "La IA automatiza o acelera algunas tareas, pero no elimina nuestra responsabilidad sobre el resultado. Algunas actividades siguen requiriendo conocimientos técnicos y criterio humano.",
        "timing": "1:30"
      }
    },
    {
      "slug": "codigo-vs-software",
      "title": "Escribir código ≠ desarrollar software",
      "kicker": "Idea · 0:30",
      "component": CodigoVsSoftwareSlide,
      "guide": {
        "intro": "El código es el medio; la solución es el objetivo. Generar una aplicación funcional es cada vez más accesible, pero también necesita arquitectura, seguridad, mantenimiento y pruebas.",
        "takeaway": "El desafío no es solo generar código: es construir soluciones que resuelvan problemas reales."
      },
      "speakerNotes": {
        "script": "Generar una aplicación funcional es cada vez más accesible, pero una aplicación también necesita arquitectura, seguridad, mantenimiento y pruebas. El verdadero desafío no es únicamente generar código, sino construir soluciones que resuelvan problemas reales.",
        "timing": "0:30"
      }
    },
    {
      "slug": "responsabilidad",
      "title": "La responsabilidad sigue siendo nuestra",
      "kicker": "Tesis · 0:30",
      "component": ResponsabilidadSlide,
      "guide": {
        "intro": "La IA puede escribir código, pero construir buen software sigue siendo nuestra responsabilidad: dirigir su trabajo, proporcionar contexto y evaluar los resultados.",
        "takeaway": "La tesis central de la charla."
      },
      "speakerNotes": {
        "script": "Esta es la tesis central de la charla. Codex puede implementar funcionalidades, pero necesitamos aprender a dirigir su trabajo, proporcionar contexto y evaluar los resultados.",
        "timing": "0:30"
      }
    },
    {
      "slug": "cinco-practicas",
      "title": "5 prácticas para desarrollar mejor con Codex",
      "kicker": "Prácticas · 0:45",
      "component": CincoPracticasSlide,
      "guide": {
        "intro": "Un sistema de trabajo, no una lista de funcionalidades: instrucciones, contexto, herramientas, especificaciones y validación.",
        "sections": [
          { "title": "Las cinco", "body": "Instrucciones · Contexto · Herramientas · Especificaciones · Validación." }
        ],
        "takeaway": "No se trata de escribir mejores prompts; se trata de trabajar mejor."
      },
      "speakerNotes": {
        "script": "Introducí las cinco prácticas como un sistema de trabajo, no como una lista de funcionalidades de Codex.",
        "timing": "0:45"
      }
    },
    {
      "slug": "instrucciones",
      "title": "Instrucciones",
      "kicker": "Práctica 01/05 · 1:00",
      "component": InstruccionesSlide,
      "guide": {
        "intro": "AGENTS.md define cómo debe trabajar tu agente: convenciones, arquitectura, estándares y reglas del proyecto.",
        "sections": [
          { "title": "Qué lleva", "body": "AGENTS.md · convenciones · arquitectura · estándares · reglas del proyecto." }
        ],
        "takeaway": "No hagas que tu agente adivine cómo trabajás."
      },
      "speakerNotes": {
        "script": "Mostrá cómo podemos definir instrucciones persistentes para Codex, por ejemplo las convenciones de un proyecto WordPress o JavaScript. El AGENTS.md de la slide es un ejemplo ilustrativo.",
        "timing": "1:00"
      }
    },
    {
      "slug": "contexto",
      "title": "Contexto",
      "kicker": "Práctica 02/05 · 1:00",
      "component": ContextoSlide,
      "guide": {
        "intro": "La IA necesita conocer tu proyecto: documentación, requerimientos, arquitectura y reglas de negocio.",
        "sections": [
          { "title": "Qué compartir", "body": "Documentación · requerimientos · arquitectura · reglas de negocio." }
        ],
        "takeaway": "El problema no siempre es que la IA no sepa programar; a veces no conoce nuestro proyecto."
      },
      "speakerNotes": {
        "script": "Explicá cómo una base de conocimiento permite que Codex comprenda las decisiones y restricciones del proyecto, en lugar de trabajar únicamente con un prompt aislado.",
        "timing": "1:00"
      }
    },
    {
      "slug": "herramientas",
      "title": "Herramientas",
      "kicker": "Práctica 03/05 · 1:00",
      "component": HerramientasSlide,
      "guide": {
        "intro": "Dale a tu agente las herramientas correctas: Codex, MCP e integraciones con repositorios, documentación y servicios de desarrollo.",
        "sections": [
          { "title": "El equipo del agente", "body": "Codex ejecuta el trabajo · MCP conecta servicios y herramientas de desarrollo · las integraciones acercan repositorios y documentación." }
        ],
        "takeaway": "Un agente es más útil cuando puede actuar con el contexto y los permisos adecuados."
      },
      "speakerNotes": {
        "script": "Explicá brevemente MCP (un puente entre herramientas) y las integraciones. No muestres configuraciones técnicas; enfocate en cómo mejoran el flujo de trabajo.",
        "timing": "1:00"
      }
    },
    {
      "slug": "especificaciones",
      "title": "Especificaciones",
      "kicker": "Práctica 04/05 · 1:00",
      "component": EspecificacionesSlide,
      "guide": {
        "intro": "Spec-Driven Development: primero definí, después construí. Problema, requerimientos, plan e implementación.",
        "sections": [
          { "title": "El flujo", "body": "Problema → requerimientos → plan → implementación." }
        ],
        "takeaway": "La calidad de una solución comienza con la claridad del problema."
      },
      "speakerNotes": {
        "script": "Compará un prompt genérico como «creá una plataforma de registro» con una especificación que incluya usuarios, funcionalidades y criterios de aceptación.",
        "timing": "1:00"
      }
    },
    {
      "slug": "validacion",
      "title": "Validación",
      "kicker": "Práctica 05/05 · 1:00",
      "component": ValidacionSlide,
      "guide": {
        "intro": "Confiá en el proceso y verificá el resultado: code review, testing, seguridad y criterios de aceptación.",
        "sections": [
          { "title": "Cómo verificar", "body": "Code review · testing · seguridad · criterios de aceptación." }
        ],
        "takeaway": "Delegar la implementación no significa delegar la responsabilidad."
      },
      "speakerNotes": {
        "script": "Codex puede ayudar a generar pruebas y revisar código, pero debemos evaluar los resultados. Una implementación que funciona no necesariamente es una implementación correcta o segura.",
        "timing": "1:00"
      }
    },
    {
      "slug": "cierre",
      "title": "Construir mejores soluciones",
      "kicker": "Cierre · 1:00",
      "component": CierreSlide,
      "guide": {
        "intro": "El futuro no se trata de escribir más código, sino de construir mejores soluciones: aprender nuevas herramientas, construir soluciones a problemas reales y compartir conocimientos.",
        "sections": [
          { "title": "Contacto", "body": "Frank Calderon · frankcalderon.dev · @frankcalderondev" }
        ],
        "takeaway": "La IA puede escribir código; lo que construimos con ella sigue siendo nuestra responsabilidad."
      },
      "speakerNotes": {
        "script": "Aprender nuevas herramientas y fortalecer los fundamentos. Construir soluciones a problemas reales. Compartir conocimientos para que más personas puedan crear tecnología. Cerrá con: «La IA puede escribir código. Lo que construimos con ella sigue siendo nuestra responsabilidad».",
        "timing": "1:00",
        "transition": "Después del contacto, avanzá a la slide de preguntas."
      }
    }
  ],
});
