import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'; // Home icon
import { BiCodeBlock } from 'react-icons/bi'; // Snippets icon
import { FiUser } from 'react-icons/fi'; // Profile icon
import ThemeContext from '../ThemeContext';

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`p-4 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'} text-center`}>
      <nav className="flex items-center justify-between">
        {/* Title */}
        <h1 className="text-lg font-bold">CODE SNIPPET</h1>

        {/* Icons */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-500 hover:scale-110 transition-all duration-200">
              <AiOutlineHome size={40} />
            </Link>
          </li>
          <li>
            <Link to="/categories" className="hover:text-blue-500 hover:scale-110 transition-all duration-200">
              <BiCodeBlock size={40} />
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-blue-500 hover:scale-110 transition-all duration-200">
              <FiUser size={40} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
