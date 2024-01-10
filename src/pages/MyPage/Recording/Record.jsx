
import "./Record.css";


export default function Record() {
  

  return (
    <>
      <div>
        <h3 className="record-title">봉사 기록하기</h3>
      </div>
      <div>
      <ul className="li-style">
        <li>
          <label htmlFor="title">제목*</label>
          <input type="text" id="title" placeholder="제목을 입력해주세요." required/>
        </li>
        <li>
          <label htmlFor="date1">날짜*</label>
          <input type="datetime-local" id="date1" placeholder="날짜를 입력해주세요." required/>
        </li>
        <li>
          <label htmlFor="memo">내용*</label>
          <textarea id="memo" cols="40" rows="4" placeholder="내용을 입력해주세요." required />
        </li>
        <li>
          <label for="chooseFile">사진</label>
          <input
            type="file"
            id="chooseFile"
            name="chooseFile"
            accept="image/*"
            placeholder="사진을 업로드해주세요."
          />
          
        </li>
      </ul>

      <div className="write-finish1">
        <input
          type="submit"
          value="완성하기"
        ></input>
      </div>
      </div>
    </>
  );
}
