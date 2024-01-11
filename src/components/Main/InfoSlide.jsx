import { Card, Carousel } from "antd";
import styled from "styled-components";
import exampleImg from "../../assets/images/example-img.svg";
import beforeImg from "../../assets/icon/before-button.svg";
import nextImg from "../../assets/icon/next-button.svg";
import { useRef } from "react";
import volunteerData from "../../json/main-vol.json";
import { Link } from "react-router-dom";

const { Meta } = Card;

const InfoSlide = () => {
  const sliderRef = useRef(null);
  return (
    <Container>
      <BeforeButton onClick={() => sliderRef.current.prev()}>
        <img src={beforeImg} alt="이전" width={30} />
      </BeforeButton>
      <Carousel autoplay ref={sliderRef}>
        {volunteerData.volunteerInfo.map((item, index) => (
          <div key={index}>
            <InnterContainer>
              <ContentBox
                hoverable
                // style={{ minWidth: "240px"; width: "100%"; }}
                cover={<ProfileImg alt="example" src={exampleImg} />}
              >
                <Meta
                  title={item.title}
                  description={
                    <Explain>
                      봉사 장소 : {item.place} <br />
                      봉사 기간 : {item.volunteerPeriod} <br />
                      모집 기간 : {item.recruitPeriod} <br />
                    </Explain>
                  }
                />
                <Link to={item.pageLink}>
                  <LinkButton>자세히 알아보기</LinkButton>
                </Link>
              </ContentBox>
            </InnterContainer>
          </div>
        ))}
      </Carousel>
      <NextButton onClick={() => sliderRef.current.next()}>
        <img src={nextImg} alt="다음" width={30} />
      </NextButton>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 0 20px;
  width: 100%;
  max-width: 350px;
  .slick-dots {
    display: none !important;
  }
`;

const BeforeButton = styled.button`
  position: absolute;
  top: 120px;
  left: -20px;
  padding: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const NextButton = styled.button`
  position: absolute;
  top: 120px;
  right: -20px;
  padding: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const InnterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
  //height: 200px;
`;

const ContentBox = styled(Card)`
  width: 250px;
  .ant-card-body {
    padding: 20px 20px;
  }
`;

const ProfileImg = styled.img`
  width: 240px;
  height: 120px;
  object-fit: cover;
`;

const Explain = styled.div`
  font-size: 0.8rem;
`;

const LinkButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 20px;
  background-color: #e2f4f3;
  font-size: 0.8rem;
  cursor: pointer;
`;

export default InfoSlide;
