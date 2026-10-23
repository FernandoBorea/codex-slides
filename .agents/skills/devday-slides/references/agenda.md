# Agenda y contexto de DevDay 2026

DevDay Exchange San Salvador: sábado 24 de octubre de 2026, 3–7 p. m., BINAES. Organiza Ai Labs; evento de comunidad basado en OpenAI DevDay 2026 (29 de septiembre de 2026, San Francisco). Inscripción en Luma; sitio https://devday.ailabs.sv.

## Charlas (orden de `src/decks/talks.ts`)

| # | Charla | Speaker | Anuncio | Carpeta |
| --- | --- | --- | --- | --- |
| 01 | Sol o Astra: elegir modelo cuando vos pagás la cuenta | Fernando Borea | GPT-6.1 Sol · GPT-6 Astra | `sol-o-astra/` |
| 02 | Dots: agentes que siguen trabajando cuando cerrás la laptop | Daniela Huezo | Dots · GPT-6 Astra | `dots/` |
| 03 | Agents API: automatizar lo que solo existe en una pantalla | Saul Calderon | Agents API · Computer use | `agents-api/` |
| 04 | Decisions API: muchas decisiones pequeñas, bien tomadas | Frank Calderon | Decisions API · Luna | `decisions-api/` |
| 05 | Codex en la nube: el backlog avanza sin tu laptop | Rodrigo Garciaguirre | Codex cloud · Codex Security | `codex-en-la-nube/` |
| 06 | Notion × Codex: del spec al pull request | Walter Morales | Codex · Notion MCP | `notion-codex/` |

Los seis nombres son la lista de speakers del sitio de devday. La asignación charla ↔ speaker es una propuesta: para cambiarla, cambiá `speaker` en el `deck.ts` de la charla (la cara viaja con la persona). Cada charla dura 15 min: portada 0:30, speaker 0:30, outline 10:00 y preguntas.

### Notion × Codex (obligatoria, cierra la tarde)

Notion guarda el contexto del equipo (spec, criterios de aceptación, decisiones, estado); Codex ejecuta sobre el repositorio, local o en la nube. El servidor MCP de Notion configurado en Codex es el puente: Codex lee la página del spec y, al terminar, la actualiza con el enlace al pull request y el estado. La charla termina con una demo en vivo de una página del tablero a un PR. Antes del evento verificá la configuración actual del MCP de Notion y de MCP en Codex en su documentación oficial.

## Anuncios de DevDay 2026 (para contexto)

Resumen de coberturas del 29 sep 2026. Varias fuentes son secundarias y no siempre coinciden en nombres o disponibilidad; verificá en openai.com antes de proyectar un dato.

- **GPT-6.1 Sol:** mejora de GPT-6 Sol en código agéntico, uso de computadora y trabajo profesional; coberturas mencionan un precio por token de alrededor de un quinto del de Astra.
- **GPT-6 Astra:** el modelo más capaz; motor de Dots. Axios menciona además un «GPT-6.1 Astra» que no se lanzaría por seguridad: el nombre exacto es inconsistente entre fuentes.
- **Dots:** agentes siempre activos dentro de ChatGPT, cada uno con su computadora y navegador en la nube, trabajando hacia un objetivo.
- **Codex:** ejecución en entornos cloud, `/agents` para delegar y monitorear varias tareas en la CLI, code review en PRs de GitHub y MRs de GitLab, Codex Security para escanear repositorios.
- **Agents API:** computer use, varios agentes, búsqueda de tools y compactación de contexto con infraestructura administrada por OpenAI.
- **Decisions API:** preview limitado; el modelo Luna elige entre respuestas predefinidas a partir de texto o imagen.
- También: opción Ultrafast, ChatGPT Spaces y Pages, Login with ChatGPT con partners (entre ellos Notion).

Fuentes consultadas el 22 oct 2026:

- https://openai.com/index/devday-2026-recap/ (no accesible desde el entorno de trabajo; verificar)
- https://www.axios.com/2026/09/29/openai-dev-day-2026-dots-space-sol
- https://www.cnbc.com/2026/09/29/openai-devday-2026-live-updates.html
- https://www.infoq.com/news/2026/10/openai-devday-2026/
- https://www.latent.space/p/ainews-openai-devday-2026-dots-61
- https://events.openai.com/devdayexchange2026
