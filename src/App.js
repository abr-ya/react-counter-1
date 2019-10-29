import React, {useState} from 'react';
import './App.scss';

const App = (props) => {
  const [inputValue, setInputValue] = useState('');

  const {
    add,
    sub,
    pow,
    res,
    counter,
    addNum,
  } = props;

  const handleInput = e => {
    if (!!e.target.value) {
      setInputValue(parseFloat(e.target.value));
    }
  }

  return (
    <div className={'App'}>
      <h1>Управляем числом: {counter}</h1>

      <hr/>

      <div className="Actions">
        <button onClick={add}>Добавить 1</button>
        <button onClick={sub}>Вычесть 1</button>
        <button onClick={pow}>Возвести в степень</button>
        <button onClick={res}>Сбросить</button>
        <button onClick={() => {addNum(!!inputValue ? inputValue : 0); setInputValue('')}}>Добавить число </button>
        <input type='number' onChange={handleInput} value={inputValue}/>
      </div>
    </div>
  )
}

export default App;
