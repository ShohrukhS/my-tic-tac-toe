import React, { useState } from 'react';
import Board from './Board';
import './Game.css';

function Game() {
  const [gameKey, setGameKey] = useState(0);

  const resetGame = () => {
    setGameKey(prevKey => prevKey + 1);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board key={gameKey} resetGame={resetGame} />
      </div>
    </div>
  );
}

export default Game;
