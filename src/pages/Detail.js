<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
>>>>>>> 060f62ffd3e2886dd329c6400cf3839210238425
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Detail.css'; // 수정: 파일 경로를 정확히 지정해주세요.
import Comment from './Comment'; // Comment 컴포넌트를 import .

function Detail() {
  // useParams 훅을 사용하여 URL에서 게시물 ID를 추출합니다.
  const { id } = useParams();

  const navigate = useNavigate();

  const goToPostList = () => {
    navigate('/postlist');
  };

  // 임시로 만든 예시 데이터를 가져옵니다.
<<<<<<< HEAD
  const [posts, setPosts] = useState([
    { id: 1, title: '글 제목 1', content: '글 내용 1', writer:'홍길동', date:'', likes: 0, dislikes: 0 },
    { id: 2, title: '글 제목 2', content: '글 내용 2', writer:'홍길동', date:'', likes: 0, dislikes: 0 },
    { id: 3, title: '글 제목 3', content: '글 내용 3', writer:'홍길동', date:'', likes: 0, dislikes: 0 },
    // 필요한 만큼 데이터 추가
  ]);

  useEffect(() => {
    // 현재 날짜를 생성합니다.
    const getCurrentTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hour = String(now.getHours()).padStart(2, '0');
      const minute = String(now.getMinutes()).padStart(2, '0');
      const second = String(now.getSeconds()).padStart(2, '0');
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    };

    // 게시물 데이터를 업데이트합니다.
    const updatedPosts = posts.map(post => ({ ...post, date: getCurrentTime() }));
    setPosts(updatedPosts);
  }, []); // 이 부분은 한 번만 실행되어야 하므로 의존성 배열이 비어 있습니다.

  // 선택된 게시물을 찾습니다.
=======
  const posts = [
    { id: 1, title: '글 제목 1', content: '글 내용 1', writer:'홍길동', date:'', likes: 0, dislikes: 0 },
    { id: 2, title: '글 제목 2', content: '글 내용 2', writer:'홍길동', date:'', likes: 0, dislikes: 0 },
    { id: 3, title: '글 제목 3', content: '글 내용 3', writer:'홍길동', date:'', likes: 0, dislikes: 0 },    { id: 4, title: '글 제목 1', content: '글 내용 1', writer:'홍길동', date:'', likes: 0, dislikes: 0 },
    { id: 5, title: '글 제목 2', content: '글 내용 2', writer:'홍길동', date:'', likes: 0, dislikes: 0 },
    { id: 6, title: '글 제목 3', content: '글 내용 3', writer:'홍길동', date:'', likes: 0, dislikes: 0 },    { id: 71, title: '글 제목 1', content: '글 내용 1', writer:'홍길동', date:'', likes: 0, dislikes: 0 },
    { id: 8, title: '글 제목 2', content: '글 내용 2', writer:'홍길동', date:'', likes: 0, dislikes: 0 },
    { id: 9, title: '글 제목 3', content: '글 내용 3', writer:'홍길동', date:'', likes: 0, dislikes: 0 },    { id: 10, title: '글 제목 1', content: '글 내용 1', writer:'홍길동', date:'', likes: 0, dislikes: 0 },
    { id: 11, title: '글 제목 2', content: '글 내용 2', writer:'홍길동', date:'', likes: 0, dislikes: 0 },
    { id: 12, title: '글 제목 3', content: '글 내용 3', writer:'홍길동', date:'', likes: 0, dislikes: 0 },    { id: 13, title: '글 제목 1', content: '글 내용 1', writer:'홍길동', date:'', likes: 0, dislikes: 0 }
    // 필요한 만큼 데이터 추가
  ];

  // 해당 ID에 맞는 게시물을 찾습니다.
>>>>>>> 060f62ffd3e2886dd329c6400cf3839210238425
  const selectedPost = posts.find(post => post.id === parseInt(id));

  // 선택된 게시물이 없다면 에러 메시지를 표시합니다.
  if (!selectedPost) {
    return <div>해당 게시물을 찾을 수 없습니다.</div>;
  }

  return (
<<<<<<< HEAD
    <div className="Detail"> {/* 수정: 클래스를 적용할 요소에 className 속성을 추가합니다. */}
      <h2>게시물 상세 페이지</h2>
      <div className="Main">
        <p>ID: {selectedPost.id}</p>
        <p>제목: {selectedPost.title}</p>
        <p>내용: {selectedPost.content}</p>
        <p>작성자: {selectedPost.writer}</p>
        <p>작성날짜: {selectedPost.date}</p>
      </div>
      <div className="ButtonContainer">
        <button onClick={goToPostList}>뒤로가기</button>
      </div>
      <div className="Comment">
        <Comment postId={selectedPost.id} />
      </div>
=======
    
    <div className="Detail"> {/* 수정: 클래스를 적용할 요소에 className 속성을 추가합니다. */}
    <h2>게시물 상세 페이지</h2>
        <div className="Main">
          <p>ID: {selectedPost.id}</p>
          <p>제목: {selectedPost.title}</p>
          <p>내용: {selectedPost.content}</p>
          <p>작성자: {selectedPost.writer}</p>
          <p>작성날짜: {selectedPost.date}</p>
        </div>
        <div className="ButtonContainer">
          <button onClick={goToPostList}>뒤로가기</button>
        </div>
        <div className="Comment">
          <Comment postId={selectedPost.id} />
        </div>
>>>>>>> 060f62ffd3e2886dd329c6400cf3839210238425
    </div>
  );
}

export default Detail;
