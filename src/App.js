import Index from "./pages/Index";
import TrainerSignUp from "./Register/TrainerSignUp";
import TraineeSignUp from "./Register/TraineeSignUp";
import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup/trainee" element={<TraineeSignUp />} />
        <Route path="/signup/trainer" element={<TrainerSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
