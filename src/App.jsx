import "./App.css";
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
          <button
            onClick={() => {
              handleQuizStart();
            }}
          >
            Start!
          </button>
        </Home>
      ) : null}

      {startQuiz ? <Quiz questions={reactQuestions.questions} /> : null}
    </>
  );
}

export default App;
