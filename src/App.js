import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import TrainerSignUp from "./Register/TrainerSignUp";
import TraineeSignUp from "./Register/TraineeSignUp";
import Sidebar from "./components/Sidebar";
import SignUp from "./Register/SignUp";
import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup/trainee" element={<TraineeSignUp />} />
        <Route path="/signup/trainer" element={<TrainerSignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/action" element={<Sidebar />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
