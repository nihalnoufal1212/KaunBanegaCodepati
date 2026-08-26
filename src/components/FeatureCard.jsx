// A single feature row used in the left/right columns flanking the hero
// emblem. `side` controls which edge the connector line grows from so the
// layout can mirror left vs right on desktop.
export default function FeatureCard({ icon, title, subtitle, side = "left" }) {
  return (
    <div className={`feature-card feature-card--${side}`}>
      {side === "left" && (
        <span className="feature-card__icon" aria-hidden="true">
          {icon}
        </span>
      )}

      <div className="feature-card__connector" aria-hidden="true" />

      <div className="feature-card__text">
        <h3 className="feature-card__title gold-solid">{title}</h3>
        <p className="feature-card__subtitle">{subtitle}</p>
      </div>

      {side === "right" && (
        <span className="feature-card__icon" aria-hidden="true">
          {icon}
        </span>
      )}
    </div>
  );
}
