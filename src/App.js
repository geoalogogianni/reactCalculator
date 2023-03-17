import { useState } from 'react';

function App() {
  
  const createDigits = () => {
    const digits = [];

    for(let i=0; i<10; i++ ){
      digits.push(
        <button key={i}>{i}</button>
      )
      
    }
    return digits
  }


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span> 0
        </div>
        
        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>-</button>
          <button>+</button>
          <button>DELETE</button>
        </div>

        <div className="digits">

          {createDigits()}
          <button>.</button>
          <button>=</button>
        </div>

        </div>

      </div>
   
  );
}

export default App;
