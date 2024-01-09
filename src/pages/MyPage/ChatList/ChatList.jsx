//매칭 완료된 채팅방 목록
import "./ChatList.css"

export default function CheckList(){
  return(
    <>
    <h3>참여중인 채팅방</h3>
      <div className='box1'>
        <p>글 제목<br/>내용</p>
        <img className="img" src="./CheckRecord-img.png" alt='눈사진'></img>
      </div>
      <div className='box1'>
        <p>글 제목<br/>내용</p>
        <img className="img" src="./CheckRecord-img.png" alt='눈사진'></img>
      </div>
      <div className='box1'>
        <p>글 제목<br/>내용</p>
      </div>
      <div className='box1'>
        <p>글 제목<br/>내용</p>
      </div>
      
   
    </>
  );
}