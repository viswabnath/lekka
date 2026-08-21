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

export function IconCalendar(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.2" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
      <path d="M7.5 13.2h2.2M11.9 13.2h2.2M16.3 13.2h.5M7.5 16.6h2.2M11.9 16.6h2.2" />
    </svg>
  );
}

export function IconBell(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <path d="M6 10.5a6 6 0 0 1 12 0c0 4 1.4 5.6 2 6.3H4c.6-.7 2-2.3 2-6.3Z" />
      <path d="M10 19.5a2.2 2.2 0 0 0 4 0" />
    </svg>
  );
}

export function IconMegaphone(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <path d="M3.5 9.5v5h2.8L15 19V5L6.3 9.5Z" />
      <path d="M18.5 10a2.8 2.8 0 0 1 0 4" />
      <path d="M6.3 14.5 7.8 19.5" />
    </svg>
  );
}

export function IconArchiveBox(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <rect x="3.5" y="4.5" width="17" height="4.5" rx="0.8" />
      <path d="M4.5 9v9.7a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9" />
      <path d="M10 13h4" />
    </svg>
  );
}

export function IconFolder(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <path d="M3.5 6.5a1 1 0 0 1 1-1H9l2 2.2h8.5a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1Z" />
    </svg>
  );
}

export function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <path d="M6.5 17.5 4 20l2.6-2.4A8 8 0 1 1 6.5 17.5Z" />
      <path d="M8.7 8.6c-.3 1 .1 2.2 1.1 3.5 1 1.3 2.1 2 3.2 2.3.9.2 1.3-.4 1.6-.9.2-.4 0-.6-.2-.8l-1.2-1c-.2-.2-.4-.2-.6 0l-.5.5c-.6-.3-1.4-1-1.8-1.8l.5-.5c.2-.2.2-.4 0-.6l-1-1.3c-.2-.2-.5-.3-.7-.1-.1 0-.3.2-.4.7Z" />
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
