//매칭 완료된 채팅방 목록
import "./ChatList.css"

export default function CheckList(){
  return(
    <>
    <h3>참여중인 채팅방</h3>
    <div id='container'>
     

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

      
      
    </div>
   
    </>
  );
}