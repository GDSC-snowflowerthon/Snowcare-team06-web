import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";

const MatchingComment = () => {
  let dummyData = [0, 1, 2];
  return (
    <>
      <Container>
        {dummyData.map((item) => (
          <CommentBox key={item}>
            <ContentBox>
              <GrayText>기웃거리는</GrayText>
              <ContentText>저도 참가할래요!</ContentText>
              <GrayText>01.04</GrayText>
            </ContentBox>
            <Divider />
          </CommentBox>
        ))}
      </Container>
      <InputContainer>
        <InputInnerContainer>
          <Input placeholder="댓글을 작성해주세요" />
          <InputButton>
            <FaPlus style={{ color: "white", fontSize: "20px" }} />
          </InputButton>
        </InputInnerContainer>
      </InputContainer>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  width: 100%;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  width: 100%;
`;

const GrayText = styled.div`
  color: #6c757d;
  font-size: 0.7rem;
`;

const ContentText = styled.div`
  color: #1f2024;
  font-size: 0.7rem;
  line-height: 2;
`;

const Divider = styled.div`
  width: 92%;
  height: 1px;
  background-color: #d4d6dd;
`;

const InputContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
`;

const InputInnerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  max-width: 600px;
  background-color: white;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px 15px;
  width: 100%;
  border: 1px solid #49beb7;
  border-radius: 20px;
  background: rgba(73, 190, 183, 0.16);
`;

const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 37px;
  height: 37px;
  border: none;
  border-radius: 50%;
  background-color: #49beb7;
  cursor: pointer;
`;

export default MatchingComment;
