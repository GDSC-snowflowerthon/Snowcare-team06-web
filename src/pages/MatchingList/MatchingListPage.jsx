import styled from "styled-components";
import MainHeader from "../../components/Common/MainHeader";
import searchIcon from "../../assets/icon/search-icon.svg";
import writeIcon from "../../assets/icon/write-icon.svg";
import MatchingItem from "../../components/MatchingList/MatchingItem";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVolunteers } from "../../api/apiVolunteer";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/user/atom";

const MatchingListPage = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);
  const [postSearchList, setPostSearchList] = useState([]);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);

    setPostSearchList(
      postList.filter(
        (item) =>
          item.title.includes(e.target.value) ||
          item.place.includes(e.target.value)
      )
    );
  };

  const onClickSearch = () => {
    setPostSearchList(
      postList.filter(
        (item) => item.title.includes(search) || item.place.includes(search)
      )
    );
  };

  useEffect(() => {
    getItemApi(user.userId);
  }, []);

  const getItemApi = async (userId) => {
    let data = await getVolunteers(userId);
    if (data) {
      console.log(data);
      setPostList(data);
      setPostSearchList(data);
    }
  };

  return (
    <Container>
      <MainHeader />
      <InnerContainer>
        <SearchContainer>
          <SearchInput
            placeholder="제목 또는 지역명 검색"
            value={search}
            onChange={(e) => onChangeSearch(e)}
          />
          <SearchIcon
            src={searchIcon}
            alt="검색 버튼"
            onClick={onClickSearch}
          />
        </SearchContainer>
        <ContentContainer>
          <MatchingItem postList={postSearchList} />
        </ContentContainer>
        <WriteButtonBox>
          <WriteButton onClick={() => navigate(`/matching-write`)}>
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
  padding: 15px 20px;
  width: 100%;
  border: none;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 0.9rem;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 35px;
  right: 40px;
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
