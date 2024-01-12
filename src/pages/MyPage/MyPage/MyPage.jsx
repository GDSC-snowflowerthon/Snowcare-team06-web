import styled from "styled-components";
import MainHeader from "../../../components/Common/MainHeader";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers } from "../../../api/apiUser";

const MyPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const onClickLogout = () => {
    let result = confirm("정말로 로그아웃 하시겠습니까?");
    if (result) {
      localStorage.clear();
      navigate("/");
      alert("정상적으로 로그아웃 되었습니다.");
    }
  };

  useEffect(() => {
    getUserApi();
  }, []);

  const getUserApi = async () => {
    let data = await getUsers();
    if (data) {
      console.log(data);
      setUserData(data);
    }
  };
  return (
    <Container>
      <MainHeader />
      <InnerContainer>
        <Profile src="./src/assets/images/profile.png" alt="프로필" />
        {userData && <ProfileName>{userData.nickname}</ProfileName>}
        <MenuBox onClick={() => navigate(`/notify`)}>
          <Text>알림 설정</Text>
          <Icon src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
        </MenuBox>
        <MenuBox onClick={() => navigate(`/records`)}>
          <Text>나의 봉사활동 기록</Text>
          <Icon src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
        </MenuBox>
        {/* <MenuBox>
          <Text>매칭 완료된 채팅방</Text>
          <Icon src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
        </MenuBox> */}
        <MenuBox onClick={() => navigate(`/matching-like`)}>
          <Text>좋아요한 매칭글</Text>
          <Icon src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
        </MenuBox>
        <MenuBox onClick={() => navigate(`/community-like`)}>
          <Text>좋아요한 커뮤니티 게시글</Text>
          <Icon src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
        </MenuBox>
        <LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>
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
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 600px;
`;

const Profile = styled.img`
  margin: 10px;
  width: 50px;
`;

const ProfileName = styled.div`
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 1.2rem;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 15px 20px;
  width: 100%;
  border-radius: 10px;
  background: #ebf6f7;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 1rem;
`;

const Icon = styled.img`
  width: 30px;
`;

const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 10px 10px;
  width: 120px;
  border: none;
  border-radius: 10px;
  background: #085f63;
  color: white;
  cursor: pointer;
`;

export default MyPage;
