import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import Header from './components/Header';
import Categories from './pages/Catagories';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  const { theme } = useContext(ThemeContext); // Access the current theme

  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
