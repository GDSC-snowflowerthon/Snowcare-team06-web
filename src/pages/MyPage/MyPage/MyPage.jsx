import styled from "styled-components";
import MainHeader from "../../../components/Common/MainHeader";

const MyPage = () => {
  return (
    <Container>
      <MainHeader />
      <InnerContainer>
        <Profile src="./src/assets/images/profile.png" alt="프로필" />
        <ProfileName>사용자님</ProfileName>
        <MenuBox>
          <Text>알림 설정</Text>
          <Icon src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
        </MenuBox>
        <MenuBox>
          <Text>나의 봉사활동 기록</Text>
          <Icon src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
        </MenuBox>
        <MenuBox>
          <Text>매칭 완료된 채팅방</Text>
          <Icon src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
        </MenuBox>
        <MenuBox>
          <Text>좋아요한 매칭글</Text>
          <Icon src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
        </MenuBox>
        <MenuBox>
          <Text>좋아요한 커뮤니티 게시글</Text>
          <Icon src="./src/assets/icon/화살표.svg" alt="버튼이미지" />
        </MenuBox>
        <LogoutButton>로그아웃</LogoutButton>
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
