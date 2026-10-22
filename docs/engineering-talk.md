# Grok Bot for Engineering

Charla autónoma para una audiencia mixta: **25 minutos de presentación, con interacción incluida, y 5 minutos de preguntas**. No requiere otra charla previa ni demo en vivo. El deck tiene 21 slides: la portada de espera 00, sin encuesta y fuera del reloj, y las 20 slides de la charla.

La audiencia primero debe entender **qué es Grok Bot, dónde trabaja, qué conserva y cómo se le encarga trabajo**. Las slides 3–7 dedican 7:30 a esas bases antes de introducir el ciclo de desarrollo.

Después se presenta la propuesta de Walter: **usar Grok Bot como punto de entrada para trabajar sobre un producto, con PO, Research, Builder y QE colaborando durante todo el ciclo de desarrollo.** Es una plantilla adaptable de organización, no un equipo obligatorio ni una metodología impuesta por xAI. La persona orienta prioridades, resuelve decisiones y revisa la entrega.

Las notas de cada slide están en `speakerNotes` de `src/decks/engineering/deck.ts`: texto para contar, tiempo, recordatorios, interacción y transición. Se muestran en el moderador. `guide` conserva una explicación independiente para la audiencia; no contiene indicaciones de operación ni notas privadas.

## Recorrido y tiempo

| #   | Slide                                           | Tiempo | Acumulado | Qué debe quedar claro                                                                                     |
| --- | ----------------------------------------------- | ------ | --------- | --------------------------------------------------------------------------------------------------------- |
| 00  | SpaceXAI × AI Labs | Espera | — | Portada sin encuesta. Empezar el reloj al pasar a la slide 01. |
| 1   | Grok Bot for Engineering                             | 0:30   | 0:30      | Vamos a conocer Grok Bot y después seguir al equipo trabajando sobre un producto. QR y entrada a la guía. |
| 2   | Walter Morales                                  | 0:30   | 1:00      | Desde qué experiencia se comparte el flujo.                                                               |
| 3   | ¿Qué es Grok Bot?                               | 1:30   | 2:30      | Un compañero de IA persistente al que le encargás trabajo y del que recibís resultados revisables.        |
| 4   | Una computadora en la nube                      | 1:30   | 4:00      | Navegador, archivos, terminal y conectores; el trabajo cloud continúa con tu laptop cerrada.              |
| 5   | Un bot conserva su rol y su contexto            | 1:30   | 5:30      | Nombre, responsabilidad, instrucciones y memoria; fuentes actuales para comprobar los hechos que cambian. |
| 6   | Un encargo claro, una entrega revisable         | 1:30   | 7:00      | Resultado, fuentes, límites, entregable y punto de revisión.                                              |
| 7   | Un mensaje, una rutina u otro bot               | 1:30   | 8:30      | Formas de iniciar trabajo; skill para el método, rutina para el momento y mensajes para coordinar.        |
| 8   | El contexto acompaña todo el ciclo              | 1:00   | 9:30      | Definir SDLC y ubicar entender, definir, construir, comprobar, entregar y aprender.                       |
| 9   | Cuatro responsabilidades compartiendo contexto  | 1:30   | 11:00     | PO, Research, Builder y QE: la plantilla de Walter para repartir responsabilidades.                       |
| 10  | Una idea todavía deja preguntas abiertas        | 1:30   | 12:30     | Research investiga para una decisión y expone lo que falta saber.                                         |
| 11  | El alcance se conversa con el equipo            | 1:30   | 14:00     | PO propone; Builder y QE aportan antes de implementar; vos acordás alcance.                               |
| 12  | Un ticket conserva lo que acordamos             | 1:15   | 15:15     | Propósito, alcance y criterios compartidos en una entrega de PO.                                          |
| 13  | Cada pieza tiene un lugar                       | 1:15   | 16:30     | Grok Bot, Linear, Cloud Agents y GitHub. Plugin, skill, tool y MCP con una frase para cada uno.           |
| 14  | Builder necesita un lugar donde ejecutar        | 1:30   | 18:00     | Repositorio y entorno preparado; coordinación del bot y ejecución del agente.                             |
| 15  | ¿Tenemos lo necesario para publicar?            | 1:30   | 19:30     | PR, evidencia, límites, revisión humana y comprobación después del despliegue.                            |
| 16  | ¿Cómo vamos con la próxima entrega?             | 1:15   | 20:45     | Estado de varias tareas, bloqueos y decisiones; seguimiento desde Grok Bot.                               |
| 17  | Un problema vuelve a poner al equipo a trabajar | 1:30   | 22:15     | QE reproduce y reporta a PO y Builder; corrección, revisión y nueva verificación.                         |
| 18  | Que el próximo intento empiece mejor            | 1:15   | 23:30     | Conservar decisiones, pruebas y procedimientos. Crédito breve a pstack y Lauren.                          |
| 19  | Tu producto. Un primer encargo claro            | 1:30   | 25:00     | Empezar con una responsabilidad y una entrega que se pueda revisar.                                       |
| 20  | ¿Qué parte llevarías a tu equipo?               | 5:00   | 30:00     | Preguntas y aplicación al contexto del público.                                                           |

Los primeros diecinueve tiempos suman 25:00. Las pausas de interacción están incluidas en ellos. El bloque final conserva cinco minutos completos. Las cinco slides que explican el producto suman 7:30; al llegar al ciclo de desarrollo transcurrieron 8:30 desde el inicio.

## La introducción: entender el producto antes de organizar al equipo

**Slide 3 — ¿Qué es Grok Bot?** Explicar primero la capacidad básica: un compañero de IA que mantiene una responsabilidad, usa herramientas y devuelve trabajo que podés revisar. La conversación es el lugar para pedir, seguir y corregir ese trabajo. El primer encargo es revisar qué falta para una entrega; después veremos cómo participan otros bots. [Descripción oficial](https://docs.x.ai/grok-bot/overview).

**Slide 4 — ¿Dónde trabaja?** Mostrar navegador, archivos, terminal y conectores en la computadora cloud. Los bots de la cuenta comparten archivos y sesiones, aunque cada uno tenga su pantalla; separar roles no aísla accesos. Se puede observar el trabajo y tomar control cuando un login o verificación requiere a la persona. [Computadora y apps](https://docs.x.ai/grok-bot/computer-and-apps).

**Slide 5 — ¿Qué hace que siga siendo el mismo compañero?** Darle nombre, responsabilidad e instrucciones duraderas. Su memoria puede conservar preferencias y resúmenes, pero hay que volver a las fuentes para conocer el estado actual. Cada bot mantiene su conversación y contexto; mensajes, grupos y archivos permiten entregarlos a otros. [Crear bots y conservar contexto](https://docs.x.ai/grok-bot/bots).

**Slide 6 — ¿Cómo le doy trabajo?** Desarmar un pedido al PO para revisar los pendientes en Linear y proponer tres prioridades: qué queremos resolver, qué fuentes mirar, qué puede cambiar, qué debe entregar y dónde revisar juntos. Así se enseña a delegar antes de introducir herramientas especializadas. [Primer encargo](https://docs.x.ai/grok-bot/get-started). Las acciones sensibles se encuadran con límites y aprobaciones; Auto Review es un control adicional basado en modelos. [Aprobaciones](https://docs.x.ai/grok-bot/approvals-security-and-privacy).

**Slide 7 — ¿Cómo se pone en marcha?** Un mensaje inicia el encargo; una rutina lo repite por horario o evento compatible; otro bot puede pedir ayuda mediante un mensaje asíncrono. En un grupo se ven las entregas entre responsables. [Conversación y colaboración](https://docs.x.ai/grok-bot/chat-and-collaboration). Una skill conserva el método, una rutina establece cuándo usarlo: primero se prueba el trabajo y después se automatiza. [Skills y rutinas](https://docs.x.ai/grok-bot/skills-routines-and-automations).

La transición a la slide 8 es: “Ahora que sabemos qué puede hacer un bot y cómo darle trabajo, veamos cómo organizo esas capacidades alrededor de un producto”. Evitar prometer memoria perfecta, acceso a cualquier sitio o resultados automáticos sin entorno ni revisión. La guía [Grok Bot 101](https://x.ai/bot/guides/grok-bot-101) sirve como lectura complementaria para quien quiera explorar después de la charla.

## Narrativa y ejemplos preparados

Después de explicar el producto, volver al trabajo cotidiano: hay ideas, preguntas, pendientes y problemas. En la plantilla de Walter, Grok Bot reúne la conversación desde la que orientamos ese trabajo. Cada rol participa cuando aporta algo; el diagrama del ciclo ayuda a ubicarse, no impone un traspaso rígido entre bots.

La primera escena muestra una idea todavía abierta: permitir que las personas inviten a su equipo. Research compara alternativas. PO propone una primera versión. Builder pregunta por las cuentas existentes. QE pregunta por las invitaciones vencidas antes de empezar a construir. La decisión humana se convierte en un ticket; después vemos el entorno de ejecución y una entrega revisable.

La segunda escena cambia a una pregunta de seguimiento: “¿Cómo vamos con la próxima entrega?”. Hay varias tareas en curso: invitaciones, permisos y un problema de búsqueda. La conversación permite conocer bloqueos y cambiar prioridades. Este momento muestra cómo acompañar un producto más allá de una funcionalidad.

La tercera escena parte de un incidente hipotético después de publicar: una persona con cuenta existente no logra aceptar una invitación. QE aporta pasos, resultado esperado y observado. PO mantiene el seguimiento y Builder corrige. Tras revisión, merge y despliegue, QE repite el flujo en el entorno acordado. El equipo conserva lo aprendido en decisiones, cobertura e instrucciones de verificación.

El cierre invita a empezar con un encargo conocido: por ejemplo, pedir a PO que proponga qué resolver esta semana y explique por qué. Se amplían responsabilidades a medida que se aprende qué contexto y herramientas necesita el equipo.

## Interacción

Cada slide tiene una pregunta preparada por pedido de Walter. **La apertura es manual y ninguna pregunta es obligatoria para avanzar.** Son preguntas de experiencia, prioridades y conversación; no se califican como un examen.

Las pausas recomendadas son las slides **6, 11, 17 y 19**, de unos 20–30 segundos cada una. En las demás, se puede abrir la pregunta mientras se explica o dejarla cerrada. Las notas incluyen una sugerencia para cada momento.

| #   | Pregunta                                            | Opciones                                                                                            |
| --- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 1   | ¿Desde dónde arrancás con Grok Bot?                 | No lo probé · Lo exploré · Trabajo con un bot · Coordino varios                                     |
| 2   | ¿Desde qué rol venís hoy?                           | Producto · Desarrollo · Calidad · Otra área                                                         |
| 3   | ¿Qué trabajo te gustaría encargarle primero?        | Investigar · Organizar prioridades · Implementar · Verificar                                        |
| 4   | ¿Dónde te serviría más que un bot haga el trabajo?  | Documentación · Gestión de tareas · Recorridos en la app · Código y pruebas                         |
| 5   | ¿Qué tendría que recordar un bot de tu equipo?      | Criterios de calidad · Forma de comunicar · Límites de decisión · Fuentes de referencia             |
| 6   | ¿Qué suele faltar en un pedido de trabajo?          | El objetivo · Las fuentes · Los límites · La entrega esperada                                       |
| 7   | ¿Qué trabajo repetido le encargarías?               | Seguimiento de pendientes · Verificación de un flujo · Resumen de cambios · Investigación periódica |
| 8   | ¿Dónde se pierde más contexto en tu equipo?         | Prioridades · Definición de tareas · Traspasos · Revisión                                           |
| 9   | ¿Qué responsabilidad necesita más apoyo hoy?        | Entender el problema · Mantener el foco · Construir · Comprobar calidad                             |
| 10  | Antes de construir, ¿qué incertidumbre despejarías? | Necesidad del usuario · Alternativas · Viabilidad técnica · Impacto                                 |
| 11  | Para una primera versión, ¿qué priorizás?           | Un flujo pequeño completo · Resolver un riesgo técnico · Validar la necesidad · Integración         |
| 12  | ¿Qué suele faltar cuando recibís una tarea?         | El propósito · Los límites · Criterios de verificación · Dependencias                               |
| 13  | ¿Qué conectarías primero?                           | Documentación · Tareas · Repositorio · Monitoreo                                                    |
| 14  | ¿Qué suele frenar una implementación?               | Entorno o accesos · Decisiones pendientes · Dependencias · Código poco conocido                     |
| 15  | ¿Qué revisarías con más cuidado?                    | Experiencia de uso · Permisos y datos · Regresiones · Cómo revertir                                 |
| 16  | ¿Qué necesitás saber primero?                       | Qué está listo · Qué está bloqueado · Qué decisión falta · Qué falta comprobar                      |
| 17  | Ante un fallo, ¿qué dato suele faltar?              | Cómo reproducirlo · A quién afecta · Resultado esperado · Cambios recientes                         |
| 18  | ¿Qué conocimiento dejarías escrito primero?         | Pruebas de flujos críticos · Datos de prueba · Ejecución del proyecto · Fallos anteriores           |
| 19  | ¿En qué parte de tu ciclo empezarías?               | Investigación y definición · Implementación · QE · Seguimiento                                      |
| 20  | ¿Qué parte querés que retomemos?                    | Roles y coordinación · Contexto y herramientas · Construcción y revisión · Calidad y aprendizaje    |

En la última slide, la encuesta ayuda a elegir un tema para retomar. Las preguntas del público siguen siendo una conversación abierta.

## Conducción de la sesión

El moderador, la proyección y los teléfonos son vistas distintas de una misma sesión. El presentador usa sus notas y controles; comparte o proyecta la ventana de proyección. La guía pública explica el contenido y permite participar.

1. Iniciar una sesión nueva para que tome los metadatos actuales del deck.
2. Abrir la proyección en otra ventana, llevarla a la pantalla de la charla y activar su pantalla completa.
3. Mostrar el QR al principio; dejar que el público entre a la sesión y ocultarlo para empezar. La bienvenida explica que la guía sigue al presentador, que las flechas pausan el seguimiento y que **Volver al vivo** lo reanuda. **Cómo funciona** permite volver a leerla. El mismo enlace sirve durante toda la charla.
4. Navegar desde el moderador. Abrir y cerrar preguntas cuando ayuden al ritmo. El público recibe un aviso en la guía; **Responder** vuelve al vivo y lleva a la pregunta. Los resultados se actualizan automáticamente en las tres vistas y se conservan al cerrar o volver a una pregunta con votos.
5. Reservar el bloque de preguntas al llegar al minuto 25. Usar miniaturas para retomar un momento concreto y mostrar el QR al cerrar si alguien quiere conservar la guía.

En el ensayo hay que comprobar las tres vistas a la vez, la bienvenida, el seguimiento y su pausa/reanudación, los avisos de preguntas, los resultados en tiempo real, el QR, la recarga y la reconexión. Un build no verifica ese recorrido; el escaneo desde un teléfono requiere una dirección accesible para ese teléfono.

### Verificación de la versión de 20 slides · 7 de octubre de 2026

- `npm run build`, las dos pruebas de `src/decks/metadata.test.ts` y `git diff --check`: correctos.
- Capturas de las 20 slides. Revisión visual de la introducción (3–7) en oscuro y claro, y de su composición junto a la encuesta. Sin errores de consola en la vista previa.
- Contenido, guía, preguntas y notas contrastados con las fuentes oficiales. El guion suma 25 minutos de presentación y cinco de preguntas; la explicación inicial del producto ocupa 7:30.
- React Doctor: 86/100, sin errores; advertencias de mantenimiento por JSX repetido y tamaño del componente del moderador. No afectan la revisión visual ni la compilación de este cambio de contenido.
- Esta ampliación no vuelve a certificar el recorrido en vivo de Convex; las comprobaciones de las tres vistas corresponden al registro histórico siguiente. Ese registro corresponde a las 20 slides habladas, antes de agregar la portada 00.

### Verificación histórica de la versión de 16 slides · 7 de octubre de 2026

Los resultados siguientes corresponden a la versión anterior de 16 slides. Esta edición conserva la infraestructura de participación y actualiza el contenido; la revisión de su nueva distribución visual está registrada arriba.

- `npm test`: 56 pruebas aprobadas. `npm run test:sites`: 4 pruebas aprobadas. `npm run build` y `git diff --check`: correctos.
- Convex sincronizado con el deployment de desarrollo `affable-snail-952`. Esta revisión no publica la aplicación ni modifica producción.
- Recorrido de las 16 slides en la proyección: contenido dentro del área visible. Revisión del modo claro y del scroll independiente del moderador en una ventana pequeña.
- Tres vistas conectadas: moderador, proyección y público. Navegación remota, apertura/cierre de encuestas, publicación de resultados, cambio de tema y QR comprobados. La proyección no suma un participante ni recibe resultados privados.
- Un participante pudo votar y cambiar su respuesta sin duplicarse. Al regresar a la slide, el voto se conservó. Al recargar, la proyección recuperó la slide activa y el público conservó su identidad.
- QR decodificado desde una captura con un lector independiente (`jsQR`): el contenido coincide exactamente con el enlace público de la sesión. Ese enlace abrió la guía y permitió votar desde otra pestaña con el origen LAN. Vista móvil revisada a 390 × 844, sin desborde horizontal.
- React Doctor: 86/100, sin errores; dos advertencias de mantenimiento por JSX repetido y tamaño del componente del moderador.

Queda el ensayo con un teléfono físico y la red/proyector del lugar. La última prueba de pantalla completa y cierre de sesión no se completó: se interrumpió el navegador de pruebas y no se pudo retomar su control. No se da por verificado ese comportamiento en hardware real.

## Identidades, alcance y evidencia

- Research: azul, triángulo, seed 201. PO: teal, flor, seed 202. Builder: naranja, redondo, seed 203. QE: rosa, cuadrado, seed 204. QE conserva la identidad visual del bot antes llamado QA.
- PO es Product Owner; QE es Quality Engineer. Ambas siglas se explican antes de depender de ellas. PR, CI/CD y MCP también se aclaran al aparecer.
- La organización del equipo, el trabajo en grupo, Linear y el uso de Cursor Cloud Agents provienen del flujo contado por Walter. Se muestran como su plantilla adaptable.
- El ticket, el PR, el seguimiento y el reporte del incidente son ilustrativos. Las conversaciones están marcadas como recreadas. No son transcripciones, métricas ni evidencia de un proyecto real.
- No se afirma que se hayan ejecutado las comprobaciones listadas en el PR ilustrativo. Su propósito es mostrar el formato de una entrega y cómo comunicar sus límites.
- QE verifica el entorno acordado. Verificar `develop` no demuestra el estado de producción.
- La biografía conserva únicamente los cargos proporcionados por Walter: Ai Labs Co-Founder, SpaceXAI Ambassadors Regional Lead y AI Product Engineer.
- La explicación general de Grok Bot se apoya en su documentación oficial. La guía de Engineering también documenta bots que coordinan Cloud Agents y revisan sus resultados; la selección de roles y herramientas de esta charla corresponde al flujo de Walter. No se afirma que todo trabajo de Grok Bot deba ejecutarse así.
- Se conserva el slug `qa-y-correcciones` para los enlaces existentes aunque el contenido ahora usa QE. Los demás slugs se conservan cuando continúa el tema. Las slides biográficas de Lauren y la dedicada a tools se reemplazan por el recorrido nuevo.

## pstack y vocabulario

pstack ocupa una mención dentro del aprendizaje del equipo. Se acredita a Lauren (@poteto) y se explica cómo puede apoyar la creación y el mantenimiento de procedimientos de verificación. No hay slide biográfica ni tutorial de comandos.

Una **skill** explica cómo trabajar. Una **tool** realiza una operación. Un **plugin** es un paquete de capacidades que puede incluir varias piezas. **MCP** es el protocolo de conexión; no todas las integraciones usan MCP ni todos los plugins requieren conectar una cuenta.

La ruta breve actual es **Connect Apps → elegir una app → conectar la cuenta si lo pide → probar en el chat**. El [changelog oficial](https://x.ai/changelog/bot) del 2 de octubre registra el cambio de nombre de Marketplace a Connect Apps; algunas páginas de documentación de septiembre conservan el nombre anterior. La entrada del 7 de octubre también indica que `/` dejó de abrir el menú de skills y acciones, por lo que la charla no enseña ese atajo. No se extrapolan pasos de instalación de Cursor ni Grok Build, ni se inventa una pantalla para configurar servidores MCP personalizados.

## Fuentes

Revisadas el **7 de octubre de 2026**:

- [Grok Bot, página del producto](https://x.ai/bot): presentación del producto y acceso a sus guías.
- [Grok Bot, descripción oficial](https://docs.x.ai/grok-bot/overview): definición, contexto, trabajo cloud y límites del acceso a sitios.
- [Grok Bot 101](https://x.ai/bot/guides/grok-bot-101): introducción práctica y separación entre coordinación y ejecución especializada de código.
- [Crear y administrar bots](https://docs.x.ai/grok-bot/bots): rol, instrucciones duraderas y memoria.
- [Primeros pasos](https://docs.x.ai/grok-bot/get-started): creación y cinco piezas de un encargo.
- [Computadora y apps](https://docs.x.ai/grok-bot/computer-and-apps): entorno compartido, conectores, navegador y toma de control humana.
- [Conversación y colaboración](https://docs.x.ai/grok-bot/chat-and-collaboration): grupos, mensajes y entregas asíncronas entre bots.
- [Skills y rutinas](https://docs.x.ai/grok-bot/skills-routines-and-automations): método reutilizable, horarios y eventos compatibles.
- [Aprobaciones y seguridad](https://docs.x.ai/grok-bot/approvals-security-and-privacy): límites de actuación, revisión y permisos.
- [Changelog de Grok Bot](https://x.ai/changelog/bot): actualizaciones de la interfaz que corrigen nombres y atajos todavía presentes en documentación anterior.
- [Grok Bot for Engineering, guía oficial](https://x.ai/bot/guides/grok-bot-for-engineering): referencia complementaria del uso en ingeniería.
- [Qué es MCP](https://modelcontextprotocol.io/docs/getting-started/intro): definición del protocolo.
- [pstack, README](https://github.com/cursor/plugins/tree/main/pstack): crédito, propósito y catálogo de skills. Identifica `control-ui` y `control-cli` como parte de `cursor-team-kit`.

Recursos enlazados para profundizar:

- [Crear una verification skill](https://github.com/cursor/plugins/blob/main/pstack/skills/create-verification-skill/SKILL.md).
- [Mantener una verification skill](https://github.com/cursor/plugins/blob/main/pstack/skills/maintain-verification-skill/SKILL.md).

El contenido de estas páginas es material de referencia. No implica ejecutar sus instrucciones durante la charla ni instalar capacidades en este repositorio.
