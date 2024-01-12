import styled from "styled-components";
import DetailHeader from "../../../components/Common/DetailHeader";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { postRecordWrite } from "../../../api/apiRecord";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/user/atom";

const RecordWritePage = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [userVolunteerDate, setUserVolunteerDate] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState("");
  const [imageSrc, setImageSrc] = useState(null);

  const onUpload = (e) => {
    setImageData(e.target.value);
    const file = e.target.files[0];
    setImage(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  const ImgDelete = () => {
    setImageData("");
    setImageSrc(null);
    setImage(null);
  };

  const onClickSubmit = () => {
    if (
      (title === "") |
      (content === "") |
      !image |
      (userVolunteerDate === "")
    ) {
      alert("필수 입력값을 모두 채워주세요!");
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("userVolunteerDate", userVolunteerDate);
    formData.append("userId", user.userId);

    console.log(image);
    postRecordApi(formData);
  };

  const postRecordApi = async (postData) => {
    let data = await postRecordWrite(postData);
    if (data) {
      console.log(data);
      navigate("/records");
    }
  };

  return (
    <Container>
      <DetailHeader />
      <InnerContainer>
        <Title>봉사 기록하기</Title>
        <InputBox>
          <InputTitle>
            제목<span style={{ color: "red" }}>*</span>
          </InputTitle>
          <Input
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <InputTitle>
            날짜<span style={{ color: "red" }}>*</span>
          </InputTitle>
          <Input
            placeholder="YYYY-MM-DD로 입력해주세요"
            value={userVolunteerDate}
            onChange={(e) => setUserVolunteerDate(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <InputTitle>
            내용<span style={{ color: "red" }}>*</span>
          </InputTitle>
          <InputTextarea
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <InputTitle>사진</InputTitle>
          <Input
            placeholder="사진을 업로드해주세요"
            accept="image/*"
            type="file"
            value={imageData}
            onChange={(e) => onUpload(e)}
          />
        </InputBox>
        {imageSrc && (
          <ImgPreviewBox>
            <ImgCancel onClick={ImgDelete} />
            <ImgPreview src={imageSrc} alt="첨부사진" />
          </ImgPreviewBox>
        )}
        <Button onClick={onClickSubmit}>완성하기</Button>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  max-width: 600px;
`;

const Title = styled.div`
  margin-top: 10px;
  width: 100%;
  padding: 10px 0;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 800;
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  font-size: 0.9rem;
`;

const InputTitle = styled.div`
  padding-bottom: 5px;
  font-size: 0.8rem;
  color: #171717;
`;

const Input = styled.input`
  padding: 10px 16px;
  border: 1px solid #49beb7;
  border-radius: 8px;
  background: rgba(73, 190, 183, 0.16);
`;

const InputTextarea = styled.textarea`
  padding: 10px 16px;
  height: 100px;
  border: 1px solid #49beb7;
  border-radius: 8px;
  background: rgba(73, 190, 183, 0.16);
  resize: none;
`;

const ImgPreviewBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  width: 100%;
  max-width: 400px;
`;

const ImgPreview = styled.img`
  margin: 20px 0;
  width: 100%;
  border: 1px solid #49beb7;
  border-radius: 8px;
  object-fit: cover;
`;

const ImgCancel = styled(MdCancel)`
  position: absolute;
  top: 10px;
  right: 40px;
  font-size: 25px;
  color: #085f63;
  background-color: white;
`;

const Button = styled.button`
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 12px 20px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: #49beb7;
  cursor: pointer;
`;

export default RecordWritePage;
