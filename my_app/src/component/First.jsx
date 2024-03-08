import React from 'react';

function InputField({ value, onChange }) {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <br /><br />
    </div>
  );
}

export default InputField;
