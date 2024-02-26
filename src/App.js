import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import PostList from './pages/PostList.js';
import Write from './pages/Write';
import Detail from './pages/Detail';
import Comment from './pages/Comment.js';
import './App.css';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      
      <Header title="게시판" isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/home" element={<Home isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
          <Route path="/write" element={<Write isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
          <Route path="/postlist" element={<PostList isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
          <Route path="/detail/:id" element={<Detail isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
          <Route path="/comment" element={<Comment isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
          {/* Redirect to login page if not logged in */}
          {!isLoggedIn && <Route path="*" element={<Navigate to="/" />} />}
        </Routes>
        <Footer content="위지언" />
      
    </div>
  );
}

export default App;
