# Sistema visual DevDay para slides

Basado en devday.ailabs.sv (landing, holding screen y badges del evento). Todo lo de abajo ya está implementado en `src/decks/slides.css` y `src/decks/kit/`.

## Lienzo y tokens

16:9, `1cqw` = 1 % del ancho de la slide. Padding base `5.2cqw 6cqw 4.6cqw`; el footer ocupa la franja inferior (`bottom: 2.6cqw`), así que dejá ~4cqw libres abajo.

| Token | Claro (default) | Oscuro | Uso |
| --- | --- | --- | --- |
| `--slide-bg` | `#ffffff` | `#24251f` | Fondo |
| `--slide-fg` | `#171717` | `#f6f6ef` | Texto principal |
| `--slide-muted` | `#5d6157` | `#b9bdad` | Texto secundario, eyebrow, footer |
| `--slide-soft-fg` | `#33352f` | `#dcdfd2` | Texto de pills |
| `--slide-surface` | `#f3f3ee` | `#303129` | Tarjetas sin color |
| `--slide-border` | `#dcdcd4` | `#47483f` | Líneas, bordes de pill |
| `--slide-blue/green/orange/purple` | acentos | versiones claras | Texto de acento (`.slide-blue`…) |

Nunca escribas colores de texto o fondo fijos en una slide; usá los tokens para que el tema oscuro funcione. Los colores de las caras sí son fijos.

## Tipografía

Geist Variable (self-hosted con `@fontsource-variable/geist`).

| Clase | Tamaño | Peso | Uso |
| --- | --- | --- | --- |
| `.dd-display` | 6.6cqw (portadas 6–7cqw) | 640 | Título de portada, nombre del speaker, frase grande |
| `.dd-heading` | 4.3cqw | 620 | Título de slide de contenido |
| `.dd-lead` | 1.75cqw | 400 | Bajada / párrafo corto, color muted |
| `.dd-eyebrow` | 1.15cqw, mayúsculas, tracking 0.08em | 550 | Sección · tiempo |
| Texto de tarjeta | 1.25–1.4cqw | 400 | Cuerpo mínimo legible en proyección |

Tracking negativo en títulos (`-0.045em` a `-0.055em`), `line-height` ≤ 1.05, `text-wrap: balance`. No bajes de ~1.1cqw para nada que el público tenga que leer.

## Kit (`src/decks/kit/layouts.tsx`)

| Componente | Para qué |
| --- | --- |
| `SlideFrame` | Raíz de toda slide. Pone `slide-canvas dd-slide` y el footer (cara del speaker, título de la charla, evento, `NN / total`). `footer={false}` solo para portadas a sangre. |
| `Eyebrow` | Línea de sección: «Concepto · 2:00». |
| `Pill color` | Tag redondo con punto de color: el anuncio de DevDay, un estado. |
| `SlideFace face size` | Una cara en `cqw`. Decorativa (`aria-hidden`). |
| `Cards items columns` | 2–4 tarjetas por fila (hasta 6 en grilla). `color` las rellena con un color del evento; charcoal pasa el texto a blanco. `face` agrega una cara asomando en la esquina. |
| `Steps items columns` | Secuencia numerada con línea superior: flujos, demos, recetas (3–4 pasos). `columns={1}` la apila en vertical. |
| `Crowd faces marks` | Multitud de caras posicionadas en `cqw` (ver `crowd.ts`). Se mueve solo con `ambientMotion`. |
| `lookAt`, `speakerCluster`, `closingCrowd` (`crowd.ts`) | Hacen que las caras miren algo: un título, la cara del speaker. Úsalos en vez de calcular `gaze` a mano. |
| `DevDayCoverSlide`, `TalkCover`, `SpeakerIntro`, `DraftSlide`, `ClosingSlide` | Slides completas que usa `defineTalk`. |

`useSlideInfo()` devuelve `{ deckTitle, speaker, number, total }` dentro de una charla si necesitás el número o la cara en otro lugar.

## Caras

Motor portado de devday (`src/devday/faces.ts`): un círculo y dos ojos geométricos, sin texto ni bitmaps.

- Paleta (`FACE_PALETTE`): blue `#0066ff`, green `#00b449`, orange `#ff7900`, purple `#9146ff`, gray `#dededc`, charcoal `#272725`.
- Expresiones (`FACE_PRESETS`): `squeeze` > <, `curious` o o, `plus` + +, `sleepy` – –, `spark` * *, `happy` ^ ^, `wink` o <. Se pueden ajustar `rotation`, `eyeScale` y `gaze` (−1…1; en los extremos los ojos se salen del círculo a propósito).
- Marcas (`Mark`): `heart` (<3), `exclaim` (!!!), `asterisk` (*), `question` (?), en el color de una cara.
- Speakers: cada uno tiene una cara fija en `src/devday/speakers.ts`. Esa cara aparece en su portada, su slide de speaker, su footer, la agenda y la biblioteca. Para un personaje o rol distinto dentro de una charla, usá otra combinación de color y expresión.
- La cara grande puede salirse del borde de la slide (portada de charla, multitud). En tema oscuro las caras charcoal llevan un contorno automático.
- El patrón «cara como letra» (la «o» de `#DevDayC◉mmunity`) usa una cara de `0.62em` alineada a la línea de texto.

## Marcas

`src/devday/Brand.tsx`: `OpenAIWordmark`, `CodexWordmark`, `AiLabsLogo`. Cada uno cambia de versión en tema oscuro (o dentro de `.dd-on-dark`). Archivos en `public/brand/`; el wordmark de Codex tiene su procedencia en `public/brand/codex-assets-source.md`. Ai Labs organiza; OpenAI y Codex se mencionan como el origen de los anuncios. No uses SpaceXAI ni Grok.

## Composición

- Portada de charla: OpenAI + nombre del evento arriba, pill del anuncio y título abajo a la izquierda (máx. ~50cqw), speaker con cara chica; a la derecha la cara grande del speaker rodeada de otras que la miran (`speakerCluster`).
- Speaker: nombre grande a la izquierda y un badge DevDay a la derecha (tarjeta inclinada con la cara o el retrato, marcas <3 y !!! y la franja «SPEAKER · fecha»).
- Borrador: un recuadro punteado con grilla de puntos, el texto pendiente y un esqueleto de layout; la cara del speaker se asoma por arriba.
- Cierre: «¿Preguntas?» grande y una fila de caras en el borde inferior mirándolo (`closingCrowd`).
- Interfaz recreada (como el teléfono de «Participá»): dibujala en HTML/CSS con colores fijos de la app y marcala con una pill «Ejemplo».
- Contenido: eyebrow + heading arriba, la explicación visual (Cards, Steps, diagrama, interfaz recreada) anclada abajo con `margin-top: auto`.
- Frase grande: solo `dd-display` + `dd-lead`, centrado verticalmente (ver `.dd-closing`).
- Espacio en blanco generoso; una sola cosa protagonista por slide.
- Con encuesta abierta la slide se ve más chica (la pregunta ocupa la columna derecha). Revisá la legibilidad en ese estado.
