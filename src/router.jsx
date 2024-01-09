import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import MainPage from "./pages/Main/MainPage";
import SignupPage from "./pages/Signup/SignupPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router; 
