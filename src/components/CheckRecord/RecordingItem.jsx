import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecords } from "../../api/apiRecord";

const RecordingItem = () => {
  const dummyData = [
    {
      userVolunteerPostId: 1,
      title: "aa",
      content: "aaaa",
      image: null,
      userVolunteerData: "11-11-11",
    },
  ];
  const navigate = useNavigate();
  const [postList, setPostList] = useState(dummyData);

  useEffect(() => {
    let userId = 1; // 나중에 recoil

    getItemApi(userId);
  }, []);

  const getItemApi = async (userId) => {
    let data = await getRecords(userId);
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
            key={item.userVolunteerPostId}
            onClick={() => navigate(`/record/${item.userVolunteerPostId}`)}
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
              <DateText>{item.userVolunteerData}</DateText>
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
  //justify-content: space-between;
  margin-top: 3px;
  width: 100%;
`;

const DateText = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: #4d4d4d;
`;

export default RecordingItem;
