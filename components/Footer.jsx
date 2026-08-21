import Link from "next/link";
import Reveal from "./Reveal";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { href: "/product", label: "What's inside" },
      { href: "/industries", label: "Who it's for" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About OneMark" },
      { href: "/contact", label: "Talk to us" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-on-canvas bg-canvas-2">
      <Reveal className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl font-medium text-cream">
              Lekka
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-muted">
              One place for payroll, invoices, timesheets, and clients —
              built for businesses that are done juggling five tools to run
              one.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="font-mono-figures text-[11px] uppercase tracking-[0.18em] text-cream-muted">
                {col.title}
              </div>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/85 transition-colors hover:text-brass"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="ledger-rule mt-14 text-line-on-canvas" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-cream-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            Designed &amp; built by{" "}
            <span className="text-cream">OneMark</span> · Kakinada, Andhra
            Pradesh, India — built for businesses everywhere.
          </p>
          <p>© {year} OneMark. All rights reserved.</p>
        </div>
      </Reveal>
    </footer>
  );
}
