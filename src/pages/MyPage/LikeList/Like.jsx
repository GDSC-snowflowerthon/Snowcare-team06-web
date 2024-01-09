// Like.jsx
import React, { useState } from 'react';
import Post from './Post';
import './Like.css';

const Like = () => {
  const [like, likeChange] = useState(0);

  const handleLikeClick = () => {
    likeChange(like + 1);
  };

  return (
    <>
      <h3>좋아요한 매칭글</h3>

      <Post
        title="게시글 제목"
        content="게시글 제목[지금 용인은] 우리동네 눈 치우기 자원봉사활동"
        imageSrc="./CheckRecord-img.png"
        like={like}
        onLikeClick={handleLikeClick}
      />

        <Post
        title="게시글 제목"
        content="게시글 제목[지금 용인은] 우리동네 눈 치우기 자원봉사활동"
        imageSrc="./CheckRecord-img.png"
        like={like}
        onLikeClick={handleLikeClick}
      />

        <Post
        title="게시글 제목"
        content="게시글 제목[지금 용인은] 우리동네 눈 치우기 자원봉사활동"
        imageSrc="./CheckRecord-img.png"
        like={like}
        onLikeClick={handleLikeClick}
      />

        <Post
        title="게시글 제목"
        content="게시글 제목[지금 용인은] 우리동네 눈 치우기 자원봉사활동"
        imageSrc="./CheckRecord-img.png"
        like={like}
        onLikeClick={handleLikeClick}
      />
    </>
  );
};

export default Like;
