import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import MainPage from "./pages/Main/MainPage";
import MyPage from "./pages/MyPage/MyPage/MyPage";
import ChatList from "./pages/MyPage/ChatList/ChatList";
import CheckRecord from "./pages/MyPage/CheckRecord/CheckRecord";



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={< ChatList/>} />
       
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router; 
