# Verificación de DevDay Slides

Rama de rediseño para DevDay Exchange San Salvador. Revisado el 22 oct 2026 con Vite local (`VITE_CONVEX_URL=` vacío, modo local) y Chromium headless de Playwright.

## Qué se revisó

- **Biblioteca** en 1440 × 900 (página completa) y 390 × 844: hero con la portada 00, agenda de seis charlas con cara del speaker, progreso de borradores, búsqueda y footer oscuro con OpenAI y Ai Labs. Sin desbordamiento horizontal en móvil.
- **Slides** en `/slides/<deck>` a 1600 × 900, tema claro y oscuro: portada 00 (multitud de caras, OpenAI DevDay Exchange, Codex, Ai Labs), las cinco slides de la apertura, portada de charla, speaker con y sin retrato, borrador y cierre. En oscuro, las caras charcoal llevan contorno y los logos cambian a su versión clara.
- **Flujo en vivo** en modo local: iniciar presentación de `notion-codex`, avanzar, vista del público a 390 px (cara del participante, guía, encuesta) y proyección. La sesión nueva hereda el tema claro del presentador.

## Comprobaciones automáticas

`npm run typecheck`, `npm test` (incluye `src/decks/decks.test.ts`: orden de la agenda, slugs e IDs de preguntas únicos, portada 00 y cierre de preguntas) y `npm run build`.

## No verificado

- Convex remoto y teléfonos físicos: esta rama no cambia `src/live/` ni `convex/`; el flujo con Convex real debe repetirse antes del evento.
- Los datos de DevDay 2026 en la apertura (`anuncios`) vienen de coberturas secundarias; ver `.agents/skills/devday-slides/references/agenda.md`.
