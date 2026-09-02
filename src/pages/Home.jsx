import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PrizePool from "../components/PrizePool";
import HowToPlay from "../components/HowToPlay";
import InfoSections from "../components/InfoSections";
import Footer from "../components/Footer";
import Starfield from "../components/Starfield";

export default function Home() {
  return (
    <div className="page page--home">
      <Starfield density={70} />

      <Navbar />

      <main>
        <Hero />

<section className="event-strip" aria-label="Event schedule">
  <div className="container event-strip__inner">

    <div className="event-strip__item event-strip__item--highlight">
      <span className="event-strip__label">
        SEPT 11
      </span>

      <strong>
        AB-1 — G 04
      </strong>
    </div>

    <div className="event-strip__divider" />

    <div className="event-strip__item event-strip__item--highlight">
      <span className="event-strip__label">
        SEPT 12
      </span>

      <strong>
        CB — G-13
      </strong>
    </div>

  </div>
</section>

<PrizePool />
        <HowToPlay />
        <InfoSections />
      </main>

      <Footer />
    </div>
  );
}