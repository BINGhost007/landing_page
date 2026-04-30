interface IconProps {
  name: string;
  className?: string;
}

const paths: Record<string, React.ReactNode> = {
  gem: (
    <path
      d="M6 3h12l4 6-10 13L2 9l4-6z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  swords: (
    <>
      <path d="M14.5 17.5L3 6V3h3l11.5 11.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 19l6-6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 16l4 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 6.5L21 18v3h-3L6.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 11l6-6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 8l4-4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  football: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </>
  ),
  star: (
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  vault: (
    <>
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <circle cx="12" cy="14" r="3" />
      <path d="M7 7V5a5 5 0 0 1 10 0v2" />
    </>
  ),
  flame: (
    <path
      d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  zap: (
    <path
      d="M13 2L3 14h9l-1 10 10-12h-9l1-10z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
      <path d="M5 3v4" />
      <path d="M3 5h4" />
      <path d="M19 17v4" />
      <path d="M17 19h4" />
    </>
  ),
  gamepad: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 12h4" />
      <path d="M8 10v4" />
      <circle cx="17" cy="10" r="1" fill="currentColor" />
      <circle cx="15" cy="14" r="1" fill="currentColor" />
    </>
  ),
  trophy: (
    <>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 22V8a6 6 0 0 1 12 0v14" />
      <path d="M2 8a6 6 0 0 0 12 0" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
    </>
  ),
  'users-group': (
    <>
      <path d="M14 19a6 6 0 0 0-12 0" />
      <circle cx="8" cy="9" r="4" />
      <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
    </>
  ),
  refresh: (
    <>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </>
  ),
  gift: (
    <>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </>
  ),
  facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  ),
  twitter: (
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  ),
  youtube: (
    <>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </>
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </>
  ),
  discord: (
    <path d="M9.09 9a3 3 0 0 0-2.83 2A3 3 0 1 0 9.09 9zM14.91 9a3 3 0 0 1 2.83 2A3 3 0 1 1 14.91 9zM5.64 4.28a18 18 0 0 1 12.72 0A2 2 0 0 1 19.5 6v4.5a9.5 9.5 0 0 1-15 0V6a2 2 0 0 1 1.14-1.72z" />
  ),
  menu: (
    <>
      <path d="M4 6h16" strokeLinecap="round" />
      <path d="M4 12h16" strokeLinecap="round" />
      <path d="M4 18h16" strokeLinecap="round" />
    </>
  ),
  x: (
    <>
      <path d="M18 6L6 18" strokeLinecap="round" />
      <path d="M6 6l12 12" strokeLinecap="round" />
    </>
  ),
  'arrow-up': (
    <path
      d="M5 10l7-7m0 0l7 7m-7-7v18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  phone: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </>
  ),
  android: (
    <>
      <path d="M5 16V8a7 7 0 0 1 14 0v8" />
      <rect x="3" y="16" width="18" height="6" rx="2" />
      <path d="M8 2l2 3" />
      <path d="M16 2l-2 3" />
    </>
  ),
};

export default function Icon({ name, className = 'w-6 h-6' }: IconProps) {
  const content = paths[name];
  if (!content) return null;

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
