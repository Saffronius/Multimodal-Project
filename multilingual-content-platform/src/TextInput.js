import React from 'react';

const TextInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="border p-2 w-full"
      placeholder="Enter text"
    />
  );
};

export default TextInput;
