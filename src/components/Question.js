import { useContext } from "react";
import Options from "./Options";
import { QuizContext } from "../contexts/QuizContext";

function Question() {
  const { questions, index } = useContext(QuizContext);
  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
