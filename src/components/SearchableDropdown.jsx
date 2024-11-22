import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

function SearchableDropdown({ options, value, onChange, placeholder }) {
  const { theme } = useContext(ThemeContext); // Access the current theme

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`border p-2 rounded w-full 
        ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}
      `}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option
          key={index}
          value={option}
          className={`${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
          }`}
        >
          {option}
        </option>
      ))}
    </select>
  );
}

export default SearchableDropdown;
