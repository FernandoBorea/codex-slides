import { useState } from "react";
import { BellRinging, X } from "@phosphor-icons/react";

// Remount for each opening, including reopening the same question. Vote updates
// preserve dismissal, and the parent removes the notice when voting closes.
export function PollNotification({
  prompt,
  onRespond,
}: {
  prompt: string;
  onRespond: () => void;
}) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="audience-poll-notification">
      <BellRinging size={21} aria-hidden="true" />
      <div className="audience-poll-notification-copy" role="status">
        <strong>Se abrió una encuesta</strong>
        <p>{prompt}</p>
      </div>
      <button
        className="icon-button"
        aria-label="Cerrar aviso de encuesta"
        onClick={() => setDismissed(true)}
      >
        <X size={18} />
      </button>
      <button
        className="button primary"
        onClick={() => {
          setDismissed(true);
          onRespond();
        }}
      >
        Responder
      </button>
    </div>
  );
}
