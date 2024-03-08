import React from 'react';
import InputField from './First';

function InputGroup2({ input1, input2, setInput2 }) {
  if (!input1) {
    return null;
  }

  return (
    <div>
      <h2>Input 2:</h2>
      <InputField value={input2} onChange={(e) => setInput2(e.target.value)} />
    </div>
  );
}

export default InputGroup2;
