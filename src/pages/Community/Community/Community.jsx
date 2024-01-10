import React, { useState } from 'react';
import "./Community.css";


export default function LCommunity(){
  const [like, setLike] = useState(0);

  const handleLikeClick = () => {
    setLike(like + 1);
  };
  
  return(
    <div id="container3">
      <div className="user">
        <img id="img" src="./src/assets/images/profile.png" alt="사용자"></img>
        <p>구리구리</p>
      </div>
      <div>
        <img id="simg" src="./LCom.png"></img>
      </div>
      <div className="box3">
        <p className="title3">제목~~~</p>
        <div>
          <p className="content3">12/30에 폭설이 내린대요~<br/>다같이 눈 치워봐요!</p>
        </div>
        <div className='content-container'>
          <p className="content3">2023.12.28</p>
          <p className='like-num'>
            <span onClick={handleLikeClick}>
              <img className='like-button' src='./src/assets/icon/red-like.png'/>
            </span>
            {like}
          </p>
        </div>
        
        <hr className="line"/>
      </div>

      <div className="user">
        <img id="img" src="./src/assets/images/profile.png" alt="사용자"></img>
        <p>구리구리</p>
      </div>
      <hr className='c-hr'/>
      <div className="box3">
        <p className="title3">제목~~~</p>
        <div>
          <p className="content3">12/30에 폭설이 내린대요~<br/>다같이 눈 치워봐요!</p>
        </div>
        <div className='content-container'>
          <p className="content3">2023.12.28</p>
          <p className='like-num'>
            <span onClick={handleLikeClick}>
              <img src='./src/assets/icon/red-like.png'/>
            </span>
            {like}
          </p>
        </div>
        <hr className="line"/>
      </div>

      <div className='www'>
        <button className="write-button">
          <p>글쓰기</p>
          <img className="write-icon" src='./src/assets/icon/write-button.svg' />
        </button>
        
      </div>
    </div>
  );}
