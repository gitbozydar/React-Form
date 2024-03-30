import AnswerButton from "./AnswerButton";
import "./Result.css";
import QuestionAndAnswer from "./QuestionAndAnswer.jsx";
import Score from "./Score.jsx";

const Result = ({
  correctAnswer,
  points,
  allQuestionsLength,
  onResetQuiz,
  usersAnswers,
  contentOfQuestions,
}) => {
  const calculatedPoints = (points / allQuestionsLength) * 100;

  return (
    <>
      <div className="result-wrapper">
        <Score
          color={calculatedPoints >= 80 ? "green" : "red"}
          message={`${calculatedPoints}% ${
            calculatedPoints >= 80
              ? "Congrants, you passed!"
              : "You didn't pass, try again"
          }`}
        />

        {usersAnswers.map((userAnswer, index) => (
          <QuestionAndAnswer
            key={index}
            question={contentOfQuestions[index]}
            numberOfQuestion={index + 1}
            isCorrect={
              userAnswer === correctAnswer[index]
                ? "correct-answer"
                : "incorrect-answer"
            }
            answer={userAnswer}
          />
        ))}
        <div style={{ display: "flex" }}>
          <AnswerButton
            fontSize="1.5rem"
            backgroundColor="#5993e3"
            radius="0.5rem"
            width="200px"
            actionOnClick={onResetQuiz}
            children={"Try again"}
          />
        </div>
      </div>
    </>
  );
};
export default Result;
