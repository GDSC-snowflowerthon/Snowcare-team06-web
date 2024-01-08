import { createGlobalStyle } from "styled-components";

const GlobalStye = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /*태블릿 및 모바일 화면을 위한 스타일링*/
  @media (max-width: 768px) {

  }

  /*모바일 화면을 위한 스타일링*/
  @media (max-width: 480px) {

  }
  
  body {
    /* 커스텀 글씨체 표시*/
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    line-height: 1.5;
  }

  /* .container{
    max-width: 400px;
    width: 100%;
    max-height: 749px;
    height: 100%;
  } */
`;

export default GlobalStye;
