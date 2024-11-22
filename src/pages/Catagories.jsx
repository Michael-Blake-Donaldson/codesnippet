import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from '../ThemeContext';
import SearchableDropdown from '../components/SearchableDropdown';

function Categories() {
  const { theme } = useContext(ThemeContext); // Access the current theme
  const [snippets, setSnippets] = useState([]);
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [category, setCategory] = useState('');
  const [filter, setFilter] = useState('All'); // Filter state
  const [editIndex, setEditIndex] = useState(null);

  // Predefined categories with associated languages
  const predefinedCategories = [
    { label: 'JavaScript', language: 'javascript' },
    { label: 'Python', language: 'python' },
    { label: 'Java', language: 'java' },
    { label: 'C++', language: 'cpp' },
    { label: 'C#', language: 'csharp' },
    { label: 'Go', language: 'go' },
    { label: 'Ruby', language: 'ruby' },
    { label: 'PHP', language: 'php' },
    { label: 'Swift', language: 'swift' },
    { label: 'Kotlin', language: 'kotlin' },
    { label: 'Rust', language: 'rust' },
    { label: 'TypeScript', language: 'typescript' },
    { label: 'HTML', language: 'html' },
    { label: 'CSS', language: 'css' }
  ];

  // Load snippets from localStorage
  useEffect(() => {
    const storedSnippets = JSON.parse(localStorage.getItem('snippets')) || [];
    setSnippets(storedSnippets);
  }, []);

  // Save snippets to localStorage
  useEffect(() => {
    localStorage.setItem('snippets', JSON.stringify(snippets));
  }, [snippets]);

  // Save a new snippet
  const handleSaveSnippet = () => {
    if (!title || !code || !category) {
      alert('Please fill out all fields!');
      return;
    }

    const selectedCategory = predefinedCategories.find((cat) => cat.label === category);
    const language = selectedCategory ? selectedCategory.language : 'plaintext';

    const newSnippet = { title, code, category, language };

    if (editIndex !== null) {
      // Update existing snippet
      const updatedSnippets = [...snippets];
      updatedSnippets[editIndex] = newSnippet;
      setSnippets(updatedSnippets);
      setEditIndex(null); // Exit edit mode
    } else {
      // Add new snippet
      setSnippets([...snippets, newSnippet]);
    }

    setTitle('');
    setCode('');
    setCategory('');
  };

  // Edit a snippet
  const handleEditSnippet = (index) => {
    const snippet = snippets[index];
    setTitle(snippet.title);
    setCode(snippet.code);
    setCategory(snippet.category);
    setEditIndex(index);
  };

  // Delete a snippet
  const handleDeleteSnippet = (index) => {
    const updatedSnippets = snippets.filter((_, i) => i !== index);
    setSnippets(updatedSnippets);
  };

  // Copy snippet to clipboard
  const handleCopySnippet = (snippet) => {
    navigator.clipboard.writeText(snippet.code).then(() => {
      alert('Snippet copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy snippet.');
    });
  };

  // Filter snippets by selected category
  const filteredSnippets = filter === 'All'
    ? snippets
    : snippets.filter((snippet) => snippet.category === filter);

  return (
    <div className={`min-h-screen p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-2xl font-bold mb-4">Manage Your Snippets</h1>

      {/* Filter Dropdown */}
      <div className="mb-4">
        <label className="mr-2">Filter by Category:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={`border p-2 rounded ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
          }`}
        >
          <option value="All">All</option>
          {predefinedCategories.map((cat, index) => (
            <option
              key={index}
              value={cat.label}
              className={`${
                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
              }`}
            >
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* Snippet Form */}
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

      {/* Display Snippets */}
      <div>
        {filteredSnippets.map((snippet, index) => (
          <div key={index} className="border p-4 rounded mb-2 shadow-md">
            <h2 className="text-lg font-bold">{snippet.title}</h2>
            <p className="text-sm italic text-gray-600">Category: {snippet.category}</p>
            <pre className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
              {snippet.code}
            </pre>
            <div className="flex mt-2 space-x-2">
              <button
                onClick={() => handleEditSnippet(index)}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteSnippet(index)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => handleCopySnippet(snippet)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
