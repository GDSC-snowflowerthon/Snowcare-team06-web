import styled from "styled-components";
import menuButton from "../../assets/icon/menu-button.svg";
import snowcareLogo from "../../assets/images/snowcare-logo.svg";
import beforeButton from "../../assets/icon/before-button.svg";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";
import { useNavigate } from "react-router-dom";

const DetailHeader = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container>
        <InnerContainer>
          <BackButton onClick={() => navigate(-1)}>
            <BackImg src={beforeButton} alt="뒤로가기" />
          </BackButton>
          <LogoImg
            src={snowcareLogo}
            alt="로고"
            onClick={() => navigate("/main")}
          />
          <MenuButton onClick={showDrawer}>
            <MenuImg src={menuButton} alt="메뉴" />
          </MenuButton>
        </InnerContainer>
      </Container>
      <MenuDrawer onClose={onClose} open={open} />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-position: center;
  align-items: center;
  width: 100vw;
  background-color: white;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  max-width: 700px; // 정하기!
`;

const BackButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const BackImg = styled.img`
  height: 30px;
`;

const LogoImg = styled.img`
  height: 40px;
`;

const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const MenuImg = styled.img`
  height: 20px;
`;

export default DetailHeader;
