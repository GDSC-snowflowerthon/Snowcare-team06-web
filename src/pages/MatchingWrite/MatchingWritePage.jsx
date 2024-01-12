import styled from "styled-components";
import DetailHeader from "../../components/Common/DetailHeader";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { MdCancel } from "react-icons/md";
import { Modal } from "antd";
import { postVolunteerWrite } from "../../api/apiVolunteer";

const MatchingWritePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [openPostcode, setOpenPostcode] = useState(false);
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    setOpenPostcode(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setOpenPostcode(false);
  };

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

  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setIsModalOpen(true);
      setOpenPostcode((current) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data) => {
      console.log(`
            주소: ${data.address},
            우편번호: ${data.zonecode}
        `);
      setAddress(data.address);
      setIsModalOpen(false);
      setOpenPostcode(false);
    },
  };

  const onClickSubmit = () => {
    if ((title === "") | (content === "") | !image | (address === "")) {
      alert("필수 입력값을 모두 채워주세요!");
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("place", address);
    formData.append("userId", 1);

    postVolunteerApi(formData);
  };

  const postVolunteerApi = async (postData) => {
    let data = await postVolunteerWrite(postData);
    if (data) {
      console.log(data);
    }
  };

  return (
    <Container>
      <DetailHeader />
      <InnerContainer>
        <Title>게시글 작성하기</Title>
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
            내용<span style={{ color: "red" }}>*</span>
          </InputTitle>
          <InputTextarea
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <InputTitle>봉사 장소</InputTitle>
          <Input
            id="addr"
            readOnly
            placeholder="장소를 입력해주세요"
            value={address}
            onClick={handle.clickButton}
          />
          <InputButton onClick={handle.clickButton}>위치 검색</InputButton>
        </InputBox>
        {openPostcode && (
          <AddressModal
            title="주소 검색창"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <AddressSearchBox
              onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
              autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
              //defaultQuery='판교역로 235' // 팝업을 열때 기본적으로 입력되는 검색어
            />
          </AddressModal>
        )}
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

const InputButton = styled.button`
  position: absolute;
  right: 5px;
  top: 42px;
  padding: 5px 3px;
  width: 50px;
  border: none;
  border-radius: 10px;
  line-height: 1;
  font-size: 0.6rem;
  color: white;
  background-color: #727272;
`;

const AddressModal = styled(Modal)`
  .ant-modal-header {
    padding-top: 15px;
    padding-left: 20px;
  }

  .ant-modal-footer {
    padding-bottom: 15px;
    padding-right: 20px;
  }

  .ant-modal-content {
    padding: 0;
  }
`;

const AddressSearchBox = styled(DaumPostcode)`
  width: min-content;
  .daum_popup {
    width: 100px !important;
  }
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

export default MatchingWritePage;
