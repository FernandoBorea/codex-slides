/** One source for the event facts shown on covers, the library and the agenda. */
export const DEVDAY_EVENT = {
  name: "DevDay Exchange",
  city: "San Salvador",
  edition: "Community Event",
  date: "24 oct 2026",
  dateLong: "Sábado 24 de octubre de 2026",
  venue: "BINAES",
  hashtag: "#DevDayCommunity",
  organizer: "Ai Labs",
  site: "https://devday.ailabs.sv",
} as const;

/** Plain-language summary shared by the opening slide and its mobile guide. */
export const devdayHighlights = [
  { tag: "Codex", title: "Crear y mejorar", body: "Encargar trabajo, probar el resultado y revisar cambios, también desde la nube." },
  { tag: "Dots", title: "Dar seguimiento", body: "Delegar una responsabilidad y recibir avisos cuando algo necesita tu atención." },
  { tag: "Plugins y MCP", title: "Conectar herramientas", body: "Usar información de otras apps y activar tareas cuando ocurre un cambio." },
  { tag: "Agents API", title: "Completar procesos", body: "Asistentes que usan herramientas y pantallas para avanzar un trabajo." },
  { tag: "Decisions API", title: "Clasificar y priorizar", body: "Elegir entre opciones definidas, como el tipo o la prioridad de una solicitud." },
  { tag: "Space y Pages", title: "Trabajar en equipo", body: "Compartir contexto y colaborar con personas y agentes en documentos." },
];
