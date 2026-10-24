import type { ReactNode } from "react";
import { Mark } from "../../devday/Face";
import { FACE_PALETTE, FACE_PRESETS } from "../../devday/faces";
import { speakers } from "../../devday/speakers";
import { DEVDAY_EVENT } from "../../devday/event";
import { OpenAIWordmark } from "../../devday/Brand";
import { Crowd } from "../kit/Crowd";
import { speakerCluster } from "../kit/crowd-layout";
import { Cards, Eyebrow, Pill, SlideFace, SlideFrame, Steps } from "../kit/layouts";
import "./decisions-api.css";

const { blue, gray, purple } = FACE_PALETTE;

const speaker = speakers.frank;
const ACCENT = "#9146ff";

/** Slide 01: portada de la charla (reemplaza la portada genérica para el título en dos líneas). */
export function AiCodingCoverSlide() {
  const cluster = speakerCluster(speaker.face);
  return (
    <SlideFrame className="dd-talk-cover">
      <Crowd faces={cluster.faces} marks={cluster.marks} className="dd-talk-cover-crowd" />
      <div className="dd-talk-cover-top">
        <OpenAIWordmark className="dd-talk-cover-openai" />
        <span className="dd-talk-cover-rule" aria-hidden="true" />
        <span className="dd-talk-cover-event">
          {DEVDAY_EVENT.name} {DEVDAY_EVENT.city}
        </span>
      </div>
      <Pill color={ACCENT}>AI Coding</Pill>
      <h1 className="dd-display">
        Generar código es fácil.
        <span className="fc-cover-sub">Construir software es otra historia.</span>
      </h1>
      <div className="dd-talk-cover-speaker">
        <SlideFace face={speaker.face} size={4.6} />
        <div>
          <strong>{speaker.name}</strong>
          <span>{speaker.role ?? "Speaker"}</span>
        </div>
      </div>
    </SlideFrame>
  );
}

/** «¿La IA nos va a reemplazar?»: la pregunta que abre la charla. */
export function ReemplazarSlide() {
  return (
    <SlideFrame className="fc-replace">
      <span className="fc-replace-mark" aria-hidden="true">
        <Mark kind="question" color={purple} />
      </span>
      <SlideFace
        face={{ ...FACE_PRESETS.sleepy, color: gray, gaze: { x: -0.6, y: 0.1 } }}
        size={9}
        className="fc-replace-face"
      />
      <h2 className="fc-replace-q">¿La IA nos va a reemplazar?</h2>
      <p className="fc-replace-o">¿O va a transformar la manera en que trabajamos?</p>
    </SlideFrame>
  );
}

/** Antes / ahora: la IA transforma las tareas, no elimina el trabajo. */
export function TareasSlide() {
  return (
    <SlideFrame className="fc-tareas">
      <Eyebrow>Contexto · 1:30</Eyebrow>
      <h2 className="dd-heading">La IA está transformando nuestras tareas</h2>
      <p className="dd-lead">
        No dejamos de programar. <strong>Cambia cómo invertimos nuestro tiempo.</strong>
      </p>
      <div className="fc-shift">
        <div className="fc-shift-col">
          <h3>Antes</h3>
          <ul>
            <li>Investigar</li>
            <li>Escribir código</li>
            <li>Depurar</li>
            <li>Documentar</li>
            <li>Probar</li>
          </ul>
        </div>
        <span className="fc-shift-arrow" aria-hidden="true">
          →
        </span>
        <div className="fc-shift-col fc-shift-col--now">
          <h3>Ahora</h3>
          <ul>
            <li>Definir</li>
            <li>Dirigir</li>
            <li>Construir</li>
            <li>Validar</li>
            <li>Mejorar</li>
          </ul>
        </div>
      </div>
    </SlideFrame>
  );
}

/** Escribir código ≠ desarrollar software. */
export function CodigoVsSoftwareSlide() {
  return (
    <SlideFrame className="fc-vs">
      <div className="fc-vs-row">
        <p className="fc-vs-term">Escribir código</p>
        <span className="fc-vs-neq" aria-hidden="true">
          ≠
        </span>
        <p className="fc-vs-term fc-vs-term--goal">Desarrollar software</p>
      </div>
      <p className="fc-vs-lead">
        El código es el medio. <strong>La solución es el objetivo.</strong>
      </p>
    </SlideFrame>
  );
}

/** La tesis central: la IA escribe código; la responsabilidad sigue siendo nuestra. */
export function ResponsabilidadSlide() {
  return (
    <SlideFrame className="fc-resp">
      <p className="fc-resp-line">La IA puede escribir código.</p>
      <h2 className="fc-resp-main">
        Pero construir buen software sigue siendo <span className="slide-purple">nuestra responsabilidad.</span>
      </h2>
    </SlideFrame>
  );
}

/** El sistema de trabajo de la charla: las cinco prácticas. */
export function CincoPracticasSlide() {
  return (
    <SlideFrame>
      <Eyebrow>Prácticas · 0:45</Eyebrow>
      <h2 className="dd-heading">5 prácticas para desarrollar mejor con Codex</h2>
      <p className="dd-lead">
        No se trata de escribir mejores prompts. <strong>Se trata de trabajar mejor.</strong>
      </p>
      <Steps
        columns={5}
        items={[
          { title: "Instrucciones", body: "Decile al agente cómo trabajás." },
          { title: "Contexto", body: "Que conozca tu proyecto." },
          { title: "Herramientas", body: "Dale acceso a lo que necesita." },
          { title: "Especificaciones", body: "Definí antes de construir." },
          { title: "Validación", body: "Verificá el resultado." },
        ]}
      />
    </SlideFrame>
  );
}

/** Molde común de las cinco prácticas: número, título, bajada, contenido y frase de cierre. */
function Practice({
  index,
  title,
  lede,
  line,
  children,
}: {
  index: string;
  title: string;
  lede: string;
  line: ReactNode;
  children: ReactNode;
}) {
  return (
    <SlideFrame className="fc-practice">
      <Eyebrow>Práctica {index} / 05 · 1:00</Eyebrow>
      <h2 className="fc-practice-title">{title}</h2>
      <p className="fc-practice-lede">{lede}</p>
      <div className="fc-practice-body">{children}</div>
      <p className="fc-practice-line">{line}</p>
    </SlideFrame>
  );
}

export function InstruccionesSlide() {
  return (
    <Practice
      index="01"
      title="Instrucciones"
      lede="Define cómo debe trabajar tu agente."
      line={
        <>
          No hagas que tu agente <strong>adivine cómo trabajás.</strong>
        </>
      }
    >
      <div className="fc-file">
        <div className="fc-file-head">
          <span className="fc-file-name">AGENTS.md</span>
          <Pill color={purple}>Ejemplo</Pill>
        </div>
        <ul className="fc-file-list">
          <li>Convenciones</li>
          <li>Arquitectura</li>
          <li>Estándares</li>
          <li>Reglas del proyecto</li>
        </ul>
      </div>
    </Practice>
  );
}

export function ContextoSlide() {
  return (
    <Practice
      index="02"
      title="Contexto"
      lede="La IA necesita conocer tu proyecto."
      line={
        <>
          El problema no siempre es que la IA no sepa programar. <strong>A veces no conoce nuestro proyecto.</strong>
        </>
      }
    >
      <Cards
        columns={4}
        items={[
          { title: "Documentación", body: "Lo que ya está escrito del proyecto." },
          { title: "Requerimientos", body: "Qué debe hacer y para quién." },
          { title: "Arquitectura", body: "Cómo está organizado el sistema." },
          { title: "Reglas de negocio", body: "Las decisiones que no se negocian." },
        ]}
      />
    </Practice>
  );
}

export function HerramientasSlide() {
  return (
    <Practice
      index="03"
      title="Herramientas"
      lede="Dale a tu agente las herramientas correctas."
      line={
        <>
          Un agente es más útil cuando puede actuar <strong>con el contexto y los permisos adecuados.</strong>
        </>
      }
    >
      <Cards
        columns={3}
        items={[
          { title: "Codex", body: "El agente que ejecuta el trabajo." },
          { title: "MCP", body: "Servicios y herramientas de desarrollo." },
          { title: "Integraciones", body: "Repositorios y documentación." },
        ]}
      />
    </Practice>
  );
}

export function EspecificacionesSlide() {
  return (
    <Practice
      index="04"
      title="Especificaciones"
      lede="Primero define. Después construye."
      line={
        <>
          La calidad de una solución <strong>comienza con la claridad del problema.</strong>
        </>
      }
    >
      <div className="fc-spec">
        <Pill color={purple}>Spec-Driven Development</Pill>
        <Steps
          columns={4}
          items={[
            { title: "Problema", body: "Qué se quiere resolver." },
            { title: "Requerimientos", body: "Qué debe cumplir la solución." },
            { title: "Plan", body: "Cómo se va a construir." },
            { title: "Implementación", body: "El agente ejecuta el plan." },
          ]}
        />
      </div>
    </Practice>
  );
}

export function ValidacionSlide() {
  return (
    <Practice
      index="05"
      title="Validación"
      lede="Confía en el proceso. Verifica el resultado."
      line={
        <>
          Delegar la implementación <strong>no significa delegar la responsabilidad.</strong>
        </>
      }
    >
      <Cards
        columns={4}
        items={[
          { title: "Code review", body: "Revisar lo que el agente propone." },
          { title: "Testing", body: "Probar que funciona como se esperaba." },
          { title: "Seguridad", body: "Verificar que no introduce riesgos." },
          { title: "Criterios de aceptación", body: "La definición de «terminado»." },
        ]}
      />
    </Practice>
  );
}

/** Cierre: aprender, construir, compartir; con los enlaces de Frank. */
export function CierreSlide() {
  return (
    <SlideFrame className="fc-cierre">
      <Eyebrow>Cierre · 1:00</Eyebrow>
      <h2 className="fc-cierre-main">
        <span className="fc-cierre-muted">El futuro no se trata de escribir más código.</span>
        Se trata de construir <span className="slide-purple">mejores soluciones.</span>
      </h2>
      <p className="fc-path">
        <span>Aprender</span>
        <i aria-hidden="true">→</i>
        <span>Construir</span>
        <i aria-hidden="true">→</i>
        <span>Compartir</span>
      </p>
      <div className="fc-contact">
        <SlideFace face={speaker.face} size={3.4} />
        <div className="fc-contact-text">
          <strong>{speaker.name}</strong>
          <span>frankcalderon.dev · @frankcalderondev</span>
        </div>
      </div>
      <SlideFace
        face={{ ...FACE_PRESETS.curious, color: blue, gaze: { x: -0.4, y: -0.2 }, rotation: -6 }}
        size={8}
        className="fc-cierre-face"
      />
    </SlideFrame>
  );
}
