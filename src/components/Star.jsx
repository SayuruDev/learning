const Star = ({ filled, onClick, onMouseEnter, onMouseLeave, color }) => {
  return (
    <span
      className="star"
      style={{
        fontSize: "2rem",
        cursor: "pointer",
        color: filled ? color : "#ccc",
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {"\u2605"}
    </span>
  );
};

export default Star;