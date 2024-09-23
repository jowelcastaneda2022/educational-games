import { useEffect, useState } from "react";
import Card from "./components/Card/Card.jsx";
import Link from "next/link.js";
import Head from "next/head.js";
import AnimatedBg from "../../components/AnimatedBg/index.js";

const initialCards = [
  { src: "/images/ball.png", matched: false },
  { src: "/images/star.png", matched: false },
  { src: "/images/apple.png", matched: false },
  { src: "/images/car.png", matched: false },
  { src: "/images/bear.png", matched: false },
  { src: "/images/owl.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [startFlip, setStartFlip] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStartFlip(false);
    }, 1000);
    shuffleCards();
  }, []);

  function shuffleCards() {
    //setCards(null)
    const shuffledCards = [...initialCards, ...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurn(0);
    setDisabled(false);
    setStartFlip(true);
    setTimeout(() => {
      setStartFlip(false);
    }, 1000);
  }

  function handleChoice(card) {
    choiceOne
      ? choiceOne.id !== card.id && setChoiceTwo(card)
      : setChoiceOne(card);
  }

  function resetTurn() {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurn((prevTurn) => prevTurn + 1);
    setDisabled(false);
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className="memory-container">
      <Head>
        <title>Crescendo Learning</title>
        <link rel="icon" href="/title.png" />
      </Head>
      <AnimatedBg />
      <div className="flex" style={{ zIndex: 1 }}>
        <button>
          <Link rel="icon" href="/">
            Home
          </Link>
        </button>
        <button onClick={shuffleCards}>New Game</button>
      </div>

      <div className="grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={
              card === choiceOne ||
              card === choiceTwo ||
              card.matched ||
              startFlip
            }
            disabled={disabled}
            matched={card.matched}
          />
        ))}
      </div>
      <p className="paragraph" style={{ zIndex: 1 }}>
        Turns: {turn}
      </p>
    </div>
  );
}

export default App;
