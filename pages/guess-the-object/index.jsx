import React, { useState, useEffect } from 'react';

const objects = [
  { name: 'apple', image: '/images/apple.png' },
  { name: 'orange', image: '/images/orange.png' },
  { name: 'avocado', image: '/images/avocado.png' },
  { name: 'banana', image: '/images/banana.png' },
  { name: 'carrots', image: '/images/carrots.png' },
  { name: 'cherry', image: '/images/cherry.png' },
  { name: 'grapes', image: '/images/grapes.png' },
  { name: 'lemon', image: '/images/lemon.png' },
  { name: 'pineapple', image: '/images/pineapple.png' },
  { name: 'strawberry', image: '/images/strawberry.png' }
];

function getRandomObject() {
  return objects[Math.floor(Math.random() * objects.length)];
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function GuessItSpellIt() {
  const [currentObject, setCurrentObject] = useState(getRandomObject());
  const [selectedLetters, setSelectedLetters] = useState(Array(currentObject?.name.length || 0).fill(null));
  const [randomLetters, setRandomLetters] = useState([]);
  const [clickedButtons, setClickedButtons] = useState([]);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (currentObject) {
      const letters = currentObject.name.split('');
      while (letters.length < 10) {
        const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        letters.push(randomLetter);
      }
      setRandomLetters(shuffleArray(letters));
      setClickedButtons(new Array(letters.length).fill(false));
      setSelectedLetters(Array(currentObject.name.length).fill(null)); 
    }
  }, [currentObject]);

  const handleLetterClick = (letter, index) => {
    const firstEmptyIndex = selectedLetters.indexOf(null);
    if (firstEmptyIndex !== -1 && !clickedButtons[index]) {
      const updatedSelectedLetters = [...selectedLetters];
      updatedSelectedLetters[firstEmptyIndex] = { letter, index };
      setSelectedLetters(updatedSelectedLetters);

      const updatedClickedButtons = [...clickedButtons];
      updatedClickedButtons[index] = true;
      setClickedButtons(updatedClickedButtons);
    }
  };

  const handleClearLetter = (letterIndex) => {
    const updatedSelectedLetters = [...selectedLetters];
    const letterToRemove = updatedSelectedLetters[letterIndex];
    updatedSelectedLetters[letterIndex] = null;
    setSelectedLetters(updatedSelectedLetters);

    if (letterToRemove) {
      const updatedClickedButtons = [...clickedButtons];
      updatedClickedButtons[letterToRemove.index] = false;
      setClickedButtons(updatedClickedButtons);
    }
  };

  const resetGame = () => {
    setSelectedLetters([]);
    setClickedButtons([]);
    
    // Temporarily set currentObject to null to force useEffect to trigger
    setCurrentObject(null);
    
    setTimeout(() => {
      setCurrentObject(getRandomObject());
    }, 0);
  };

  const clearGame = () => {
    setSelectedLetters(Array(currentObject?.name.length || 0).fill(null));
    setClickedButtons([]);
  };

  const handleCorrectAnswer = () => {
    setPoints(points + 1);
    resetGame();
  };

  const selectedWord = selectedLetters.map(item => item?.letter || '').join('');

  return (
    <div class="main-container">
      <div className="game-container">
        <h1 className="guess-title">Guess the object and spell it correctly</h1>
        <div className="game-wrapper">
            {currentObject && (
              <>
                <img src={currentObject.image} alt="object" className="guess-image" />
                <div className="blank-card">
                  {selectedLetters.map((item, index) => (
                    <span key={index} className="letter" onClick={() => handleClearLetter(index)}>
                      {item ? item.letter : ''}
                    </span>
                  ))}
                </div>
                <div className="letter-buttons">
                  {randomLetters.map((letter, index) => (
                    <button
                      key={index}
                      onClick={() => handleLetterClick(letter, index)}
                      className="letter-button"
                      disabled={clickedButtons[index]}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              </>
            )}
            {selectedWord === currentObject?.name && (
              <div className="result">
                <h2>Correct! The word is {currentObject.name}</h2>
                <button onClick={handleCorrectAnswer} className="next-button">Next Object</button>
              </div>
            )}
            {selectedWord.length === currentObject?.name.length && selectedWord !== currentObject.name && (
              <div className="result incorrect">
                <h2>Oops! Give it another try and spell it correctly!</h2>
                <button onClick={clearGame} className="clear-button">Clear</button>
              </div>
            )}
        </div>
        <div className="result-wrapper">
          <div className="points">Points: {points}</div>
        </div>
      </div>
    </div>
  );
}

export default GuessItSpellIt;
