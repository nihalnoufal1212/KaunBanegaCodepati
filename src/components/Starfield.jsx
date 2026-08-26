import { useMemo } from "react";

// A lightweight, purely-CSS starfield: a fixed set of stars is generated
// once per mount (useMemo) so re-renders don't reshuffle the sky.
// No canvas / rAF loop is used, keeping this cheap on low-end phones.
export default function Starfield({ density = 60 }) {
  const stars = useMemo(() => {
    return Array.from({ length: density }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 0.6,
      delay: Math.random() * 6,
      duration: 3 + Math.random() * 4,
    }));
  }, [density]);

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
