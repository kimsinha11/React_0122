import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../PostList.css';

function PostList({ isLoggedIn }) {
  // 임시로 만든 데이터
  const [posts, setPosts] = useState([
    { id: 1, title: '글 제목 1', content: '글 내용 1', writer:'홍길동', date:'', likes: 0, dislikes: 0 },
    { id: 2, title: '글 제목 2', content: '글 내용 2', writer:'홍길동', date:'', likes: 0, dislikes: 0 },
    { id: 3, title: '글 제목 3', content: '글 내용 3', writer:'홍길동', date:'', likes: 0, dislikes: 0 },
    // 필요한 만큼 데이터 추가
  ]);

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

  // 수정 버튼 클릭 시 실행되는 함수
  const handleEdit = (postId) => {
    if (!isLoggedIn) {
      alert('로그인 후 이용 가능합니다.');
      return;
    }
    console.log(`게시물 ${postId}를 수정합니다.`);
    // 여기에 수정 기능을 구현할 수 있습니다.
  };

  // 삭제 버튼 클릭 시 실행되는 함수
  const handleDelete = (postId) => {
    if (!isLoggedIn) {
      alert('로그인 후 이용 가능합니다.');
      return;
    }
    console.log(`게시물 ${postId}를 삭제합니다.`);
    // 여기에 삭제 기능을 구현할 수 있습니다.
  };

  // 추천 버튼 클릭 시 실행되는 함수
  const handleRecommend = (postId) => {
    if (!isLoggedIn) {
      alert('로그인 후 이용 가능합니다.');
      return;
    }
    setPosts(prevPosts => prevPosts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    }));
  };

  // 비추천 버튼 클릭 시 실행되는 함수
  const handleUnrecommend = (postId) => {
    if (!isLoggedIn) {
      alert('로그인 후 이용 가능합니다.');
      return;
    }
    setPosts(prevPosts => prevPosts.map(post => {
      if (post.id === postId) {
        return { ...post, dislikes: post.dislikes + 1 };
      }
      return post;
    }));
  };

  return (
    <div className="PostList">
      <div><h1>게시글</h1></div> 
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th className="post_title">제목</th>
            <th className="post_cont">내용</th>
            <th>작성자</th>
            <th>작성날짜</th>
            <th>수정/삭제</th>
            <th>추천/비추천</th>
          </tr>
        </thead>
        <tbody>
          {/* 임시 데이터를 사용하여 테이블 행을 생성 */}
          {posts.map(post => (
            <tr key={post.id}>
              <td className="Center">{post.id}</td>
              <td><Link to={`/detail/${post.id}`}>{post.title}</Link></td>
              <td>{post.content}</td>
              <td className="Center">{post.writer}</td>
              <td className="Center">{getCurrentTime()}</td>
              <td className="Center">
                <button onClick={() => handleEdit(post.id)}>수정</button>
                <button onClick={() => handleDelete(post.id)}>삭제</button>
              </td>
              <td className="Center">
                <button onClick={() => handleRecommend(post.id)}>추천</button> 👍 {post.likes}
                <button onClick={() => handleUnrecommend(post.id)}>비추천</button> 👎 {post.dislikes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostList;
