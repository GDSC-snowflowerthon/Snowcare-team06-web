import { Drawer } from "antd";
import styled from "styled-components";
import homeMenu from "../../assets/icon/home-menu.svg";
import communityMenu from "../../assets/icon/community-menu.svg";
import matchingMenu from "../../assets/icon/matching-menu.svg";
import mypageMenu from "../../assets/icon/mypage-menu.svg";
import { useNavigate } from "react-router-dom";

const MenuDrawer = ({ onClose, open }) => {
  const navigate = useNavigate();

  return (
    <Container placement="right" onClose={onClose} open={open}>
      <MenuBox onClick={() => navigate(`/main`)}>
        <MenuImage src={homeMenu} alt="홈" />
        <MenuText>메인 홈</MenuText>
      </MenuBox>
      <MenuBox onClick={() => navigate(`/matchings`)}>
        <MenuImage src={matchingMenu} alt="매칭 페이지" />
        <MenuText>함께 봉사하기</MenuText>
      </MenuBox>
      <MenuBox onClick={() => navigate(`/community`)}>
        <MenuImage src={communityMenu} alt="커뮤니티" />
        <MenuText>커뮤니티</MenuText>
      </MenuBox>
      <MenuBox onClick={() => navigate(`/mypge`)}>
        <MenuImage src={mypageMenu} alt="마이 페이지" />
        <MenuText>마이 페이지</MenuText>
      </MenuBox>
    </Container>
  );
};

const Container = styled(Drawer)`
  border-radius: 20px 0 0 20px;
  background-color: #13a0a9;
  //color: white;

  .ant-drawer-wrapper-body {
    background-color: #13a0a9;
    color: white;
  }

  .ant-drawer-header {
    border: none;
  }

  .anticon-close {
    margin-top: 20px;
    font-size: 30px;
    color: white;
  }
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  cursor: pointer;
`;

const MenuImage = styled.img`
  padding: 10px;
`;

const MenuText = styled.div`
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
`;

export default MenuDrawer;
