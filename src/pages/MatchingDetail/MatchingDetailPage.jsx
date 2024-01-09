import styled from "styled-components";
import DetailHeader from "../../components/Common/DetailHeader";
import exampleImg from "../../assets/images/example-img.svg";
import userIcon from "../../assets/icon/user-icon.svg";
import addressIcon from "../../assets/images/address-flag.svg";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { Avatar } from "antd";
import { useState } from "react";
import MatchingComment from "../../components/MatchingDetail/MatchingComment";

const MatchingDetailPage = () => {
  const [like, setLike] = useState(false);

  return (
    <Container>
      <DetailHeader />
      <InnerContainer>
        <ProfileContainer>
          <ProfileBox>
            <Avatar
              style={{
                backgroundColor: "#E2F4F3",
              }}
            >
              <ProfileImg
                src={userIcon}
                alt="프로필"
                style={{ color: "white" }}
              />
            </Avatar>
            <div>닉네임</div>
          </ProfileBox>
          <ChatButton>채팅하기</ChatButton>
        </ProfileContainer>
        <Divider></Divider>
        <PostImg src={exampleImg} alt="게시 사진" />
        <ContentContainer>
          <Title>함께 동네 눈 치워봐요~</Title>
          <Text>
            12/30에 폭설이 내린대요~ 다같이 눈 치워봐요! 같이 해용~~!!
          </Text>
          <AddressBox>
            <AddressIcon src={addressIcon} alt="주소" />
            <Text>서울시 00구 00아파트</Text>
          </AddressBox>
          <div>카카오맵 넣기</div>
          <ExplainBox>
            <Text>2023.12.28</Text>
            <LikeButton>
              {like ? (
                <IoHeartSharp
                  style={{ color: "#FE0135", fontSize: "15px" }}
                  onClick={() => setLike(false)}
                />
              ) : (
                <IoHeartOutline
                  style={{ color: "#FE0135", fontSize: "15px" }}
                  onClick={() => setLike(true)}
                />
              )}
              <div>15</div>
            </LikeButton>
          </ExplainBox>
        </ContentContainer>
        <MatchingComment />
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
  width: 100%;
  max-width: 600px;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
`;

const Divider = styled.div`
  width: 92%;
  height: 1px;
  background-color: #d4d6dd;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  gap: 10px;
`;

const ProfileImg = styled.img`
  width: 30px;
  color: white;
`;

const ChatButton = styled.button`
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #49beb7;
  cursor: pointer;
`;

const PostImg = styled.img`
  width: 100%;
`;

const ContentContainer = styled.div`
  padding: 15px 20px;
  width: 100%;
  border-bottom: 8px solid #d9d9d9;
`;

const Title = styled.div`
  padding-bottom: 10px;
  font-weight: 700;
`;

const Text = styled.div`
  color: #1f2024;
  font-size: 0.7rem;
  line-height: 2;
`;

const AddressBox = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 10px;
`;

const AddressIcon = styled.img`
  padding-right: 10px;
`;

const ExplainBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  width: 100%;
`;

const LikeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
  padding: 5px 10px;
  border: 1px solid #d4d6dd;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
`;

export default MatchingDetailPage;
