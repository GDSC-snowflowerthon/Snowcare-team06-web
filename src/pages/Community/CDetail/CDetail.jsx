import React, { useState } from 'react';
import "./CDetail.css";


export default function LCommunity(){
  const [like, setLike] = useState(0);

  const handleLikeClick = () => {
    setLike(like + 1);
  };
  
  return(
    <div id="container8">
      <div className="user">
        <img id="img" src="./src/assets/images/profile.png" alt="사용자"></img>
        <p>구리구리</p>
      </div>
      <div>
        <img id="simg" src="./LCom.png"></img>
      </div>
      <div className="box8">
        <p className="title8">제목~~~</p>
        <div>
          <p className="content8">12/30에 폭설이 내린대요~<br/>다같이 눈 치워봐요!</p>
        </div>
        <div className='content-container'>
          <p className="content8">2023.12.28</p>
          <p className='like-num'>
            <span onClick={handleLikeClick}>
              <img className='like-button' src='./src/assets/icon/red-like.png'/>
            </span>
            {like}
          </p>
        </div>
        
        <hr className="line"/>
      </div>

     <>
      <div className='content8'>기웃거리는</div>
      <div className='content8-1'>다음에는 저도 참가할래요!</div>
      <div className='content8'>01.04</div>
      <hr className='cd-hr'/>
     </>
     <>
      <div className='content8'>기웃거리는</div>
      <div className='content8-1'>저도 참가할래요!</div>
      <div className='content8'>01.04</div>
      <hr className='cd-hr'/>
     </>
      
      <div className='comment'>
        <input type='text' placeholder='댓글을 작성해주세요.'/>
        <img  className='cir-img' src='./src/assets/icon/plus.png'/>
        
      </div>
    </div>
  );}