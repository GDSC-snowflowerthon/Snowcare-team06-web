import styled from "styled-components";
import cloudyImg from "../../assets/icon/cloudy-icon.svg";
import rainyImg from "../../assets/icon/rainy-icon.svg";
import snowyImg from "../../assets/icon/snowy-icon.svg";
import sunnyImg from "../../assets/icon/sunny-icon.svg";

const WeatherInfo = () => {
  // 날씨에 따른 이미지 선택!
  const ChooseIcon = () => {
    let type = 0; //
    switch (type) {
      case 0:
        return <WeatherImg src={cloudyImg} alt="cloudy" />;
      case 1:
        return <WeatherImg src={rainyImg} alt="rainy" />;
      case 2:
        return <WeatherImg src={snowyImg} alt="snowy" />;
      case 3:
        return <WeatherImg src={sunnyImg} alt="sunny" />;
      default:
        break;
    }
  };
  return (
    <Container>
      {ChooseIcon()}
      <div>날씨 정보 넣기</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 20px;
  width: 100%;
  color: white;
  background-color: #24353e;
  border-radius: 10px;
`;

const WeatherImg = styled.img`
  width: 200px;
`;

export default WeatherInfo;
