import React, { useState, useEffect } from 'react';
import InputGroup2 from './component/Second';
import InputGroup3 from './component/Third';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [allInputs, setAllInputs] = useState('');

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
    setInput2('');
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const handleInput3Change = (event) => {
    setInput3(event.target.value);
  };

  useEffect(() => {
    setAllInputs(input1 + input2 + input3);
  }, [input1, input2, input3]);

  return (
    <div>
      <h2>Input 1:</h2>
      <input type="text" value={input1} onChange={handleInput1Change} />
      <br /><br />

      <InputGroup2 input1={input1} input2={input2} setInput2={setInput2} />
      
      <InputGroup3 input1={input1} input2={input2} input3={input3} setInput3={setInput3} />

      <h2>All Inputs:</h2>
      <input type="text" value={allInputs} readOnly />
      <br /><br />
    </div>
  );
}

export default App;
