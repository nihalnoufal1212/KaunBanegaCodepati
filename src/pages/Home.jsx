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

<section className="event-strip" aria-label="Event information">
  <div className="container event-strip__inner">

    <div className="event-strip__item">
      <span className="event-strip__label">
        DATE
      </span>

      <strong>
        [DATE]
      </strong>
    </div>

    <div className="event-strip__divider" />

    <div className="event-strip__item">
      <span className="event-strip__label">
        TIME
      </span>

      <strong>
        [TIME]
      </strong>
    </div>

    <div className="event-strip__divider" />

    <div className="event-strip__item">
      <span className="event-strip__label">
        VENUES
      </span>

      <strong>
        AB-1 G04 &amp; CB G-13
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