import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import TrainerSignUp from "./Register/TrainerSignUp";
import TraineeSignUp from "./Register/TraineeSignUp";
import Sidebar from "./components/Sidebar";
// import SignUp from "./Register/SignUp";
import Profiles from "./components/Profiles";
import UserProfile from "./pages/UserProfile.js";
import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gym from "./pages/Gym";
import Trainers from "./pages/Trainers";
import Session from "./pages/Session";
import GymProfile from "./pages/GymProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup/trainee" element={<TraineeSignUp />} />
        <Route path="/signup/trainer" element={<TrainerSignUp />} />
        {/* <Route path="/signup" element={<SignUp />} /> */} 
        <Route path="/profile" element={<Profiles />} />
        <Route path="/action" element={<Sidebar />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/gym-profile" element={<GymProfile />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/session" element={<Session/>} />
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
