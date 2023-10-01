import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import Form from '../Form';
import GameResult from '../GameResult';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const handleSubmit = (guess) => {
    setGuesses([...guesses, guess]);
  }

  return (
    <div className='game-wrapper'>
      <div className='guess-results'>
        {Array.from({ length: NUM_OF_GUESSES_ALLOWED }).map((_, idx) => (
          <Guess key={idx} answer={answer} guess={guesses[idx]} />
        ))}
      </div>
      <Form onSubmit={handleSubmit} />
      <GameResult guesses={guesses} answer={answer} />
    </div>
  );
}

export default Game;
