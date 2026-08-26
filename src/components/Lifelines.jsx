import LifelineCard from "./LifelineCard";
import { HandshakeIcon, PollIcon } from "./Icons";

const LIFELINES = [
  {
    icon: <HandshakeIcon />,
    title: "CODE FOR ME BRO!",
    description: "Take help from another participant.",
    points: "Correct help earns +50 pts. Wrong help costs -50 pts.",
  },
  {
    badgeText: "50:50",
    title: "50:50",
    description: "Two wrong options are eliminated. Better odds, smarter choice.",
  },
  {
    icon: <PollIcon />,
    title: "TOGETHER WE STAND",
    description: "Audience polls the answer.",
    points: "Every correct vote earns +25 pts.",
  },
];

export default function Lifelines() {
  return (
    <section className="lifelines" id="how-to-play">
      <div className="container">
        <p className="lifelines__heading eyebrow">
          &bull; LIFELINES — USE WISELY, WIN BOLDLY &bull;
        </p>
        <div className="lifelines__grid">
          {LIFELINES.map((l) => (
            <LifelineCard key={l.title} {...l} />
          ))}
        </div>
      </div>
    </section>
  );
}
