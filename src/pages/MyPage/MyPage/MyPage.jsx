import "./MyPage.css"

export default function MyPage(){
  return(
    
    <div className="App">
    
    <div className="profile">
      <img id="round" src="./src/assets/images/profile.png"></img>
    </div>
    <p className="puser" >사용자님</p>
    <div className="box5">
      <p>알림설정</p>
      <h3 className="right-button">
        <img className="button-image" src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
      </h3>
    </div>
    <div className="box5">
      <p>나의 봉사활동 기록</p>
      <h3 className="right-button">
        <img className="button-image" src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
      </h3>
    </div>
    <div className="box5">
      <p>매칭 완료된 채팅방</p>
      <h3 className="right-button">
        <img className="button-image" src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
      </h3>
    </div>
    <div className="box5">
      <p>좋아요한 매칭글</p>
      <h3 className="right-button">
        <img className="button-image" src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
      </h3>
    </div>
    <div className="box5">
      <p>좋아요한 커뮤니티 게시글</p>
      <h3 className="right-button">
        <img className="button-image" src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
      </h3>
    </div>
    <button className="logout-button">로그아웃</button>
  </div>
 
  );
}