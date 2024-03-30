import { useState } from "react";
import Result from "../components/Result.jsx";
import AnswerButton from "./AnswerButton.jsx";
import "./Quiz.css";
import Logo from "../components/Logo.jsx";
import reactSmallLogo from "../assets/reactLogo.svg";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [resetQuiz, setResetQuiz] = useState(false);
  const [usersAnswers, setUsersAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const handleCalculation = (answer, correctAnswer) => {
    answer === correctAnswer ? setCurrentPoints(currentPoints + 1) : null;
    setUsersAnswers((prevUserAnswers) => {
      const updatedUserAnswers = [...prevUserAnswers];
      updatedUserAnswers[currentQuestion] = answer;
      return updatedUserAnswers;
    });
  };

  const handleQuizCompletion = () => {
    currentQuestion < questions.length - 1
      ? setCurrentQuestion(currentQuestion + 1)
      : setQuizCompleted(true);
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setCurrentPoints(0);
    setQuizCompleted(false);
    setResetQuiz(true);
  };

  return (
    <>
      {quizCompleted ? (
        <Result
          correctAnswer={questions.map((question) => question.correctAnswer)}
          contentOfQuestions={questions.map((question) => question.question)}
          onResetQuiz={handleResetQuiz}
          points={currentPoints}
          allQuestionsLength={questions.length}
          usersAnswers={usersAnswers}
        />
      ) : (
        <div className="quiz-wrapper">
          <Logo
            imgSource={reactSmallLogo}
            altImg={"small-react-logo"}
            imgWidth={50}
            position={"absolute"}
            left={"1rem"}
            top={"1rem"}
          />
          <span>
            {currentQuestion + 1}/{questions.length}
          </span>
          <h2>{question}</h2>

          {choices.map((answer, index) => (
            <AnswerButton
              actionOnClick={() => {
                handleCalculation(answer, correctAnswer);
                handleQuizCompletion();
              }}
              children={"Next"}
              key={index}
            >
              {choices[index]}
            </AnswerButton>
          ))}
        </div>
      )}
    </>
  );
};
export default Quiz;
