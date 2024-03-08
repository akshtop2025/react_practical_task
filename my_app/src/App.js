import React, { useState } from 'react';

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

  React.useEffect(() => {
    setAllInputs(input1 + input2 + input3);
  }, [input1, input2, input3]);

  return (
    <div>
      <h2>Input 1:</h2>
      <input type="text" value={input1} onChange={handleInput1Change} />
      <br /><br />

      {input1 && (
        <div>
          <h2>Input 2:</h2>
          <input type="text" value={input2} onChange={handleInput2Change} />
          <br /><br />
        </div>
      )}

      {(input1 && input2) && (
        <div>
          <h2>Input 3:</h2>
          <input type="text" value={input3} onChange={handleInput3Change} />
          <br /><br />
        </div>
      )}

      <h2>All Inputs:</h2>
      <input type="text" value={allInputs} readOnly />
      <br /><br />
    </div>
  );
}

export default App;
