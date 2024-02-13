import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

function Header({ title, isLoggedIn, onLogout }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleWriteClick = () => {
    navigate('/write');
  };

  const handlePostListClick = () => {
    navigate('/postlist');
  };

  const handleLogout = () => {
    onLogout(); // 로그아웃 수행
    navigate('/'); // 로그아웃 후 '/'로 이동
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header className="Header">
      <h1>{title}</h1>
      {pathname !== '/' && !isLoggedIn && (
        <button className="login-button" onClick={handleLoginClick}>로그인</button>
      )}
      {isLoggedIn && (
        <nav className="Menu">
          <ul>
            <li>
              <button onClick={handleHomeClick}>홈</button>
            </li>
            <li>
              <button onClick={handleWriteClick}>글쓰기</button>
            </li>
            <li>
              <button onClick={handlePostListClick}>게시판</button>
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
