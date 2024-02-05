import React from 'react';
import { useParams } from 'react-router-dom';
import '../Detail.css';

function Detail() {
  // useParams 훅을 사용하여 URL에서 게시물 ID를 추출합니다.
  const { id } = useParams();

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
    <div>
      <h2>게시물 상세 페이지</h2>
      <p>ID: {selectedPost.id}</p>
      <p>제목: {selectedPost.title}</p>
      <p>내용: {selectedPost.content}</p>
      <p>작성자: {selectedPost.writer}</p>
      <p>작성날짜: {selectedPost.date}</p>
      {/* 이곳에 해당 게시물의 상세 내용을 표시하는 코드를 추가하세요 */}
    </div>
  );
}

export default Detail;
