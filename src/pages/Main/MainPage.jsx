import styled from "styled-components";
import MainHeader from "../../components/Common/MainHeader";
import WeatherInfo from "../../components/Main/WeatherInfo";
import PreviewItem from "../../components/Main/PreviewItem";
import InfoSlide from "../../components/Main/InfoSlide";

const MainPage = () => {
  return (
    <Container>
      <MainHeader />
      <InnerContainer>
        <Title>오늘의 날씨</Title>
        <WeatherInfo />
        <Title>함께 봉사하기</Title>
        <Explain>이웃들과 함께 깨끗한 동네를 만들어봐요!</Explain>
        <PreviewItem />
        <Title>봉사활동 정보</Title>
        <InfoSlide />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100vw;
  max-width: 600px;
  height: 100%;
`;

const Title = styled.div`
  margin-top: 10px;
  padding: 10px 0;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 800;
`;

const Explain = styled.div`
  width: 100%;
  color: #71727a;
  font-size: 0.9rem;
`;

export default MainPage;
