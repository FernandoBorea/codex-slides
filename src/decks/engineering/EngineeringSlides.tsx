import type { ReactNode } from "react";
import { Bot } from "../../components/Bot";
import "./engineering.css";

const roles = [
  {
    name: "Research",
    job: "Investiga preguntas y trae fuentes",
    output: "Opciones para decidir",
    color: "blue",
    shape: "triangle",
    seed: 201,
  },
  {
    name: "PO",
    job: "Acuerda prioridades y alcance con vos",
    output: "Decisiones y seguimiento",
    color: "teal",
    shape: "flower",
    seed: 202,
  },
  {
    name: "Builder",
    job: "Implementa y prepara los cambios",
    output: "Trabajo listo para revisar",
    color: "orange",
    shape: "round",
    seed: 203,
  },
  {
    name: "QE",
    job: "Anticipa riesgos y verifica el producto",
    output: "Evidencia para el equipo",
    color: "pink",
    shape: "square",
    seed: 204,
  },
] as const;

function Frame({
  number,
  label,
  title,
  footer,
  children,
  className = "",
}: {
  number: number;
  label: string;
  title: ReactNode;
  footer: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`slide-canvas eng-slide ${className}`}>
      <div className="slide-eyebrow">Grok Bot for Engineering / {label}</div>
      <h2 className="eng-title">{title}</h2>
      <div className="eng-content">{children}</div>
      <div className="slide-footer">
        <span>{footer}</span>
        <span>{String(number).padStart(2, "0")} / 20</span>
      </div>
    </section>
  );
}

function RoleBot({
  role,
  className = "",
}: {
  role: (typeof roles)[number];
  className?: string;
}) {
  return (
    <Bot
      className={`eng-role-bot ${className}`}
      seed={role.seed}
      color={`var(--slide-${role.color})`}
      shape={role.shape}
    />
  );
}

function Arrow() {
  return (
    <span className="eng-arrow" aria-hidden="true">
      →
    </span>
  );
}

function ChatMessage({
  role,
  children,
}: {
  role?: (typeof roles)[number];
  children: ReactNode;
}) {
  return (
    <div className={`eng-message ${role ? "" : "eng-message-human"}`}>
      {role && <RoleBot role={role} />}
      <div className="eng-message-body">
        <span className={role ? `slide-${role.color}` : "eng-human-name"}>
          {role?.name ?? "Vos"}
        </span>
        <p>{children}</p>
      </div>
    </div>
  );
}

function Chat({
  children,
  label = "Grupo / Nuestro producto",
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <figure className="eng-chat-window">
      <figcaption>
        {label}
        <span>Conversación recreada</span>
      </figcaption>
      {children}
    </figure>
  );
}

export function EngineeringWelcomeSlide() {
  return (
    <section className="slide-canvas eng-slide eng-cover">
      <div className="slide-eyebrow">
        Walter Morales / 25 minutos + 5 de preguntas
      </div>
      <h1 className="eng-cover-title">
        Grok Bot
        <br />
        for Engineering<span className="slide-orange">.</span>
      </h1>
      <p className="eng-cover-caption">
        Un punto de entrada para tu producto.
        <br />
        Un equipo para hacerlo avanzar.
      </p>
      <div className="eng-cover-team" aria-label="Research, PO, Builder y QE">
        {roles.map((role) => (
          <div key={role.name}>
            <RoleBot role={role} />
            <span>{role.name}</span>
          </div>
        ))}
      </div>
      <div className="slide-footer">
        <span>Entender · decidir · construir · comprobar · mejorar</span>
        <span>01 / 20</span>
      </div>
    </section>
  );
}

export function SpeakerSlide() {
  return (
    <Frame
      number={2}
      label="Un gusto, soy Walter"
      title={
        <>
          Walter
          <br />
          Morales<span className="slide-orange">.</span>
        </>
      }
      footer="Hoy les comparto cómo trabajo con un equipo de bots."
      className="eng-speaker-slide"
    >
      <div className="eng-speaker-roles">
        <p>
          <span>Ai Labs</span>
          <strong>Co-Founder</strong>
        </p>
        <p>
          <span>SpaceXAI Ambassadors</span>
          <strong>Regional Lead</strong>
        </p>
        <p>
          <span>Mi trabajo</span>
          <strong>AI Product Engineer</strong>
        </p>
      </div>
      <img
        className="eng-speaker-portrait"
        src={`${import.meta.env.BASE_URL}speakers/walter-morales.png`}
        alt="Retrato de Walter Morales"
        width={744}
        height={971}
        decoding="async"
        draggable={false}
      />
    </Frame>
  );
}

export function OverviewSlide() {
  return (
    <Frame
      number={3}
      label="Empecemos por el principio"
      title="¿Qué es Grok Bot?"
      footer="Le delegás un objetivo; el bot usa herramientas y vuelve con trabajo que podés revisar."
      className="eng-overview-slide"
    >
      <p className="eng-lead">
        Agentes de IA persistentes a los que
        <br />
        delegás trabajo por conversación.
      </p>
      <div className="eng-entry-flow">
        <div>
          <span className="eng-overline slide-orange">01 / Un encargo</span>
          <h3>
            “Revisá lo pendiente
            <br />
            para esta entrega.”
          </h3>
          <p>
            Le contás qué necesitás
            <br />y dónde está el trabajo.
          </p>
        </div>
        <Arrow />
        <div className="eng-entry-bot">
          <RoleBot role={roles[1]} />
          <h3>Consulta y trabaja</h3>
          <p>Apps conectadas · navegador · terminal</p>
        </div>
        <Arrow />
        <div>
          <span className="eng-overline slide-teal">03 / Una devolución</span>
          <h3>
            Prioridades, motivos
            <br />y bloqueos
          </h3>
          <p>
            Revisás el resultado
            <br />y decidís cómo seguir.
          </p>
        </div>
      </div>
    </Frame>
  );
}

export function ComputerSlide() {
  return (
    <Frame
      number={4}
      label="Dónde hace el trabajo"
      title="Una computadora en la nube."
      footer="Puede seguir trabajando con tu laptop cerrada; si necesita un acceso o una decisión, te pide ayuda."
      className="eng-computer-slide"
    >
      <figure
        className="eng-computer-layout"
        aria-label="Tus bots usan una computadora persistente compartida con navegador, archivos y terminal"
      >
        <div className="eng-computer-team">
          <span className="eng-overline">Tus bots</span>
          <div className="eng-computer-bots">
            {roles.map((role) => (
              <div key={role.name}>
                <RoleBot role={role} />
                <span>{role.name}</span>
              </div>
            ))}
          </div>
        </div>
        <Arrow />
        <div className="eng-bot-computer">
          <div className="eng-computer-toolbar">
            <span className="slide-teal">●</span>
            <span>Computadora persistente / Cloud</span>
          </div>
          <div className="eng-computer-tools">
            <div>
              <span aria-hidden="true">↗</span>
              <h3>Navegador</h3>
              <p>Recorrer y usar apps</p>
            </div>
            <div>
              <span aria-hidden="true">▤</span>
              <h3>Archivos</h3>
              <p>Guardar el trabajo</p>
            </div>
            <div>
              <span aria-hidden="true">&gt;_</span>
              <h3>Terminal</h3>
              <p>Ejecutar comandos</p>
            </div>
          </div>
          <p className="eng-computer-shared">
            Tus bots comparten esta computadora,
            <br />
            sus archivos y las sesiones de las apps.
          </p>
        </div>
      </figure>
      <div className="eng-computer-access">
        <div>
          <strong>Conectores</strong>
          <p>Acceso a datos y acciones de apps compatibles.</p>
        </div>
        <div>
          <strong>Navegador</strong>
          <p>Interacción con pantallas y flujos visuales.</p>
        </div>
      </div>
    </Frame>
  );
}

export function BotProfileSlide() {
  return (
    <Frame
      number={5}
      label="Qué hace que sea tu bot"
      title="Un bot conserva su rol y su contexto."
      footer="Creación: New → Create new Bot → describí su trabajo. Después podés ajustar sus instrucciones."
      className="eng-profile-slide"
    >
      <div className="eng-profile-layout">
        <div className="eng-profile-identity">
          <RoleBot role={roles[1]} />
          <h3>PO</h3>
          <p>Product Owner de nuestro producto</p>
          <div className="eng-profile-memory">
            <strong>Memoria y conversaciones propias</strong>
            <p>
              Conserva contexto entre encargos.
              <br />
              Cada bot tiene el suyo.
            </p>
          </div>
        </div>
        <div className="eng-profile-definition">
          <span className="eng-overline slide-teal">
            Instrucciones duraderas / Ejemplo
          </span>
          <dl>
            <div>
              <dt>Responsabilidad</dt>
              <dd>Proponer prioridades y mantener el seguimiento.</dd>
            </div>
            <div>
              <dt>Contexto</dt>
              <dd>Para quién construimos y qué hace valiosa una entrega.</dd>
            </div>
            <div>
              <dt>Límite</dt>
              <dd>Consultar antes de cambiar el alcance acordado.</dd>
            </div>
          </dl>
          <p className="eng-profile-task">
            <span>El encargo de hoy</span>
            “Revisá las prioridades de esta semana.”
          </p>
        </div>
      </div>
    </Frame>
  );
}

export function DelegationSlide() {
  return (
    <Frame
      number={6}
      label="Cómo se lo pedís"
      title="Un encargo claro, una entrega revisable."
      footer="Los datos que cambian se consultan en la fuente: la memoria del bot no reemplaza el estado de Linear."
      className="eng-delegation-slide"
    >
      <div className="eng-delegation-layout">
        <dl className="eng-delegation-brief">
          <div>
            <dt>Objetivo</dt>
            <dd>Elegir qué sigue</dd>
          </div>
          <div>
            <dt>Fuente</dt>
            <dd>Pendientes en Linear</dd>
          </div>
          <div>
            <dt>Entrega</dt>
            <dd>Tres prioridades con motivos</dd>
          </div>
          <div>
            <dt>Límite</dt>
            <dd>Proponer antes de cambiar</dd>
          </div>
        </dl>
        <Chat label="1:1 / PO">
          <ChatMessage>
            Revisá los pendientes de esta entrega en Linear. Proponé tres
            prioridades, con sus motivos y bloqueos. No modifiques los tickets.
          </ChatMessage>
          <ChatMessage role={roles[1]}>
            Voy a revisar el estado y las dependencias. Te devuelvo una
            propuesta para que decidamos.
          </ChatMessage>
          <ChatMessage role={roles[1]}>
            Primero, aceptar invitaciones para completar el ingreso. Después,
            explicar las vencidas para recuperar el acceso y revisar permisos
            para evitar accesos indebidos. Bloqueo: falta el proveedor de email.
          </ChatMessage>
        </Chat>
      </div>
    </Frame>
  );
}

export function ContinuitySlide() {
  return (
    <Frame
      number={7}
      label="Cómo sigue trabajando"
      title="Un mensaje, una rutina u otro bot."
      footer="Conversás 1:1 o en grupos. Los bots pueden pedir ayuda entre sí y solicitar tu intervención."
      className="eng-continuity-slide"
    >
      <div className="eng-continuity-layout">
        <div className="eng-work-triggers">
          <div>
            <span className="eng-overline slide-orange">Un mensaje tuyo</span>
            <h3>“Revisá los pendientes.”</h3>
          </div>
          <div>
            <span className="eng-overline slide-blue">Una rutina / Cuándo</span>
            <h3>Cada día hábil a las 9:00</h3>
            <p>Un resumen de prioridades y bloqueos.</p>
          </div>
          <div>
            <span className="eng-overline slide-pink">Otro bot pide ayuda</span>
            <h3>“PO, encontré un bloqueo.”</h3>
          </div>
        </div>
        <Arrow />
        <div className="eng-repeatable-work">
          <RoleBot role={roles[1]} />
          <div>
            <span className="eng-overline slide-teal">Una skill / Cómo</span>
            <h3>Un procedimiento reutilizable</h3>
            <p>
              Consultar el estado, detectar bloqueos
              <br />y preparar una devolución con fuentes.
            </p>
          </div>
          <div className="eng-work-return">
            <span aria-hidden="true">↳</span>
            <p>El resultado vuelve a la conversación.</p>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function SdlcSlide() {
  const stages = [
    ["Entender", "Qué necesita la gente", "blue"],
    ["Definir", "Qué vamos a resolver", "teal"],
    ["Construir", "Hacer el cambio", "orange"],
    ["Comprobar", "Ver si cumple", "pink"],
    ["Entregar", "Revisar y publicar", "orange"],
    ["Aprender", "Qué sigue", "teal"],
  ];
  return (
    <Frame
      number={8}
      label="El producto completo"
      title="El contexto acompaña todo el ciclo."
      footer="SDLC: el ciclo de vida del desarrollo de software"
    >
      <div className="eng-context-strip">
        <span>Para quién construimos</span>
        <span>Objetivo actual</span>
        <span>Decisiones y límites</span>
        <span>Estado del trabajo</span>
      </div>
      <figure
        className="eng-lifecycle"
        aria-label="Ciclo de desarrollo, desde entender hasta aprender; los hallazgos vuelven al equipo"
      >
        <ol className="eng-stages">
          {stages.map(([name, detail, color], i) => (
            <li key={name}>
              <span className={`eng-stage-number slide-${color}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{name}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
        <div className="eng-return-line">
          <span>Lo que aprendemos vuelve a la conversación</span>
        </div>
        <figcaption>
          Grok Bot es el lugar desde donde orientás y seguís ese trabajo.
        </figcaption>
      </figure>
    </Frame>
  );
}

export function RolesSlide() {
  return (
    <Frame
      number={9}
      label="Armar el equipo"
      title="Cuatro responsabilidades compartiendo contexto."
      footer="PO: Product Owner · QE: Quality Engineer · Vos orientás el producto y decidís la entrega."
      className="eng-roles-slide"
    >
      <div className="eng-team-context">
        <span aria-hidden="true">↳</span>
        <div>
          <strong>Un producto, responsabilidades claras</strong>
          <p>Cada bot conoce su tarea, sus límites y cuándo pedir ayuda.</p>
        </div>
      </div>
      <div className="eng-roles">
        {roles.map((role) => (
          <div className="eng-role" key={role.name}>
            <RoleBot role={role} />
            <h3>{role.name}</h3>
            <p>{role.job}</p>
            <span className={`eng-role-output slide-${role.color}`}>
              {role.output}
            </span>
          </div>
        ))}
      </div>
      <p className="eng-role-note">
        QE puede preguntar antes de construir. Builder puede volver a Research.
      </p>
    </Frame>
  );
}

export function ResearchSlide() {
  return (
    <Frame
      number={10}
      label="Entender antes de construir"
      title="Una idea todavía deja preguntas abiertas."
      footer="Ejemplo ilustrativo: invitaciones a un producto de trabajo en equipo."
      className="eng-group-slide"
    >
      <div className="eng-group-layout">
        <div className="eng-group-story">
          <span className="eng-overline slide-blue">
            Research aporta a una decisión
          </span>
          <h3>
            “Queremos que los usuarios
            <br />
            inviten a su equipo.”
          </h3>
          <p>
            ¿Quién invita? ¿Con qué permisos?
            <br />
            ¿Qué necesitamos aprender primero?
          </p>
          <div className="eng-delivery-note">
            <strong>Una buena devolución</strong>
            <p>
              Opciones, fuentes, diferencias
              <br />y lo que aún no sabemos.
            </p>
          </div>
        </div>
        <Chat>
          <ChatMessage>
            Antes de construir, veamos qué necesita alguien para empezar a
            trabajar con su equipo.
          </ChatMessage>
          <ChatMessage role={roles[1]}>
            <b>@Research</b>, compará opciones de invitación y señalá qué
            decisiones tenemos pendientes.
          </ChatMessage>
          <ChatMessage role={roles[0]}>
            Podemos empezar por email. Traigo las referencias y las diferencias
            con compartir un enlace.
          </ChatMessage>
        </Chat>
      </div>
    </Frame>
  );
}

export function GroupSlide() {
  return (
    <Frame
      number={11}
      label="Decidir juntos"
      title="El alcance se conversa con el equipo."
      footer="Conversación recreada. QE participa antes de la implementación."
      className="eng-group-slide"
    >
      <div className="eng-group-layout">
        <div className="eng-group-story">
          <span className="eng-overline slide-teal">Primera versión</span>
          <h3>
            Un recorrido pequeño
            <br />
            que podamos completar.
          </h3>
          <p>
            Invitar por email, aceptar
            <br />y entrar al equipo correcto.
          </p>
          <div className="eng-delivery-note">
            <strong>Decisión humana</strong>
            <p>
              Vos acordás el alcance.
              <br />
              PO deja registrado por qué.
            </p>
          </div>
        </div>
        <Chat>
          <ChatMessage role={roles[1]}>
            Propongo empezar con invitaciones de administradores por email.
            Dejamos los enlaces públicos para después.
          </ChatMessage>
          <ChatMessage role={roles[2]}>
            Necesito definir qué pasa si la persona ya tiene cuenta.
          </ChatMessage>
          <ChatMessage role={roles[3]}>
            Y si la invitación venció: ¿cómo lo explicamos y cómo pide otra?
          </ChatMessage>
          <ChatMessage>
            Incluyamos esos casos en los criterios antes de empezar.
          </ChatMessage>
        </Chat>
      </div>
    </Frame>
  );
}

export function TaskSlide() {
  return (
    <Frame
      number={12}
      label="Del acuerdo al trabajo"
      title="Un ticket conserva lo que acordamos."
      footer="Ticket ilustrativo. Linear conserva decisiones, responsables e historial."
    >
      <div className="eng-artifact-layout">
        <div className="eng-artifact-intro">
          <RoleBot role={roles[1]} />
          <h3>PO prepara el trabajo</h3>
          <p>
            Builder entiende el cambio.
            <br />
            QE sabe qué comprobar.
            <br />
            Vos podés revisar el alcance.
          </p>
        </div>
        <article className="eng-ticket">
          <div className="eng-artifact-label">
            <span>Linear / Ejemplo</span>
            <span className="slide-teal">Listo para construir</span>
          </div>
          <h3>Invitar a una persona al equipo</h3>
          <dl>
            <div>
              <dt>Para qué</dt>
              <dd>Que un administrador pueda sumar a un compañero.</dd>
            </div>
            <div>
              <dt>Incluye</dt>
              <dd>Enviar por email, aceptar y entrar al equipo correcto.</dd>
            </div>
            <div>
              <dt>Fuera de alcance</dt>
              <dd>Enlaces públicos y permisos personalizados.</dd>
            </div>
            <div>
              <dt>Cómo comprobarlo</dt>
              <dd>
                Cuenta nueva y existente; invitación vencida; acceso limitado al
                equipo invitado.
              </dd>
            </div>
          </dl>
        </article>
      </div>
    </Frame>
  );
}

export function ConnectionsSlide() {
  return (
    <Frame
      number={13}
      label="Herramientas y conexiones"
      title="Cada pieza tiene un lugar."
      footer="Connect Apps → elegir una app → conectar la cuenta si lo pide → probar en el chat."
      className="eng-connections-slide"
    >
      <figure
        className="eng-system-map"
        aria-label="Grok Bot coordina; Linear registra; Cloud Agents ejecutan; GitHub permite revisar"
      >
        <div className="eng-system-main">
          <strong>Grok Bot</strong>
          <span>Conversación y coordinación</span>
        </div>
        <div className="eng-system-targets">
          <div>
            <strong>Linear</strong>
            <span>Tareas y decisiones</span>
          </div>
          <div>
            <strong>Cloud Agents</strong>
            <span>Ejecución</span>
          </div>
          <div>
            <strong>GitHub</strong>
            <span>Cambios y revisión</span>
          </div>
        </div>
      </figure>
      <div className="eng-capabilities">
        <section>
          <span className="eng-overline slide-orange">El paquete</span>
          <h3>Plugin</h3>
          <p>
            Agrega capacidades.
            <br />
            Puede incluir varias piezas.
          </p>
        </section>
        <section>
          <span className="eng-overline slide-blue">El procedimiento</span>
          <h3>Skill</h3>
          <p>
            Explica cómo trabajar.
            <br />
            Ej.: verificar un flujo.
          </p>
        </section>
        <section>
          <span className="eng-overline slide-pink">La operación</span>
          <h3>Tool</h3>
          <p>
            Hace una acción.
            <br />
            Ej.: consultar un ticket.
          </p>
        </section>
        <section>
          <span className="eng-overline slide-teal">La conexión</span>
          <h3>MCP</h3>
          <p>Un protocolo para conectar herramientas y datos.</p>
        </section>
      </div>
    </Frame>
  );
}

export function EnvironmentSlide() {
  return (
    <Frame
      number={14}
      label="Construir"
      title="Builder necesita un lugar donde ejecutar."
      footer="En este flujo, Builder y QE trabajan con Cursor Cloud Agents."
    >
      <figure
        className="eng-environment"
        aria-label="Builder coordina un Cloud Agent con el repositorio y el entorno; recibe cambios y evidencia"
      >
        <div className="eng-coordinator">
          <RoleBot role={roles[2]} />
          <strong>Builder</strong>
          <p>
            Encarga el trabajo,
            <br />
            resuelve dudas
            <br />y sigue el avance.
          </p>
        </div>
        <Arrow />
        <div className="eng-cloud">
          <span className="eng-overline">Cursor Cloud Agents</span>
          <h3>Un entorno preparado</h3>
          <div className="eng-env-ingredients">
            <span>Repositorio</span>
            <span>Dependencias</span>
            <span>Variables de entorno</span>
          </div>
          <div className="eng-runtime">
            <span>Levantar la app</span>
            <span>Implementar el cambio</span>
            <span>Ejecutar las comprobaciones</span>
          </div>
        </div>
        <Arrow />
        <div className="eng-artifacts">
          <strong>Cambios</strong>
          <span>PR en GitHub</span>
          <strong>Evidencia</strong>
          <span>
            Qué se probó
            <br />y qué falta
          </span>
        </div>
      </figure>
    </Frame>
  );
}

export function ReviewSlide() {
  return (
    <Frame
      number={15}
      label="Revisar y entregar"
      title="¿Tenemos lo necesario para publicar?"
      footer="PR: propuesta de cambios · CI/CD: comprobaciones e integración/despliegue automatizados."
    >
      <div className="eng-review-layout">
        <article className="eng-ticket eng-review-artifact">
          <div className="eng-artifact-label">
            <span>GitHub / Entrega ilustrativa</span>
            <span className="slide-orange">Por revisar</span>
          </div>
          <h3>Invitaciones por email</h3>
          <dl>
            <div>
              <dt>Qué cambió</dt>
              <dd>Envío, aceptación y acceso al equipo.</dd>
            </div>
            <div>
              <dt>Qué se comprobó</dt>
              <dd>Cuentas nuevas y existentes; enlaces vencidos; permisos.</dd>
            </div>
            <div>
              <dt>Qué queda fuera</dt>
              <dd>Revisar la entrega real de email en el entorno publicado.</dd>
            </div>
          </dl>
        </article>
        <div className="eng-review-human">
          <span className="eng-overline">Tu revisión</span>
          <h3>
            El resultado,
            <br />
            sus límites
            <br />y el riesgo.
          </h3>
          <p>
            Revisás el PR y su evidencia.
            <br />
            Decidís el merge.
            <br />
            CI/CD realiza el despliegue.
          </p>
          <div className="eng-delivery-note">
            <strong>QE vuelve a comprobar</strong>
            <p>El flujo en el entorno acordado.</p>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function FollowupSlide() {
  return (
    <Frame
      number={16}
      label="Seguir el producto"
      title="“¿Cómo vamos con la próxima entrega?”"
      footer="Seguimiento ilustrativo: distintas tareas, un mismo contexto de producto."
      className="eng-group-slide"
    >
      <div className="eng-group-layout">
        <div className="eng-group-story">
          <span className="eng-overline slide-teal">PO reúne el estado</span>
          <h3>
            Qué está listo.
            <br />
            Qué está bloqueado.
            <br />
            Qué necesita tu decisión.
          </h3>
          <p>
            Las rutinas ayudan a retomar.
            <br />
            Las menciones dejan claro quién sigue.
          </p>
          <div className="eng-delivery-note">
            <strong>El historial queda en Linear</strong>
            <p>
              La conversación puede continuar
              <br />
              en el grupo o en un 1:1.
            </p>
          </div>
        </div>
        <Chat>
          <ChatMessage role={roles[1]}>
            Invitaciones está en revisión. El cambio de permisos espera una
            decisión tuya.
          </ChatMessage>
          <ChatMessage role={roles[2]}>
            Dejé el PR de invitaciones y las comprobaciones. Puedo seguir con el
            problema de búsqueda.
          </ChatMessage>
          <ChatMessage role={roles[3]}>
            Estoy verificando búsqueda. Falta reproducir el caso con un equipo
            grande.
          </ChatMessage>
          <ChatMessage>
            Priorizamos ese fallo. Permisos pasa a la siguiente entrega.
          </ChatMessage>
        </Chat>
      </div>
    </Frame>
  );
}

export function FeedbackSlide() {
  return (
    <Frame
      number={17}
      label="QE y el producto publicado"
      title="Un problema vuelve a poner al equipo a trabajar."
      footer="Incidente hipotético. La corrección se vuelve a verificar en el entorno acordado."
    >
      <div className="eng-incident-layout">
        <div className="eng-incident-report">
          <span className="eng-overline slide-pink">
            QE / Reporte ilustrativo
          </span>
          <h3>
            “Con una cuenta existente,
            <br />
            no puedo aceptar la invitación.”
          </h3>
          <dl>
            <div>
              <dt>Pasos</dt>
              <dd>Abrir la invitación e iniciar sesión.</dd>
            </div>
            <div>
              <dt>Esperado</dt>
              <dd>Entrar al equipo invitado.</dd>
            </div>
            <div>
              <dt>Observado</dt>
              <dd>Vuelve al inicio; no suma el equipo.</dd>
            </div>
          </dl>
        </div>
        <div className="eng-correction-path">
          <div>
            <span className="slide-pink">QE → PO + Builder</span>
            <p>Reproduce y comparte evidencia.</p>
          </div>
          <div>
            <span className="slide-teal">PO + Builder</span>
            <p>Prioridad, seguimiento y corrección.</p>
          </div>
          <div>
            <span>Vos + CI/CD</span>
            <p>Revisión, merge y despliegue.</p>
          </div>
          <div>
            <span className="slide-pink">QE → PO</span>
            <p>Repite el flujo. PO cierra si cumple.</p>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function PstackSlide() {
  return (
    <Frame
      number={18}
      label="Conservar lo aprendido"
      title="Que el próximo intento empiece mejor."
      footer="pstack, de Lauren (@poteto), aporta skills de ingeniería que podés adaptar al proyecto."
    >
      <div className="eng-learning-layout">
        <div>
          <span className="eng-overline">
            Una skill de verificación del producto
          </span>
          <h3 className="eng-learning-title">
            Dejamos escrito
            <br />
            cómo comprobarlo.
          </h3>
          <ol className="eng-verification">
            <li>Preparar cuentas y equipos de prueba.</li>
            <li>Recorrer el flujo con cada tipo de cuenta.</li>
            <li>Comparar el resultado y guardar evidencia.</li>
          </ol>
        </div>
        <div className="eng-learning-notes">
          <section>
            <span className="slide-blue">Research + PO</span>
            <h3>Decisiones y motivos</h3>
            <p>Qué aprendimos y qué queda pendiente.</p>
          </section>
          <section>
            <span className="slide-orange">Builder + QE</span>
            <h3>Pruebas y procedimientos</h3>
            <p>El caso que faltaba y cómo repetirlo.</p>
          </section>
          <a
            href="https://github.com/cursor/plugins/tree/main/pstack"
            target="_blank"
            rel="noreferrer"
          >
            pstack: una base para esas skills ↗
          </a>
        </div>
      </div>
    </Frame>
  );
}

export function StartSlide() {
  return (
    <Frame
      number={19}
      label="Cómo empezar"
      title={
        <>
          Tu producto.
          <br />
          Un primer encargo claro.
        </>
      }
      footer="Ampliá el equipo a medida que entiendas qué necesita el trabajo."
      className="eng-start-slide"
    >
      <ol className="eng-start-steps">
        <li>
          <span>01</span>
          <div>
            <h3>Compartí el contexto</h3>
            <p>Para quién construís, qué buscás y dónde está el trabajo.</p>
          </div>
        </li>
        <li>
          <span>02</span>
          <div>
            <h3>Definí una responsabilidad</h3>
            <p>Qué resuelve el bot y qué decisiones pasan por vos.</p>
          </div>
        </li>
        <li>
          <span>03</span>
          <div>
            <h3>Pedí una entrega que puedas revisar</h3>
            <p>Hallazgos, una propuesta, cambios o una verificación.</p>
          </div>
        </li>
      </ol>
      <div className="eng-first-task">
        <span className="eng-overline">Un primer encargo</span>
        <p>
          “Revisá lo pendiente y proponé qué conviene resolver esta semana.
          Explicame por qué.”
        </p>
        <span className="slide-teal">→ PO, con el contexto del producto</span>
      </div>
    </Frame>
  );
}

export function QuestionsSlide() {
  return (
    <Frame
      number={20}
      label="5 minutos para conversar"
      title={
        <>
          ¿Qué parte llevarías
          <br />a tu equipo?
        </>
      }
      footer="Grok Bot for Engineering / Walter Morales"
      className="eng-questions-slide"
    >
      <div className="eng-question-topics">
        <span>Roles y coordinación</span>
        <span>Contexto y herramientas</span>
        <span>Construcción y revisión</span>
        <span>Calidad y aprendizaje</span>
      </div>
      <div className="eng-question-team">
        {roles.map((role) => (
          <div key={role.name}>
            <RoleBot role={role} />
            <span>{role.name}</span>
          </div>
        ))}
      </div>
      <div className="eng-resource-links">
        <a
          href="https://docs.x.ai/grok-bot/overview"
          target="_blank"
          rel="noreferrer"
        >
          Documentación de Grok Bot ↗
        </a>
        <a
          href="https://x.ai/bot/guides/grok-bot-for-engineering"
          target="_blank"
          rel="noreferrer"
        >
          Guía de Engineering ↗
        </a>
      </div>
    </Frame>
  );
}
