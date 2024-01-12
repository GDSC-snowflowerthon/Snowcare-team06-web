import styled from "styled-components";
import writeIcon from "../../../assets/icon/write-icon.svg";
import { useNavigate } from "react-router-dom";
import DetailHeader from "../../../components/Common/DetailHeader";
import LikeListItem from "../../../components/LikeList/LikeListItem";

const LikeListPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <DetailHeader />
      <InnerContainer>
        <Title>좋아요한 매칭글</Title>
        <ContentContainer>
          <LikeListItem />
        </ContentContainer>
        <WriteButtonBox>
          <WriteButton onClick={() => navigate(`/matching-write`)}>
            <div>글쓰기</div>
            <img src={writeIcon} alt="글쓰기" width={23} />
          </WriteButton>
        </WriteButtonBox>
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
  background-color: #49beb7;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  background-color: #49beb7;
`;

const Title = styled.div`
  position: relative;
  padding: 15px 20px;
  padding-bottom: 0;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
`;

const ContentContainer = styled.div`
  padding: 20px;
  width: 100%;
`;

const WriteButtonBox = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 600px;
`;

const WriteButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 40px;
  margin-bottom: 30px;
  padding: 12px 17px;
  border: none;
  border-radius: 20px;
  background: #085f63;
  color: white;
  box-shadow: 0px 16px 48px 0px rgba(0, 0, 0, 0.413);
  font-size: 1rem;
  gap: 5px;
  cursor: pointer;
`;

export default LikeListPage;
