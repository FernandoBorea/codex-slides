import type { Question, Vote } from "../../live/types";
import { QuestionResults } from "../QuestionResults";

export function ProjectedQuestion({
  question,
  votes,
  slideSlug,
  isLive,
  votingOpen,
  showResults = false,
}: {
  question: Question;
  votes: Vote[];
  slideSlug: string;
  isLive: boolean;
  votingOpen: boolean;
  showResults?: boolean;
}) {
  return (
    <section
      className="slide-question-panel"
      aria-label="Participación en la slide"
      data-testid="projected-question"
    >
      <div className="slide-question-heading">
        <h2>{question.prompt}</h2>
        <span className="slide-question-status">
          {!isLive
            ? "Vista previa"
            : votingOpen
              ? "En vivo"
              : "Votación cerrada"}
        </span>
      </div>
      {showResults || votingOpen ? (
        <QuestionResults
          question={question}
          votes={votes}
          slideSlug={slideSlug}
        />
      ) : (
        <>
          <ol className="projected-options">
            {question.options.map((option) => (
              <li key={option.id}>{option.label}</li>
            ))}
          </ol>
          {isLive && (
            <p className="projected-question-hint">
              Respondé desde tu teléfono.
            </p>
          )}
        </>
      )}
    </section>
  );
}
