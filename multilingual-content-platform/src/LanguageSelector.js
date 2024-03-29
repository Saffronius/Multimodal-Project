import React from 'react';

const LanguageSelector = ({ languages, selectedLanguage, onChange }) => {
  return (
    <select value={selectedLanguage} onChange={onChange} className="border p-2">
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
