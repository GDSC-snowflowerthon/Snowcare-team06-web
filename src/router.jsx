import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import MainPage from "./pages/Main/MainPage";
import Notify from "./pages/MyPage/Notification/Notify";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notify />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router; 
