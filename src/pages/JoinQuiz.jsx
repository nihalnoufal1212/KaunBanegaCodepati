import { useNavigate } from "react-router-dom";
import Starfield from "../components/Starfield";
import acmLogo from "../assets/acm-logo.png";
import { MENTI_ROOMS } from "../config/mentiLinks";

export default function JoinQuiz() {
  const navigate = useNavigate();

  return (
    <div className="page page--join">
      <Starfield density={50} />

      <div className="container join-page__inner">
        <button
          type="button"
          className="join-page__back"
          onClick={() => navigate("/")}
        >
          ← BACK TO HOME
        </button>

        <header className="join-page__header">
          <img src={acmLogo} alt="ACM VIT-AP Student Chapter logo" className="join-page__logo" />
          <p className="eyebrow">Kaun Banega Codepathi</p>
          <h1 className="join-page__title gold-text">JOIN THE LIVE QUIZ</h1>
          <p className="join-page__subtitle">Choose any available Mentimeter room below.</p>
        </header>

        <div className="join-page__rooms">
          {MENTI_ROOMS.map((room) => (
            <a
              key={room.id}
              href={room.url}
              className="join-room"
              aria-label={`${room.label} — ${room.cta}`}
            >
              <span className="join-room__ring" aria-hidden="true">
                {room.id}
              </span>
              <span className="join-room__label eyebrow">{room.label}</span>
              <span className="join-room__cta gold-text">{room.cta}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
