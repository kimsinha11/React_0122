import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태 변수
  const navigate = useNavigate(); // 페이지 이동 함수
  const location = useLocation(); // 현재 경로를 가져오는 훅

  const handleLogin = () => {
    setIsLoggedIn(true); // 로그인 상태 변경
    navigate('/'); // 홈으로 이동
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // 로그아웃 상태 변경
    navigate('/'); // 홈으로 이동
  };

  // 현재 경로가 로그인 페이지인지 확인하여, 로그인 버튼을 숨김
  const hideLoginButton = location.pathname === '/login';

  return (
    <div className="App">
      <header className="Header">
        <h1>게시판</h1>
        <div className="HeaderButtons">
          {!hideLoginButton && !isLoggedIn && <Link to="/login" className="LoginButton">로그인</Link>}
          {isLoggedIn && <button onClick={handleLogout}>로그아웃</button>}
        </div>
      </header>
      {isLoggedIn && (
        <nav className="Menu">
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
            <li>
              <Link to="/contact">연락</Link>
            </li>
          </ul>
        </nav>
      )}
      <main className="Content">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
        </Routes>
      </main>
      <footer className="Footer">
        <p>&copy; 2024 게시판 앱</p>
      </footer>
    </div>
  );
}

export default App;
