// Post.jsx
import React from 'react';

const Post = ({ title, content, imageSrc, like, onLikeClick }) => {
  return (
    <div className='box4'>
      <p>
        <span className='normal'>{title}</span>
        <br />
        {content}
      </p>
      <img className="img" src={imageSrc} alt='눈사진' />
      <h2>
        <span onClick={onLikeClick}>❤️</span>
        {like}
      </h2>
    </div>
  );
};

export default Post;



