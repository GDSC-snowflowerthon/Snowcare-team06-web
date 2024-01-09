import "./Detail.css"


export default function Detail(){
  return(
    <div className="container">
      <div className="box">
        <div>
          <p className="title">글 제목!!</p>
        </div>
        <hr className="hr-style"/>
        <div className="content">
          <p>어제부터 눈이 많이 내려서풍경은 좋았지만 
            걷다가 미끌어지면 안되니깐 청소하러 나갔다. 사진은 치우기 전의 사진.
            </p>
        </div>
        <p className="date">2023.01.12</p>
        <img id="snow-img" src="./CheckRecord-img.png"></img>
      </div>
    </div>
  )
}
