import React from 'react';
import InputField from './First';

function InputGroup3({ input1, input2, input3, setInput3 }) {
  if (!input1 || !input2) {
    return null;
  }

  return (
    <div>
      <h2>Input 3:</h2>
      <InputField value={input3} onChange={(e) => setInput3(e.target.value)} />
    </div>
  );
}

export default InputGroup3;
