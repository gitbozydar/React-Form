const Score = ({ color, message }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "1.5rem",
        fontWeight: "600",
      }}
    >
      {message}
    </div>
  );
};
export default Score;
