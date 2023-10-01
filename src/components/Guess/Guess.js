import React from 'react';

function Guess({answer, guess}) {
  
  const answerMap = new Map();
  [...answer].forEach((letter, idx) => {
    if (!answerMap.has(letter)) {
      answerMap.set(letter, [idx]);
    } else {
      answerMap.get(letter).push(idx);
    }
  });

  const charStates = guess ? [...guess].map((letter, idx) => {
    if (answerMap.has(letter) && answerMap.get(letter).includes(idx)) {
      const index = answerMap.get(letter).indexOf(idx);
      answerMap.get(letter).splice(index, 1);
      return 'correct';
    } else if(answerMap.has(letter) && answerMap.get(letter).length > 0) {
      answerMap.get(letter).pop();
      return 'misplaced';
    } else{
      return 'incorrect';
    }
  }) : [];


  return (
    <p className='guess'>
      {Array.from({length: 5 }).map((_, idx) => (
        <span key={idx} className={`cell ${charStates[idx]}`}>{guess ? guess[idx] : ''}</span>
      ))}
    </p>
  )
}

export default Guess;
