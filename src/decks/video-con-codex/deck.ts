import { speakers } from "../../devday/speakers";
import { defineTalk } from "../kit/talk";

export const videoCodexDeck = defineTalk({
  "slug": "video-con-codex",
  "title": "De un video largo a un clip con Codex",
  "description": "Usá Codex y herramientas de edición para elegir fragmentos, agregar subtítulos y preparar una versión vertical de un video.",
  "topic": "Codex · Edición de video",
  "speaker": speakers.rodrigo,
  "accent": "#8a8d82",
  "brief": {
    "goal": "Transformá una grabación en un clip para compartir.",
    "topics": [
      "Elegir el mensaje y los fragmentos que lo cuentan.",
      "Pedir cortes, subtítulos y un formato vertical.",
      "Revisar ritmo, audio y texto antes de exportar."
    ],
    "demo": "Usar un video propio, preparar un clip vertical corto y pedir una corrección en lenguaje natural. Comparar el antes y el después.",
    "takeaway": "Un encargo de edición que podés reutilizar con otro video.",
    "preparation": [
      "Usar material propio o autorizado y elegir los fragmentos antes de la charla.",
      "Ensayar la herramienta real de edición, por ejemplo FFmpeg, y tener el video final de respaldo. Codex coordina esas herramientas; no presentar un editor nativo anunciado en DevDay.",
      "Mantener los comandos fuera del recorrido principal; mostrar archivos, instrucciones y resultado.",
      "Verificar subtítulos, encuadre, audio y exportación; no prometer tiempos de render ni resultados sin ensayar.",
      "Preparar un cambio visible y sencillo para pedir en vivo: acortar el inicio o corregir un subtítulo."
    ]
  },
  "openingQuestion": {
    "id": "video-codex-experiencia",
    "prompt": "¿Qué te cuesta más al editar un video?",
    "type": "single",
    "options": [
      {
        "id": "seleccionar",
        "label": "Elegir qué dejar"
      },
      {
        "id": "cortar",
        "label": "Hacer los cortes"
      },
      {
        "id": "subtitulos",
        "label": "Agregar subtítulos"
      },
      {
        "id": "empezar",
        "label": "No sé por dónde empezar"
      }
    ]
  },
  "outline": [
    {
      "slug": "el-material",
      "title": "Empezá por lo que querés contar",
      "kicker": "Contexto · 1:00",
      "guide": {
        "intro": "Definí para quién es el clip, dónde lo vas a compartir y qué idea querés que quede. Una grabación larga puede contener varios mensajes."
      }
    },
    {
      "slug": "el-encargo",
      "title": "Un encargo claro para editar",
      "kicker": "Práctica · 1:00",
      "guide": {
        "intro": "Indicá el material, los momentos útiles, la duración buscada y el formato. Los nombres de archivos ayudan a evitar confusiones."
      }
    },
    {
      "slug": "herramientas",
      "title": "Codex prepara el trabajo de edición",
      "kicker": "Concepto · 1:30",
      "guide": {
        "intro": "Codex puede preparar instrucciones y ejecutar herramientas de edición configuradas. La herramienta procesa el video; vos revisás las decisiones creativas."
      }
    },
    {
      "slug": "demo",
      "title": "Demo: del original al clip",
      "kicker": "Demo · 3:00",
      "guide": {
        "intro": "Vemos el video original y un primer corte vertical con subtítulos. Pedimos una corrección concreta y comparamos ambas versiones."
      }
    },
    {
      "slug": "revisar",
      "title": "Mirá y escuchá el resultado",
      "kicker": "Práctica · 1:30",
      "guide": {
        "intro": "Revisá que los cortes no cambien el sentido, que el encuadre funcione y que los subtítulos coincidan con el audio."
      }
    },
    {
      "slug": "reutilizar",
      "title": "Guardá tu receta de edición",
      "kicker": "Cierre · 2:00",
      "guide": {
        "intro": "Conservá las instrucciones que funcionaron, el formato y una lista de revisión. Probá el mismo proceso con otro video antes de darlo por repetible."
      }
    }
  ]
});
