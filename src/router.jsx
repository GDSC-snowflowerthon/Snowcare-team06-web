import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import MainPage from "./pages/Main/MainPage";
import SignupPage from "./pages/Signup/SignupPage";

import ChatList from "./pages/MyPage/ChatList/ChatList";
import Like from "./pages/MyPage/LikeList/Like";
import MyPage from "./pages/MyPage/MyPage/MyPage";
import Notify from "./pages/MyPage/Notification/Notify";
import Detail from "./pages/MyPage/RecordDetail/Detail";
import Record from "./pages/MyPage/Recording/Record";
import CheckRecord from "./pages/MyPage/CheckRecord/CheckRecord";
import LCommunity from "./pages/MyPage/LikeCommunity/LCommunity";

import MatchingListPage from "./pages/MatchingList/MatchingListPage";
import MatchingDetailPage from "./pages/MatchingDetail/MatchingDetailPage";
import MatchingWritePage from "./pages/MatchingWrite/MatchingWritePage";

import CDtail from "./pages/Community/CDetail/CDetail";
import Community from "./pages/Community/Community/Community";
import CommunityWritePage from "./pages/Community/CWrite/CommunityWritePage";
import CommunityDetailPage from "./pages/Community/CDetail/CommunityDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/matchings" element={<MatchingListPage />} />
        <Route path="/matching" element={<MatchingDetailPage />} />
        <Route path="/matching-write" element={<MatchingWritePage />} />

        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/checkrecord" element={<CheckRecord />} />
        <Route path="/lcommunity" element={<LCommunity />} />
        <Route path="/like" element={<Like />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/notify" element={<Notify />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/record" element={<Record />} />

        <Route path="/cdetail" element={<CDtail />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community-detail" element={<CommunityDetailPage />} />
        <Route path="/community-write" element={<CommunityWritePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
