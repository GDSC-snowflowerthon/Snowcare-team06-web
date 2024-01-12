import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postKakaoLogin } from "../../api/apiUser";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../../recoil/user/atom";

const LoginLoadingPage = () => {
  let params = new URL(document.URL).searchParams;
  let authorizationCode = params.get("code");

  const setUser = useSetRecoilState(userState);

  const navigate = useNavigate();

  useEffect(() => {
    KakaoLoginApi();
  }, []);

  const KakaoLoginApi = async () => {
    let data = {
      authorizationCode: authorizationCode,
    };
    let res = await postKakaoLogin(data);

    if (res) {
      console.log(res);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      setUser({ userId: res.userId });
      if (res.newUser) {
        navigate(`/signup`);
      } else {
        // 토큰 값 localstorage에다가 저장!
        console.log("로그인에 성공했습니다!");
        navigate("/main");
      }
    }
  };

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
