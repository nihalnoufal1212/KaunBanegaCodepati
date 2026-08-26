const LaurelIcon = ({ flip }) => (
  <svg
    viewBox="0 0 40 60"
    aria-hidden="true"
    className="prize-pool__laurel"
    style={flip ? { transform: "scaleX(-1)" } : undefined}
  >
    <path
      d="M28 4C18 10 12 22 12 34c0 9 5 17 12 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {[8, 16, 24, 32, 40, 48].map((y) => (
      <path
        key={y}
        d={`M${18 + (y / 60) * 2} ${y} q-9 -2 -13 5`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    ))}
  </svg>
);

export default function PrizePool() {
  return (
    <div className="prize-pool" id="prizes">
      <LaurelIcon />
      <div className="prize-pool__text">
        <span className="eyebrow">Prize Pool</span>
        <span className="prize-pool__amount gold-text">₹5000</span>
      </div>
      <LaurelIcon flip />
    </div>
  );
}
