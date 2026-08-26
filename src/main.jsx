import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/page.css";
import "./components/Starfield.css";
import "./components/Navbar.css";
import "./components/Hero.css";
import "./components/FeatureCard.css";
import "./components/PrizePool.css";
import "./components/LifelineCard.css";
import "./components/Lifelines.css";
import "./components/InfoSections.css";
import "./components/Footer.css";
import "./pages/JoinQuiz.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
