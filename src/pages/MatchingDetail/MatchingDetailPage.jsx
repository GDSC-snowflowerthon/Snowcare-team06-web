import styled from "styled-components";
import DetailHeader from "../../components/Common/DetailHeader";
import userIcon from "../../assets/icon/user-icon.svg";
import addressIcon from "../../assets/images/address-flag.svg";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { Avatar } from "antd";
import { useEffect, useState } from "react";
import MatchingComment from "../../components/MatchingDetail/MatchingComment";
import MatchingMap from "../../components/MatchingDetail/MatchingMap";
import { useParams } from "react-router-dom";
import {
  getVolunteerDetail,
  getVolunteerLikes,
  getVolunteerUnlikes,
} from "../../api/apiVolunteer";

const MatchingDetailPage = () => {
  const params = useParams();
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(0);
  const [postItem, setPostItem] = useState(null);

  useEffect(() => {
    let userId = 1; // 나중에 recoil

    getItemApi(params.id, userId);
  }, [params.id]);

  const getItemApi = async (volunteerId, userId) => {
    let data = await getVolunteerDetail(volunteerId, userId);
    if (data) {
      console.log(data);
      setPostItem(data);
      setLike(data.userLiked);
      setLikeNum(data.likeCount);
    }
  };

  const onClickLike = async () => {
    let userId = 1;
    if (like === true) {
      let data = await getVolunteerUnlikes(params.id, userId);
      if (data) {
        console.log(data);
        setLike(false);
        setLikeNum(likeNum - 1);
      }
    }
  };

  const onClickUnlike = async () => {
    let userId = 1;
    if (like === false) {
      let data = await getVolunteerLikes(params.id, userId);
      if (data) {
        console.log(data);
        setLike(true);
        setLikeNum(likeNum + 1);
      }
    }
  };
  return (
    <Container>
      <DetailHeader />
      {postItem && postItem !== undefined && postItem !== "" && (
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
              <div>{postItem.userNickname}</div>
            </ProfileBox>
            <ChatButton>채팅하기</ChatButton>
          </ProfileContainer>
          <Divider></Divider>
          {postItem.image && <PostImg src={postItem.image} alt="게시 사진" />}
          <ContentContainer>
            <Title>{postItem.title}</Title>
            <Text>{postItem.content}</Text>
            <AddressBox>
              <AddressIcon src={addressIcon} alt="주소" />
              <Text>{postItem.place}</Text>
            </AddressBox>
            <MatchingMap />
            <ExplainBox>
              <Text>{postItem.createdDate}</Text>
              <LikeButton>
                {like ? (
                  <IoHeartSharp
                    style={{ color: "#FE0135", fontSize: "15px" }}
                    onClick={onClickLike}
                  />
                ) : (
                  <IoHeartOutline
                    style={{ color: "#FE0135", fontSize: "15px" }}
                    onClick={onClickUnlike}
                  />
                )}
                <div>{likeNum}</div>
              </LikeButton>
            </ExplainBox>
          </ContentContainer>
          <MatchingComment postId={params.id} commentData={postItem.comments} />
        </InnerContainer>
      )}
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
  border-bottom: 3px solid #d9d9d9;
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
