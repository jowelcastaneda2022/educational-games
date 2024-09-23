function Card(props) {
  function handleChoice() {
    if (!props.disabled) props.handleChoice(props.card);
  }

  return (
    <div className="memory-card">
      <div className={props?.flipped ? "flipped" : ""}>
        <img
          className={`front ${props?.card?.matched ? "matched" : ""}`}
          src={props.card ? props.card.src : null}
          alt="memory-card front"
          height="100px"
          width="50px"
        />
        <img
          className="back"
          src="/images/question-mark-animation.gif"
          alt="card back"
          onClick={() => handleChoice()}
          height="100px"
        />
      </div>
    </div>
  );
}

export default Card;
