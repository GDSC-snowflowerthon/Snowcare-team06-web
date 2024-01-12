import styled from "styled-components";
import DetailHeader from "../../../components/Common/DetailHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecordDetail } from "../../../api/apiRecord";

const RecordDetailPage = () => {
  const params = useParams();

  const [postItem, setPostItem] = useState(null);

  useEffect(() => {
    let userId = 1; // 나중에 recoil

    getItemApi(params.id, userId);
  }, [params.id]);

  const getItemApi = async (userVolunteerPostId, userId) => {
    let data = await getRecordDetail(userVolunteerPostId, userId);
    if (data) {
      console.log(data);
      setPostItem(data);
    }
  };

  return (
    <Container>
      <DetailHeader />
      {postItem && postItem !== undefined && postItem !== "" && (
        <InnerContainer>
          <ContentContainer>
            <Title>{postItem.title}</Title>
            <Content>{postItem.content}</Content>
            <Date>{postItem.userVolunteerDate}</Date>
            {postItem.image && <Image src={postItem.image} alt="사진" />}
          </ContentContainer>
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
  background-color: #49beb7;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  background-color: #49beb7;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 30px 20px;
  width: 100%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Title = styled.div`
  padding: 10px 0;
  width: 100%;
  font-weight: 600;
  border-bottom: 1px solid #d4d6dd;
`;

const Content = styled.div`
  padding: 20px 0;
  width: 100%;
  font-size: 0.8rem;
`;

const Date = styled.div`
  padding: 20px 0;
  width: 100%;
  font-size: 0.8rem;
`;

const Image = styled.img`
  padding: 10px 0;
  width: 100%;
  max-width: 400px;
`;

export default RecordDetailPage;
