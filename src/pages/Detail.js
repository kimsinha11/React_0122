import React from 'react';
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
  const posts = [
    { id: 1, title: '글 제목 1', content: '글 내용 1', writer:'홍길동', date:'' },
    { id: 2, title: '글 제목 2', content: '글 내용 2', writer:'홍길동', date:'' },
    { id: 3, title: '글 제목 3', content: '글 내용 3', writer:'홍길동', date:'' },
    // 필요한 만큼 데이터 추가
  ];

  // 해당 ID에 맞는 게시물을 찾습니다.
  const selectedPost = posts.find(post => post.id === parseInt(id));

  // 선택된 게시물이 없다면 에러 메시지를 표시합니다.
  if (!selectedPost) {
    return <div>해당 게시물을 찾을 수 없습니다.</div>;
  }

  return (
    
    <div className="Detail"> {/* 수정: 클래스를 적용할 요소에 className 속성을 추가합니다. */}
        <div className="Main">
        <h2>게시물 상세 페이지</h2>
      <p>ID: {selectedPost.id}</p>
      <p>제목: {selectedPost.title}</p>
      <p>내용: {selectedPost.content}</p>
      <p>작성자: {selectedPost.writer}</p>
      <p>작성날짜: {selectedPost.date}</p></div>
       
      <div className="Comment">
       <Comment postId={selectedPost.id} />
       </div>
       <div className="ButtonContainer">
        <button onClick={goToPostList}>뒤로가기</button>
      </div>
    </div>
  );
}

export default Detail;
