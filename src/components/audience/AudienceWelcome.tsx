import { ArrowRight, BellRinging, Broadcast, BookOpen } from "@phosphor-icons/react";
import { Modal } from "../Modal";

export function AudienceWelcome({ onContinue }: { onContinue: () => void }) {
  return (
    <Modal title="Seguí la charla en vivo" onClose={onContinue} className="audience-welcome">
      <p className="audience-welcome-intro">
        Ya tenés tu lugar. Así funciona tu guía:
      </p>
      <ul className="audience-welcome-steps">
        <li>
          <Broadcast size={23} aria-hidden="true" />
          <div>
            <strong>Entrás en vivo</strong>
            <p>Cuando el presentador cambie de slide, la tuya también cambia.</p>
          </div>
        </li>
        <li>
          <BookOpen size={23} aria-hidden="true" />
          <div>
            <strong>También podés ir a tu ritmo</strong>
            <p>Usá las flechas para explorar. El seguimiento se pausa hasta que toqués «Volver al vivo».</p>
          </div>
        </li>
        <li>
          <BellRinging size={23} aria-hidden="true" />
          <div>
            <strong>Te avisamos cuando haya una encuesta</strong>
            <p>Vas a ver un aviso acá para responder. Los resultados se actualizan en las slides al enviar tu voto.</p>
          </div>
        </li>
      </ul>
      <button className="button primary full-width" onClick={onContinue}>
        Entendido, entrar <ArrowRight size={18} />
      </button>
    </Modal>
  );
}
