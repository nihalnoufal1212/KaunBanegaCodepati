import { useNavigate } from "react-router-dom";
import Starfield from "../components/Starfield";
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
          <p className="eyebrow">
            KAUN BANEGA CODEPATHI
          </p>

          <h1 className="join-page__title gold-text">
            JOIN THE LIVE QUIZ
          </h1>

          <p className="join-page__subtitle">
            Choose any available Mentimeter room below.
          </p>

          <p className="join-page__hint">
            If one room is full, simply choose another room.
          </p>
        </header>

        <div className="join-page__rooms">
          {MENTI_ROOMS.map((room) => (
            <a
              key={room.id}
              href={room.url}
              className="join-room"
              aria-label={`${room.label} — ${room.cta}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="join-room__ring"
                aria-hidden="true"
              >
                {String(room.id).padStart(2, "0")}
              </span>

              <span className="join-room__label eyebrow">
                {room.label}
              </span>

              <span className="join-room__status">
                LIVE ROOM
              </span>

              <span className="join-room__cta gold-text">
                {room.cta} →
              </span>
            </a>
          ))}
        </div>

        <div className="join-page__footer-note">
          <span>4 ROOMS</span>
          <span>•</span>
          <span>ONE LIVE QUIZ</span>
        </div>
      </div>
    </div>
  );
}