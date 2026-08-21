const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconPeople(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <circle cx="17" cy="7" r="2.4" />
      <path d="M15.2 14.8c2.6.2 4.6 2.4 4.6 5.2" />
    </svg>
  );
}

export function IconInvoice(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M15 3v4h4" />
      <path d="M8 12h8M8 15.5h8M8 8.5h4" />
    </svg>
  );
}

export function IconClients(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <rect x="3.5" y="8" width="7" height="12" rx="0.6" />
      <rect x="13.5" y="4" width="7" height="16" rx="0.6" />
      <path d="M6 11.5h1.5M6 14.5h1.5M16 8h1.5M16 11h1.5M16 14h1.5" />
    </svg>
  );
}

export function IconClock(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <path d="M12 3.5 19 6.5v5.3c0 4.6-3 7.6-7 8.7-4-1.1-7-4.1-7-8.7V6.5Z" />
      <path d="M8.7 12.2l2.1 2.1 4.3-4.3" />
    </svg>
  );
}

export function IconChart(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <path d="M4 20V10M11 20V4M18 20v-7" />
      <path d="M2.5 20h19" />
    </svg>
  );
}

export function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M4.5 12.5 9 17l10.5-11" />
    </svg>
  );
}

export function IconAnchor(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <circle cx="12" cy="5.5" r="2" />
      <path d="M12 7.5V20M6 13H2.5c.5 4 3.8 7 9.5 7s9-3 9.5-7H18" />
      <path d="M7 10.5c1.2 1.4 3 2 5 2s3.8-.6 5-2" />
    </svg>
  );
}
