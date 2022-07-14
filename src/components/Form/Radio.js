import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';

const RadioComponent = ({ ask, onChecked }) => {
  const [answer, setAnswer] = useState('');

  function handleChange({ target }) {
    setAnswer( ask.options[target.id] );
    onChecked(true, target.value, ask.id);
  };

  return (
    <Card className='m-2'>
      <Card.Header>{ask.pergunta}</Card.Header>
      {ask.options.map((option, index) => {
        return (
          <Card.Body>
            <p key={option}>
              <input type="radio" id={index} name="answers" value={option} onChange={handleChange}/>
              <label className='answer' htmlFor={index}>{option}</label>
            </p>
          </Card.Body>
        )
      })}
    </Card>
  )
}

export default RadioComponent;