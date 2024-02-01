// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

function Home({ isLoggedIn, onLogout }) {
  return (
    <div className="Home">
      <h1>메인 화면입니다.</h1>
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
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
}

export default Home;
