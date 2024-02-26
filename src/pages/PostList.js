import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../PostList.css';

function PostList({ isLoggedIn }) {
  const navigate = useNavigate();
<<<<<<< HEAD

  // 게시글 작성 날짜를 가져오는 함수
=======
  // 임시로 만든 데이터
  const [posts, setPosts] = useState([
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
  ]);
  
  const itemsPerPage = 10; // 한 페이지에 표시할 게시물 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호

>>>>>>> 060f62ffd3e2886dd329c6400cf3839210238425
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

<<<<<<< HEAD
  // 임시로 만든 데이터
  const [posts, setPosts] = useState([
    { id: 1, title: '글 제목 1', content: '글 내용 1', writer:'홍길동', date: getCurrentTime(), likes: 0, dislikes: 0 },
    { id: 2, title: '글 제목 2', content: '글 내용 2', writer:'홍길동', date: getCurrentTime(), likes: 0, dislikes: 0 },
    { id: 3, title: '글 제목 3', content: '글 내용 3', writer:'홍길동', date: getCurrentTime(), likes: 0, dislikes: 0 },
    // 필요한 만큼 데이터 추가
  ]);
  
  const itemsPerPage = 10; // 한 페이지에 표시할 게시물 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호

=======
>>>>>>> 060f62ffd3e2886dd329c6400cf3839210238425
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

  useEffect(() => {
    // URL에서 페이지 번호 가져오기
    const searchParams = new URLSearchParams(window.location.search);
    const pageParam = searchParams.get('page');
    const parsedPage = parseInt(pageParam);

<<<<<<< HEAD
    // 페이지 번호가 유효한지 확인하고, 현재 페이지로 설정
    if (!isNaN(parsedPage) && parsedPage >= 1 && parsedPage <= Math.ceil(posts.length / itemsPerPage)) {
=======
     // 페이지 번호가 유효한지 확인하고, 현재 페이지로 설정
     if (!isNaN(parsedPage) && parsedPage >= 1 && parsedPage <= Math.ceil(posts.length / itemsPerPage)) {
>>>>>>> 060f62ffd3e2886dd329c6400cf3839210238425
      setCurrentPage(parsedPage);
    } else {
      // 잘못된 페이지 번호면 첫 페이지로 이동
      navigate(`?page=1`);
    }
  }, [posts.length, itemsPerPage, navigate]);

  // 페이지 변경 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`?page=${pageNumber}`);
  };

<<<<<<< HEAD
=======

>>>>>>> 060f62ffd3e2886dd329c6400cf3839210238425
  // 현재 페이지에 해당하는 게시물 가져오기
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 번호 목록 생성
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="PostList">
<<<<<<< HEAD
      <div><h1>공지사항</h1></div> 
=======
      <div><h1>게시글</h1></div> 
>>>>>>> 060f62ffd3e2886dd329c6400cf3839210238425
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
          {/* 현재 페이지에 해당하는 게시물 표시 */}
          {currentPosts.map(post => (
            <tr key={post.id}>
              <td className="Center">{post.id}</td>
              <td><Link to={`/detail/${post.id}`}>{post.title}</Link></td>
              <td><Link to={`/detail/${post.id}`}>{post.content}</Link></td>
              <td className="Center">{post.writer}</td>
<<<<<<< HEAD
              <td className="Center">{post.date}</td> {/* 작성 날짜를 표시 */}
=======
              <td className="Center">{getCurrentTime()}</td>
>>>>>>> 060f62ffd3e2886dd329c6400cf3839210238425
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
      {/* 페이지 번호 목록 표시 */}
      <div className="Pagination">
        {pageNumbers.map(number => (
          <button key={number} onClick={() => handlePageChange(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default PostList;
=======
export default PostList;
>>>>>>> 060f62ffd3e2886dd329c6400cf3839210238425
