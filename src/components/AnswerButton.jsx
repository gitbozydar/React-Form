const AnswerButton = ({
  children,
  actionOnClick,
  radius,
  fontSize,
  width,
  backgroundColor,
}) => {
  return (
    <button
      style={{
        borderRadius: radius,
        fontSize: fontSize,
        border: "none",
        width: width,
        backgroundColor: backgroundColor,
      }}
      onClick={actionOnClick}
    >
      {children}
    </button>
  );
};
export default AnswerButton;
