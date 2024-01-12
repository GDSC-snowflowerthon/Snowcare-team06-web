import MainHeader from "../../components/Common/MainHeader";
import styled from "styled-components";
import kakaoLogo from "../../assets/images/kakao-logo.svg";
import backgroundImg from "../../assets/images/startpage-background.svg";

const StartPage = () => {
  const KakaoLogin = () => {
    console.log("카카오 로그인 버튼 클릭");
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${
      import.meta.env.VITE_KAKAO_REST_API
    }&redirect_uri=${import.meta.env.VITE_KAKAO_AUTH_URL}&response_type=code`;
  };

  return (
    <Container>
      <MainHeader />
      <InnerContainer>
        <ContentContainer>
          <Title>
            눈 오는날 함께 <br />
            특별한 추억을 쌓아요!
          </Title>
          <Explain>
            우리 동네 눈 치우기를 통해 지역사회의 안전을 도모하고 주변 사람들과
            함께하며 동기부여와 유대감을 형성할 수 있도록 snowcare가 매칭과
            소통을 도와줍니다.
          </Explain>
          <Explain>
            혼자보다는 우리 동네의 다른 사람들과 함께 모여 눈 치우기 봉사를 하며
            더 큰 성취감을 이룰 수 있습니다.
          </Explain>
          <LoginButton onClick={KakaoLogin}>
            <img src={kakaoLogo} alt="카카오톡" />
            카카오톡으로 로그인
          </LoginButton>
        </ContentContainer>
        <Footer></Footer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  overflow-y: hidden;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  padding-bottom: 30px;
  width: 100%;
  background-color: #49beb7;
`;

const Title = styled.div`
  margin: 10px 0;
  font-size: 1.7rem;
  font-weight: 700;
  color: white;
  text-align: center;
  line-height: 1.7;
`;

const Explain = styled.div`
  margin: 0 10px;
  margin-top: 30px;
  font-size: 1rem;
  color: white;
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
  margin-top: 50px;
  padding: 10px 20px;
  width: 220px;
  border: none;
  border-radius: 20px;
  background-color: #fee500;
  font-weight: 500;
  cursor: pointer;
`;

const Footer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat; /*반복 방지*/
`;

export default StartPage;
