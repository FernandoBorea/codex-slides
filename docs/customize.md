# Personalizar DevDay Slides

Cada slide es un componente React escrito a mano. Las charlas se arman con `defineTalk()` (`src/decks/kit/talk.tsx`), que agrega la portada de espera 00, la portada de la charla, la slide del speaker y el cierre de preguntas alrededor del `outline` que escribís. El orden de la agenda está en `src/decks/talks.ts`; la apertura del evento, en `src/decks/devday/`. No hay editor visual ni motor de layouts: el kit es un conjunto de componentes y CSS.

La guía completa para speakers y agentes está en la skill [`devday-slides`](../.agents/skills/devday-slides/SKILL.md) y su [sistema visual](../.agents/skills/devday-slides/references/design-system.md).

## Completar una slide de tu charla

Las entradas del `outline` sin `component` se muestran como borrador: título, kicker y un recuadro «Contenido pendiente». Para construir la slide real, escribí un componente con `SlideFrame` dentro de la carpeta de tu charla, por ejemplo `src/decks/notion-codex/Slides.tsx`:

```tsx
import { Cards, Eyebrow, SlideFrame } from "../kit/layouts";
import { FACE_PALETTE, FACE_PRESETS } from "../../devday/faces";

export function NotionEsLaMemoriaSlide() {
  return (
    <SlideFrame>
      <Eyebrow>Concepto · 1:00</Eyebrow>
      <h2 className="dd-heading">Notion es la memoria del equipo</h2>
      <Cards
        items={[
          { title: "Spec", body: "Qué queremos y por qué.", color: FACE_PALETTE.blue, face: FACE_PRESETS.squeeze },
          { title: "Criterios", body: "Cómo sabemos que está listo." },
          { title: "Estado", body: "Qué falta y quién decide." },
        ]}
      />
    </SlideFrame>
  );
}
```

Después pasalo en la entrada correspondiente de `deck.ts`, sin cambiar su `slug`:

```ts
{
  slug: "notion-es-la-memoria",
  title: "Notion es la memoria del equipo",
  kicker: "Concepto · 1:00",
  component: NotionEsLaMemoriaSlide,
  guide: { intro: "…" },
}
```

`defineTalk` le agrega el footer con tu cara, el título de la charla y la numeración. El presentador envuelve la slide en `.slide-stage`, un contenedor 16:9; usá unidades `cqw` y los tokens `--slide-*` (`--slide-bg`, `--slide-fg`, `--slide-muted`, `--slide-surface`, `--slide-border`) para que funcionen el tema claro (default) y el oscuro. Si tu charla necesita estilos propios, creá un CSS con prefijo propio dentro de su carpeta.

Para reemplazar la portada, la slide de speaker o el cierre, pasá `coverComponent`, `speakerComponent` o `closingComponent` a `defineTalk`.

## Agregar una charla

```ts
import { speakers } from "../../devday/speakers";
import { defineTalk } from "../kit/talk";

export const miCharlaDeck = defineTalk({
  slug: "mi-charla",
  title: "Mi charla",
  description: "Una frase que explique de qué se trata.",
  topic: "Anuncio de DevDay",
  speaker: speakers.walter,
  accent: "#0066ff",
  about: "Quién sos y qué construís.",
  outline: [
    { slug: "contexto", title: "El contexto", kicker: "Contexto · 2:00", guide: { intro: "…" } },
  ],
});
```

Importala en `src/decks/talks.ts` en la posición de la agenda. Si el speaker es nuevo, agregalo a `src/devday/speakers.ts` con una cara propia (color de `FACE_PALETTE` + preset de `FACE_PRESETS`). `component` recibe una referencia, no `<Componente />`; `guide` y `question` son datos serializables.

## Diseñar para dos lecturas

La slide proyectada puede tener una frase grande, un diagrama o código. La guía móvil debe explicar la idea con contexto suficiente para acompañar a quien está escuchando:

- `title` y `kicker` identifican el momento de la presentación.
- `guide.intro` resume la idea principal.
- `guide.sections` añade pasos, ejemplos o explicación; es opcional.
- `guide.takeaway` guarda una conclusión o acción concreta; es opcional.
- `question` prepara una pregunta para abrir manualmente en esa slide; omítelo si no hace falta.
- `speakerNotes` vive solo en `SlideDefinition`: `script`, `timing`, `cues`, `interaction` y `transition` ayudan al moderador. `slideMetadata()` lo excluye del manifiesto de Convex y de la guía móvil. No pongas información confidencial en el código del frontend.

Al entrar, el público abre la guía de `activeSlideSlug` en modo **En vivo**: los cambios del presentador actualizan automáticamente la guía y llevan al inicio de la nueva slide. Usar las flechas pausa el seguimiento y conserva la lectura aunque el presentador avance; **Volver al vivo** vuelve a la slide actual y reanuda el seguimiento. Una bienvenida en la primera entrada a cada sesión explica este comportamiento y los avisos de encuestas. Se puede volver a abrir con **Cómo funciona**. No se envía el componente React de la slide a Convex ni se intenta mostrar una copia reducida de la presentación en el teléfono.

Al iniciar una sesión, la aplicación guarda una copia de estos metadatos en Convex o en el almacenamiento local. Los cambios posteriores en el código no reescriben ese contenido: inicia una sesión nueva después de editar el deck. Evita reemplazar el frontend de una presentación que esté en curso.

## Preguntas

| Tipo       | Comportamiento                                                                      |
| ---------- | ----------------------------------------------------------------------------------- |
| `poll`     | Encuesta con una sola opción por participante; por ejemplo Sí/No.                   |
| `single`   | Selección de una sola opción. No hay respuestas correctas ni puntuación automática. |
| `multiple` | Selección de una o varias opciones.                                                 |

Cada pregunta acepta entre 2 y 20 opciones con IDs únicos. `id` identifica la pregunta; cada opción tiene `id` y `label`. Conserva esos IDs cuando ajustes únicamente el texto. El participante puede actualizar su voto mientras esté abierta; reemplaza su respuesta anterior, no agrega otra.

El moderador abre y cierra cada encuesta. Mientras está abierta, los conteos se actualizan automáticamente en el moderador, la proyección y los teléfonos. Cerrar una encuesta detiene las respuestas y conserva los votos y sus resultados. Al volver a una pregunta con votos, su conteo vuelve a mostrarse sin abrirla de nuevo.

Abrir una encuesta muestra un aviso en la guía del público, incluso si la persona está leyendo otra slide. El aviso permanece hasta descartarlo, pulsar **Responder** o cerrar la encuesta. **Responder** vuelve a `activeSlideSlug`, reanuda el seguimiento y lleva el foco a la pregunta.

Al navegar se cierra la encuesta y se oculta el QR. En el teléfono solo se habilita el voto si la slide leída coincide con `activeSlideSlug`, la pregunta está abierta y la sesión sigue en vivo. El backend rechaza votos y controles atrasados. El voto propio se conserva al volver a una slide.

La ruta `/present/<deck>/<sessionId>` es el moderador; **Abrir proyección** abre `/screen/<deck>/<sessionId>`, que se suscribe sin credenciales y no se registra como participante. Ambas usan el estado de Convex. `qrVisible` y `projectionTheme` son campos opcionales para admitir sesiones antiguas. El botón **Mostrar QR en proyección** cambia el estado compartido; **Compartir** abre un modal local. El QR mantiene una URL `/join/<sessionId>` durante toda la sesión.

## Slugs e identidad

Hay tres identificadores con funciones distintas:

| Identificador         | Ejemplo              | Alcance                                          |
| --------------------- | -------------------- | ------------------------------------------------ |
| `VITE_WORKSPACE_SLUG` | `equipo-diseno`      | Variante del frontend que comparte el backend.   |
| `deck.slug`           | `mi-charla` | Deck y su ruta en la biblioteca.                 |
| `slide.slug`          | `bienvenida`         | Slide dentro de un deck y su navegación en vivo. |

Usa slugs de deck únicos en la biblioteca y slugs de slide únicos dentro de cada deck. Decks distintos pueden tener una slide llamada `bienvenida`. Para ambos usa letras minúsculas, números y guiones entre palabras, con un máximo de 100 caracteres. Conserva los slugs al corregir textos para mantener los enlaces existentes. Un deck puede tener entre 1 y 100 slides.

El workspace admite hasta 80 caracteres, con letras minúsculas, números y guiones, y debe empezar con una letra o un número. Usa un identificador estable por variante. Cambiarlo hace que ese frontend consulte otro grupo de sesiones.

## Compartir una variante con el mismo Convex

1. Copia o crea un fork del frontend y adapta sus componentes y metadatos.
2. Usa la misma `VITE_CONVEX_URL` del deployment que ya tiene publicadas las funciones compatibles de `convex/`.
3. Asigna un `VITE_WORKSPACE_SLUG` propio, por ejemplo `equipo-diseno`.
4. Configura `VITE_PUBLIC_URL` con el origen donde publicarás esa variante.
5. Compila y publica el frontend. Inicia una sesión nueva desde esa dirección y comparte su QR.

```dotenv
VITE_CONVEX_URL=https://deployment-compartido.convex.cloud
VITE_WORKSPACE_SLUG=equipo-diseno
VITE_PUBLIC_URL=https://slides-mi-equipo.example.com
```

La creación de contenido ocurre en el repositorio de cada variante; no hay que desplegar cambios del backend por editar una slide. Si necesitas cambiar `convex/`, coordina el despliegue con quien mantiene el proyecto compartido: ese cambio puede afectar a todas las variantes. Puedes mantener los mismos slugs de decks en workspaces distintos.

Los archivos `convex/_generated/api.*`, `server.*` y `dataModel.d.ts` están incluidos en el proyecto. Conserva estos archivos al compartir la variante: permiten compilar la demo sin un `.env.local`. Si modificas funciones o el esquema, deja que `npm run convex:dev` actualice las referencias y los tipos; no edites manualmente el código generado.

El workspace organiza sesiones, no controla permisos. La clave del presentador está en el almacenamiento del navegador que inició la sesión, nunca en el enlace público. Compartir la URL del presentador o cambiar de dominio no transfiere esa clave. En esta versión, la sesión no tiene inicio de sesión ni recuperación de acceso.

En modo local, el almacenamiento y la identidad se comparten solo entre pestañas del mismo origen y perfil de navegador. Un móvil no puede unirse a esa demostración; necesita el frontend accesible y Convex configurado. Cambiar `VITE_PUBLIC_URL` por sí solo no resuelve la sincronización.

Para probar en la misma Wi-Fi durante el desarrollo, abre `localhost` con Convex conectado: el QR sustituye ese host por una dirección LAN detectada automáticamente, si existe. Mantén Vite en ejecución y comprueba que el teléfono puede acceder a esa dirección. Si la detección elige otra interfaz, abre el frontend desde la dirección de red correcta o define `VITE_PUBLIC_URL`. Esta variable tiene prioridad y permite fijar el dominio del QR al publicar; el build de producción no incorpora una dirección LAN.

## Caras y marcas

Las caras vienen del motor de DevDay (`src/devday/faces.ts`): un círculo y dos ojos, con seis colores (`FACE_PALETTE`) y siete expresiones (`FACE_PRESETS`). `Face` las dibuja en SVG; dentro de una slide usá `SlideFace` (tamaño en `cqw`) o `Crowd` para una multitud. Cada speaker conserva su cara en todo el evento. Los logos de OpenAI, Codex y Ai Labs están en `src/devday/Brand.tsx` y cambian solos de versión en tema oscuro.

## Comprobar y publicar tu variante

```bash
npm run typecheck
npm test
npm run test:sites
npm run build
npm run preview
```

Revisa tu deck en vista previa, sus miniaturas y la guía del público a tamaño móvil. Inicia una sesión nueva y comprueba la bienvenida, el seguimiento automático, su pausa con las flechas y **Volver al vivo**. Abre/cierra una pregunta, verifica el aviso desde otra slide, envía y actualiza una respuesta, y comprueba que los conteos cambian automáticamente y se conservan al cerrar o volver a la pregunta. Cambia de slide y termina la sesión. Después de conectar o publicar tu variante, repite el flujo entre el navegador del presentador y un teléfono.

En la versión inicial se comprobó el flujo real con Convex remoto —creación, ingreso, votación, actualización, resultados y navegación— entre entornos de navegador con almacenamiento separado en `localhost` y la dirección LAN. Esa comprobación no incluyó un teléfono físico; valida el QR y la conectividad en los dispositivos que usarás durante la presentación.

Publica `dist/client` con fallback SPA a `index.html` para que funcionen los enlaces directos a `/deck/...`, `/present/...`, `/screen/...` y `/join/...`. La salida incluye también el worker de Sites en `dist/server/index.js`; en otro hosting configura el equivalente. Consulta [la publicación en el README](../README.md#publicar).

Las rutas programáticas están en `src/router.tsx`; la [documentación oficial de TanStack Router](https://tanstack.com/router/latest/docs/routing/code-based-routing) explica sus APIs. Para conectar y publicar el backend, consulta [Convex con React](https://docs.convex.dev/quickstart/react) y [hosting del frontend con Convex](https://docs.convex.dev/production/hosting/custom).
