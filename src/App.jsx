import "./App.css";
import AnswerButton from "./components/AnswerButton.jsx";
import Home from "./components/Home.jsx";
import Quiz from "./components/Quiz.jsx";
import { reactQuestions } from "./ConstantQuestions.js";
import { useState } from "react";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleQuizStart = () => {
    setStartQuiz(true);
  };

  return (
    <>
      {!startQuiz ? (
        <Home title={"React Quiz"}>
          <AnswerButton
            styleClass={"start-button"}
            actionOnClick={() => {
              handleQuizStart();
            }}
          >
            Start!
          </AnswerButton>
        </Home>
      ) : null}

      {startQuiz ? <Quiz questions={reactQuestions.questions} /> : null}
    </>
  );
}

export default App;
