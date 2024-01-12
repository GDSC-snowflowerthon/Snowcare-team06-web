import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import MainPage from "./pages/Main/MainPage";
import SignupPage from "./pages/Signup/SignupPage";

import ChatList from "./pages/MyPage/ChatList/ChatList";
import MyPage from "./pages/MyPage/MyPage/MyPage";
import CheckRecord from "./pages/MyPage/CheckRecord/CheckRecord";
import LCommunity from "./pages/MyPage/LikeCommunity/LCommunity";

import MatchingListPage from "./pages/MatchingList/MatchingListPage";
import MatchingDetailPage from "./pages/MatchingDetail/MatchingDetailPage";
import MatchingWritePage from "./pages/MatchingWrite/MatchingWritePage";

import Community from "./pages/Community/Community/Community";
import CommunityWritePage from "./pages/Community/CWrite/CommunityWritePage";
import CommunityDetailPage from "./pages/Community/CDetail/CommunityDetailPage";
import LikeListPage from "./pages/MyPage/LikeList/LikeListPage";
import RecordingPage from "./pages/MyPage/Recording/RecordingPage";
import RecordDetailPage from "./pages/MyPage/RecordDetail/RecordDetailPage";
import NotificationPage from "./pages/MyPage/Notification/NotificationPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/matchings" element={<MatchingListPage />} />
        <Route path="/matching/:id" element={<MatchingDetailPage />} />
        <Route path="/matching-write" element={<MatchingWritePage />} />

        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/records" element={<CheckRecord />} />
        <Route path="/community-like" element={<LCommunity />} />
        <Route path="/matching-like" element={<LikeListPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/notify" element={<NotificationPage />} />
        <Route path="/record" element={<RecordDetailPage />} />
        <Route path="/record-write" element={<RecordingPage />} />

        <Route path="/community" element={<Community />} />
        <Route path="/community-detail/:id" element={<CommunityDetailPage />} />
        <Route path="/community-write" element={<CommunityWritePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
