const AnswerButton = ({
  children,
  actionOnClick,
  radius,
  fontSize,
  width,
  backgroundColor,
  styleClass,
}) => {
  return (
    <button
      className={styleClass}
      style={{
        borderRadius: radius,
        fontSize: fontSize,
        border: "none",
        width: width,
        backgroundColor: backgroundColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={actionOnClick}
    >
      {children}
    </button>
  );
};
export default AnswerButton;
