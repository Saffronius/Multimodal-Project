import React from 'react';

const FileUpload = ({ onFileChange }) => {
  return (
    <input
      type="file"
      onChange={onFileChange}
      className="border p-2 w-full"
    />
  );
};

export default FileUpload;
