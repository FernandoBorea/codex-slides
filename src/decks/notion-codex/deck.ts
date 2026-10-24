import { speakers } from "../../devday/speakers";
import { defineTalk } from "../kit/talk";
import {
  BriefDiarioSlide,
  CirculoSlide,
  DemoSlide,
  EstadoBotonSlide,
  GranolaTourSlide,
  NOTION_GIFT_URL,
  NotionTourSlide,
  PortadaSlide,
  RecorridoSlide,
  RegaloSlide,
  TodoGuardadoSlide,
  UnSoloLugarSlide,
} from "./Slides";

export const notionCodexDeck = defineTalk({
  slug: "notion-codex",
  title: "Notion × Codex: de tus notas al trabajo hecho",
  description: "Daniela muestra su «cerebro» en Notion: las reuniones de Granola, los proyectos y las tareas en un tablero por carpeta. Mover una tarjeta le pide trabajo a Codex, y cada mañana un brief cuenta qué se avanzó.",
  topic: "Notion · Trabajo en equipo",
  speaker: speakers.daniela,
  accent: "#ff7900",
  coverComponent: PortadaSlide,
  speakerComponent: RecorridoSlide,
  brief: {
    goal: "Notas que se convierten en trabajo.",
    topics: [
      "El problema: todas las notas vivían en Granola, sin ningún propósito.",
      "El tablero: notas, proyectos y tareas en un lugar, separados por carpeta.",
      "Los agentes: mover una tarjeta le pide trabajo a Codex, y un brief diario cuenta lo que pasó.",
    ],
    demo: "Mover «Correo a Marta pidiendo catálogo y videos» (Café Volcán) a En proceso. Codex redacta el correo, lo deja en la tarjeta y la pasa a En revisión. Después, el brief diario del 24 de octubre.",
    takeaway: "El estado es el botón · Codex entrega · vos aprobás.",
    preparation: [
      "La demo está grabada en public/talks/notion-codex/demo.mp4 y se reproduce en la slide de demo. La demo en vivo es opcional.",
      "Guion: 1) mover «Correo a Marta» a En proceso; 2) correr el agente de tarea en Codex, que deja el borrador, una línea en Seguimiento y pasa la tarjeta a En revisión; 3) correr el brief diario, que crea «Brief · 24 oct».",
      "Las 22 acciones y los briefs del 20 al 23 de octubre son simulados y tienen el check Demo. Las slides lo marcan como «Datos de demo». Borrarlos después de grabar.",
      "El flujo está andando: una automatización de Notion manda un webhook que lanza a Codex cuando la tarjeta pasa a En proceso, el brief diario corre cada mañana y las reuniones nuevas de Granola llegan con su carpeta.",
      "Notion Custom Agents se activan con cambios de propiedad, pero requieren el plan Business y consumen créditos. Por eso el agente es Codex. El regalo de Business del final permite probarlos.",
      "Explicar MCP una vez como el puente entre herramientas. No es lo mismo que Sign in with ChatGPT.",
    ],
  },
  openingQuestion: {
    id: "notion-codex-specs",
    prompt: "¿Dónde anotás las tareas de tu equipo?",
    type: "single",
    options: [
      { id: "notion", label: "En Notion" },
      { id: "docs", label: "En Docs o Drive" },
      { id: "tickets", label: "En un tablero de tareas" },
      { id: "cabeza", label: "En chats o de memoria" },
    ],
  },
  outline: [
    {
      slug: "granola",
      title: "Granola: vos anotás lo importante, la IA completa el resto",
      kicker: "Recorrido · Granola · 1:00",
      component: GranolaTourSlide,
      guide: {
        intro: "Granola es un bloc de notas con IA para reuniones. No mete un bot en la llamada: escucha el audio de tu computadora mientras vos anotás lo importante, y al terminar completa tus notas con la transcripción.",
        sections: [
          { title: "Lo que podés hacer", body: "Chatear con una reunión o con todas las del mes · Ordenar en carpetas · Usar plantillas y recipes · Mandar notas a Notion, Slack o Zapier · Conectarlo a un asistente por MCP." },
          { title: "Tus notas guían a la IA", body: "Lo que escribiste queda en negro; lo que agrega Granola, en gris." },
        ],
        takeaway: "Granola escucha por vos, sin bot y sin perder tus notas.",
      },
      speakerNotes: {
        script: "Abrí Granola o mostrá la nota de ejemplo. Señalá la diferencia entre lo que escribiste (negro) y lo que completó Granola (gris). Mostrá el chat con una pregunta.",
        timing: "1:00",
        cues: ["Fuentes: granola.ai y docs.granola.ai (sin bot, notas guiadas, Chat, carpetas, plantillas, recipes, integraciones y MCP)."],
      },
    },
    {
      slug: "notion",
      title: "Notion: tus tareas, vistas como quieras",
      kicker: "Recorrido · Notion · 0:45",
      component: NotionTourSlide,
      guide: {
        intro: "Notion arma páginas que también pueden ser bases de datos: filas con propiedades como estado, carpeta o fecha. Las mismas tareas se ven como tabla, tablero o galería. Cambiás la vista, no los datos.",
        takeaway: "Notion es la interfaz: ahí se ve y se decide el trabajo.",
      },
      speakerNotes: {
        script: "Mostrá una base de datos y cambiá entre tabla y tablero. Es la base de todo lo que sigue.",
        timing: "0:45",
      },
    },
    {
      slug: "el-contexto-esta-lejos",
      title: "Mis notas vivían en Granola. Sin ningún propósito.",
      kicker: "Problema · 0:45",
      component: TodoGuardadoSlide,
      ambientMotion: true,
      guide: {
        intro: "Daniela graba todas sus reuniones con Granola. Las notas se acumulaban ahí: resúmenes completos, pero sin proyecto, sin carpeta y sin nadie que hiciera algo con ellas.",
        sections: [{ title: "Lo que había", body: "14 reuniones del 1 al 22 de octubre, 8 proyectos sin definir y 16 pendientes sin dueño ni fecha." }],
        takeaway: "Tomar notas no es lo mismo que hacer algo con ellas.",
      },
      speakerNotes: {
        script: "Contalo en primera persona: Granola guardaba todo, pero las notas no servían para nada después de la reunión. Leé los tres números.",
        timing: "0:45",
        cues: ["Preguntá quién vuelve a leer sus notas de reunión."],
      },
    },
    {
      slug: "notion-es-la-memoria",
      title: "Un solo lugar, separado por carpeta",
      kicker: "Práctica · 1:15",
      component: UnSoloLugarSlide,
      guide: {
        intro: "La página «Cerebro de Daniela» junta notas, proyectos y tareas. Cada cosa lleva la etiqueta de su carpeta y su color: Estudio Lumen, Beca Norte, Café Volcán, Huerta Viva y Carrera.",
        sections: [
          { title: "Cuatro pestañas", body: "Tablero por carpeta · Brief diario · Proyectos · Notas de Granola." },
          { title: "Cada proyecto", body: "Tiene su página con Resultado, Antes de avanzar y Fuente, más sus tareas y sus notas." },
        ],
        takeaway: "Una UI tranquila: se ve por carpeta y se entiende de un vistazo.",
      },
      speakerNotes: {
        script: "Mostrá el tablero por carpeta: franjas por carpeta, columnas por estado. Contá que se descartaron los emojis porque se veían «muy AI» y se usaron íconos de línea con el color de la carpeta.",
        timing: "1:15",
      },
    },
    {
      slug: "el-puente",
      title: "El estado es el botón",
      kicker: "Concepto · 1:30",
      component: EstadoBotonSlide,
      ambientMotion: true,
      guide: {
        intro: "Cada acción pasa por estados: Por validar, Sin iniciar, En proceso, En revisión y Hecha. Moverla a En proceso es pedirle trabajo a Codex, que lee Notion y Granola por MCP, el puente estándar entre herramientas.",
        sections: [
          { title: "Quién hace qué", body: "Codex trabaja en En proceso y entrega en En revisión. Hecha la marca solo Daniela." },
          { title: "Dos salidas", body: "En espera, si está trabada. Descartada, si ya no va." },
        ],
        takeaway: "Mover una tarjeta es delegar.",
      },
      speakerNotes: {
        script: "Explicá por qué Codex y no los agentes de Notion: los Custom Agents necesitan Business y consumen créditos. Notion es la interfaz y la fuente de verdad, Codex hace el trabajo.",
        timing: "1:30",
        cues: ["El disparo es automático: una automatización de Notion manda un webhook que lanza a Codex."],
      },
    },
    {
      slug: "demo",
      title: "Demo: una instrucción, todo en orden",
      kicker: "Demo · 2:00",
      component: DemoSlide,
      ambientMotion: true,
      guide: {
        intro: "Le damos una sola instrucción a Codex. Revisa Notion y Granola, y deja todo en orden: cada acción en el tablero por carpeta y estado, el brief diario, cada proyecto con su siguiente paso y las notas de reunión conectadas a su carpeta.",
        sections: [{ title: "Lo que vas a ver", body: "La instrucción · Codex revisando Notion y Granola · El tablero por carpeta y estado · El brief diario · Los proyectos · Las notas." }],
        takeaway: "Una instrucción y el tablero queda listo para que decidas.",
      },
      speakerNotes: {
        script: "El video (36 s, sin audio, en loop) arranca solo al llegar a la slide. Narralo encima siguiendo los seis pasos de la izquierda; coinciden con los capítulos del video. Si querés, después mostrá el tablero real en vivo.",
        timing: "2:00",
        cues: ["Pausar el movimiento del presentador también pausa el video.", "En el video aparecen los nombres reales de los proyectos; los datos del tablero son de demo."],
      },
    },
    {
      slug: "un-spec-legible",
      title: "Cada mañana, un brief",
      kicker: "Práctica · 1:15",
      component: BriefDiarioSlide,
      ambientMotion: true,
      guide: {
        intro: "Un segundo agente lee lo que se movió en las últimas 24 horas y las reuniones nuevas, y crea «Brief · fecha»: qué se trabajó ayer, qué está en revisión, qué está trabado, qué toca hoy y qué reuniones llegaron.",
        takeaway: "El brief cuenta lo que hicieron los agentes.",
      },
      speakerNotes: {
        script: "Corré el brief diario y abrí «Brief · 24 oct». Leé solo la línea de Trabado y la de Toca hoy.",
        timing: "1:15",
      },
    },
    {
      slug: "manos-humanas",
      title: "Codex entrega. Vos aprobás.",
      kicker: "Cierre · 1:00",
      component: CirculoSlide,
      ambientMotion: true,
      guide: {
        intro: "Granola escucha, Notion muestra, Codex trabaja y vos aprobás. El agente entrega en En revisión y la persona decide qué queda como Hecha.",
        sections: [{ title: "Cómo funciona", body: "Movés la tarjeta a En proceso y un webhook de Notion lanza a Codex · El brief diario se arma solo cada mañana · Cada reunión nueva llega de Granola con su carpeta asignada." }],
        takeaway: "El estado es el botón · Codex entrega · vos aprobás.",
      },
      speakerNotes: {
        script: "Recorré el círculo y contá cómo funciona por detrás: webhook, brief diario y sincronización con Granola.",
        timing: "1:00",
        cues: ["Pasá al regalo."],
      },
    },
    {
      slug: "regalo",
      title: "3 meses de Notion Business, gratis",
      kicker: "Un regalo · 0:30",
      component: RegaloSlide,
      guide: {
        intro: "Estamos regalando 3 meses de Notion Business para que armes tu propio cerebro. Con Business también podés probar los agentes propios de Notion. Escaneá el QR o abrí el enlace desde acá.",
        sections: [{ title: "Reclamalo acá", body: NOTION_GIFT_URL }],
        takeaway: "Empezá con una reunión y un tablero.",
      },
      speakerNotes: {
        script: "Anunciá el regalo y dejá el QR unos segundos. El enlace también está en la guía del teléfono.",
        timing: "0:30",
        cues: ["Si hay preguntas, podés volver a esta slide al final."],
      },
    },
  ],
});
