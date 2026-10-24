import type { CSSProperties } from "react";
import { Mark } from "../../devday/Face";
import { CodexWordmark } from "../../devday/Brand";
import { DEVDAY_EVENT } from "../../devday/event";
import { FACE_PALETTE, FACE_PRESETS, createFace, type FaceConfig } from "../../devday/faces";
import { Crowd } from "../kit/Crowd";
import { closingCrowd, lookAt, type CrowdFace } from "../kit/crowd-layout";
import { Cards, Eyebrow, Pill, SlideFace, SlideFrame } from "../kit/layouts";
import { useSlideInfo } from "../kit/SlideInfo";
import autoshopShot from "./assets/autoshop.webp";
import limaShot from "./assets/lima.webp";
import qrBorea from "./assets/qr-borea.webp";
import rokaShot from "./assets/roka.webp";
import "./agents-api.css";

const { blue, green, orange, purple, charcoal } = FACE_PALETTE;

/**
 * Motion: faces in a <Crowd> bob with the kit's animation. Anything else that should float gets
 * `an-float` (and `--i` to offset its phase). Both only run on slides with `ambientMotion` while
 * the stage is running; reduced motion and print get the still pose (agents-api.css).
 */
const float = (index: number) => ({ "--i": index }) as CSSProperties;

/** The four layers of the talk. Slides 02 and 04 show them; slides 05–12 use them as eyebrows. */
export const LAYERS = [
  { name: "Contexto", body: "Qué sabe el agente", color: blue, face: { ...FACE_PRESETS.curious, color: blue } },
  { name: "Brief", body: "Qué tiene que hacer", color: green, face: { ...FACE_PRESETS.plus, color: green } },
  { name: "Revisión", body: "Cómo sabés que está bien", color: orange, face: { ...FACE_PRESETS.spark, color: orange } },
  { name: "Memoria", body: "Lo aprendido", color: purple, face: { ...FACE_PRESETS.wink, color: purple } },
];

/** The same four lines on slide 06 (the manual) and slide 12 (the manual, one rule later). */
const MANUAL_LINES = [
  { mark: "#", text: "Quiénes somos" },
  { mark: "#", text: "Cómo trabajamos" },
  { mark: "-", text: "Nunca guardes contraseñas aquí" },
  { mark: "-", text: "Antes de entregar, pedí una revisión" },
];

function Topo({ className = "" }: { className?: string }) {
  return <span className={`an-topo ${className}`} aria-hidden="true" />;
}

function Paper({ added }: { added?: string }) {
  return (
    <div className={`an-paper ${added ? "an-paper--later" : ""}`}>
      <span className="an-paper-name">AGENTS.md</span>
      <ul>
        {MANUAL_LINES.map((line) => (
          <li key={line.text}>
            <span className="an-paper-mark">{line.mark}</span>
            {line.text}
          </li>
        ))}
        {added && (
          <li className="an-paper-added">
            <span className="an-paper-mark">+</span>
            {added}
          </li>
        )}
      </ul>
    </div>
  );
}

/* 02 · El recorrido (replaces the kit's text summary). */
export function RouteSlide() {
  const info = useSlideInfo();
  return (
    <SlideFrame className="an-route-slide">
      <Eyebrow>El recorrido · 1:30</Eyebrow>
      <h2 className="dd-heading">Cuatro capas para operar con agentes.</h2>
      <ol className="an-route">
        {LAYERS.map((layer, index) => (
          <li key={layer.name} style={{ "--layer": layer.color } as CSSProperties}>
            <SlideFace face={layer.face} size={9.5} className="an-float" style={float(index)} />
            <span className="an-route-number">{String(index + 1).padStart(2, "0")}</span>
            <strong>{layer.name}</strong>
            <span>{layer.body}</span>
          </li>
        ))}
      </ol>
      <div className="an-route-foot">
        {info?.speaker && (
          <span className="an-speaker-chip">
            <SlideFace face={info.speaker.face} size={3.6} />
            <span>
              <strong>{info.speaker.name}</strong>
              {info.speaker.role}
            </span>
          </span>
        )}
        <Pill color={charcoal}>Al final: un plan para el lunes</Pill>
      </div>
    </SlideFrame>
  );
}

/* 03 · A small specialised human team, augmented by agents. */
const ORBIT = { x: 73, y: 29 };
const humans: CrowdFace[] = [
  { x: ORBIT.x - 4.6, y: ORBIT.y + 0.6, size: 6.4, face: { ...FACE_PRESETS.happy, color: charcoal, rotation: 6 } },
  { x: ORBIT.x + 0.4, y: ORBIT.y - 2.4, size: 7.6, face: { ...FACE_PRESETS.squeeze, color: blue, rotation: -8 } },
  { x: ORBIT.x + 5, y: ORBIT.y + 1.6, size: 6.4, face: { ...FACE_PRESETS.wink, color: orange } },
];
function ring(count: number, radius: number, size: number, offset: number, seed: number): CrowdFace[] {
  return Array.from({ length: count }, (_, index) => {
    const angle = offset + (index / count) * Math.PI * 2;
    const spot = { x: ORBIT.x + Math.cos(angle) * radius, y: ORBIT.y + Math.sin(angle) * radius * 0.92 };
    return { ...spot, size, face: lookAt(createFace(seed + index * 11), spot, ORBIT, 0.6) };
  });
}
const agents = [...ring(8, 13.5, 3.6, -Math.PI / 2 + 0.3, 5), ...ring(13, 21, 3, -Math.PI / 2, 101)];

export function TeamSlide() {
  return (
    <SlideFrame className="an-team">
      <span className="an-orbit-ring an-orbit-ring--outer" aria-hidden="true" />
      <span className="an-orbit-ring an-orbit-ring--inner" aria-hidden="true" />
      <span className="an-orbit-core" aria-hidden="true" />
      <Crowd faces={[...agents, ...humans]} />
      <span className="an-orbit-label an-orbit-label--core">Equipo humano</span>
      <span className="an-orbit-label an-orbit-label--ring">Agentes</span>
      <div className="an-team-text">
        <Eyebrow>Borea Labs · 0:45</Eyebrow>
        <h2 className="dd-heading">Un equipo chico y especializado, amplificado por agentes.</h2>
        <p className="dd-lead">Las personas deciden y revisan. Los agentes ejecutan.</p>
      </div>
    </SlideFrame>
  );
}

/* 04 · Usar IA no te hace AI-native. */
export function InfrastructureSlide() {
  return (
    <SlideFrame className="an-layers-slide">
      <Topo className="an-topo--corner" />
      <Eyebrow>La idea · 0:45</Eyebrow>
      <h2 className="dd-heading">Usar IA no te hace AI-native. Tener infraestructura, sí.</h2>
      <ol className="an-layers">
        {[...LAYERS].reverse().map((layer, index) => (
          <li key={layer.name} style={{ "--layer": layer.color, "--step": index } as CSSProperties}>
            <span className="an-layer-number">{String(4 - index).padStart(2, "0")}</span>
            <strong>{layer.name}</strong>
            <span>{layer.body}</span>
          </li>
        ))}
      </ol>
    </SlideFrame>
  );
}

/* 05 · Sin contexto, un agente empieza como un empleado nuevo. */
export function NewHireSlide() {
  return (
    <SlideFrame className="an-newhire">
      <div className="an-newhire-text">
        <Eyebrow>Contexto · 0:45</Eyebrow>
        <h2 className="dd-heading">Sin contexto, un agente empieza como un empleado nuevo.</h2>
        <p className="dd-lead">No sabe quiénes son tus clientes, cómo trabajás ni qué ya salió mal.</p>
      </div>
      <div className="an-desk" aria-hidden="true">
        <span className="an-desk-q an-desk-q--a an-float" style={float(0)}><Mark kind="question" color={orange} /></span>
        <span className="an-desk-q an-desk-q--b an-float" style={float(2)}><Mark kind="question" color={blue} /></span>
        <span className="an-desk-q an-desk-q--c an-float" style={float(4)}><Mark kind="question" color={green} /></span>
        <SlideFace face={{ ...FACE_PRESETS.curious, color: purple, gaze: { x: 0.05, y: 0.25 } }} size={13} className="an-desk-face" />
        <span className="an-laptop">
          <span className="an-laptop-screen">
            <i />
            <i />
            <i />
          </span>
          <span className="an-laptop-base" />
        </span>
        <span className="an-desk-top" />
      </div>
    </SlideFrame>
  );
}

/* 06 · AGENTS.md es el manual del empleado, para agentes. */
export function ManualSlide() {
  return (
    <SlideFrame className="an-manual">
      <Eyebrow>Contexto · 1:30</Eyebrow>
      <h2 className="dd-heading">AGENTS.md es el manual del empleado, para agentes.</h2>
      <div className="an-manual-pair">
        <Paper />
        <span className="an-equals" aria-hidden="true">=</span>
        <div className="an-booklet">
          <span className="an-booklet-kicker">Bienvenida</span>
          <span className="an-booklet-title">Manual del empleado</span>
          <ol>
            {MANUAL_LINES.map((line) => <li key={line.text}>{line.text}</li>)}
          </ol>
        </div>
      </div>
      <p className="an-caption an-caption--center">
        Un archivo de texto en tu proyecto. <CodexWordmark className="an-inline-codex" /> lo lee antes de empezar.
      </p>
    </SlideFrame>
  );
}

/* 07 · Todo el contexto vive en un solo lugar. Label positions match MAP_REGIONS in HQ's make-assets.js. */
const regions = [
  { name: "Estrategia", x: 0.2, y: 0.38, color: blue },
  { name: "Clientes", x: 0.52, y: 0.24, color: green },
  { name: "Procedimientos", x: 0.8, y: 0.46, color: orange },
  { name: "Decisiones", x: 0.44, y: 0.76, color: purple },
];

export function MapSlide() {
  return (
    <SlideFrame className="an-map-slide">
      <Eyebrow>Contexto · 1:00</Eyebrow>
      <h2 className="dd-heading">Todo el contexto vive en un solo lugar.</h2>
      <div className="an-map-row">
        <div className="an-map">
          <Topo className="an-topo--map" />
          {regions.map((region) => (
            <span
              key={region.name}
              className="an-map-pin"
              style={{ "--x": `${region.x * 100}%`, "--y": `${region.y * 100}%`, "--pin": region.color } as CSSProperties}
            >
              {region.name}
            </span>
          ))}
        </div>
        <dl className="an-outside">
          <dt>Fuera del mapa</dt>
          <dd><strong>Tareas</strong> su propia herramienta</dd>
          <dd><strong>Código</strong> proyectos separados</dd>
          <dd><strong>Contraseñas</strong> nunca aquí</dd>
        </dl>
      </div>
    </SlideFrame>
  );
}

/* 08 · The real brief, summarised: Autoshop's repair-order milestone (docs/briefs/10 in that repo). */
const briefSections = [
  { title: "Objetivo", body: "La pantalla donde el taller arma la orden y la estimación, con menos clics que la competencia." },
  { title: "Leé primero", body: "El manual del proyecto, el plan y el diseño." },
  { title: "Límites", body: "Los cálculos ya existen y están auditados: usalos, no los reescribas." },
  { title: "Listo cuando…", body: "Los totales coinciden con el motor de cálculo, las pruebas pasan y se reporta cuántos clics toma una orden nueva." },
  { title: "Entregable", body: "Los cambios, los resultados y lo que no se cumplió, con el porqué." },
];

export function BriefSlide() {
  return (
    <SlideFrame className="an-brief">
      <div className="an-brief-text">
        <Eyebrow>Brief · 1:30</Eyebrow>
        <h2 className="dd-heading">El trabajo ya no es hacer la tarea. Es escribir el brief.</h2>
        <Pill color={green}>Resumen de un brief real</Pill>
      </div>
      <article className="an-doc" aria-label="Resumen de un brief real">
        <header>
          <span className="an-doc-dots" aria-hidden="true"><i /><i /><i /></span>
          <span>briefs/10-ordenes-de-reparacion.md</span>
        </header>
        <h3>
          Órdenes de reparación
          <span>Autoshop · 19 sep 2026</span>
        </h3>
        {briefSections.map((section) => (
          <section key={section.title}>
            <h4>{section.title}</h4>
            <p>{section.body}</p>
          </section>
        ))}
      </article>
    </SlideFrame>
  );
}

/* 09 · Cuatro rondas de revisión lo aprobaron. Deshacerlo lo rompía. */
export function NotReadySlide() {
  return (
    <SlideFrame className="an-timeline-slide">
      <Eyebrow>Revisión · 1:30</Eyebrow>
      <h2 className="dd-heading">Cuatro rondas de revisión lo aprobaron. Deshacerlo lo rompía.</h2>
      <ol className="an-timeline">
        <li>
          <span className="an-timeline-icon" aria-hidden="true">↺</span>
          <p>Un cambio que debía poder deshacerse</p>
        </li>
        <li>
          <span className="an-checks" aria-hidden="true">{[0, 1, 2, 3].map((n) => <i key={n}>✓</i>)}</span>
          <p>4 rondas de revisión: aprobado</p>
        </li>
        <li className="an-timeline-fail">
          <span className="an-timeline-icon" aria-hidden="true">✕</span>
          <p>Al deshacerlo, dejaba de funcionar</p>
          <span className="an-timeline-finder an-float" style={float(1)}>
            <SlideFace face={{ ...FACE_PRESETS.curious, color: purple, gaze: { x: -0.4, y: 0.35 } }} size={7} />
            <span className="an-timeline-mark"><Mark kind="exclaim" color={green} /></span>
          </span>
        </li>
      </ol>
      <p className="an-caption an-caption--center">Lo encontró un revisor que no había participado.</p>
    </SlideFrame>
  );
}

/* 10 · Quien escribe no aprueba. */
export function ReviewerSlide() {
  return (
    <SlideFrame className="an-split">
      <Eyebrow>Revisión · 1:00</Eyebrow>
      <h2 className="dd-heading">Quien escribe no aprueba.</h2>
      <div className="an-split-row">
        <figure className="an-split-panel" style={{ "--panel": orange } as CSSProperties}>
          <SlideFace face={{ ...FACE_PRESETS.sleepy, color: orange, gaze: { x: 0.35, y: 0.6 } }} size={13} className="an-float" style={float(0)} />
          <figcaption>
            <strong>Autor</strong>
            <span>Hace el trabajo</span>
          </figcaption>
        </figure>
        <figure className="an-split-panel" style={{ "--panel": purple } as CSSProperties}>
          <span className="an-split-face an-float" style={float(3)}>
            <SlideFace face={{ ...FACE_PRESETS.curious, color: purple, gaze: { x: -0.45, y: 0.05 } }} size={13} />
            <span className="an-split-mark"><Mark kind="exclaim" color={green} /></span>
          </span>
          <figcaption>
            <strong>QA</strong>
            <span>Revisa y aprueba</span>
            <span className="an-pills">
              <Pill color={purple}>Otro modelo</Pill>
              <Pill color={purple}>Otra sesión</Pill>
              <Pill color={purple}>Solo lectura</Pill>
            </span>
          </figcaption>
        </figure>
      </div>
    </SlideFrame>
  );
}

/* 11 · Pasaba las 210 pruebas. */
export function TestsSlide() {
  return (
    <SlideFrame className="an-tests">
      <Eyebrow>Revisión · 0:45</Eyebrow>
      <h2 className="dd-heading">Pasaba las 210 pruebas. Igual se podía saltar la verificación en dos pasos.</h2>
      <div className="an-tests-row">
        <div className="an-dots" role="img" aria-label="210 pruebas en verde">
          {Array.from({ length: 210 }, (_, index) => <i key={index} />)}
          <span className="an-dots-count">210 / 210 en verde</span>
        </div>
        <div className="an-hole">
          <i className="an-hole-dot" aria-hidden="true" />
          <p>
            <strong>Fuera de las pruebas</strong>
            Saltar la verificación en dos pasos
          </p>
        </div>
      </div>
      <p className="an-caption">
        Una revisión con <CodexWordmark className="an-inline-codex" /> lo encontró antes de cerrar la corrección.
      </p>
    </SlideFrame>
  );
}

/* 12 · Un error se corrige. La regla queda escrita. */
export function MemorySlide() {
  return (
    <SlideFrame className="an-memory">
      <Eyebrow>Memoria · 1:00</Eyebrow>
      <h2 className="dd-heading">
        Un error se corrige.
        <br />
        La regla queda escrita.
      </h2>
      <div className="an-memory-row">
        <article className="an-incident">
          <span className="an-incident-tag">Incidente · 19 sep 2026</span>
          <p>Se publicó un cambio sin preparar la base de datos. Todas las páginas con sesión fallaron.</p>
        </article>
        <span className="an-arrow" aria-hidden="true">→</span>
        <div className="an-memory-paper">
          <Paper added="Primero se aplica el cambio en la base de datos; después se publica el código." />
          <span className="an-added-tag">Regla nueva · 19 sep 2026</span>
        </div>
      </div>
    </SlideFrame>
  );
}

/* 13 · Tres productos, el mismo ciclo. Captures use demo data; Autoshop is its dark theme. */
const products = [
  { name: "Autoshop", body: "De cero a demo guiada en un día", src: autoshopShot, focus: "left top" },
  { name: "Lima", body: "Plataforma de licencias en producción", src: limaShot, focus: "left top" },
  { name: "RoKa IS", body: "Sistema de gestión de importaciones", src: rokaShot, focus: "left top" },
];

export function ProductsSlide() {
  return (
    <SlideFrame className="an-products">
      <Eyebrow>Resultado · 1:15</Eyebrow>
      <h2 className="dd-heading">Tres productos, el mismo ciclo.</h2>
      <ul className="an-shots">
        {products.map((product) => (
          <li key={product.name}>
            <span className="an-shot" style={{ "--focus": product.focus } as CSSProperties}>
              <img src={product.src} alt={`Captura de ${product.name} con datos de prueba`} draggable={false} />
            </span>
            <strong>{product.name}</strong>
            <span>{product.body}</span>
          </li>
        ))}
      </ul>
    </SlideFrame>
  );
}

/* 14 · El lunes: elegí una tarea y delegala. */
export function MondaySlide() {
  return (
    <SlideFrame className="an-monday">
      <Topo className="an-topo--corner" />
      <Eyebrow>Para empezar · 1:15</Eyebrow>
      <h2 className="dd-heading">El lunes: elegí una tarea y delegala.</h2>
      <Cards
        columns={4}
        items={[
          { tag: "01", title: "Escribí el contexto", color: blue },
          { tag: "02", title: "Escribí el brief: cuándo está listo", color: green },
          { tag: "03", title: "Delegá", color: orange },
          { tag: "04", title: "Revisá y anotá lo aprendido", color: purple, face: { ...FACE_PRESETS.happy, color: charcoal, rotation: -10 } },
        ]}
      />
    </SlideFrame>
  );
}

/* 15 · Preguntas + QR. Same crowd and type as the kit's ClosingSlide, plus the contact QR. */
export function QuestionsSlide() {
  const info = useSlideInfo();
  const face: FaceConfig = info?.speaker ? { ...info.speaker.face, gaze: { x: -0.3, y: 0.35 } } : FACE_PRESETS.squeeze;
  return (
    <SlideFrame className="dd-closing an-closing" footer={false}>
      <Crowd faces={closingCrowd({ x: 32, y: 18 })} className="dd-closing-crowd" />
      <Eyebrow>{info?.deckTitle}</Eyebrow>
      <h1 className="dd-display">
        ¿Preguntas?
        <SlideFace face={face} size={9} className="dd-closing-face an-float" style={float(2)} />
      </h1>
      <p className="dd-lead">
        Gracias. La conversación sigue con <strong>{DEVDAY_EVENT.hashtag}</strong>.
      </p>
      <aside className="an-qr">
        <span className="an-qr-code">
          <img src={qrBorea} alt="Código QR a borealabs.com" draggable={false} />
        </span>
        <strong>Hablemos</strong>
        <span>borealabs.com</span>
      </aside>
    </SlideFrame>
  );
}
