import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
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
        <Header title="게시판" isLoggedIn={isLoggedIn} />
        <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
            {isLoggedIn ? (
        <Route path="/home" element={<Home isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
          ) : (
        <Route path="*" element={<Navigate to="/" />} />
         )}
        </Routes>
        <Footer content="위지언" />
      </div>
   
  );
}

export default App;
