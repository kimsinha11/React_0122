import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Write({ isLoggedIn }) {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      console.log('로그인이 필요합니다.');
      return;
    }
    // 여기서 content를 사용하여 작성한 글을 처리할 수 있습니다.
    console.log('작성된 내용:', content);
    // 글 작성 후 PostList 페이지로 이동합니다.
    navigate('/PostList');
  };

  return (
    <div className="Write">
      <h2>글쓰기 페이지입니다.</h2>
      {isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <textarea
            value={content}
            onChange={handleChange}
            placeholder="글을 작성해주세요..."
            rows="5"
            cols="50"
          />
          <br />
          <button type="submit">글 작성하기</button>
        </form>
      ) : (
        <p>로그인이 필요한 서비스입니다.</p>
      )}
    </div>
  );
}

export default Write;
