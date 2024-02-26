import React from 'react';
import Calendar from 'react-calendar';
import '../App.css';

function Home({ isLoggedIn, onLogout }) {
  return (
    <div className="Home">
      <div><h1>메인 화면입니다.</h1></div>
      <div>
        <Calendar />
      </div>
    </div>
  );
}

export default Home;
