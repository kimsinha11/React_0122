import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
    } else {
      onLogin(); // onLogin 프롭스 호출
      navigate('/home'); // 로그인 성공 시 '/home'으로 이동
    }
  };

  return (
    <div className="LoginForm">
      <Container>
        <Form>
          <br /><br />
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>아이디</Form.Label>
            <Form.Control
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />
          <button type="button" onClick={handleLogin}>로그인</button>
          <br />
          <p>계정이 없으신가요? <Link to="/signup">회원가입</Link></p>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
