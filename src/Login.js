import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Link 컴포넌트와 useNavigate 훅 가져오기

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동 함수 가져오기

  const handleLogin = () => {
    // 로그인 처리
    if (!username || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
    } else {
      onLogin(username, password); // 사용자명과 비밀번호를 부모 컴포넌트로 전달하여 로그인 처리
      navigate('/'); // 홈으로 이동
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
          <button onClick={handleLogin}>로그인</button>
          <br />
          <p>계정이 없으신가요? <Link to="/signup">회원가입</Link></p> {/* 회원가입 링크 추가 */}
        </Form>
      </Container>
    </div>
  );
}

export default Login;
