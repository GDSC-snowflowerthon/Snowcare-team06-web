import styled from "styled-components";
import heartIcon from "../../assets/icon/heart-icon.svg";
import arrowIcon from "../../assets/icon/arrow-right.svg";
import { getVolunteersRecent } from "../../api/apiVolunteer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/user/atom";

const PreviewItem = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getItemApi(user.userId);
  }, []);

  const getItemApi = async (userId) => {
    let data = await getVolunteersRecent(userId);
    if (data) {
      console.log(data);
      setPostList(data);
    }
  };
  // 최대 3개까지만 보여주기!
  return (
    <Container>
      {postList &&
        postList.length > 0 &&
        postList.map((item) => (
          <MatchingBox
            key={item.volunteerId}
            onClick={() => navigate(`/matching/${item.volunteerId}`)}
          >
            <MatchingContentBox>
              <div>
                <Title>{item.title}</Title>
                <ContentText>{item.content.substr(0, 10)}</ContentText>
              </div>
              <ImageBox>
                {item.image && <Image src={item.image} alt="사진" />}
              </ImageBox>
            </MatchingContentBox>
            <MatchingInfoBox>
              <DateText>{item.createdDate}</DateText>
              <LikeBox>
                <LikeImg src={heartIcon} alt="좋아요" />
                <LikeText>{item.likeCount}</LikeText>
              </LikeBox>
            </MatchingInfoBox>
          </MatchingBox>
        ))}
      <MoreButtonBox onClick={() => navigate("/matchings")}>
        <MoreButtonText>더 보러가기</MoreButtonText>
        <MoreButtonImg src={arrowIcon} alt="화살표" />
      </MoreButtonBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MatchingBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 10px 13px;
  width: 100%;
  border-radius: 10px;
  background-color: #e2f4f3;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const MatchingContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 1rem;
  font-weight: 600;
`;

const ContentText = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  color: #085f63;
`;

const ImageBox = styled.div`
  height: 70px;
`;

const Image = styled.img`
  margin-left: 10px;
  width: 70px;
  height: 70px;
  border-radius: 10px;
  object-fit: cover;
`;

const MatchingInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
  width: 100%;
`;

const DateText = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: #4d4d4d;
`;

const LikeBox = styled.div`
  display: flex;
  align-items: center;
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

const MoreButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px;
  width: 100%;
`;

const MoreButtonText = styled.div`
  color: #404144;
  font-size: 0.9rem;
`;

const MoreButtonImg = styled.img`
  width: 20px;
`;

export default PreviewItem;
