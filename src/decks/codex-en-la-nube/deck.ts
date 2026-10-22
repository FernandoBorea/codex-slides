import { speakers } from "../../devday/speakers";
import { defineTalk } from "../kit/talk";

export const codexCloudDeck = defineTalk({
  slug: "codex-en-la-nube",
  title: "Codex en la nube: el backlog avanza sin tu laptop",
  description:
    "Codex ahora corre en la nube: tareas en paralelo con /agents, code review en cada pull request y Codex Security.",
  topic: "Codex cloud · Codex Security",
  speaker: speakers.rodrigo,
  accent: "#8a8d82",
  about: "Pendiente: una frase de Rodrigo sobre quién es y qué construye.",
  openingQuestion: {
    id: "codex-cloud-donde",
    prompt: "¿Dónde corre hoy tu agente de código?",
    type: "single",
    options: [
      { id: "local", label: "En mi laptop" },
      { id: "nube", label: "En la nube" },
      { id: "ambos", label: "En los dos" },
      { id: "ninguno", label: "Todavía no uso uno" },
    ],
  },
  outline: [
    {
      slug: "de-la-terminal-a-la-nube",
      title: "De la terminal a la nube",
      kicker: "Contexto · 1:30",
      guide: {
        intro:
          "Codex ya no depende de que tu computadora esté encendida: las tareas corren en entornos cloud y las podés seguir desde otro dispositivo.",
      },
    },
    {
      slug: "entornos",
      title: "Un entorno donde Codex pueda trabajar solo",
      kicker: "Concepto · 2:00",
      guide: {
        intro:
          "Qué necesita el repositorio para que una tarea remota termine bien: dependencias, scripts de verificación y secretos bien acotados.",
      },
    },
    {
      slug: "agents",
      title: "/agents: varias tareas en paralelo",
      kicker: "Práctica · 1:30",
      guide: {
        intro:
          "Delegar y monitorear varios encargos a la vez desde la CLI, y cómo decidir qué vale la pena paralelizar.",
      },
    },
    {
      slug: "code-review",
      title: "Code review en cada pull request",
      kicker: "Práctica · 1:30",
      guide: {
        intro:
          "Codex revisa diffs y señala problemas en pull requests de GitHub y merge requests de GitLab antes de que llegue una persona.",
      },
    },
    {
      slug: "codex-security",
      title: "Codex Security: encontrar el problema antes que otro",
      kicker: "Concepto · 1:30",
      guide: {
        intro: "Escaneo de repositorios en busca de vulnerabilidades, con correcciones propuestas para revisar.",
      },
    },
    {
      slug: "mi-semana",
      title: "Mi flujo de una semana",
      kicker: "Cierre · 2:00",
      guide: {
        intro:
          "Cómo se reparte el trabajo entre lo que delego a la nube, lo que reviso y lo que sigo haciendo a mano.",
      },
    },
  ],
});
