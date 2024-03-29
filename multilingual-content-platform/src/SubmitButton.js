import React from 'react';

const SubmitButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded">
      Submit
    </button>
  );
};

export default SubmitButton;
