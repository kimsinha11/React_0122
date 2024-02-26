// Comment.js
import React from 'react';
import '../Comment.css'; 

function Comment({ postId }) {
  // postId를 이용하여 해당 게시글의 댓글을 가져오거나 렌더링하는 코드를 작성합니다.
  return (
    <div>
      <h3>댓글</h3>
      {/* 댓글 목록을 표시하는 UI를 구현하고 postId를 활용하여 해당 게시글의 댓글을 가져옵니다. */}
      {/* 예시 댓글 목록 */}
      <ul>
        <li>{`게시글 ${postId}의 댓글 1`}</li>
        <li>{`게시글 ${postId}의 댓글 2`}</li>
        <li>{`게시글 ${postId}의 댓글 3`}</li>
      </ul>
    </div>
  );
}

export default Comment;
