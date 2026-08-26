export default function LifelineCard({ icon, badgeText, title, description, points }) {
  return (
    <div className="lifeline-card">
      <span className="lifeline-card__icon" aria-hidden="true">
        {badgeText ? (
          <span className="lifeline-card__badge-text">{badgeText}</span>
        ) : (
          icon
        )}
      </span>
      <h3 className="lifeline-card__title gold-solid">{title}</h3>
      <p className="lifeline-card__desc">{description}</p>
      {points && <p className="lifeline-card__points">{points}</p>}
    </div>
  );
}
