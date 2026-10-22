import { Face } from "../../devday/Face";
import { FACE_PALETTE, FACE_PRESETS } from "../../devday/faces";
import { DEVDAY_EVENT } from "../../devday/event";
import { AiLabsLogo, CodexWordmark, OpenAIWordmark } from "../../devday/Brand";
import { talkDecks } from "../talks";
import { Crowd } from "../kit/Crowd";
import type { CrowdFace } from "../kit/crowd";
import { Cards, Eyebrow, Pill, SlideFace, SlideFrame, Steps } from "../kit/layouts";
import "./event.css";

const { blue, green, orange, purple, gray, charcoal } = FACE_PALETTE;

const welcomeCrowd: CrowdFace[] = [
  { x: 74, y: 20, size: 17, face: { ...FACE_PRESETS.happy, color: charcoal, rotation: -10 } },
  { x: 88.5, y: 12, size: 10, face: { ...FACE_PRESETS.squeeze, color: blue } },
  { x: 90, y: 31, size: 13, face: { ...FACE_PRESETS.plus, color: green, gaze: { x: -0.3, y: 0.2 } } },
  { x: 64, y: 34, size: 8, face: { ...FACE_PRESETS.sleepy, color: orange, gaze: { x: 0.2, y: -0.6 } } },
  { x: 78, y: 41, size: 6.5, face: { ...FACE_PRESETS.curious, color: purple, gaze: { x: -0.1, y: -0.4 } } },
  { x: 99, y: 46, size: 12, face: { ...FACE_PRESETS.spark, color: gray, gaze: { x: -0.4, y: -0.3 } } },
];

export function WelcomeSlide() {
  return (
    <SlideFrame className="ev-welcome">
      <Crowd faces={welcomeCrowd} />
      <OpenAIWordmark className="ev-welcome-openai" />
      <h1 className="dd-display">
        Una tarde para
        <br />
        construir con IA.
      </h1>
      <p className="dd-lead">
        Los anuncios de DevDay, contados por la comunidad de {DEVDAY_EVENT.city}. Seis charlas cortas, demos y tiempo para conocernos.
      </p>
      <ul className="ev-facts">
        <li>{DEVDAY_EVENT.dateLong}</li>
        <li>{DEVDAY_EVENT.venue}</li>
        <li className="ev-facts-org">
          Organiza <AiLabsLogo className="ev-facts-ailabs" />
        </li>
      </ul>
    </SlideFrame>
  );
}

export function AnnouncementsSlide() {
  return (
    <SlideFrame className="ev-announcements">
      <Eyebrow>DevDay 2026 · 29 de septiembre</Eyebrow>
      <h2 className="dd-heading">Lo que trajo DevDay, en seis piezas.</h2>
      <Cards
        columns={3}
        items={[
          { tag: "Modelo", title: "GPT-6.1 Sol", body: "Código agéntico y uso de computadora a menor costo.", color: blue, face: FACE_PRESETS.squeeze },
          { tag: "Modelo", title: "GPT-6 Astra", body: "El modelo más capaz; el motor detrás de Dots.", color: charcoal, face: { ...FACE_PRESETS.happy, color: "#3a3b35" } },
          { tag: "ChatGPT", title: "Dots", body: "Agentes siempre activos, con su propia computadora en la nube.", color: orange, face: { ...FACE_PRESETS.wink, color: "#ffa04d" } },
          { tag: "Codex", title: "Codex en la nube", body: "Tareas que siguen corriendo con la laptop cerrada.", color: gray, face: { ...FACE_PRESETS.spark, color: "#c9c9c6" } },
          { tag: "API", title: "Agents API", body: "Computer use y varios agentes, con la infraestructura administrada.", color: green, face: { ...FACE_PRESETS.plus, color: "#33c46c" } },
          { tag: "API · preview", title: "Decisions API", body: "Luna elige entre respuestas predefinidas, rápido y medible.", color: purple, face: { ...FACE_PRESETS.curious, color: "#a874ff" } },
        ]}
      />
    </SlideFrame>
  );
}

export function AgendaSlide() {
  return (
    <SlideFrame className="ev-agenda">
      <Eyebrow>La agenda de hoy</Eyebrow>
      <h2 className="dd-heading">Seis charlas, quince minutos cada una.</h2>
      <ol className="ev-agenda-list">
        {talkDecks.map((talk, index) => (
          <li key={talk.slug}>
            <span className="ev-agenda-number">{String(index + 1).padStart(2, "0")}</span>
            {talk.speaker && (
              <span className="ev-agenda-face" aria-hidden="true">
                <Face config={talk.speaker.face} />
              </span>
            )}
            <div>
              <strong>{talk.title}</strong>
              <span>
                {talk.speaker?.name} · {talk.category}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </SlideFrame>
  );
}

export function JoinSlide() {
  return (
    <SlideFrame className="ev-join">
      <Eyebrow>Participá desde tu teléfono</Eyebrow>
      <h2 className="dd-heading">Cada charla tiene su guía y sus preguntas.</h2>
      <Steps
        items={[
          { title: "Escaneá el QR", body: "Aparece en pantalla al empezar cada charla. No hace falta registrarte." },
          { title: "Seguí la guía", body: "Cambia con cada slide. Podés leer a tu ritmo y volver al vivo cuando quieras." },
          { title: "Respondé", body: "Cuando el speaker abre una encuesta, te llega un aviso y ves los resultados en vivo." },
        ]}
      />
    </SlideFrame>
  );
}

export function AfterSlide() {
  return (
    <SlideFrame className="ev-after">
      <Eyebrow>Después de las charlas</Eyebrow>
      <p className="ev-hashtag">
        <span className="ev-hash">#</span>DevDayC
        <span className="ev-hashtag-o">
          <Face config={{ ...FACE_PRESETS.happy, color: blue, rotation: 0 }} />
        </span>
        mmunity
      </p>
      <p className="dd-lead">
        La conversación sigue en la terraza. Contá qué te llevás y etiquetá a quien conociste hoy.
      </p>
      <div className="ev-after-brands">
        <Pill color={green}>Codex en acción</Pill>
        <CodexWordmark className="ev-after-codex" />
        <AiLabsLogo className="ev-after-ailabs" />
      </div>
      <SlideFace face={{ ...FACE_PRESETS.plus, color: green, gaze: { x: -0.3, y: -0.2 } }} size={13} className="ev-after-face" />
    </SlideFrame>
  );
}
