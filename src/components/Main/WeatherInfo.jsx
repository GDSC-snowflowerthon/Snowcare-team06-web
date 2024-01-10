import styled from "styled-components";
import cloudyImg from "../../assets/icon/cloudy-icon.svg";
import rainyImg from "../../assets/icon/rainy-icon.svg";
import snowyImg from "../../assets/icon/snowy-icon.svg";
import sunnyImg from "../../assets/icon/sunny-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);

  // 날씨에 따른 이미지 선택!
  const ChooseIcon = (type) => {
    switch (type) {
      case "clear sky":
        return <WeatherImg src={sunnyImg} alt="sunny" />;
      case "thunderstorm":
      case "mist":
      case "broken clouds":
      case "scattered clouds":
      case "few clouds":
        return <WeatherImg src={cloudyImg} alt="cloudy" />;
      case "rain":
      case "shower rain":
        return <WeatherImg src={rainyImg} alt="rainy" />;
      case "snow":
        return <WeatherImg src={snowyImg} alt="snowy" />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getWeather(lat, lon);
        console.log(position);
      },
      function (error) {
        // 위치 못받아오면! 서울시 중구로 자동 조정
        console.log(error);
        getWeather(37.56278965231442, 127.00202600191791);
      }
    );

    // 현재 위치 못가져오면 getWeather(동국대 위치로 자동으로 불러오기!)
  }, []);

  const getWeather = async (lat, lon) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      const weatherKo = res.data.weather[0].description;
      // 소수점 버리기
      const temp = Math.round(res.data.main.temp);
      const temp_max = Math.round(res.data.main.temp_max);
      const temp_min = Math.round(res.data.main.temp_min);
      const humidity = Math.round(res.data.main.humidity);

      setWeather({
        description: weatherKo,
        temp_max: temp_max,
        temp_min: temp_min,
        humidity: humidity,
        temp: temp,
      });
      setWeatherIcon(weatherKo);
      console.log(weatherKo, temp_max, temp_min, humidity, temp);
      console.log(res.data.name);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      {weather && (
        <>
          <div>{weather.description}</div>
          {ChooseIcon(weatherIcon)}
          <TempText>{weather.temp}°</TempText>
          <div>
            최고 {weather.temp_max}°/ 최저 {weather.temp_min}°
          </div>
          <div>습도: {weather.humidity}%</div>
        </>
      )}
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
  line-height: 1.7;
  letter-spacing: 2px;
`;

const WeatherImg = styled.img`
  width: 200px;
`;

const TempText = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

export default WeatherInfo;
