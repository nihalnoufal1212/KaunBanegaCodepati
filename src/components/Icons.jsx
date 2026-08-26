// Minimal line-art icons, stroked in currentColor so they inherit the
// gold tone set by their containing .feature-card__icon circle.
const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

export const BoltIcon = () => (
  <svg {...common}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);

export const TrophyIcon = () => (
  <svg {...common}>
    <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
    <path d="M7 5H4a3 3 0 0 0 3 4M17 5h3a3 3 0 0 1-3 4" />
    <path d="M12 13v3M9 21h6M8.5 21v-2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2" />
  </svg>
);

export const UsersIcon = () => (
  <svg {...common}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17.5" cy="9.5" r="2.3" />
    <path d="M15.5 13.2c2.6.3 4.5 2.5 4.5 5.3" />
  </svg>
);

export const BrainIcon = () => (
  <svg {...common}>
    <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1.5 5.5A3 3 0 0 0 7 18a3 3 0 0 0 5-2V6a2 2 0 0 0-3-2Z" />
    <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1.5 5.5A3 3 0 0 1 17 18a3 3 0 0 1-5-2" />
  </svg>
);

export const GiftIcon = () => (
  <svg {...common}>
    <rect x="4" y="9" width="16" height="11" rx="1" />
    <path d="M4 9h16v3H4z" />
    <path d="M12 9v11" />
    <path d="M12 9C10 9 8 8 8 6a2 2 0 1 1 4 0v3ZM12 9c2 0 4-1 4-3a2 2 0 1 0-4 0v3Z" />
  </svg>
);

export const CrownIcon = () => (
  <svg {...common}>
    <path d="m3 8 4 3 5-6 5 6 4-3-2 10H5L3 8Z" />
    <path d="M5 21h14" />
  </svg>
);

export const TargetIcon = () => (
  <svg {...common}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" />
  </svg>
);

export const HandshakeIcon = () => (
  <svg {...common}>
    <path d="M2 12h4l3-3 3 3 2-2 3 3h5" />
    <path d="M9 12l-2.5 2.5a1.7 1.7 0 0 0 2.4 2.4L11 14.8" />
    <path d="M14 13l1.6 1.6a1.7 1.7 0 0 1-2.4 2.4L11.5 15.3" />
  </svg>
);

export const PollIcon = () => (
  <svg {...common}>
    <path d="M4 20V10M10 20V4M16 20v-7M20 20h-.01" />
    <path d="M3 20h18" />
  </svg>
);
