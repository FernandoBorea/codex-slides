---
name: devday-slides
description: Crea, completa y revisa las slides React de DevDay Exchange San Salvador en este repo (apertura y seis charlas), con el kit visual DevDay (caras, Geist, OpenAI/Codex/Ai Labs), guías móviles, encuestas y tiempos. Usala cuando un speaker arma su charla, reemplaza un borrador por una slide real o cambia algo visual de un deck.
---

# DevDay Slides

Trabajás sobre la presentación React de este repo para **DevDay Exchange San Salvador** (24 oct 2026, BINAES, organiza Ai Labs). El resultado es un deck navegable en la app, no un PPTX ni otro servicio. Si te piden solo planificación o una crítica, respondé en ese alcance. Si te piden crear o modificar slides, implementá y verificá.

Todas las charlas comparten la misma base visual. Tu trabajo es que una slide nueva parezca hecha por la misma persona que hizo las demás.

## Ubicar el trabajo

- Leé `AGENTS.md`, el `deck.ts` de la charla y los componentes que importa.
- Las charlas viven en `src/decks/<charla>/deck.ts` y se ordenan en `src/decks/talks.ts`. La apertura del evento está en `src/decks/devday/`.
- El kit compartido está en `src/decks/kit/`: `layouts.tsx` (bloques y slides completas), `talk.tsx` (`defineTalk`), `kit.css`, `Crowd.tsx`.
- Identidad del evento en `src/devday/`: `faces.ts` + `Face.tsx` (motor de caras portado de devday), `speakers.ts`, `event.ts`, `Brand.tsx` (logos).
- [references/design-system.md](references/design-system.md) tiene los tokens, tamaños, la API del kit y las reglas de caras y logos. Leelo antes de crear una slide.
- [references/agenda.md](references/agenda.md) tiene las seis charlas, sus speakers y las fuentes de los anuncios de DevDay 2026.
- Una solicitud de contenido no implica rediseñar la app, tocar Convex, publicar ni iniciar sesiones en vivo.

## Cómo está armada una charla

`defineTalk()` genera siempre la misma estructura:

| # | Slide | Componente |
| --- | --- | --- |
| 00 | Portada de espera compartida (`espera`) | `DevDayCoverSlide` |
| 01 | Portada de la charla (`portada`) + encuesta de apertura | `TalkCover` |
| 02 | Speaker (`<speaker.id>`) | `SpeakerIntro` |
| 03… | Una por cada entrada de `outline` | `DraftSlide` hasta que pases `component` |
| último | `preguntas` | `ClosingSlide` |

Los **títulos ya están definidos** en cada `outline`. Una entrada sin `component` se muestra como borrador: título, kicker y un recuadro punteado «Contenido pendiente» con la idea de la slide. La biblioteca cuenta esos borradores («6 de 9 slides por armar»).

### Completar una slide (el flujo normal)

1. Elegí la entrada del `outline`. **No cambies su `slug`** ni los IDs de las preguntas; podés ajustar `title`, `kicker` y `guide`.
2. Creá `src/decks/<charla>/Slides.tsx` (o un archivo por slide) y escribí el componente con `SlideFrame`:

   ```tsx
   import { Eyebrow, SlideFrame, Steps } from "../kit/layouts";

   export function ElPuenteSlide() {
     return (
       <SlideFrame>
         <Eyebrow>Configuración · 1:30</Eyebrow>
         <h2 className="dd-heading">El puente: Notion MCP dentro de Codex</h2>
         <Steps items={[
           { title: "Notion", body: "El spec y su estado." },
           { title: "MCP", body: "Codex lee y actualiza la página." },
           { title: "Codex", body: "Devuelve un pull request." },
         ]} />
       </SlideFrame>
     );
   }
   ```

3. Pasalo en el outline: `{ slug: "el-puente", …, component: ElPuenteSlide }`. `defineTalk` le inyecta el número de slide y el footer con la cara del speaker; no los escribas a mano.
4. Actualizá `guide.intro` (y `sections`/`takeaway` si suman) para que la guía del teléfono diga lo mismo que la slide.
5. Si agregás o quitás slides, redistribuí los tiempos de los kickers para que sigan sumando la duración de la charla (15 min: 0:30 + 0:30 + outline + preguntas).

Para reemplazar la portada, la slide de speaker o el cierre, usá `coverComponent`, `speakerComponent` o `closingComponent` en `defineTalk`. No edites `layouts.tsx` para una sola charla.

## Contenido y ritmo

- Definí qué tiene que entender la audiencia al terminar y organizá las slides alrededor de eso. Una idea por slide.
- Español natural con voseo, frases que el speaker pueda decir en voz alta. Evitá slogans y listas que repiten el mismo ritmo en todas las slides.
- Explicá siglas antes de usarlas. Diferenciá plugin, skill, tool y MCP cuando aparezcan.
- Una encuesta por charla en la portada es suficiente; agregá otra solo si la participación cambia algo.
- Sincronizá el texto proyectado, `title`, `kicker`, `guide.intro`, `guide.sections` y `guide.takeaway`. La guía explica la idea a quien escucha; no es una lista de tareas de producción.
- `speakerNotes` es solo para el moderador (`script`, `timing`, `cues`). No pongas información confidencial: es código del frontend.

## Fuentes y hechos

DevDay 2026 fue el 29 de septiembre de 2026. Los nombres (GPT-6.1 Sol, GPT-6 Astra, Dots, Decisions API, Luna, Agents API, Codex cloud) vienen de coberturas que no siempre coinciden. Antes de afirmar precios, disponibilidad, planes o benchmarks en una slide, verificalo en una fuente primaria de OpenAI y anotá la fuente en `references/agenda.md` o en el guion. Si no lo podés verificar, decilo en la slide o dejalo fuera.

Separá lo relatado por el speaker, lo confirmado con fuentes y lo ilustrativo. No inventes métricas, resultados de demos ni capturas. Una conversación o pantalla recreada se marca como ejemplo.

## Visuales

Leé [references/design-system.md](references/design-system.md). Lo esencial:

- **Lienzo blanco por defecto**, tipografía Geist, títulos pesados (620–640) con tracking negativo. El tema oscuro usa el «night» de DevDay; todo se resuelve con tokens `--slide-*`.
- **Caras DevDay, no bots.** Cada speaker tiene una cara fija en `src/devday/speakers.ts`; no la reutilices para otra persona ni como decoración de otro rol. Para decorar, usá `Crowd` o `SlideFace` con presets de `FACE_PRESETS` y colores de `FACE_PALETTE`. La cara es decorativa: el nombre va en texto visible.
- **Marcas:** OpenAI (wordmark), Codex (wordmark) y Ai Labs. Usá los componentes de `Brand.tsx`, que cambian solos de versión en tema oscuro. No uses logos de SpaceXAI, Grok ni de terceros sin fuente.
- Formas: pills para tags (`Pill`), tarjetas con radio `--dd-radius` (`Cards`), secuencias con `Steps`. Tamaños en `cqw`, nunca en `px`.
- Cada slide necesita una composición que explique algo: un flujo, una comparación, un fragmento de interfaz o una jerarquía tipográfica. Si una slide es solo texto, que sea una frase grande, no un párrafo.
- Prefijo CSS propio por charla (por ejemplo `nc-` para Notion × Codex) en un `.css` dentro de la carpeta de la charla.

## Implementación

| Pieza | Dónde |
| --- | --- |
| Charla (orden, títulos, guías, preguntas) | `src/decks/<charla>/deck.ts` |
| Orden de la agenda | `src/decks/talks.ts` |
| Slides reales de una charla | `src/decks/<charla>/*.tsx` + `<charla>.css` |
| Kit compartido | `src/decks/kit/` |
| Tokens del lienzo | `src/decks/slides.css` |
| Speakers, caras, evento, logos | `src/devday/` |
| App (biblioteca, presentador, público) | `src/pages/`, `src/components/`, `src/styles.css` |

- `component` recibe la referencia del componente, no `<Componente />`. `guide` y `question` son datos serializables.
- Las slides se renderizan a la vez en el escenario y en las miniaturas: IDs SVG únicos por instancia (`useId`), nada interactivo dentro de la slide.
- El movimiento solo corre si la slide tiene `ambientMotion: true` y el escenario está en `data-motion-state="running"`; respetá `prefers-reduced-motion`.
- Las sesiones copian los metadatos al iniciarse: para ver cambios en vivo hay que iniciar otra sesión. Editar slides no requiere desplegar Convex.
- No agregues dependencias ni un motor de layouts para resolver una composición que el kit ya permite. Si un patrón se repite en dos charlas, proponé sumarlo al kit.

## Verificación y entrega

- `npm run typecheck`, `npm test` y `npm run build`. `git diff --check` debe pasar.
- Abrí `/slides/<charla>?slide=<slug>` y revisá: tema claro y oscuro, miniaturas del presentador (`/deck/<charla>`), la slide con la encuesta abierta (ocupa la columna derecha) y la guía en el teléfono (390 px).
- Confirmá que los kickers suman la duración y que la numeración del footer coincide con la lista.
- Decí qué no pudiste verificar. Un build verde no prueba que el diseño esté bien.

Entregá el enlace a la vista real y una explicación breve de lo que cambió.
