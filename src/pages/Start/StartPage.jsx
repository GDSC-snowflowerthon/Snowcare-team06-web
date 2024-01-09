import MainHeader from "../../components/Common/MainHeader";
import styled from "styled-components";
import kakaoLogo from "../../assets/images/kakao-logo.svg";
import backgroundImg from "../../assets/images/startpage-background.svg";

const StartPage = () => {
  return (
    <Container>
      <MainHeader />
      <InnerContainer>
        <ContentContainer>
          <Title>
            눈 오는 날 <br />
            함께해요! <br />
            제목 다시 정하기..
          </Title>
          <Explain>
            소개 넣기!!!!!!! <br />
            우리 서비스는~~~
          </Explain>
          <LoginButton>
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
  width: 100%;
  background-color: #49beb7;
`;

const Title = styled.div`
  margin: 10px 0;
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  text-align: center;
  line-height: 1.2;
`;

const Explain = styled.div`
  margin: 30px 10px;
  font-size: 1rem;
  color: white;
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
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
