# Grok bot Slides

Presentaciones en React con una guía móvil que sigue al presentador, permite explorar a tu ritmo y ofrece preguntas en vivo. Cada slide es su propio componente: puedes cambiar su diseño directamente, copiar un deck o compartir tu variante del proyecto.

El frontend usa **React 19, TypeScript, TanStack Router y Vite**. Es una SPA; no usa TanStack Start ni SSR. Convex conserva las sesiones y sincroniza a los participantes cuando está configurado. La biblioteca y el recorrido de demostración funcionan también sin Convex.

## Empezar

Requisitos: Node.js 22.12 o posterior y npm.

```bash
npm install
npm run dev
```

Abre la dirección que imprime Vite, normalmente `http://localhost:5173`. No hace falta crear un proyecto de Convex para explorar la biblioteca, presentar, abrir el QR o probar las preguntas.

El repositorio incluye los archivos generados de Convex en `convex/_generated/`, incluidas las referencias de API y los builders del servidor. Puedes clonar, instalar y compilar el proyecto sin configurar variables de entorno; en ese caso se utiliza el modo local. `npm run convex:dev` actualiza esos archivos al conectar o modificar el backend.

Sin `VITE_CONVEX_URL`, aparece **«No ha sido configurado Convex»**. El modo local guarda la sesión en el navegador y sincroniza pestañas del **mismo origen y perfil de navegador**. No conecta otros móviles, otros navegadores, perfiles privados ni direcciones distintas. Para probar, usa **Abrir vista del público** desde el modal del QR; verás una identidad de participante de prueba compartida por las pestañas de ese navegador.

## Qué incluye

| Deck                                | Slug                                    | Slides |
| ----------------------------------- | --------------------------------------- | -----: |
| Grok bot Meetup                     | `grok-bot-101`                          |      6 |
| Grok Bot for Founders               | `grok-bot-for-founders`                 |     12 |
| Grok Bot for Engineering            | `grok-bot-for-engineering`              |     21 |
| Grok bot for GTM                    | `grok-bot-for-gtm`                      |     12 |
| Grok Bot for Ops                    | `grok-bot-for-ops`                      |      9 |
| Grok Bot for Research & Experiments | `grok-bot-for-research-and-experiments` |      4 |

Los seis decks incluyen 64 slides con componentes React y guías. Todos agregan la misma portada animada 00 de SpaceXAI y AI Labs, sin encuesta y fuera del tiempo de exposición. Las portadas originales siguen como slide 01. Meetup reutiliza su espera existente sin duplicarla. **Grok bot Meetup** abre el evento con un fondo animado y cinco slides habladas que suman 2 minutos y 30 segundos: bienvenida, organización de AI Labs junto con SpaceXAI, contexto, agenda y primeros pasos. Funciona sin sesiones, preguntas ni Convex. Su [guion](docs/meetup-talk.md) incluye tiempos, fuentes e instrucciones locales. Engineering contiene 21 slides (portada 00 y veinte slides de charla): 25 minutos de presentación con interacción y 5 de preguntas. Dedica cinco slides y 7:30 a explicar Grok Bot desde cero: computadora cloud, rol y memoria, encargos revisables, rutinas y colaboración. Después presenta la plantilla de Walter para usarlo como punto de entrada de un producto, con PO, Research, Builder y QE colaborando durante el ciclo de desarrollo. La introducción se apoya en la página de xAI y la documentación oficial enlazadas en el guion. Cada slide de la charla tiene una pregunta de apertura manual y notas del ponente separadas de la guía móvil. Los ejemplos de definición, seguimiento y corrección son ilustrativos; pstack aparece brevemente como apoyo para procedimientos reutilizables. GTM contiene la portada 00 y once slides en español centradas en investigación comercial, seguimiento de cambios y preparación del siguiente paso con Grok Bot; el [guion de GTM](docs/gtm-talk.md) recoge tiempos y fuentes. Founders contiene la portada 00 y once slides sobre operación, procesos, contexto compartido y prototipos; el [guion de Founders](docs/founders-talk.md) acompaña su recorrido. Ops contiene la portada 00 y ocho slides para una charla de 15 minutos sobre planificación semanal y ejecución, con Google Calendar, fuentes conectadas mediante plugins o MCP y capturas reales de Saul; el [guion de Ops](docs/ops-talk.md) recoge tiempos y fuentes. Ops tiene preguntas solo en la apertura y el cierre. Research contiene la portada 00, su bienvenida original, un concepto y un ejercicio. Los metadatos viven en el `deck.ts` de cada carpeta; `src/decks/index.ts` establece el orden de la biblioteca. El [guion de Engineering](docs/engineering-talk.md) recoge los tiempos y las fuentes.

La vista del moderador muestra la slide actual, miniaturas, navegación por teclado, notas del ponente y resultados en tiempo real. **Abrir proyección** abre una ventana independiente en `/screen/<deck>/<sessionId>`; podés llevarla a otra pantalla y activar pantalla completa allí. Convex sincroniza la slide, el tema, el QR y las respuestas. La proyección sigue la sesión en modo de lectura, incluso si se abre desde el mismo navegador del moderador.

La proyección mantiene 16:9. Al abrir una encuesta, sus resultados se actualizan automáticamente en la proyección y los teléfonos. Cerrar la encuesta conserva el conteo, que también aparece al volver a una pregunta con respuestas.

La vista móvil entra **En vivo** y cambia de guía junto con el presentador. Usar las flechas pausa ese seguimiento para leer a tu ritmo; **Volver al vivo** lo reanuda. Una bienvenida al entrar por primera vez en cada sesión explica la navegación y las encuestas; **Cómo funciona** permite consultarla de nuevo.

Al abrirse una encuesta aparece un aviso dentro de la guía, incluso si estás leyendo otra slide. **Responder** vuelve al vivo y lleva el foco a la pregunta; el aviso permanece hasta pulsar ese botón, descartarlo o cerrar la encuesta. Las notas del ponente se excluyen del manifiesto que recibe el público; son material del frontend, no un almacén de información confidencial.

## Probar una presentación

Para compartir las slides después del evento, usá **Ver slides** en la biblioteca o `/slides/<deck>`, por ejemplo `/slides/grok-bot-for-engineering`. Esa vista muestra las diapositivas completas y permite avanzar, elegir una slide, cambiar el tema y usar pantalla completa, sin sesión, encuestas, notas privadas ni conexión a Convex. El botón **Copiar enlace** conserva la slide actual con `?slide=<slug>`. El panel **Compartir** de una sesión también incluye el enlace permanente del deck. Refleja la versión publicada más reciente.

La portada compartida es la **00**. Las slides de la charla empiezan en **01** y conservan sus preguntas; la portada de espera no tiene encuesta ni consume tiempo de exposición.

Para el meetup, abrí `/deck/grok-bot-101`: se presenta directamente, sin crear una sesión. La primera slide tiene pausa/reanudación del loop y una versión estática al activar movimiento reducido en el sistema. Para probar exclusivamente en esta Mac, arrancá con:

```bash
VITE_CONVEX_URL= VITE_PUBLIC_URL= npm run dev -- --host 127.0.0.1 --port 4173
```

Abrí [el meetup local](http://127.0.0.1:4173/deck/grok-bot-101?slide=espera). La guía queda disponible en el panel del presentador. Los siguientes pasos de participación corresponden a los otros decks:

1. Abrí un deck y pulsá **Iniciar presentación**.
2. Pulsá **Abrir proyección**, mové la nueva ventana a la pantalla de la audiencia y activá pantalla completa allí. Conservá el moderador en tu pantalla.
3. Usá **Mostrar QR en proyección** para invitar al público. **Compartir** abre el enlace y el QR en el moderador; copiar y abrir usan la misma URL que el código. Con Convex y una dirección accesible, las personas ingresan desde sus teléfonos sin registro.
4. Abrí una encuesta. El público recibe un aviso en su guía y los resultados se actualizan automáticamente en el moderador, la proyección y los móviles. **Cerrar encuesta** conserva los votos y el conteo. Las personas pueden actualizar su voto mientras esté abierta.
5. Avanzá con miniaturas, botones o teclado. El cambio cierra la encuesta y oculta el QR. Los votos se conservan por slide y sus resultados vuelven a mostrarse al regresar a esa pregunta. El público sigue los cambios de slide por defecto; puede pausar con las flechas y reanudar con **Volver al vivo**.
6. Pulsá **Finalizar** para cerrar la sesión. La proyección muestra el cierre; el público conserva las guías, pero ya no puede votar. Recargar una ventana recupera el estado de la misma sesión.

También funcionan Espacio para avanzar y Home/End para ir al principio/final, cuando el foco no está en un control interactivo.

## Conectar Convex

Crea `.env.local` a partir de `.env.example` si todavía no existe. Después ejecuta en una terminal:

```bash
npm run convex:dev
```

Sigue las instrucciones de la CLI para crear o seleccionar tu proyecto. El comando sincroniza el esquema y las funciones de `convex/` con el deployment de desarrollo. Configura el frontend en `.env.local`:

```dotenv
VITE_CONVEX_URL=https://tu-deployment.convex.cloud
VITE_WORKSPACE_SLUG=grok-bot-slides
VITE_PUBLIC_URL=
```

Conserva las variables que añada la CLI y reinicia `npm run dev` después de cambiar el archivo. La URL debe ser la del deployment de Convex, sin rutas, parámetros ni fragmentos. Si dejas la URL vacía, vuelves al modo local; una URL configurada cuyo backend no responde produce un error de conexión en la sesión.

La versión inicial de la integración se comprobó contra un deployment remoto de Convex: creación de sesión, ingreso, votación, actualización de la sesión, resultados y navegación sincronizada. Se usaron entornos de navegador con almacenamiento separado, uno en `localhost` y otro en la dirección LAN. **No se ha probado en un teléfono físico.** El flujo de configuración sigue la [guía oficial de Convex para React y Vite](https://docs.convex.dev/quickstart/react).

### Variables del frontend

| Variable              | Uso                                                                                                                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_CONVEX_URL`     | URL del deployment compartido. Vacía activa el modo local.                                                                                                 |
| `VITE_WORKSPACE_SLUG` | Identificador de tu variante. Por defecto, `grok-bot-slides`; admite minúsculas, números y guiones, hasta 80 caracteres, empezando por letra o número.     |
| `VITE_PUBLIC_URL`     | Origen público del frontend para el QR, por ejemplo `https://slides.example.com`. Tiene prioridad sobre el origen actual y la detección LAN de desarrollo. |

Las variables `VITE_*` forman parte del frontend compilado. Después de cambiarlas en producción, vuelve a compilar y publicar. `VITE_PUBLIC_URL` solo cambia el destino del QR: no publica la aplicación ni conecta dispositivos por sí misma. Usa una dirección accesible para el público y servida con la misma configuración de Convex y workspace; `localhost` en un teléfono se refiere al propio teléfono.

En desarrollo, al abrir la aplicación desde `localhost` con Convex conectado, el QR usa automáticamente una dirección IPv4 LAN detectada en el equipo, si está disponible. Conecta el teléfono a la misma red Wi-Fi y mantén Vite en ejecución. Si la dirección detectada no es accesible, abre la aplicación con la dirección de red correcta de Vite o configura `VITE_PUBLIC_URL`. En modo local se mantiene el origen actual; en el build de producción no hay detección LAN y puedes fijar el dominio público con `VITE_PUBLIC_URL`.

## Sesiones y variantes

Cada presentación crea un ID de sesión nuevo y toma una copia de los metadatos, las guías y las preguntas del deck. El componente React permanece en el frontend. Después de editar contenido, inicia otra sesión para que la audiencia reciba la versión nueva.

La clave aleatoria del presentador se conserva en `localStorage` del navegador que inicia la sesión. El QR y las respuestas públicas de Convex no incluyen esa clave; las mutaciones de control la comprueban en el servidor. Copiar la URL del presentador a otro navegador no transfiere sus permisos. Borrar el almacenamiento o cambiar de origen pierde ese acceso; en esta versión no hay cuentas ni recuperación de sesiones. Cada participante guarda un token propio por sesión para conservar avatar y respuesta al recargar.

Configura **`GROK_PRESENTER_PASSWORD`** en las variables de entorno del **deployment de Convex** al que apunta `VITE_CONVEX_URL`. No lleva prefijo `VITE_` ni se configura en Vercel. Crear sesiones y cada acción del moderador (incluidas las encuestas de sesiones anteriores) validan esa contraseña en el servidor antes de acceder a la base. Si falta, está vacía o supera 1024 caracteres, esas acciones quedan bloqueadas. El diálogo la solicita al iniciar o retomar el control; solo se conserva en memoria hasta recargar o cerrar la página, nunca en enlaces ni almacenamiento del navegador. Cambiarla en Convex revoca la contraseña anterior en la siguiente acción. Las lecturas públicas, el ingreso y los votos de participantes no requieren esta contraseña.

Varias copias del frontend pueden usar el **mismo deployment de Convex** con distintos `VITE_WORKSPACE_SLUG` y la misma contraseña del deployment. El slug organiza las sesiones de cada variante y no es una contraseña. El modo local es una demostración: almacena todos sus datos en el navegador y no requiere la contraseña; la autoridad del servidor se aplica al usar Convex.

Consulta [cómo personalizar decks y compartir una variante](docs/customize.md) y [el modelo de Convex](convex/README.md).

## Comandos

| Comando                 | Resultado                                                                        |
| ----------------------- | -------------------------------------------------------------------------------- |
| `npm run dev`           | Servidor Vite accesible en la red local.                                         |
| `npm run typecheck`     | Comprobación TypeScript sin generar archivos.                                    |
| `npm test`              | Pruebas de Vitest.                                                               |
| `npm run test:sites`    | Pruebas del fallback SPA del worker de hosting.                                  |
| `npm run build`         | TypeScript, compilación Vite en `dist/client` y preparación del worker de Sites. |
| `npm run preview`       | Vista local del build; no publica la aplicación.                                 |
| `npm run convex:dev`    | Configura/sincroniza el backend de desarrollo.                                   |
| `npm run convex:deploy` | Despliega las funciones y el esquema al backend de producción seleccionado.      |

## Publicar

### Vercel

El archivo `vercel.json` configura Vite, la salida `dist/client` y las rutas `/slides/`, `/deck/`, `/present/`, `/screen/` y `/join/` para que los enlaces funcionen también al abrirlos directamente o recargar. Los assets inexistentes conservan una respuesta 404.

Configura en el proyecto de Vercel las variables `VITE_CONVEX_URL`, `VITE_WORKSPACE_SLUG` y `VITE_PUBLIC_URL` antes de compilar. Para este frontend, el dominio previsto es `https://slides.ailabs.sv`. `VITE_CONVEX_URL` debe apuntar al deployment que quieras utilizar; publicar el frontend no modifica ni despliega el backend de Convex.

```bash
vercel link --project grok-bot-slides
vercel --prod
```

Conecta el repositorio desde `vercel git connect` si quieres publicar automáticamente los siguientes cambios de `main`. Las variables locales y la vinculación de `.vercel/` se excluyen del repositorio.

### Backend y otros proveedores

Despliega el backend con `npm run convex:deploy`. Configura `VITE_CONVEX_URL` con su URL de **producción**, junto con el workspace y el origen público, antes de ejecutar `npm run build`.

El frontend estático está en `dist/client`. El hosting debe servir `index.html` para las rutas de la aplicación, como `/deck/grok-bot-for-engineering`, `/present/...`, `/screen/...` y `/join/...`, incluso al abrirlas directamente o recargar. Conserva los 404 para assets que no existen. La configuración incluida para Sites añade `dist/server/index.js` con ese fallback; otro hosting debe configurar una reescritura SPA equivalente. La aplicación espera publicarse en la raíz de su dominio.

También puedes compilar con la URL de producción inyectada por la CLI:

```bash
npm run convex:deploy -- --cmd 'npm run build'
```

Después publica el frontend generado en tu hosting. Desplegar Convex no publica la web. Este proceso está descrito en la [documentación oficial de hosting de Convex](https://docs.convex.dev/production/hosting/custom).

## Estructura y procedencia

- `src/decks/`: componentes de slides, registro de decks, guías y preguntas.
- `src/pages/`: biblioteca, presentador y público.
- `src/router.tsx`: rutas de TanStack Router, definidas en código.
- `src/live/`: contrato de sesión, reglas y transportes local/Convex.
- `convex/`: esquema y funciones de sesiones, participantes y votos.
- `convex/_generated/`: referencias de API, tipos y builders generados por la CLI; están incluidos para que la demo local compile sin configuración adicional.
- `src/bot/` y `src/components/Bot.tsx`: geometría de bots y componente SVG estático.

Los bots se extrajeron del proyecto local **bloub**, referido como Flow en el pedido original. Se conservó su geometría y licencia MIT, sin importar el editor ni su motor de animación/renderizado. La extracción está documentada en [Procedencia de los bots](docs/bot-origin.md).

Las rutas usan las APIs `createRootRoute`, `createRoute` y `createRouter` de [TanStack Router con rutas definidas en código](https://tanstack.com/router/latest/docs/routing/code-based-routing).
