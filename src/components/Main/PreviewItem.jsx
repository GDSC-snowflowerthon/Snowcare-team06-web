import styled from "styled-components";
import exampleImg from "../../assets/images/example-img.svg";
import heartIcon from "../../assets/icon/heart-icon.svg";
import arrowIcon from "../../assets/icon/arrow-right.svg";

let dummyData = [0, 1, 2];
const PreviewItem = () => {
  // 최대 3개까지만 보여주기!
  return (
    <Container>
      {dummyData.map((item) => (
        <MatchingBox key={item}>
          <MatchingContentBox>
            <div>
              <Title>제목~~~~~</Title>
              <ContentText>
                [지금 용인은] 우리동네 눈 치우기 자원봉사활동
              </ContentText>
            </div>
            <Image src={exampleImg} alt="사진" />
          </MatchingContentBox>
          <MatchingInfoBox>
            <DateText>23.01.03</DateText>
            <LikeBox>
              <LikeImg src={heartIcon} alt="좋아요" />
              <LikeText>6</LikeText>
            </LikeBox>
          </MatchingInfoBox>
        </MatchingBox>
      ))}
      <MoreButtonBox>
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
  padding-bottom: 5px;
  font-size: 0.9rem;
  font-weight: 600;
`;

const ContentText = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  color: #085f63;
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
