import { useState } from "react";
import { useNavigate } from "react-router-dom";
import acmLogo from "../assets/acm-logo.png";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "HOW TO PLAY", href: "#how-to-play" },
  { label: "PRIZES", href: "#prizes" },
  { label: "SCHEDULE", href: "#schedule" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("HOME");
  const navigate = useNavigate();

  const handleNavClick = (label, href) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar" id="home">
      <div className="container navbar__inner">
        <div className="navbar__brand">
          <img src={acmLogo} alt="ACM VIT-AP Student Chapter logo" className="navbar__logo" />
          <div className="navbar__brand-text">
            <span className="navbar__brand-line navbar__brand-line--primary">ACM VIT-AP</span>
            <span className="navbar__brand-line">STUDENT CHAPTER</span>
            <span className="navbar__brand-line navbar__brand-line--accent">VIT-AP UNIVERSITY</span>
          </div>
        </div>

        <nav className="navbar__nav navbar__nav--desktop" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`navbar__link ${active === link.label ? "navbar__link--active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.label, link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="btn-gold navbar__cta navbar__cta--desktop"
          onClick={() => navigate("/join")}
        >
          <span className="navbar__cta-stack">
            <span>JOIN THE QUIZ</span>
            <span className="navbar__cta-sub">
              LIVE ON <span className="gold-text">MENTIMETER</span>
            </span>
          </span>
        </button>

        <button
          type="button"
          className="navbar__burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav className="navbar__nav--mobile" aria-label="Mobile">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`navbar__link ${active === link.label ? "navbar__link--active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.label, link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn-gold navbar__cta"
            onClick={() => navigate("/join")}
          >
            JOIN THE QUIZ — LIVE ON MENTIMETER
          </button>
        </nav>
      )}
    </header>
  );
}
