import styled from "styled-components";
import DetailHeader from "../../../components/Common/DetailHeader";
import userIcon from "../../../assets/icon/user-icon.svg";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { Avatar } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getCommunityDetail,
  getCommunityLikes,
  getCommunityUnlikes,
} from "../../../api/apiCommunity";
import CommunityComment from "../../../components/CommunityDetail/CommunityComment";

const CommunityDetailPage = () => {
  const params = useParams();
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(0);
  const [postItem, setPostItem] = useState(null);

  useEffect(() => {
    let userId = 1; // 나중에 recoil

    getItemApi(params.id, userId);
  }, [params.id]);

  const getItemApi = async (postId, userId) => {
    let data = await getCommunityDetail(postId, userId);
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
      let data = await getCommunityUnlikes(params.id, userId);
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
      let data = await getCommunityLikes(params.id, userId);
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
          </ProfileContainer>
          <Divider></Divider>
          {postItem.image && <PostImg src={postItem.image} alt="게시 사진" />}
          <ContentContainer>
            <Title>{postItem.title}</Title>
            <Text>{postItem.content}</Text>
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
          <CommunityComment
            postId={params.id}
            commentData={postItem.comments}
          />
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
  //justify-content: space-between;
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

export default CommunityDetailPage;
