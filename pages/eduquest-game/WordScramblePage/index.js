import React, { useContext, useEffect } from "react";
import PageLoader from "../../../components/PageLoader/index";
import WordScrambleGame from "../../../components/WordScrambleGame/index";
import PageHeader from "../../../components/PageHeader/index";
import { fetchWordScrambleData } from "../../../mutations";
import { StoreContext } from "../../../store";
import {
  finishWordScrambleGame,
  retryWordScrambleGame,
} from "../../../store/actions";
import ResultPage from "../ResultPage/index";

function WordScramblePage() {
  const { state, dispatch } = useContext(StoreContext);
  const { gameData, gameFinished, finalScore } = state.wordScramble;

  useEffect(() => {
    fetchWordScrambleData(dispatch);
  }, [dispatch]);

  const handleFinish = (score) => {
    finishWordScrambleGame(dispatch, score);
  };

  const handleRetry = () => {
    retryWordScrambleGame(dispatch);
    fetchWordScrambleData(dispatch);
  };

  if (gameData.fetching) {
    return <PageLoader />;
  }

  if (!gameData.data) {
    return <div>Failed to load data. Please try again later.</div>;
  }

  return (
    <div className="word-scramble-page">
      <PageHeader text="Scramble Word Game" />
      {!gameFinished ? (
        <WordScrambleGame wordsData={gameData.data} onFinish={handleFinish} />
      ) : (
        <ResultPage
          score={finalScore}
          totalQuestions={0}
          totalRounds={gameData.data.length}
          onRetry={handleRetry}
          scoringMode="perRound"
        />
      )}

      <ul className="circles">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
}

export default WordScramblePage;
