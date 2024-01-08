import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import MainPage from "./pages/Main/MainPage";
import MyPage from "./pages/MyPage/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
