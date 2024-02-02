import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ title, isLoggedIn, onLogout }) {
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

  const handleLogout = () => {
    onLogout(); // 로그아웃 수행
    navigate('/'); // 로그아웃 후 '/'로 이동
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
            <li>
              <button className="logout-button" onClick={handleLogout}>로그아웃</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
