import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JoinQuiz from "./pages/JoinQuiz";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<JoinQuiz />} />
    </Routes>
  );
}