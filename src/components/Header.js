import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
function Header({ title, isLoggedIn }) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <header className="Header">
      <h1>{title}</h1>
      {isLoggedIn && (
        <nav className="Menu">
          <ul>
            <li>
              <button onClick={handleHomeClick}>홈</button>
            </li>
            <li>
              <button onClick={handleAboutClick}>소개</button>
            </li>
            <li>
              <button onClick={handleContactClick}>연락</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
