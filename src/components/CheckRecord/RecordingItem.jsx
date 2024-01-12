import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RecordingItem = (postList) => {
  const navigate = useNavigate();

  return (
    <Container>
      {postList && postList.length > 0 ? (
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
        ))
      ) : (
        <div>해당되는 데이터가 없습니다</div>
      )}
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
