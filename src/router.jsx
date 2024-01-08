import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import MainPage from "./pages/Main/MainPage";
import MyPage from "./pages/MyPage/MyPage";
import CheckRecord from "./pages/CheckRecord/CheckRecord";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckRecord />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router; 
