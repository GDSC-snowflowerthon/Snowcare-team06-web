import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import MainPage from "./pages/Main/MainPage";
import Detail from "./pages/MyPage/RecordDetail/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Detail />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router; 
