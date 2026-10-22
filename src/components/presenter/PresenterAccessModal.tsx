import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Modal } from "../Modal";
import "./presenter-access.css";

export function PresenterAccessModal({
  onAuthorize,
  onClose,
}: {
  onAuthorize: (password: string, signal: AbortSignal) => Promise<void>;
  onClose: () => void;
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const requestPending = useRef(false);
  const authorization = useRef<AbortController | null>(null);
  const mounted = useRef(true);
  const fieldId = useId();
  const errorId = useId();

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      authorization.current?.abort();
    };
  }, []);

  function close() {
    authorization.current?.abort();
    onClose();
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (requestPending.current || !password) return;
    const controller = new AbortController();
    authorization.current = controller;
    requestPending.current = true;
    setSubmitting(true);
    setError("");
    try {
      await onAuthorize(password, controller.signal);
    } catch (cause) {
      if (mounted.current && !controller.signal.aborted) {
        setError(
          cause instanceof Error
            ? cause.message
            : "No pudimos verificar la contraseña. Intentá de nuevo.",
        );
      }
    } finally {
      if (authorization.current === controller) authorization.current = null;
      requestPending.current = false;
      if (mounted.current) setSubmitting(false);
    }
  }

  return (
    <Modal title="Acceso del moderador" onClose={close}>
      <p className="muted">
        Ingresá la contraseña para iniciar una presentación o controlar las
        encuestas. El público puede seguir leyendo las slides sin contraseña.
      </p>
      <form
        onSubmit={(event) => void submit(event)}
        className="presenter-access-form"
      >
        <label className="field-label" htmlFor={fieldId}>
          Contraseña
        </label>
        <input
          id={fieldId}
          name="presenter-password"
          type="password"
          maxLength={1024}
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          disabled={submitting}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          autoFocus
        />
        {error && (
          <p id={errorId} role="alert" className="error-message">
            {error}
          </p>
        )}
        <div className="modal-actions">
          <button type="button" className="button secondary" onClick={close}>
            Cancelar
          </button>
          <button
            type="submit"
            className="button primary"
            disabled={submitting || !password}
          >
            {submitting ? "Verificando…" : "Continuar"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
