import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import MainPage from "./pages/Main/MainPage";
import Record from "./pages/MyPage/Recording/Record";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Record />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router; 
