const Score = ({ color, message }) => {
  return (
    <div
      style={{
        backgroundColor: color,
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
