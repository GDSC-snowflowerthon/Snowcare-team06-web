import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import MainPage from "./pages/Main/MainPage";
import Like from "./pages/MyPage/LikeList/Like";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={< Like/>} />
       
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router; 
