import styled from "styled-components";
import heartIcon from "../../assets/icon/heart-icon.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVolunteersUserLike } from "../../api/apiVolunteer";

const LikeListItem = () => {
  const dummy = [
    {
      volunteerId: 1,
      userNickname: "nick",
      userImage: "pf",
      title: "ti",
      content: "c",
      image: null,
      place: "seoul",
      createdDate: "2024-01-01",
      likeCount: 1,
    },
  ];
  const navigate = useNavigate();
  const [postList, setPostList] = useState(dummy);

  useEffect(() => {
    getItemApi();
  }, []);

  const getItemApi = async () => {
    let data = await getVolunteersUserLike();
    if (data) {
      console.log(data);
      setPostList(data);
    }
  };

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
  background-color: white;
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

export default LikeListItem;
