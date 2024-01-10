//매칭 완료된 채팅방 목록
import "./ChatList.css"

export default function CheckList(){
  return(
    <>
    
    <div id="container1">
      <h3 className="title-chat">참여중인 채팅방</h3>

      <div className='box1'>
        <div className='text-container'>
          <p className='title1'>글 제목~~~~</p>
          <div className='content1'>
            <p>내용~~~~~~~~~~~~~~~</p>
          </div>
        </div>
        <img className="img1" src="./CheckRecord-img.png" alt='눈사진'></img>
      </div>

      <div className='box1'>
        <div className='text-container'>
          <p className='title1'>글 제목~~~~</p>
          <div className='content1'>
            <p>내용~~~~~~~~~~~~~~~</p>
          </div>
        </div>
        <img className="img1" src="./CheckRecord-img.png" alt='눈사진'></img>
      </div>

      <div className='box1'>
        <div className='text-container'>
          <p className='title1'>글 제목~~~~</p>
          <div className='content1'>
            <p>내용~~~~~~~~~~~~~~~</p>
          </div>
        </div>
      </div>

      <div className='box1'>
        <div className='text-container'>
          <p className='title'>글 제목~~~~</p>
          <div className='content1'>
            <p>내용~~~~~~~~~~~~~~~</p>
          </div>
        </div>
      </div>

      
      
    </div>
   
    </>
  );
}