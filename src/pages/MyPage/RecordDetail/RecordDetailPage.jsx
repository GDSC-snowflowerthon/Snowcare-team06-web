import styled from "styled-components";
import DetailHeader from "../../../components/Common/DetailHeader";
import ExampleImg from "../../../assets/images/example-img.svg";

const RecordDetailPage = () => {
  return (
    <Container>
      <DetailHeader />
      <InnerContainer>
        <ContentContainer>
          <Title>글 제목~~~~</Title>
          <Content>
            어제부터 눈이 많이 내려서풍경은 좋았지만 걷다가 미끌어지면 안되니깐
            청소하러 나갔다. 사진은 치우기 전의 사진.
          </Content>
          <Date>2023.12.28</Date>
          <Image src={ExampleImg} alt="사진" />
        </ContentContainer>
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 30px 20px;
  width: 100%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Title = styled.div`
  padding: 10px 0;
  width: 100%;
  font-weight: 600;
  border-bottom: 1px solid #d4d6dd;
`;

const Content = styled.div`
  padding: 20px 0;
  width: 100%;
  font-size: 0.8rem;
`;

const Date = styled.div`
  padding: 20px 0;
  width: 100%;
  font-size: 0.8rem;
`;

const Image = styled.img`
  padding: 10px 0;
  width: 100%;
  max-width: 400px;
`;

export default RecordDetailPage;
