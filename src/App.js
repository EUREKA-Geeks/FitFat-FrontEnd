import Index from "./pages/Index";
import SignUp from "./Register/SignUp";
import Profiles from "./components/Profiles";
import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profiles />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
