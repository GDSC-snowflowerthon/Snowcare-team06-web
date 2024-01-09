import styled from "styled-components";
import MainHeader from "../../components/Common/MainHeader";
import searchIcon from "../../assets/icon/search-icon.svg";
import writeIcon from "../../assets/icon/write-icon.svg";
import MatchingItem from "../../components/MatchingList/MatchingItem";

const MatchingListPage = () => {
  return (
    <Container>
      <MainHeader />
      <InnerContainer>
        <SearchContainer>
          <SearchInput placeholder="제목 또는 지역명 입력" />
          <SearchIcon src={searchIcon} alt="검색 버튼" />
        </SearchContainer>
        <ContentContainer>
          <MatchingItem />
        </ContentContainer>
        <WriteButtonBox>
          <WriteButton>
            <div>글쓰기</div>
            <img src={writeIcon} alt="글쓰기" width={23} />
          </WriteButton>
        </WriteButtonBox>
      </InnerContainer>
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

const SearchContainer = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
`;

const SearchInput = styled.input`
  padding: 20px 30px;
  width: 100%;
  border: none;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 1rem;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 40px;
  right: 55px;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  padding: 20px;
  width: 100%;
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
  margin-right: 40px;
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

export default MatchingListPage;
