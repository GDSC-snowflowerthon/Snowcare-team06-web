import "./MyPage.css"

export default function MyPage(){
  return(
    <div className="App">
    
    <div className="profile">
      <img id="round" src="./src/assets/icon/프로필.png"></img>
    </div>
    <p style={{marginBottom:'60px',fontSize:'20px', textAlign:'center'}}>사용자님</p>
    <div className="box">
      <p1>알림설정</p1>
      <h3 className="right-button">
        <img className="button-image" src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
      </h3>
    </div>
    <div className="box">
      나의 봉사활동 기록
      <h3 className="right-button">
        <img className="button-image" src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
      </h3>
    </div>
    <div className="box">
      매칭 완료된 채팅방<h3 className="right-button">
        <img className="button-image" src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
      </h3>
    </div>
    <div className="box">
      좋아요한 매칭글
      <h3 className="right-button">
        <img className="button-image" src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
      </h3>
    </div>
    <div className="box">
      좋아요한 커뮤니티 게시글
      <h3 className="right-button">
        <img className="button-image" src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
      </h3>
    </div>
    <button className="logout-button">로그아웃</button>
  </div>
  );
}