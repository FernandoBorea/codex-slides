import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Face, Mark } from "../../devday/Face";
import { CodexWordmark, OpenAIWordmark } from "../../devday/Brand";
import { DEVDAY_EVENT } from "../../devday/event";
import { FACE_PALETTE, FACE_PRESETS, type FaceConfig } from "../../devday/faces";
import { speakers } from "../../devday/speakers";
import { Eyebrow, Pill, SlideFace, SlideFrame } from "../kit/layouts";
import "./notion-codex.css";

const { blue, green, orange, purple, gray, charcoal } = FACE_PALETTE;

/* The talk's cast. Daniela keeps her own face; the tools get their own color each. */
const cast = {
  granola: { ...FACE_PRESETS.sleepy, color: purple, gaze: { x: 0.1, y: 0.2 } } as FaceConfig,
  notion: { ...FACE_PRESETS.happy, color: charcoal, rotation: 0, gaze: { x: -0.1, y: -0.1 } } as FaceConfig,
  codex: { ...FACE_PRESETS.plus, color: green, gaze: { x: 0, y: 0 } } as FaceConfig,
  vos: speakers.daniela.face,
};

/* Folders of "Cerebro de Daniela", with the colors used in Notion. */
const folders = {
  lumen: { name: "Estudio Lumen", color: blue },
  beca: { name: "Beca Norte", color: purple },
  cafe: { name: "Café Volcán", color: orange },
  eco: { name: "Huerta Viva", color: green },
  carrera: { name: "Carrera", color: gray },
};
type Folder = (typeof folders)[keyof typeof folders];

function Char({ face, name, size, className = "", style }: { face: FaceConfig; name?: string; size: number; className?: string; style?: CSSProperties }) {
  return (
    <figure className={`nc-char ${className}`} style={{ "--size": `${size}cqw`, ...style } as CSSProperties}>
      <span className="nc-char-face" aria-hidden="true">
        <Face config={face} />
      </span>
      {name && <figcaption>{name}</figcaption>}
    </figure>
  );
}

function Note({ title, meta, lines, children, className = "", style }: { title: string; meta?: string; lines?: number; children?: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`nc-note ${className}`} style={style} aria-hidden="true">
      <span className="nc-note-title">{title}</span>
      {meta && <span className="nc-note-meta">{meta}</span>}
      {lines ? (
        <span className="nc-note-lines">
          {Array.from({ length: lines }, (_, index) => (
            <i key={index} style={{ "--w": `${[92, 70, 84, 55, 78, 64][index % 6]}%` } as CSSProperties} />
          ))}
        </span>
      ) : null}
      {children}
    </div>
  );
}

function Tag({ folder }: { folder: Folder }) {
  return (
    <span className="nc-tag" style={{ "--tag": folder.color } as CSSProperties}>
      {folder.name}
    </span>
  );
}

function DemoBadge({ children = "Datos de demo" }: { children?: ReactNode }) {
  return <span className="nc-example">{children}</span>;
}

/* 01 · Portada */
export function PortadaSlide() {
  const { daniela } = speakers;
  return (
    <SlideFrame className="nc-portada">
      <div className="dd-talk-cover-top">
        <OpenAIWordmark className="dd-talk-cover-openai" />
        <span className="dd-talk-cover-rule" aria-hidden="true" />
        <span>
          {DEVDAY_EVENT.name} {DEVDAY_EVENT.city}
        </span>
      </div>
      <div className="nc-portada-flow" aria-hidden="true">
        <div className="nc-portada-step">
          <Char face={{ ...cast.granola, gaze: { x: 0.5, y: 0.1 } }} size={13} />
          <Note title="Reunión · martes" lines={3} className="nc-portada-note" />
          <span>Tus reuniones en Granola</span>
        </div>
        <i className="nc-portada-arrow" />
        <div className="nc-portada-step nc-portada-step--main">
          <Char face={{ ...cast.codex, eyeScale: 1 }} size={17} />
          <span>
            <CodexWordmark className="nc-portada-codex" />
          </span>
        </div>
        <i className="nc-portada-arrow" />
        <div className="nc-portada-step">
          <Char face={{ ...cast.notion, gaze: { x: -0.5, y: 0.1 } }} size={13} />
          <div className="nc-portada-mini">
            <b />
            <b />
            <b />
          </div>
          <span>Tu tablero en Notion</span>
        </div>
      </div>
      <h1 className="dd-display nc-portada-title">
        De tus notas
        <br />
        al trabajo hecho.
      </h1>
      <div className="nc-portada-bottom">
        <div className="dd-talk-cover-speaker">
          <SlideFace face={daniela.face} size={4.6} />
          <div>
            <strong>{daniela.name}</strong>
            <span>{daniela.role}</span>
          </div>
        </div>
        <span className="nc-portada-tags">
          <Pill color={purple}>Granola</Pill>
          <Pill color={green}>Codex</Pill>
          <Pill color={charcoal}>Notion</Pill>
        </span>
      </div>
    </SlideFrame>
  );
}

/* 02 · El recorrido */
export function RecorridoSlide() {
  const steps = [
    { n: "01", face: { ...cast.granola, gaze: { x: 0.3, y: 0.2 } }, title: "El problema", body: "Todas mis notas vivían en Granola, sin ningún propósito." },
    { n: "02", face: { ...cast.notion, gaze: { x: 0, y: 0.2 } }, title: "El tablero", body: "Notas, proyectos y tareas en un lugar, separados por carpeta." },
    { n: "03", face: { ...cast.codex, gaze: { x: -0.3, y: 0.2 } }, title: "Los agentes", body: "Muevo una tarjeta y Codex hace el trabajo." },
  ];
  return (
    <SlideFrame className="nc-recorrido">
      <Eyebrow>Daniela Huezo · El recorrido · 1:30</Eyebrow>
      <h2 className="dd-heading">Notas que se convierten en trabajo.</h2>
      <ol className="nc-recorrido-steps">
        {steps.map((step, index) => (
          <li key={step.n}>
            <span className="nc-recorrido-face" aria-hidden="true">
              <Face config={step.face} />
            </span>
            <span className="nc-recorrido-n">{step.n}</span>
            <strong>{step.title}</strong>
            <p>{step.body}</p>
            {index < steps.length - 1 && <i className="nc-recorrido-arrow" aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <p className="nc-recorrido-take">
        <strong>Te llevás</strong>
        <span>
          El estado es el botón · Codex entrega · <em>vos aprobás</em>
        </span>
      </p>
    </SlideFrame>
  );
}

/* Tour · Granola */
export function GranolaTourSlide() {
  const features = [
    { title: "Sin bot en la llamada", body: "Escucha el audio de tu compu. Zoom, Meet, Teams." },
    { title: "Tus notas guían a la IA", body: "Escribís lo importante; Granola completa con la transcripción." },
    { title: "Chat con tus reuniones", body: "Preguntale por una reunión o por todas las del mes." },
    { title: "Carpetas, plantillas y recipes", body: "Ordenás por proyecto y repetís formatos." },
    { title: "Se conecta", body: "Notion, Slack, Zapier y un MCP para asistentes." },
  ];
  return (
    <SlideFrame className="nc-scene nc-tour">
      <Eyebrow>Recorrido · Granola · 1:00</Eyebrow>
      <h2 className="dd-heading">Granola: vos anotás lo importante, la IA completa el resto.</h2>
      <div className="nc-stage nc-tour-stage">
        <div className="nc-gnote" aria-hidden="true">
          <span className="nc-gnote-meta">Martes · 10:00 · 32 min</span>
          <strong>Reunión con Café Volcán</strong>
          <ul>
            <li className="is-mine">precios nuevos</li>
            <li className="is-ai">Marta propone actualizar la lista de precios en noviembre.</li>
            <li className="is-mine">pedir catálogo</li>
            <li className="is-ai">Daniela le escribe para pedir el catálogo y los videos.</li>
            <li className="is-ai">Próxima reunión: en dos semanas.</li>
          </ul>
          <span className="nc-gnote-legend">
            <i className="is-mine" /> lo que escribiste <i className="is-ai" /> lo que agregó Granola
          </span>
          <span className="nc-gnote-ask">¿Qué quedamos con Café Volcán?</span>
          <DemoBadge>Ejemplo</DemoBadge>
        </div>
        <ul className="nc-features">
          {features.map((feature) => (
            <li key={feature.title} style={{ "--dot": purple } as CSSProperties}>
              <strong>{feature.title}</strong>
              <span>{feature.body}</span>
            </li>
          ))}
        </ul>
        <SlideFace face={{ ...cast.granola, gaze: { x: -0.5, y: 0.3 } }} size={10} className="nc-tour-face" />
      </div>
    </SlideFrame>
  );
}

/* 03 · Problema: todo guardado, nada accionable */
export function TodoGuardadoSlide() {
  return (
    <SlideFrame className="nc-scene nc-guardado">
      <Eyebrow>Problema · 0:45</Eyebrow>
      <h2 className="dd-heading">Mis notas vivían en Granola. Sin ningún propósito.</h2>
      <div className="nc-stage">
        <Char face={{ ...cast.granola, gaze: { x: 0.6, y: 0 } }} name="Granola" size={12} className="nc-guardado-granola" />
        <div className="nc-messy" aria-hidden="true">
          <span className="nc-messy-title">Granola · Mis notas</span>
          <ul className="nc-messy-list">
            {["Reunión con Café Volcán", "Llamada Estudio Lumen", "Seguimiento Beca Norte", "Huerta Viva · kickoff", "Mentoría de carrera", "Reunión con Café Volcán (2)"].map((title, index) => (
              <li key={title}>
                <span>{title}</span>
                <em>{`${22 - index * 3} oct`}</em>
              </li>
            ))}
          </ul>
          <span className="nc-sticker nc-sticker--a">
            <b>14</b> reuniones
          </span>
          <span className="nc-sticker nc-sticker--b">
            <b>8</b> proyectos sin definir
          </span>
          <span className="nc-sticker nc-sticker--c">
            <b>16</b> pendientes sin dueño ni fecha
          </span>
        </div>
        <div className="nc-guardado-vos">
          <span className="nc-bubble nc-bubble--q">¿Y por dónde empiezo?</span>
          <Char face={{ ...cast.vos, expression: "curious", gaze: { x: -0.5, y: -0.2 } }} name="Daniela" size={10} />
        </div>
      </div>
    </SlideFrame>
  );
}

/* Tour · Notion */
const tourRows = [
  { text: "Correo a Marta", state: "Sin iniciar", folder: folders.cafe },
  { text: "Brief de la propuesta", state: "En proceso", folder: folders.lumen },
  { text: "Revisar convocatoria", state: "En espera", folder: folders.beca },
  { text: "Plan de siembra", state: "Hecha", folder: folders.eco },
];

export function NotionTourSlide() {
  return (
    <SlideFrame className="nc-scene nc-tour nc-ntour">
      <Eyebrow>Recorrido · Notion · 0:45</Eyebrow>
      <h2 className="dd-heading">Notion: tus tareas, vistas como quieras.</h2>
      <p className="dd-lead">
        Una <strong>base de datos</strong> son filas con propiedades: estado, carpeta, fecha. Cambiás la vista, no los datos.
      </p>
      <div className="nc-stage nc-views" aria-hidden="true">
        <div className="nc-view">
          <span className="nc-view-name">Tabla</span>
          <div className="nc-view-body nc-view-table">
            {tourRows.map((row) => (
              <span key={row.text}>
                <b>{row.text}</b>
                <em>{row.state}</em>
                <Tag folder={row.folder} />
              </span>
            ))}
          </div>
        </div>
        <div className="nc-view">
          <span className="nc-view-name">Tablero</span>
          <div className="nc-view-body nc-view-board">
            {["Sin iniciar", "En proceso", "Hecha"].map((state) => (
              <div key={state}>
                <small>{state}</small>
                {tourRows
                  .filter((row) => row.state === state)
                  .map((row) => (
                    <span key={row.text} className="nc-card" style={{ "--tag": row.folder.color } as CSSProperties}>
                      {row.text}
                    </span>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div className="nc-view">
          <span className="nc-view-name">Galería</span>
          <div className="nc-view-body nc-view-gallery">
            {tourRows.map((row) => (
              <span key={row.text} style={{ "--tag": row.folder.color } as CSSProperties}>
                <i />
                {row.text}
              </span>
            ))}
          </div>
        </div>
        <SlideFace face={{ ...cast.notion, gaze: { x: -0.4, y: -0.5 } }} size={9} className="nc-ntour-face" />
      </div>
    </SlideFrame>
  );
}

/* 04 · El tablero por carpeta */
type BoardCard = { text: string; agent?: boolean };
const lanes: { folder: Folder; cells: BoardCard[][] }[] = [
  { folder: folders.cafe, cells: [[{ text: "Correo a Marta: catálogo y videos" }], [], [{ text: "Lista de precios", agent: true }], [{ text: "Llamada inicial" }]] },
  { folder: folders.lumen, cells: [[], [{ text: "Brief de la propuesta", agent: true }], [{ text: "Resumen de acuerdos", agent: true }], []] },
  { folder: folders.beca, cells: [[{ text: "Revisar convocatoria" }], [], [], [{ text: "Enviar documentos" }]] },
];
const boardStates = ["Sin iniciar", "En proceso", "En revisión", "Hecha"];

export function UnSoloLugarSlide() {
  return (
    <SlideFrame className="nc-scene nc-lugar">
      <Eyebrow>Práctica · 1:15</Eyebrow>
      <h2 className="dd-heading">Un solo lugar, separado por carpeta.</h2>
      <div className="nc-stage">
        <div className="nc-page" aria-hidden="true">
          <div className="nc-page-head">
            <span className="nc-page-icon" />
            <strong>Cerebro de Daniela</strong>
          </div>
          <div className="nc-tabs">
            <span className="is-active">Tablero por carpeta</span>
            <span>Brief diario</span>
            <span>Proyectos</span>
            <span>Notas</span>
          </div>
          <div className="nc-lanes">
            <span />
            {boardStates.map((state) => (
              <span key={state} className="nc-lanes-head">
                {state}
              </span>
            ))}
            {lanes.map((lane) => (
              <div key={lane.folder.name} className="nc-lane">
                <Tag folder={lane.folder} />
                {lane.cells.map((cell, index) => (
                  <div key={index} className="nc-cell">
                    {cell.map((card) => (
                      <span key={card.text} className="nc-card" style={{ "--tag": lane.folder.color } as CSSProperties}>
                        {card.text}
                        {card.agent && <small>Codex</small>}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <DemoBadge />
        </div>
        <div className="nc-lugar-side">
          <span className="nc-lugar-label">Cinco carpetas</span>
          {Object.values(folders).map((folder) => (
            <Tag key={folder.name} folder={folder} />
          ))}
          <span className="nc-lugar-label">Cuatro pestañas</span>
          <p>Tablero, brief diario, proyectos y notas de Granola.</p>
        </div>
      </div>
    </SlideFrame>
  );
}

/* 05 · El estado es el botón */
export function EstadoBotonSlide() {
  const states = [
    { name: "Por validar" },
    { name: "Sin iniciar" },
    { name: "En proceso", who: "Codex trabaja", face: { ...cast.codex, gaze: { x: 0, y: 0.6 } } },
    { name: "En revisión", who: "Codex entrega" },
    { name: "Hecha", who: "Vos aprobás", face: { ...cast.vos, gaze: { x: 0, y: 0.6 } } },
  ];
  return (
    <SlideFrame className="nc-scene nc-estado">
      <Eyebrow>Concepto · 1:30</Eyebrow>
      <h2 className="dd-heading">El estado es el botón.</h2>
      <p className="dd-lead">
        Mover una tarjeta a <strong>En proceso</strong> es pedirle trabajo a Codex. Codex lee Notion y Granola por <strong>MCP</strong>, el puente estándar entre herramientas.
      </p>
      <div className="nc-stage nc-estado-stage">
        <ol className="nc-track" aria-label="Por validar, Sin iniciar, En proceso, En revisión, Hecha">
          {states.map((state) => (
            <li key={state.name} className={state.face ? "has-face" : ""}>
              {state.face && (
                <span className="nc-track-face" aria-hidden="true">
                  <Face config={state.face} />
                </span>
              )}
              <span className="nc-track-dot" />
              <strong>{state.name}</strong>
              {state.who && <span>{state.who}</span>}
            </li>
          ))}
          <i className="nc-track-card" aria-hidden="true" />
        </ol>
        <p className="nc-estado-side">
          Y dos salidas: <b>En espera</b> si está trabada, <b>Descartada</b> si ya no va.
        </p>
      </div>
    </SlideFrame>
  );
}

/* Demo · the recorded walkthrough. Plays only on the live stage, never in thumbnails. */
function StageVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [onStage, setOnStage] = useState(false);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    const video = ref.current;
    const stage = video?.closest<HTMLElement>("[data-motion-enabled]");
    if (!video || !stage) return;
    setOnStage(true);
    video.src = src;
    const sync = () => {
      const isRunning = stage.dataset.motionState === "running";
      setRunning(isRunning);
      if (isRunning) void video.play().catch(() => setRunning(false));
      else video.pause();
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(stage, { attributes: true, attributeFilter: ["data-motion-state"] });
    return () => observer.disconnect();
  }, [src]);
  return (
    <video
      ref={ref}
      className="nc-video"
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      controls={onStage && !running}
      aria-label={label}
    />
  );
}

export function DemoSlide() {
  return (
    <SlideFrame className="nc-scene nc-demo">
      <div className="nc-demo-text">
        <Eyebrow>Demo · 2:00</Eyebrow>
        <h2 className="dd-heading">Una instrucción. Todo en orden.</h2>
        <ol className="nc-demo-steps">
          <li>
            <b>1</b>
            <span>Le das una instrucción a Codex</span>
          </li>
          <li>
            <b>2</b>
            <span>Revisa Notion y Granola</span>
          </li>
          <li>
            <b>3</b>
            <span>Ordena cada acción por carpeta y estado</span>
          </li>
          <li>
            <b>4</b>
            <span>Escribe el brief diario</span>
          </li>
          <li>
            <b>5</b>
            <span>Cada proyecto, con su siguiente paso</span>
          </li>
          <li>
            <b>6</b>
            <span>Las notas, conectadas a su carpeta</span>
          </li>
        </ol>
        <Char face={{ ...cast.codex, gaze: { x: 0.6, y: 0 } }} size={7} className="nc-demo-codex" />
      </div>
      <div className="nc-video-wrap">
        <StageVideo src="/talks/notion-codex/demo.mp4" poster="/talks/notion-codex/demo-poster.jpg" label="Demo grabada: una instrucción a Codex y el resultado en Notion: tablero, brief diario, proyectos y notas" />
      </div>
    </SlideFrame>
  );
}

/* 07 · Brief diario */
export function BriefDiarioSlide() {
  const sections = [
    { title: "Ayer se trabajó en", items: ["Correo a Marta (Café Volcán)", "Brief de la propuesta (Estudio Lumen)"] },
    { title: "En revisión", items: ["Correo a Marta", "Resumen de acuerdos"] },
    { title: "Trabado", items: ["Revisar convocatoria (Beca Norte): falta un documento"] },
    { title: "Toca hoy", items: ["Aprobar lo que está en revisión"] },
    { title: "Reuniones nuevas", items: ["1 nota nueva en Granola"] },
  ];
  return (
    <SlideFrame className="nc-scene nc-brief">
      <div className="nc-brief-text">
        <Eyebrow>Práctica · 1:15</Eyebrow>
        <h2 className="dd-heading">Cada mañana, un brief.</h2>
        <p className="dd-lead">
          Un segundo agente lee lo que se movió en las últimas 24 horas y las reuniones nuevas. El brief cuenta lo que hicieron los agentes.
        </p>
        <Char face={{ ...cast.codex, expression: "happy", rotation: 0, gaze: { x: 0.5, y: 0.1 } }} size={9} className="nc-brief-codex" />
      </div>
      <div className="nc-brief-doc" aria-hidden="true">
        <span className="nc-brief-kicker">Brief diario</span>
        <strong>Brief · 24 oct</strong>
        {sections.map((section) => (
          <div key={section.title} className="nc-brief-sec">
            <span>{section.title}</span>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <DemoBadge />
      </div>
    </SlideFrame>
  );
}

/* 08 · Cierre */
export function CirculoSlide() {
  const ring = [
    { face: cast.granola, name: "Granola", what: "escucha" },
    { face: cast.notion, name: "Notion", what: "muestra" },
    { face: cast.codex, name: "Codex", what: "trabaja" },
    { face: cast.vos, name: "Vos", what: "aprobás" },
  ];
  return (
    <SlideFrame className="nc-scene nc-circulo">
      <Eyebrow>Cierre · 1:00</Eyebrow>
      <h2 className="dd-heading">Codex entrega. Vos aprobás.</h2>
      <div className="nc-stage nc-circulo-stage">
        <div className="nc-ring" aria-hidden="true">
          <i className="nc-ring-track" />
          <i className="nc-ring-dot" />
          {ring.map((item, index) => (
            <Char key={item.name} face={item.face} size={10} className={`nc-ring-char nc-ring-char--${index}`} name={`${item.name} ${item.what}`} />
          ))}
        </div>
        <div className="nc-next">
          <span className="nc-next-label">Cómo funciona</span>
          <ul>
            <li>Movés la tarjeta a En proceso y un webhook de Notion lanza a Codex.</li>
            <li>El brief diario se arma solo cada mañana.</li>
            <li>Cada reunión nueva llega de Granola con su carpeta asignada.</li>
          </ul>
        </div>
      </div>
    </SlideFrame>
  );
}

/* 09 · Regalo */
export const NOTION_GIFT_URL = "https://affiliate.notion.so/ofeyqdmkp0tr";

export function RegaloSlide() {
  return (
    <SlideFrame className="nc-scene nc-regalo">
      <div className="nc-regalo-text">
        <Eyebrow>Un regalo · 0:30</Eyebrow>
        <h2 className="dd-display nc-regalo-title">
          3 meses de <span className="nc-regalo-hl">Notion Business</span>, gratis.
        </h2>
        <p className="dd-lead">
          Armá tu propio cerebro esta semana. Con Business también podés probar los agentes propios de Notion.
        </p>
        <ol className="nc-regalo-steps">
          <li>
            <b>1</b> Escaneá
          </li>
          <li>
            <b>2</b> Entrá con tu cuenta
          </li>
          <li>
            <b>3</b> Listo
          </li>
        </ol>
      </div>
      <div className="nc-regalo-qr">
        <span className="nc-regalo-mark nc-regalo-mark--heart" aria-hidden="true">
          <Mark kind="heart" color={blue} />
        </span>
        <span className="nc-regalo-mark nc-regalo-mark--exclaim" aria-hidden="true">
          <Mark kind="exclaim" color={green} />
        </span>
        <div className="nc-regalo-card">
          <QRCodeSVG value={NOTION_GIFT_URL} size={512} level="M" marginSize={0} bgColor="#ffffff" fgColor="#171717" title="Reclamar 3 meses de Notion Business" />
          <span className="nc-regalo-url">{NOTION_GIFT_URL.replace(/^https?:\/\//, "")}</span>
        </div>
        <SlideFace face={{ ...cast.notion, gaze: { x: -0.4, y: 0.5 } }} size={11} className="nc-regalo-notion" />
        <SlideFace face={{ ...cast.vos, gaze: { x: 0.5, y: 0.3 } }} size={7} className="nc-regalo-vos" />
      </div>
    </SlideFrame>
  );
}
