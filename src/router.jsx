import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import MainPage from "./pages/Main/MainPage";
import SignupPage from "./pages/Signup/SignupPage";
import ChatList from "./pages/MyPage/ChatList/ChatList"
import Like from "./pages/MyPage/LikeList/Like";
import MyPage from "./pages/MyPage/MyPage/MyPage";
import Notify from "./pages/MyPage/Notification/Notify";
import Detail from "./pages/MyPage/RecordDetail/Detail";
import Record from "./pages/MyPage/Recording/Record";
import CheckRecord from "./pages/MyPage/CheckRecord/CheckRecord";
import LCommunity from "./pages/MyPage/LikeCommunity/LCommunity";
import Community from "./pages/Community2/mainCommunity/Community";
import CDetail from "./pages/Community2/CDetail/CDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<StartPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />

        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/checkrecord" element={<CheckRecord/>} />
        <Route path="/lcommunity" element={<LCommunity/>} />
        <Route path="/like" element={<Like/>} />
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="/notify" element={<Notify/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/record" element={<Record/>} />

        <Route path="/community" element={<Community/>} />
        <Route path="/cdetail" element={<CDetail/>} />

        
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router; 
