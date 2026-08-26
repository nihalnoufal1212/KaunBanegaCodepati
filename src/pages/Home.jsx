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
        <PrizePool />
        <HowToPlay />
        <InfoSections />
      </main>

      <Footer />
    </div>
  );
}