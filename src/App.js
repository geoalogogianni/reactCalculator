import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '-', '+', '.'];

  const updateCalc = value => {
    if (
      ((ops.includes(value)) && (calc === '')) ||
      ((ops.includes(value)) && (ops.includes(calc.slice(-1))
      ))) {
      return;
    }


    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 0; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )

    }
    return digits
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteAll = () => {
    if (calc !== '') {
      setCalc('');
      setResult('');
    }
  }

  const deleteLast = () => {
    if (calc === '') {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
    
  }



  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>[{result}]</span> : ''} &nbsp;
          {calc || '0'}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={deleteLast}>DELETE</button>
        </div>

        <div className="digits">

          {createDigits()}
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
          
        </div>
        <div className="clear">
          <button onClick={deleteAll}>CLEAR</button>
          </div>
        
      </div>
      

    </div>

  );
}

export default App;
