import styled from "styled-components";
import userIcon from "../../../assets/icon/user-icon.svg";
import heartIcon from "../../../assets/icon/heart-icon.svg";
import writeIcon from "../../../assets/icon/write-icon.svg";
import { Avatar } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailHeader from "../../../components/Common/DetailHeader";
import { getCommunityUserLike } from "../../../api/apiCommunity";

const CommunityPage = () => {
  let dummy = [
    {
      communityArticleId: 1,
      userNickname: "nick",
      userImage: "pf",
      createdDate: "2024-01-01",
      title: "ti",
      content: "c",
      image: null,
    },
  ];
  const navigate = useNavigate();
  const [postList, setPostList] = useState(dummy);

  useEffect(() => {
    getItemApi();
  }, []);

  const getItemApi = async () => {
    let data = await getCommunityUserLike();
    if (data) {
      console.log(data);
      setPostList(data);
    }
  };

  const goDetailPage = (id) => {
    navigate(`/community-detail/${id}`);
  };

  const goWritePage = () => {
    navigate(`/community-write`);
  };

  return (
    <Container>
      <DetailHeader />
      {postList &&
        postList.length > 0 &&
        postList.map((item) => (
          <InnerContainer
            key={item.communityArticleId}
            onClick={() => goDetailPage(item.communityArticleId)}
          >
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
                <div>{item.userNickname}</div>
              </ProfileBox>
            </ProfileContainer>
            <Divider></Divider>
            {item.image && <PostImg src={item.image} alt="게시 사진" />}
            <ContentContainer>
              <Title>{item.title}</Title>
              <Text>{item.content}</Text>
              <ExplainBox>
                <Text>{item.createdDate}</Text>
                <LikeButton>
                  <LikeImg src={heartIcon} alt="좋아요" />
                  <LikeText>{item.likeCount}</LikeText>
                </LikeButton>
              </ExplainBox>
            </ContentContainer>
          </InnerContainer>
        ))}
      <WriteButtonBox>
        <WriteButton onClick={goWritePage}>
          <div>글쓰기</div>
          <img src={writeIcon} alt="글쓰기" width={23} />
        </WriteButton>
      </WriteButtonBox>
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
  border-bottom: 1px solid #d9d9d9;
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
  align-items: center;
  border: none;
  background-color: white;
`;

const LikeImg = styled.img`
  margin-right: 2px;
  width: 17px;
`;

const LikeText = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: #fe0135;
`;

const WriteButtonBox = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 600px;
`;

const WriteButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 30px;
  padding: 12px 17px;
  border: none;
  border-radius: 20px;
  background: #085f63;
  color: white;
  box-shadow: 0px 16px 48px 0px rgba(0, 0, 0, 0.413);
  font-size: 1rem;
  gap: 5px;
  cursor: pointer;
`;

export default CommunityPage;
