import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import SearchableDropdown from './SearchableDropdown';

function SnippetForm({ title, setTitle, code, setCode, category, setCategory, predefinedCategories, handleSaveSnippet, editIndex }) {
  const { theme } = useContext(ThemeContext); // Access the theme context

  return (
    <div className="mb-4">
      {/* Title Input */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`border p-2 rounded w-full mb-2 ${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
        }`}
      />

      {/* Code Input */}
      <textarea
        placeholder="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className={`border p-2 rounded w-full mb-2 ${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
        }`}
      />

      {/* Category Dropdown */}
      <SearchableDropdown
        options={predefinedCategories.map((cat) => cat.label)}
        value={category}
        onChange={(selectedCategory) => setCategory(selectedCategory)}
        placeholder="Select or search a category"
        className={`border p-2 rounded w-full ${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
        }`}
      />

      {/* Save Button */}
      <button
        onClick={handleSaveSnippet}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        {editIndex !== null ? 'Update Snippet' : 'Save Snippet'}
      </button>
    </div>
  );
}

export default SnippetForm;
