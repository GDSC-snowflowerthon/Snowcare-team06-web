import "./CWrite.css";


export default function CWrite() {
  return (
    <>
      <div>
        <h3 className="record-title2">게시글 작성하기</h3>
      </div>
      <div>
      <ul className="li-style2">
        <li>
          <label for="title">제목*</label>
          <input type="text" id="title" placeholder="제목을 입력해주세요." required/>
        </li>
        <li>
          <label for="memo">내용*</label>
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
        <div className="write-finish">
          <input 
            type="submit"
            value="완성하기"
          ></input>
        </div>
      </div>
    </>
  );
}
