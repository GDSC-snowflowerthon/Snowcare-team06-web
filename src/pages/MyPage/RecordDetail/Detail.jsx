import "./Detail.css"


export default function Detail(){
  return(
   
    <div className="container7" style={{backgroundColor: '#49BEB7' }}>
      <div className="box7">
        <div>
          <p className="title7">글 제목!!</p>
        </div>
        <hr className="hr-style"/>
        <div className="content7">
          <p>어제부터 눈이 많이 내려서풍경은 좋았지만 
            걷다가 미끌어지면 안되니깐 청소하러 나갔다. 사진은 치우기 전의 사진.
            </p>
        </div>
        <p className="date">2023.01.12</p>
        <img id="snow-img" src="./src/assets/images/snoww-img.png"></img>
      </div>
    </div>
 
  )
}
