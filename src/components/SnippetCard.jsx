import React, { useEffect } from 'react';
import Prism from 'prismjs';

function SnippetCard({ title, code, category }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="border p-4 rounded shadow-md my-2 hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-lg font-bold">{title}</h3>
      <pre className="bg-gray-100 p-2 rounded whitespace-pre-wrap">
        <code className="language-javascript">{code}</code>
      </pre>
      <p className="text-sm text-gray-500 italic">Snippet: {category}</p>
    </div>
  );
}

export default SnippetCard;
