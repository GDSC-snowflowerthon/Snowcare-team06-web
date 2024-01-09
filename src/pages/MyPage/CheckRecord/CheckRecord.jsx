import React, { useState } from 'react';
import "./CheckRecord.css"
import SearchBar from './SearchBar';

export default function CheckRecord(){
  return(
    <div>
      <SearchBar id="search"/>
      <div className='box'>
        <p>글 제목<br/>내용</p>
        <img className="img" src="./CheckRecord-img.png" alt='눈사진'></img>
      </div>
      <div className='box'>
        <p>글 제목<br/>내용</p>
        <img className="img" src="./CheckRecord-img.png" alt='눈사진'></img>
      </div>
      <div className='box'>
        <p>글 제목<br/>내용</p>
      </div>
      <div className='box'>
        <p>글 제목<br/>내용</p>
      </div>
      <button className="write-button">글 작성하기</button>
    </div>
  );
}
