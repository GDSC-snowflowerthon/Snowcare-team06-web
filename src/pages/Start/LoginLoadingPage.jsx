import { Spin } from "antd";
import styled from "styled-components";

const LoginLoadingPage = () => {
  return (
    <Container>
      <Text>
        카카오 로그인 처리 중입니다!
        <br />
        잠시만 기다려 주세요!
      </Text>
      <Spin size="large" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #49beb7;
`;

const Text = styled.div`
  margin: 30px;
  font-weight: 600;
  font-size: 1.4rem;
  color: white;
  text-align: center;
  line-height: 2;
`;

export default LoginLoadingPage;
