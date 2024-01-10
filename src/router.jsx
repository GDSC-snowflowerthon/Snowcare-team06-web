import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import MainPage from "./pages/Main/MainPage";
import SignupPage from "./pages/Signup/SignupPage";
import MatchingListPage from "./pages/MatchingList/MatchingListPage";
import MatchingDetailPage from "./pages/MatchingDetail/MatchingDetailPage";
import MatchingWritePage from "./pages/MatchingWrite/MatchingWritePage";

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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
