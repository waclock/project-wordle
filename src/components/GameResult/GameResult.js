import React from 'react';

function GameResult({guesses, answer}) {
  if (!guesses.includes(answer)) {
    return null;
  }
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>
  )
}

export default GameResult;
