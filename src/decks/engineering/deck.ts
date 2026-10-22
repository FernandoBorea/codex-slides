import type { Deck } from "../types";
import { meetupCoverSlide } from "../intro/meetupCover";
import {
  EngineeringWelcomeSlide,
  SpeakerSlide,
  OverviewSlide,
  ComputerSlide,
  BotProfileSlide,
  DelegationSlide,
  ContinuitySlide,
  SdlcSlide,
  RolesSlide,
  ResearchSlide,
  GroupSlide,
  TaskSlide,
  ConnectionsSlide,
  EnvironmentSlide,
  ReviewSlide,
  FollowupSlide,
  FeedbackSlide,
  PstackSlide,
  StartSlide,
  QuestionsSlide,
} from "./EngineeringSlides";

export const engineeringDeck: Deck = {
  slug: "grok-bot-for-engineering",
  title: "Grok Bot for Engineering",
  description:
    "Qué es Grok Bot, cómo se trabaja con él y cómo coordinar PO, Research, Builder y QE durante el ciclo de desarrollo de tu producto.",
  category: "Engineering",
  duration: "25 min + 5 de preguntas",
  accent: "#ff6b00",
  firstSlideNumber: 0,
  slides: [
    meetupCoverSlide,
    {
      slug: "bienvenida",
      title: "Grok Bot for Engineering",
      kicker: "Bienvenida · 0:30",
      component: EngineeringWelcomeSlide,
      guide: {
        intro:
          "Un producto cambia todos los días: aparecen ideas, preguntas, trabajo pendiente y problemas. Vamos a ver cómo usar Grok Bot como el lugar desde donde conversás y coordinás ese trabajo con un equipo de bots.",
        sections: [
          {
            title: "Qué vamos a recorrer",
            body: "Primero, qué es un bot, dónde trabaja, qué recuerda y cómo le damos un encargo. Después, cómo PO, Research, Builder y QE colaboran desde una necesidad hasta la entrega y el aprendizaje del producto.",
          },
          {
            title: "Cómo seguir la charla",
            body: "Los ejemplos son conversaciones y entregas recreadas; no hay demo en vivo. Podés usar esta guía desde el teléfono y responder las preguntas cuando se habiliten.",
          },
        ],
        takeaway:
          "Al terminar, podés reconocer qué delegar, qué contexto compartir y qué pedir para revisar el resultado.",
      },
      speakerNotes: {
        script:
          "Hoy vamos a entender qué es Grok Bot y cómo se trabaja con él. Después vamos a llevarlo al ciclo de un producto, con bots que investigan, organizan, construyen y verifican. Los ejemplos están preparados para detenernos en las decisiones sin depender de una demo en vivo.",
        timing: "0:30 · acumulado 0:30 / 25:00",
        cues: [
          "Mostrar el QR mientras entra el público; ocultarlo antes de empezar el recorrido.",
          "Presentar el destino de la charla; todavía no explicar cada rol.",
        ],
        interaction:
          "Abrí la encuesta de experiencia previa mientras presentás el recorrido. No hace falta esperar todas las respuestas.",
        transition:
          "Les cuento brevemente desde qué experiencia les comparto este flujo.",
      },
      question: {
        id: "used-grok-bot",
        prompt: "¿Desde dónde arrancás con Grok Bot?",
        type: "poll",
        options: [
          { id: "not-yet", label: "No lo probé" },
          { id: "explored", label: "Lo exploré" },
          { id: "one-bot", label: "Trabajo con un bot" },
          { id: "team", label: "Coordino varios" },
        ],
      },
    },
    {
      slug: "walter-morales",
      title: "Walter Morales",
      kicker: "Sobre mí · 0:30",
      component: SpeakerSlide,
      guide: {
        intro:
          "Soy Walter Morales: Ai Labs Co-Founder, SpaceXAI Ambassadors Regional Lead y AI Product Engineer.",
        sections: [
          {
            title: "La experiencia que comparto",
            body: "La charla toma mi forma de trabajar con agentes y la convierte en un recorrido que podés adaptar a tu producto, tu equipo y las herramientas que ya usás.",
          },
        ],
        takeaway:
          "El objetivo es entender una forma de trabajo y llevarla a tu propio contexto.",
      },
      speakerNotes: {
        script:
          "Soy Walter Morales, cofundador de Ai Labs, Regional Lead de SpaceXAI Ambassadors y AI Product Engineer. Trabajo construyendo productos con estas herramientas. Lo que quiero compartir hoy es cómo organizo a los bots para que el trabajo tenga contexto, responsables y una forma de comprobar el resultado.",
        timing: "0:30 · acumulado 1:00 / 25:00",
        cues: ["Mantener la presentación personal breve y pasar al producto."],
        interaction:
          "Pregunta opcional para conocer los roles de la sala. Puede responderse mientras hablás.",
        transition:
          "Arranquemos desde cero: ¿qué es Grok Bot y qué podemos encargarle?",
      },
      question: {
        id: "audience-role",
        prompt: "¿Desde qué rol venís hoy?",
        type: "poll",
        options: [
          { id: "product", label: "Producto" },
          { id: "development", label: "Desarrollo" },
          { id: "quality", label: "Calidad" },
          { id: "other", label: "Otra área" },
        ],
      },
    },
    {
      slug: "que-es-grok-bot",
      title: "¿Qué es Grok Bot?",
      kicker: "Agentes con los que trabajás · 1:30",
      component: OverviewSlide,
      guide: {
        intro:
          "Grok Bot es una aplicación para trabajar con agentes de IA persistentes. Les asignás una responsabilidad, conversás con ellos y les encargás trabajo que puede requerir varias herramientas y pasos.",
        sections: [
          {
            title: "De un pedido a un resultado",
            body: "Un bot puede investigar, usar apps, escribir y ejecutar código, preparar documentos o coordinar tareas. Por ejemplo: revisar pendientes y traerte una propuesta de prioridades con sus fuentes. Lo que puede completar depende de los accesos, el entorno y el encargo.",
          },
          {
            title: "Una conversación que continúa",
            body: "Podés escribir, dictar o hablar por voz. En el chat ves avances, entregas y preguntas; también podés corregir el rumbo. El mismo bot puede acompañar ese trabajo a lo largo del tiempo.",
          },
        ],
        takeaway:
          "Le encargás un resultado y seguís el trabajo desde la conversación.",
      },
      speakerNotes: {
        script:
          "Primero entendamos el producto. Grok Bot es una aplicación donde trabajás con agentes de IA que conservás en el tiempo. Les hablás por chat o por voz, les das una responsabilidad y les encargás un resultado. Para llegar a él pueden investigar, entrar a tus herramientas, trabajar con código o pedir ayuda a otro bot. Imaginemos que le pedimos revisar nuestros pendientes: esperamos una propuesta con motivos y fuentes. En la conversación vemos el avance, corregimos el rumbo y resolvemos las decisiones que nos devuelve. Ahora veamos qué le permite hacer ese trabajo.",
        timing: "1:30 · acumulado 2:30 / 25:00",
        cues: [
          "Definir agente como un sistema que puede usar herramientas y ejecutar pasos hacia un resultado.",
          "Explicar el pedido, las acciones y la entrega del diagrama; evitar prometer que cualquier tarea se resuelve sola.",
        ],
        interaction:
          "Abrí la pregunta del primer encargo mientras explicás. Recuperá una respuesta en los ejemplos de Engineering.",
        transition:
          "El bot tiene un lugar donde abrir las herramientas y hacer el trabajo.",
      },
      question: {
        id: "first-assignment",
        prompt: "¿Qué trabajo te gustaría encargarle primero?",
        type: "poll",
        options: [
          { id: "research", label: "Investigar" },
          { id: "priorities", label: "Organizar prioridades" },
          { id: "build", label: "Implementar" },
          { id: "verify", label: "Verificar" },
        ],
      },
    },
    {
      slug: "computadora-en-la-nube",
      title: "Una computadora en la nube",
      kicker: "Dónde ocurre el trabajo · 1:30",
      component: ComputerSlide,
      guide: {
        intro:
          "El trabajo corre en una computadora persistente en la nube, con navegador, archivos y terminal. Puede continuar cuando cerrás la laptop; podés revisar el avance desde el escritorio o el teléfono.",
        sections: [
          {
            title: "Dos formas de usar tus herramientas",
            body: "Los conectores permiten operar servicios compatibles. El navegador sirve para sitios y recorridos visuales que el conector no cubre. Un acceso vencido o una verificación del sitio puede requerir tu intervención.",
          },
          {
            title: "Qué comparten tus bots",
            body: "La computadora pertenece a tu cuenta: tus bots comparten archivos, sesiones del navegador y accesos. Cada bot tiene su pantalla de trabajo. Separar roles no separa esos permisos, y esa computadora es distinta de tu laptop.",
          },
        ],
        takeaway:
          "La nube mantiene el trabajo en marcha; vos habilitás los accesos que necesita.",
      },
      speakerNotes: {
        script:
          "Cuando digo que usa una app, hay una computadora donde eso pasa. Grok Bot tiene un entorno persistente en la nube, con navegador, archivos y terminal. Puede consultar una herramienta mediante un conector o recorrer una web. Podemos observar ese trabajo y, cuando hace falta, intervenir para un acceso. Cerrar la laptop no apaga ese entorno. Un detalle clave para el equipo: nuestros bots comparten la computadora y sus sesiones, aunque cada uno tenga su pantalla. Darles nombres y responsabilidades distintas no crea cuentas aisladas dentro de las herramientas.",
        timing: "1:30 · acumulado 4:00 / 25:00",
        cues: [
          "Distinguir la computadora cloud de Grok Bot del entorno de Cloud Agents que aparecerá más adelante.",
          "Mencionar Connect Apps para las conexiones; no convertir este bloque en instalación o autenticación en vivo.",
        ],
        interaction:
          "Encuesta opcional sobre dónde serviría que el bot actúe. Puede responderse mientras explicás.",
        transition:
          "Si todos pueden usar esas herramientas, ¿qué hace distinto a cada bot?",
      },
      question: {
        id: "computer-work",
        prompt: "¿Dónde te serviría más que un bot haga el trabajo?",
        type: "poll",
        options: [
          { id: "docs", label: "Documentación" },
          { id: "tasks", label: "Gestión de tareas" },
          { id: "app", label: "Recorridos en la app" },
          { id: "code", label: "Código y pruebas" },
        ],
      },
    },
    {
      slug: "rol-y-memoria-del-bot",
      title: "Un bot conserva su rol y su contexto",
      kicker: "Responsabilidad e instrucciones · 1:30",
      component: BotProfileSlide,
      guide: {
        intro:
          "Al crear un bot definís su nombre, su responsabilidad y cómo debería trabajar. La descripción reúne instrucciones duraderas; el mensaje plantea la tarea de hoy.",
        sections: [
          {
            title: "Un ejemplo de Product Owner",
            body: "Podés darle a PO el trabajo de ordenar prioridades, señalar las fuentes del producto y pedirle que consulte antes de cambiar el alcance. Son decisiones de nuestra forma de organizar el equipo; Grok Bot no impone esos cuatro roles.",
          },
          {
            title: "Memoria y fuentes actuales",
            body: "Cada bot puede conservar preferencias y resúmenes de su trabajo. Sus conversaciones y contexto aprendido son propios; el equipo se pasa contexto por mensajes, grupos y archivos. El estado actual de un ticket se vuelve a consultar en Linear.",
          },
        ],
        takeaway:
          "El rol se mantiene; cada nuevo pedido se apoya en él y en fuentes vigentes.",
      },
      speakerNotes: {
        script:
          "Crear un bot empieza por darle un trabajo. En New elegimos Create new Bot y definimos su perfil. Acá usamos PO: le pedimos ordenar prioridades, le indicamos dónde está el contexto y qué decisiones debe consultar. Esa descripción vale para próximos encargos. El mensaje de hoy puede ser mucho más concreto. El bot conserva preferencias y resúmenes, pero su memoria puede quedar atrás: si necesitamos saber cómo está un ticket, tiene que volver a Linear. Y los otros bots conocen el trabajo cuando les compartimos contexto, no por leer automáticamente toda su conversación.",
        timing: "1:30 · acumulado 5:30 / 25:00",
        cues: [
          "Leer la ficha de PO como ejemplo de configuración, sin hacer una demo.",
          "Distinguir memoria individual, archivos compartidos y fuente actual del estado del producto.",
        ],
        interaction:
          "Pregunta opcional sobre qué debería recordar el bot del equipo.",
        transition:
          "Ya tiene una responsabilidad. Ahora le damos un encargo que podamos revisar.",
      },
      question: {
        id: "bot-memory",
        prompt: "¿Qué tendría que recordar un bot de tu equipo?",
        type: "poll",
        options: [
          { id: "quality", label: "Criterios de calidad" },
          { id: "communication", label: "Forma de comunicar" },
          { id: "boundaries", label: "Límites de decisión" },
          { id: "sources", label: "Fuentes de referencia" },
        ],
      },
    },
    {
      slug: "un-primer-encargo",
      title: "Un encargo claro, una entrega revisable",
      kicker: "Cómo trabajar con un bot · 1:30",
      component: DelegationSlide,
      guide: {
        intro:
          "Un encargo útil explica qué querés lograr, dónde buscar, qué debe volver y en qué punto necesitás decidir. La conversación de la slide es un ejemplo preparado.",
        sections: [
          {
            title: "El pedido",
            body: "Le pedimos a PO revisar los pendientes de Linear y proponer tres prioridades para esta semana, con sus motivos y bloqueos. El límite es conservar los tickets como están hasta revisar la propuesta.",
          },
          {
            title: "La revisión",
            body: "Mirás las fuentes, cuestionás una prioridad y corregís lo que faltó. Para acciones como enviar o publicar podés establecer puntos de aprobación. Auto Review evalúa acciones; también importan los permisos de las herramientas y los límites del pedido.",
          },
        ],
        takeaway:
          "Objetivo, fuentes, entrega y punto de revisión hacen evaluable el trabajo.",
      },
      speakerNotes: {
        script:
          "Probemos leer un encargo completo. Revisá los pendientes de Linear y proponé tres prioridades para esta semana, con motivos y bloqueos. Todavía no cambies los tickets. Sabemos para qué trabaja, dónde mirar, qué esperamos recibir y dónde tiene que parar. Después reviso la propuesta: puedo pedir una fuente o cambiar una prioridad. Cuando queremos que actúe, aclaramos ese alcance. Las aprobaciones y los permisos de las herramientas acompañan esa decisión; el nombre del rol no es un control de acceso. Esta misma forma de pedir sirve para una investigación o una verificación.",
        timing: "1:30 · acumulado 7:00 / 25:00",
        cues: [
          "Recorrer el ejemplo de la slide señalando objetivo, fuentes, entrega y límite.",
          "No presentar la respuesta recreada como trabajo ya realizado por un bot real.",
        ],
        interaction:
          "Pausa de 20 segundos: preguntar qué suele faltar en un pedido y conectarlo con una frase del ejemplo.",
        transition:
          "Si este trabajo nos sirve cada semana, podemos acordar cómo y cuándo repetirlo.",
      },
      question: {
        id: "clear-handoff",
        prompt: "¿Qué suele faltar en un pedido de trabajo?",
        type: "poll",
        options: [
          { id: "goal", label: "El objetivo" },
          { id: "sources", label: "Las fuentes" },
          { id: "limits", label: "Los límites" },
          { id: "output", label: "La entrega esperada" },
        ],
      },
    },
    {
      slug: "mensajes-rutinas-y-equipo",
      title: "Un mensaje, una rutina u otro bot",
      kicker: "Cómo continúa el trabajo · 1:30",
      component: ContinuitySlide,
      guide: {
        intro:
          "El trabajo puede empezar por un mensaje tuyo, por una rutina o por el pedido de otro bot. Un grupo hace visibles los intercambios cuando varios comparten un resultado.",
        sections: [
          {
            title: "Cómo y cuándo",
            body: "Una skill guarda un método reutilizable. Una rutina define cuándo ejecutarlo: por ejemplo, un resumen de pendientes a las nueve cada día hábil. Primero probás y corregís el método; después acordás horario, zona horaria, fuentes y qué hacer si falta información.",
          },
          {
            title: "Colaborar y pedir ayuda",
            body: "Un bot puede escribirle a otro y recibir su respuesta después. En un grupo podés mencionar a quien tiene el siguiente paso. Si el trabajo necesita acceso o una decisión tuya, vuelve a la conversación para pedir intervención.",
          },
        ],
        takeaway:
          "La continuidad necesita un responsable, un método y un momento para volver a revisar.",
      },
      speakerNotes: {
        script:
          "Hay tres entradas al trabajo: le escribís vos, se cumple el horario de una rutina o le llega un pedido de otro bot. Una skill conserva cómo hacemos una tarea; una rutina dice cuándo repetirla. Por ejemplo, traer cada mañana los pendientes y bloqueos. Primero probamos el método y después lo programamos. También podemos juntar varios bots en un grupo y ver cómo se pasan el trabajo. Eso nos lleva a la propuesta de hoy: mantener la conversación del producto en Grok Bot y sumar especialistas con responsabilidades claras cuando el trabajo lo necesite.",
        timing: "1:30 · acumulado 8:30 / 25:00",
        cues: [
          "Distinguir un método reutilizable de su horario de ejecución.",
          "Aclarar que los disparadores de otras apps dependen de conexiones compatibles; no mostrar una configuración que no verificamos.",
        ],
        interaction:
          "Pregunta opcional sobre una tarea repetida. No esperar todas las respuestas.",
        transition:
          "Ya sabemos qué es Grok Bot. Usemos esas capacidades para acompañar un producto completo.",
      },
      question: {
        id: "recurring-work",
        prompt: "¿Qué trabajo repetido le encargarías?",
        type: "poll",
        options: [
          { id: "followup", label: "Seguimiento de pendientes" },
          { id: "verification", label: "Verificación de un flujo" },
          { id: "summary", label: "Resumen de cambios" },
          { id: "research", label: "Investigación periódica" },
        ],
      },
    },
    {
      slug: "grok-bot-en-el-sdlc",
      title: "El contexto acompaña todo el ciclo",
      kicker: "El producto completo · 1:00",
      component: SdlcSlide,
      guide: {
        intro:
          "SDLC es el ciclo de vida del desarrollo de software. Incluye entender una necesidad, definir el trabajo, construir, comprobar, entregar y aprender de lo que pasa después.",
        sections: [
          {
            title: "Contexto que el equipo comparte",
            body: "Para quién construimos, qué objetivo tiene prioridad, qué decisiones tomamos y en qué estado está el trabajo. Compartirlo ayuda a que cada bot entienda cómo su tarea aporta al producto.",
          },
          {
            title: "Un recorrido con vueltas",
            body: "Una prueba puede abrir una pregunta de producto; una limitación técnica puede cambiar el alcance. Los roles colaboran y vuelven sobre decisiones anteriores cuando aparece información nueva.",
          },
        ],
        takeaway:
          "Grok Bot permite orientar y seguir el trabajo mientras el producto cambia.",
      },
      speakerNotes: {
        script:
          "Este es el ciclo de desarrollo de software. Vamos a recorrerlo para ubicarnos, pero en el trabajo real volvemos muchas veces sobre lo anterior. Una prueba nos muestra algo que no habíamos definido; una investigación cambia la prioridad. Lo que quiero conservar en Grok Bot es el contexto: para quién estamos construyendo, cuál es el objetivo y qué ya decidimos. Ese contexto ayuda a que cada encargo tenga sentido y a retomar cuando el producto sigue avanzando.",
        timing: "1:00 · acumulado 9:30 / 25:00",
        cues: [
          "Definir SDLC una sola vez y después hablar del ciclo de desarrollo.",
          "Señalar el retorno del diagrama: QE y Research también intervienen antes y después de construir.",
        ],
        interaction:
          "Pregunta opcional mientras ubicás el ciclo. Las pausas principales están en el primer encargo, el alcance, el incidente y el cierre.",
        transition:
          "Con ese contexto compartido, podemos repartir responsabilidades.",
      },
      question: {
        id: "lost-context",
        prompt: "¿Dónde se pierde más contexto en tu equipo?",
        type: "poll",
        options: [
          { id: "priorities", label: "Prioridades" },
          { id: "definition", label: "Definición de tareas" },
          { id: "handoffs", label: "Traspasos" },
          { id: "review", label: "Revisión" },
        ],
      },
    },
    {
      slug: "crear-el-equipo",
      title: "Cuatro responsabilidades compartiendo contexto",
      kicker: "PO, Research, Builder y QE · 1:30",
      component: RolesSlide,
      guide: {
        intro:
          "El equipo de este flujo tiene cuatro bots. Sus responsabilidades se complementan: Product Owner —PO—, Research, Builder y Quality Engineer —QE—.",
        sections: [
          {
            title: "Qué aporta cada uno",
            body: "PO acuerda prioridades y alcance con vos y mantiene el seguimiento. Research investiga preguntas y trae fuentes. Builder implementa y entrega cambios revisables. QE anticipa riesgos, ayuda a definir criterios y comprueba el resultado.",
          },
          {
            title: "Cómo definirlos",
            body: "Definí el producto, la responsabilidad de cada bot, qué contexto necesita y cuándo tiene que consultarte o mencionar a otro bot. Podés empezar con una sola responsabilidad y ampliar después.",
          },
        ],
        takeaway:
          "Cada bot sabe qué aportar, con quién colaborar y qué decisiones necesitan tu criterio.",
      },
      speakerNotes: {
        script:
          "Estos son los cuatro roles que uso para explicar el flujo. PO es Product Owner: me ayuda a ordenar prioridades y alcance. Research investiga lo que necesitamos saber. Builder es quien se hace cargo de implementar. QE es Quality Engineer: participa desde la definición y después comprueba el producto. Para cada uno definimos responsabilidades, contexto y límites. Fíjense que no están aislados: QE puede señalar un caso antes de escribir código, y Builder puede pedir otra investigación si encuentra una duda.",
        timing: "1:30 · acumulado 11:00 / 25:00",
        cues: [
          "Mantener los mismos nombres y avatares durante los ejemplos.",
          "Dar un ejemplo de límite: Builder entrega un PR; la decisión de merge pasa por vos.",
        ],
        interaction:
          "Encuesta opcional mientras explicás los roles. No convertir cada respuesta en una nueva discusión.",
        transition: "Veamos cómo se encuentran cuando llega una idea nueva.",
      },
      question: {
        id: "role-support",
        prompt: "¿Qué responsabilidad necesita más apoyo hoy?",
        type: "poll",
        options: [
          { id: "understand", label: "Entender el problema" },
          { id: "focus", label: "Mantener el foco" },
          { id: "build", label: "Construir" },
          { id: "quality", label: "Comprobar calidad" },
        ],
      },
    },
    {
      slug: "research-antes-de-construir",
      title: "Una idea todavía deja preguntas abiertas",
      kicker: "Research y descubrimiento · 1:30",
      component: ResearchSlide,
      guide: {
        intro:
          "Una idea como invitar compañeros a un producto todavía deja decisiones abiertas. Research puede ayudarnos a separar lo que sabemos de lo que necesitamos averiguar.",
        sections: [
          {
            title: "Pedir una investigación útil",
            body: "PO encarga una pregunta concreta: comparar formas de invitar personas y señalar qué decisiones quedan pendientes. Research aporta referencias, alternativas y sus diferencias. La comparación ayuda a decidir el alcance.",
          },
          {
            title: "Leer los límites de la respuesta",
            body: "Las referencias de otros productos no demuestran qué necesitan nuestros usuarios. El equipo distingue lo observado, lo inferido y lo que todavía hace falta validar. La conversación de la slide es una recreación ilustrativa.",
          },
        ],
        takeaway:
          "Una investigación útil deja al equipo mejor preparado para decidir qué construir.",
      },
      speakerNotes: {
        script:
          "Llega una idea: queremos que los usuarios inviten a su equipo. Todavía no sabemos quién puede invitar, qué permisos tendrá la otra persona o qué primera versión nos conviene. En el grupo, PO le pide a Research una comparación concreta. La entrega debería traer opciones, fuentes y preguntas abiertas. Acá uso una conversación recreada para mostrar el intercambio. Si Research recomienda email, quiero entender por qué y qué información le falta. Las referencias ayudan, y todavía necesitamos nuestro criterio sobre el producto.",
        timing: "1:30 · acumulado 12:30 / 25:00",
        cues: [
          "Contar qué decisión necesita la investigación antes de leer la devolución.",
          "Mencionar que una incertidumbre técnica puede llevar a Builder a participar en esta misma conversación.",
        ],
        interaction:
          "Podés abrir la pregunta mientras explicás la investigación; las opciones no tienen una respuesta correcta universal.",
        transition:
          "Con lo que aprendimos, el equipo puede discutir una primera versión.",
      },
      question: {
        id: "research-uncertainty",
        prompt: "Antes de construir, ¿qué incertidumbre despejarías?",
        type: "poll",
        options: [
          { id: "need", label: "Necesidad del usuario" },
          { id: "alternatives", label: "Alternativas" },
          { id: "feasibility", label: "Viabilidad técnica" },
          { id: "impact", label: "Impacto" },
        ],
      },
    },
    {
      slug: "coordinar-en-grupo",
      title: "El alcance se conversa con el equipo",
      kicker: "Decisión y colaboración · 1:30",
      component: GroupSlide,
      guide: {
        intro:
          "La conversación en grupo permite que cada rol aporte antes de empezar. PO propone el alcance, Builder identifica decisiones técnicas y QE anticipa casos que deben quedar claros.",
        sections: [
          {
            title: "Una primera versión concreta",
            body: "En el ejemplo, un administrador invita por email y la persona puede aceptar para entrar al equipo. El grupo discute cuentas existentes e invitaciones vencidas; los enlaces públicos quedan fuera de esta versión.",
          },
          {
            title: "Cerrar una decisión, conservar sus motivos",
            body: "Vos acordás el alcance y PO registra la decisión en Linear. Las menciones indican quién tiene que responder. Si aparece información nueva, el equipo puede retomar el acuerdo con su contexto.",
          },
        ],
        takeaway:
          "Colaborar temprano permite resolver dudas antes de convertirlas en cambios incompletos.",
      },
      speakerNotes: {
        script:
          "Ahora PO propone algo que podamos completar. Builder pregunta por las personas que ya tienen cuenta y QE por las invitaciones vencidas. Esas dos preguntas cambian lo que necesitamos construir y comprobar. Me interesa mostrar que QE ya está trabajando acá: está ayudando a definir la calidad del resultado. Yo acuerdo el alcance con el equipo y PO deja la decisión en Linear. Tenemos un lugar para conversar y otro registro donde podemos recuperar qué acordamos y por qué.",
        timing: "1:30 · acumulado 14:00 / 25:00",
        cues: [
          "Leer la conversación por intención; no hace falta leer cada mensaje literalmente.",
          "Señalar la intervención de QE antes de la implementación.",
        ],
        interaction:
          "Pausa sugerida de 20–30 segundos: abrir la pregunta sobre la primera versión y relacionar el resultado con las incertidumbres del producto.",
        transition:
          "Ese acuerdo tiene que llegar al trabajo de una forma que se pueda revisar.",
      },
      question: {
        id: "first-version-priority",
        prompt: "Para una primera versión, ¿qué priorizás?",
        type: "poll",
        options: [
          { id: "complete-flow", label: "Un flujo pequeño completo" },
          { id: "technical-risk", label: "Resolver un riesgo técnico" },
          { id: "validate-need", label: "Validar la necesidad" },
          { id: "integration", label: "Integración" },
        ],
      },
    },
    {
      slug: "una-tarea-bien-definida",
      title: "Un ticket conserva lo que acordamos",
      kicker: "Del acuerdo al trabajo · 1:15",
      component: TaskSlide,
      guide: {
        intro:
          "PO convierte el acuerdo en una tarea que conserva el propósito, el alcance y la manera de comprobar el resultado. Builder y QE pueden volver a ella durante el trabajo.",
        sections: [
          {
            title: "Lo necesario para empezar",
            body: "El ticket explica para quién es el cambio, qué incluye y qué queda fuera. Los criterios describen un resultado observable: aceptar la invitación y entrar al equipo correcto, también con una cuenta existente.",
          },
          {
            title: "Lo que sigue abierto",
            body: "Si faltan accesos, una decisión o una dependencia, hay que hacerlos visibles. El ticket ilustrativo de la slide sirve como una entrega compartida que se puede discutir y actualizar.",
          },
        ],
        takeaway:
          "Una tarea bien definida permite construir, revisar y verificar con el mismo acuerdo.",
      },
      speakerNotes: {
        script:
          "Este ticket es una entrega del PO. Quiero poder leer para qué hacemos el cambio, qué vamos a incluir y qué dejamos afuera. Y quiero criterios que podamos observar: una persona acepta y entra al equipo correcto. Eso sirve tanto para Builder como para QE. Si todavía falta una decisión, conviene verla en este momento. El ticket no tiene que copiar toda la conversación, pero sí conservar el acuerdo y el contexto para trabajar.",
        timing: "1:15 · acumulado 15:15 / 25:00",
        cues: [
          "Recorrer las cuatro filas del ticket, concentrándose en alcance y criterios.",
          "Aclarar que es un ejemplo de entrega, no un ticket real ni una configuración verificada de Linear.",
        ],
        interaction:
          "Encuesta opcional sobre lo que suele faltar en una tarea. Comentar un solo patrón si aporta al ejemplo.",
        transition:
          "Para trabajar con ese ticket y el repositorio, el equipo necesita conexiones y herramientas.",
      },
      question: {
        id: "task-missing-context",
        prompt: "¿Qué suele faltar cuando recibís una tarea?",
        type: "poll",
        options: [
          { id: "purpose", label: "El propósito" },
          { id: "limits", label: "Los límites" },
          { id: "verification", label: "Criterios de verificación" },
          { id: "dependencies", label: "Dependencias" },
        ],
      },
    },
    {
      slug: "plugins-skills-y-mcp",
      title: "Cada pieza tiene un lugar",
      kicker: "Herramientas y conexiones · 1:15",
      component: ConnectionsSlide,
      guide: {
        intro:
          "En este flujo, Grok Bot coordina la conversación, Linear conserva tareas y decisiones, Cursor Cloud Agents ejecuta el trabajo y GitHub permite revisar los cambios.",
        sections: [
          {
            title: "Cuatro términos útiles",
            body: "Un plugin agrega capacidades y puede incluir varias piezas. Una skill contiene instrucciones para hacer una tarea. Una tool realiza una operación. MCP, Model Context Protocol, es un protocolo para conectar herramientas y datos con una aplicación de IA. No todas las integraciones usan MCP.",
          },
          {
            title: "Probar una capacidad",
            body: "Abrí Connect Apps, elegí la app y autorizá la cuenta si lo solicita. Después probá una tarea concreta desde el chat. La configuración depende de la conexión; el método de trabajo y el acceso al servicio son piezas distintas.",
          },
        ],
        takeaway:
          "Las instrucciones explican cómo trabajar y las herramientas permiten realizar las operaciones.",
      },
      speakerNotes: {
        script:
          "Acá ubicamos cada pieza. La conversación está en Grok Bot; las tareas en Linear; la ejecución en Cloud Agents; los cambios revisables en GitHub. Para conectar capacidades aparecen cuatro palabras. Plugin es el paquete, skill es el procedimiento, tool es la operación y MCP es un protocolo de conexión. Por ejemplo, una skill puede explicar cómo revisar una tarea y una tool consultar el ticket. Instalamos la capacidad, conectamos una cuenta si hace falta y probamos una operación concreta para saber que está disponible.",
        timing: "1:15 · acumulado 16:30 / 25:00",
        cues: [
          "Explicar cada término con una sola frase y volver al flujo.",
          "La ruta de instalación es la de Grok Bot. No extrapolar comandos de Cursor ni prometer una ruta para MCP personalizados.",
        ],
        interaction:
          "Pregunta opcional sobre qué conectar primero; mantenerla abierta durante la explicación si el ritmo lo permite.",
        transition:
          "Tener una conexión al repositorio es una parte; ahora veamos dónde se ejecuta el trabajo.",
      },
      question: {
        id: "first-connection",
        prompt: "¿Qué conectarías primero?",
        type: "poll",
        options: [
          { id: "docs", label: "Documentación" },
          { id: "tasks", label: "Tareas" },
          { id: "repository", label: "Repositorio" },
          { id: "monitoring", label: "Monitoreo" },
        ],
      },
    },
    {
      slug: "entorno-cloud-agents",
      title: "Builder necesita un lugar donde ejecutar",
      kicker: "Construcción y entorno · 1:30",
      component: EnvironmentSlide,
      guide: {
        intro:
          "Builder se hace cargo de la implementación. En el flujo de Walter, la codificación y las verificaciones se ejecutan mediante Cursor Cloud Agents en un entorno preparado para el proyecto.",
        sections: [
          {
            title: "El entorno de ejecución",
            body: "Incluye el repositorio, las dependencias y las variables necesarias para levantar la app. El agente puede implementar y ejecutar las comprobaciones. QE también usa este entorno para sus verificaciones.",
          },
          {
            title: "Coordinar el trabajo",
            body: "Builder da seguimiento, resuelve dudas con el equipo y entrega un PR en GitHub con lo que cambió, qué se comprobó y qué sigue pendiente. Si falta una decisión de producto, vuelve a PO y a vos.",
          },
        ],
        takeaway:
          "Un entorno preparado permite pasar del encargo al trabajo que podemos ejecutar y revisar.",
      },
      speakerNotes: {
        script:
          "Builder es el bot responsable de implementar, y en mi flujo coordina el trabajo en Cursor Cloud Agents. El agente necesita un entorno con repositorio, dependencias y variables para levantar la app. Así puede cambiar el código y comprobar lo que hizo. Si descubre que falta definir un permiso, Builder vuelve al equipo. La entrega es un PR con los cambios y evidencia, además de los límites de lo que pudo probar. QE también usa Cloud Agents para recorrer el producto.",
        timing: "1:30 · acumulado 18:00 / 25:00",
        cues: [
          "Distinguir el bot que coordina del agente y entorno que ejecutan.",
          "Usar un bloqueo concreto: una dependencia faltante o una decisión sobre permisos.",
        ],
        interaction:
          "Pregunta opcional sobre bloqueos frecuentes; usarla para conectar preparación y seguimiento.",
        transition:
          "Cuando vuelve el trabajo, necesitamos decidir si está listo para entregar.",
      },
      question: {
        id: "implementation-blocker",
        prompt: "¿Qué suele frenar una implementación?",
        type: "poll",
        options: [
          { id: "environment", label: "Entorno o accesos" },
          { id: "decisions", label: "Decisiones pendientes" },
          { id: "dependencies", label: "Dependencias" },
          { id: "codebase", label: "Código poco conocido" },
        ],
      },
    },
    {
      slug: "revision-y-entrega",
      title: "¿Tenemos lo necesario para publicar?",
      kicker: "Revisión y entrega · 1:30",
      component: ReviewSlide,
      guide: {
        intro:
          "Un PR es una propuesta de cambios en GitHub. Builder entrega el cambio junto con el contexto para revisarlo: comportamiento, comprobaciones y limitaciones.",
        sections: [
          {
            title: "Una revisión que permita decidir",
            body: "El ejemplo resume las invitaciones y las comprobaciones previstas. También muestra una limitación: falta revisar la entrega real del correo en el entorno publicado. Declarar ese límite permite preparar la siguiente verificación.",
          },
          {
            title: "Después del merge",
            body: "Vos revisás y decidís el merge. CI/CD son las comprobaciones y pasos automatizados de integración y despliegue. QE vuelve a comprobar el flujo en el entorno acordado; las pruebas automáticas y la revisión del producto aportan evidencias distintas.",
          },
        ],
        takeaway:
          "La entrega debe explicar tanto el resultado como lo que todavía necesita comprobarse.",
      },
      speakerNotes: {
        script:
          "Este resumen de PR está recreado para mostrar qué quiero recibir. Me cuenta qué cambió, qué se comprobó y qué quedó fuera. Esa última fila importa: si todavía falta probar el correo en el entorno publicado, necesitamos saberlo. Yo reviso el cambio, considero el riesgo y decido el merge. Después, el proceso de integración y despliegue lleva el cambio al entorno acordado. QE vuelve a recorrer el producto ahí. La revisión humana sigue siendo parte de cómo decidimos entregar.",
        timing: "1:30 · acumulado 19:30 / 25:00",
        cues: [
          "No presentar la lista de comprobaciones del ejemplo como pruebas realmente ejecutadas.",
          "Explicar PR y CI/CD en lenguaje cotidiano; no detenerse en proveedores de infraestructura.",
        ],
        interaction:
          "Podés abrir la pregunta sobre la revisión. No hay una respuesta única; depende del cambio y sus consecuencias.",
        transition:
          "Mientras ese cambio avanza, el producto tiene más cosas pasando. También podemos pedir seguimiento desde Grok Bot.",
      },
      question: {
        id: "review-focus",
        prompt: "¿Qué revisarías con más cuidado?",
        type: "poll",
        options: [
          { id: "experience", label: "Experiencia de uso" },
          { id: "permissions", label: "Permisos y datos" },
          { id: "regressions", label: "Regresiones" },
          { id: "rollback", label: "Cómo revertir" },
        ],
      },
    },
    {
      slug: "seguimiento-del-producto",
      title: "¿Cómo vamos con la próxima entrega?",
      kicker: "Seguimiento del equipo · 1:15",
      component: FollowupSlide,
      guide: {
        intro:
          "Grok Bot también es un lugar para retomar el estado del producto. PO reúne el avance, los bloqueos y las decisiones pendientes, con aportes de Builder y QE.",
        sections: [
          {
            title: "Distintas tareas, un contexto compartido",
            body: "La conversación recreada muestra invitaciones en revisión, una decisión de permisos pendiente y un problema de búsqueda. La información permite decidir qué sigue y cambiar prioridades con el equipo.",
          },
          {
            title: "Seguimiento que se puede retomar",
            body: "Las menciones dejan responsables claros. Las rutinas, similares a una daily, ayudan a revisar pendientes. Las decisiones y el historial se conservan en Linear; un seguimiento particular puede continuar en un 1:1.",
          },
        ],
        takeaway:
          "Un buen estado del trabajo te ayuda a tomar la siguiente decisión.",
      },
      speakerNotes: {
        script:
          "En un producto hay varias tareas abiertas al mismo tiempo. Puedo volver al grupo y preguntar cómo vamos. PO reúne el estado, Builder explica qué entregó y QE cuenta qué está verificando. En este ejemplo, las invitaciones están en revisión y tenemos un problema de búsqueda. Con esa información decido una prioridad y el equipo puede seguir. Las rutinas ayudan a retomar, y el historial en Linear conserva lo que cambió. Esa es otra razón para usar Grok Bot como punto de entrada del producto.",
        timing: "1:15 · acumulado 20:45 / 25:00",
        cues: [
          "Leer primero la pregunta humana y luego resumir las respuestas por lo que permiten decidir.",
          "Mostrar que el sistema acompaña más de una funcionalidad.",
        ],
        interaction:
          "Encuesta opcional sobre la información que más necesita la audiencia en un seguimiento.",
        transition:
          "A veces el siguiente mensaje llega de alguien que encontró un problema después de publicar.",
      },
      question: {
        id: "followup-needs",
        prompt: "¿Qué necesitás saber primero?",
        type: "poll",
        options: [
          { id: "ready", label: "Qué está listo" },
          { id: "blocked", label: "Qué está bloqueado" },
          { id: "decision", label: "Qué decisión falta" },
          { id: "verification", label: "Qué falta comprobar" },
        ],
      },
    },
    {
      slug: "qa-y-correcciones",
      title: "Un problema vuelve a poner al equipo a trabajar",
      kicker: "QE y correcciones · 1:30",
      component: FeedbackSlide,
      guide: {
        intro:
          "Imaginemos un reporte después de publicar: una persona con cuenta existente no puede aceptar una invitación. QE reproduce el problema y comparte qué intentó, qué esperaba y qué observó.",
        sections: [
          {
            title: "Un hallazgo para PO y Builder",
            body: "QE reporta a ambos. PO lleva prioridad y seguimiento; Builder investiga la causa y prepara la corrección, incluyendo la cobertura necesaria. El fallo mostrado es hipotético y no corresponde a un incidente real.",
          },
          {
            title: "Comprobar la corrección",
            body: "Vos revisás el nuevo PR y decidís el merge. Después del despliegue, QE repite el flujo en el entorno acordado. PO puede cerrar cuando el resultado cumple; si vuelve a fallar, el hallazgo regresa al equipo.",
          },
        ],
        takeaway:
          "La evidencia permite coordinar la corrección y decidir cuándo el problema está resuelto.",
      },
      speakerNotes: {
        script:
          "Imaginemos este fallo después de publicar: alguien que ya tiene cuenta abre la invitación, inicia sesión y vuelve al inicio sin entrar al equipo. QE lo reproduce y escribe tres cosas simples: pasos, resultado esperado y resultado observado. Ese reporte va a PO y Builder. Uno mantiene la prioridad y el seguimiento; el otro investiga y corrige. Yo reviso el nuevo PR y, después del despliegue, QE repite la verificación. El cierre depende de ese resultado. El incidente es hipotético; nos sirve para ver cómo vuelve el trabajo al equipo.",
        timing: "1:30 · acumulado 22:15 / 25:00",
        cues: [
          "Destacar que QE informa a PO y Builder, sin saltear el seguimiento de producto.",
          "No afirmar que una comprobación en develop demuestra el estado de producción: nombrar el entorno que se verifica.",
        ],
        interaction:
          "Pausa sugerida de 20–30 segundos: abrir la pregunta sobre la información que suele faltar en un fallo y comentar una respuesta.",
        transition:
          "Además de corregir el código, podemos conservar lo que aprendimos para la próxima vez.",
      },
      question: {
        id: "incident-context",
        prompt: "Ante un fallo, ¿qué dato suele faltar?",
        type: "poll",
        options: [
          { id: "reproduction", label: "Cómo reproducirlo" },
          { id: "impact", label: "A quién afecta" },
          { id: "expected", label: "Resultado esperado" },
          { id: "changes", label: "Cambios recientes" },
        ],
      },
    },
    {
      slug: "pstack",
      title: "Que el próximo intento empiece mejor",
      kicker: "Aprendizaje y procedimientos · 1:15",
      component: PstackSlide,
      guide: {
        intro:
          "El equipo puede conservar tanto las decisiones como la manera de comprobar el producto. Una skill de verificación describe la preparación, los pasos, el resultado esperado y la evidencia que debe guardar el agente.",
        sections: [
          {
            title: "Procedimientos del producto",
            body: "Para el flujo de acceso, podemos preparar cuentas nuevas y existentes, recorrer la invitación y verificar el equipo al que entra cada persona. Cuando cambia la app o aparece un caso nuevo, el equipo actualiza el procedimiento y las pruebas.",
          },
          {
            title: "Una base que podemos adaptar",
            body: "pstack, de Lauren (@poteto), reúne skills de ingeniería. Incluye herramientas de creación y mantenimiento de una verification skill del proyecto. Es un apoyo para escribir y mantener la forma de trabajar del equipo.",
          },
        ],
        takeaway:
          "Lo aprendido queda disponible en decisiones, pruebas e instrucciones que el equipo puede volver a usar.",
      },
      speakerNotes: {
        script:
          "Si tuvimos que descubrir un caso importante, conviene dejarlo en las pruebas y en la manera de verificar el producto. Una skill puede explicar cómo preparar cuentas, recorrer el flujo y guardar evidencia. También dejamos los motivos de las decisiones para que PO y Research los puedan recuperar. Acá pstack me sirve como apoyo: es un conjunto de skills de ingeniería de Lauren, conocida como poteto, y trae procedimientos para crear y mantener una verification skill. Lo adaptamos a nuestro producto y lo actualizamos cuando cambia.",
        timing: "1:15 · acumulado 23:30 / 25:00",
        cues: [
          "Dar el crédito a Lauren y volver al aprendizaje del equipo; sin bloque biográfico ni tutorial de instalación.",
          "Si preguntan por comandos: create-verification-skill y maintain-verification-skill están enlazados en el guion. control-ui y control-cli pertenecen a cursor-team-kit.",
        ],
        interaction:
          "Pregunta opcional sobre qué conocimiento dejar escrito primero.",
        transition:
          "Para empezar a usar este flujo, podemos elegir una responsabilidad y un encargo que sepamos revisar.",
      },
      question: {
        id: "reusable-knowledge",
        prompt: "¿Qué conocimiento dejarías escrito primero?",
        type: "poll",
        options: [
          { id: "critical-flows", label: "Pruebas de flujos críticos" },
          { id: "test-data", label: "Datos de prueba" },
          { id: "run-project", label: "Ejecución del proyecto" },
          { id: "previous-failures", label: "Fallos anteriores" },
        ],
      },
    },
    {
      slug: "tu-primer-flujo",
      title: "Tu producto. Un primer encargo claro",
      kicker: "Cómo empezar · 1:30",
      component: StartSlide,
      guide: {
        intro:
          "Elegí una responsabilidad que conozcás bien. Compartí el contexto del producto, definí qué puede resolver el bot y pedí una entrega que vos puedas revisar.",
        sections: [
          {
            title: "Un primer encargo",
            body: "Podés pedirle a PO que revise el trabajo pendiente y proponga qué resolver esta semana, explicando los motivos. Otra entrada puede ser una investigación o la verificación de un flujo conocido.",
          },
          {
            title: "Ampliar a partir de la experiencia",
            body: "Revisá qué entregó, qué dudas aparecieron y qué contexto o herramientas faltaban. Con eso mejorás el siguiente encargo y sumás otras responsabilidades. Los cuatro roles son una plantilla que podés adaptar.",
          },
        ],
        takeaway:
          "Compartí contexto, delegá una responsabilidad y revisá una entrega concreta.",
      },
      speakerNotes: {
        script:
          "No necesitamos configurar todo este equipo para hacer el primer intento. Podemos empezar por una responsabilidad que conozcamos. Le compartimos al bot el contexto, aclaramos qué puede decidir y pedimos una entrega concreta. Por ejemplo: revisá lo pendiente y proponé qué conviene resolver esta semana, explicando por qué. Yo puedo revisar esa propuesta y ver qué le faltó. Después sumamos otra responsabilidad. Lo que vimos hoy es una forma de acompañar el producto con un equipo que puede investigar, decidir con nosotros, construir y comprobar.",
        timing: "1:30 · acumulado 25:00 / 25:00",
        cues: [
          "Volver a la idea de Grok Bot como punto de entrada del producto.",
          "Cerrar el recorrido antes del minuto 25 y reservar completos los cinco minutos siguientes.",
        ],
        interaction:
          "Pausa sugerida de 20–30 segundos: abrir la encuesta final y comentar por dónde empezaría la sala.",
        transition:
          "Veamos qué preguntas les quedaron o qué parte les gustaría llevar a su equipo.",
      },
      question: {
        id: "first-sdlc-stage",
        prompt: "¿En qué parte de tu ciclo empezarías?",
        type: "single",
        options: [
          { id: "discovery", label: "Investigación y definición" },
          { id: "building", label: "Implementación" },
          { id: "verification", label: "QE" },
          { id: "followup", label: "Seguimiento" },
        ],
      },
    },
    {
      slug: "preguntas",
      title: "¿Qué parte llevarías a tu equipo?",
      kicker: "Preguntas · 5:00",
      component: QuestionsSlide,
      guide: {
        intro:
          "Este espacio es para conversar sobre cómo aplicar el flujo a tu contexto: los roles, las herramientas, la construcción y la calidad del producto.",
        sections: [
          {
            title: "Una pregunta concreta ayuda",
            body: "Podés partir de un trabajo que hacés hoy: quién lo realiza, qué información necesita y cómo revisás el resultado. A partir de ahí podemos pensar qué responsabilidad darle a un bot.",
          },
          {
            title: "Para seguir explorando",
            body: "Los enlaces de la slide llevan a la documentación de Grok Bot y la guía de Engineering. La guía móvil conserva las ideas de cada momento de la charla.",
          },
        ],
        takeaway:
          "El equipo de bots se organiza alrededor de lo que tu producto necesita.",
      },
      speakerNotes: {
        script:
          "Tenemos cinco minutos para preguntas. Podemos retomar una parte del flujo o pensar cómo lo adaptarían a su producto. Si alguien trae un caso, empecemos por qué necesita resolver y cómo sabría que el trabajo está bien hecho. Desde ahí vemos qué rol, contexto y herramientas harían falta.",
        timing: "5:00 · preguntas · total 30:00",
        cues: [
          "Abrir el micrófono a la sala; la encuesta sirve para orientar temas, no reemplaza las preguntas.",
          "Si hace falta retomar una slide, usar las miniaturas desde el moderador.",
          "Al cerrar, volver a mostrar el QR para quien quiera conservar la guía.",
        ],
        interaction:
          "Abrí la pregunta de temas si ayuda a priorizar. Mostrá resultados cuando quieras compartir qué interesa más.",
      },
      question: {
        id: "questions-topic",
        prompt: "¿Qué parte querés que retomemos?",
        type: "poll",
        options: [
          { id: "roles", label: "Roles y coordinación" },
          { id: "context", label: "Contexto y herramientas" },
          { id: "building", label: "Construcción y revisión" },
          { id: "quality", label: "Calidad y aprendizaje" },
        ],
      },
    },
  ],
};
