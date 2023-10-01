import React, { useState } from 'react';

function Form({onSubmit}) {
  const [guess, setGuess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(guess);
    setGuess('');
  }

  const handleChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input pattern="[a-zA-Z]{5}" minLength={5} maxLength={5} id="guess-input" type="text" value={guess} onChange={handleChange} />
    </form>
  );
}

export default Form;
