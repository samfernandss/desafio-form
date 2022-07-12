import React, { useState } from 'react'

const Radio = ({ ask, onChecked }) => {
  const [answer, setAnswer] = useState('');

  function handleChange({ target }) {
    setAnswer( ask.options[target.id] );
    onChecked(true, target.value, ask.id);
  };

  return (
    <fieldset>
      <legend>{ask.pergunta}</legend>
      {ask.options.map((option, index) => {
        return (
          <p key={option}>
            <input type="radio" id={index} name="answers" value={option} onChange={handleChange}/>
            <label className='answer' htmlFor={index}>{option}</label>
          </p>
        )
      })}
    </fieldset>
  )
}

export default Radio;