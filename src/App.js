import { useState } from 'react';
import './App.css';
import Radio from './components/Form/Radio';
import Button from 'react-bootstrap/Button';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setCurrentQuestion(prev => prev + 1);
    setIsChecked(false);
    //setAnswers( curr => [...curr])
  };

  function handleChecked(checked, element, question) {
    setIsChecked(checked);
    perguntas.map( pergunta => {
      if ((pergunta.id === question) && (element === pergunta.resposta)) {
          setCorrectAnswers( curr => [...curr, pergunta.id])
        }
    })
  };

  function correctQuestions() {
    return <div id='result'>Você acertou {correctAnswers.length} de {perguntas.length} perguntas.</div>
  };

  return (
    currentQuestion < perguntas.length
      ? <form className='form' onSubmit={handleSubmit}>
          <Radio ask={perguntas[currentQuestion]} onChecked={handleChecked}/>
          <Button type="submit" disabled={!isChecked}>Próxima</Button>
        </form>
      : correctQuestions()
  );
}

export default App;
