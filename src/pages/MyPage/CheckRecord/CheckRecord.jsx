import React, { useState } from 'react';
import "./CheckRecord.css"
import SearchBar from './SearchBar';

export default function CheckRecord(){
  return(
    <div id='container'>
      <SearchBar id="search"/>

      <div className='box'>
        <div className='text-container'>
          <p className='title'>글 제목~~~~</p>
          <div className='content'>
            <p>내용~~~~~~~~~~~~~~~</p>
          </div>
        </div>
        <img className="img" src="./CheckRecord-img.png" alt='눈사진'></img>
      </div>

      <div className='box'>
        <div className='text-container'>
          <p className='title'>글 제목~~~~</p>
          <div className='content'>
            <p>내용~~~~~~~~~~~~~~~</p>
          </div>
        </div>
        <img className="img" src="./CheckRecord-img.png" alt='눈사진'></img>
      </div>

      <div className='box'>
        <div className='text-container'>
          <p className='title'>글 제목~~~~</p>
          <div className='content'>
            <p>내용~~~~~~~~~~~~~~~</p>
          </div>
        </div>
      </div>

      <div className='box'>
        <div className='text-container'>
          <p className='title'>글 제목~~~~</p>
          <div className='content'>
            <p>내용~~~~~~~~~~~~~~~</p>
          </div>
        </div>
      </div>

      <div className='www'>
        <button className="write-button">글 작성하기
          <img className="write-icon" src='./src/assets/icon/write-button.svg' />
        </button>
        
      </div>
      
    </div>
  );
}
