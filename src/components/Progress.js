import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";

function Progress() {
  const { index, answer, points, numQuestions, maxPossiblePoints } =
    useContext(QuizContext);

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
