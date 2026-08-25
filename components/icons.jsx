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
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" stroke="none" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c0-5.445 4.43-9.874 9.877-9.874 2.634 0 5.11 1.027 6.97 2.888a9.83 9.83 0 0 1 2.882 6.976c0 5.446-4.43 9.874-9.874 9.874m0-18C5.393 3.785.01 9.168.01 15.787c0 2.112.551 4.174 1.597 5.989l-1.607 5.867 6.004-1.575a11.96 11.96 0 0 0 5.69 1.442h.005c6.617 0 12-5.383 12-12s-5.383-12-12-12" />
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
