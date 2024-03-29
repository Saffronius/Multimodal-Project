import React, { useState } from 'react';
import TextInput from './TextInput';
import LanguageSelector from './LanguageSelector';
import FileUpload from './FileUpload';
import SubmitButton from './SubmitButton';
import ResponseDisplay from './ResponseDisplay';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default to English
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState('');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    // Add other languages as needed
  ];

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('text', inputText);
    formData.append('language', selectedLanguage);
    if (file) formData.append('file', file);
  
    try {
      // Update the URL to your actual API endpoint
      const response = await axios.post('http://localhost:5000/api/process', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Assuming the response contains the processed data in 'data.result'
      setResponse(response.data.result);
    } catch (error) {
      console.error("Error during the API request:", error);
      // Optionally update the state to show an error message
      setResponse("An error occurred while processing your request.");
    }
  };
  
  return (
    <div className="App p-4">
      <h1 className="text-xl mb-4">Multilingual Content Platform</h1>
      <TextInput value={inputText} onChange={handleTextChange} />
      <LanguageSelector
        languages={languages}
        selectedLanguage={selectedLanguage}
        onChange={handleLanguageChange}
      />
      <FileUpload onFileChange={handleFileChange} />
      <SubmitButton onClick={handleSubmit} />
      <ResponseDisplay response={response} />
    </div>
  );
}

export default App;
