import "./QuestionAndAnswer.css";

const QuestionAndAnswer = ({
  numberOfQuestion,
  question,
  answer,
  isCorrect,
}) => {
  return (
    <div className="wrapper">
      <h3>
        {numberOfQuestion}. {question}
      </h3>
      <p className={isCorrect}>{answer}</p>
    </div>
  );
};
export default QuestionAndAnswer;
