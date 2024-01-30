import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'; // useNavigate를 추가로 가져옴
import About from './about';
import Contact from './contact';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동을 위한 함수를 가져옴

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
      setIsMenuOpen(true);
    } else {
      alert('아이디와 비밀번호를 입력해주세요.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    navigate('/'); // 로그아웃 후에 '/' 경로로 이동
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="Header">
        <h1>게시판</h1>
      </header>
      {isLoggedIn && (
        <aside className={`Menu ${isMenuOpen ? 'open' : ''}`}>
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={toggleMenu}>홈</Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>소개</Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>연락</Link>
              </li>
              <li>
                <button onClick={handleLogout}>로그아웃</button>
              </li>
            </ul>
          </nav>
        </aside>
      )}
      <main className="Content">
        {!isLoggedIn ? (
          <div className="Login">
            <div className="LoginForm">
              <input
                type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>로그인</button>
            </div>
          </div>
        ) : (
          <h2>로그인 성공! 메뉴를 이용해주세요.</h2>
        )}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="Footer">
        <p>&copy; 2024 게시판 앱</p>
      </footer>
    </div>
  );
}

export default App;
