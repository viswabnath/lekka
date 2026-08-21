import Link from "next/link";
import { IconShield } from "@/components/icons";

const TRUST = [
  "Your own database, your own domain",
  "Nightly encrypted backups",
  "Role-based access, enforced at the database",
];

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
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-on-paper bg-paper-2">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl font-medium text-ink">
              Lekka
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              One place for payroll, invoices, timesheets, and clients —
              built for businesses that are done juggling five tools to run
              one.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="font-mono-figures text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                {col.title}
              </div>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="ledger-rule mt-14 text-line-on-paper" />

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          {TRUST.map((t) => (
            <span
              key={t}
              className="flex items-center gap-2 text-xs text-ink-subtle"
            >
              <IconShield className="h-3.5 w-3.5 shrink-0 text-accent" />
              {t}
            </span>
          ))}
        </div>

        <div className="ledger-rule mt-8 text-line-on-paper" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            Designed &amp; built by{" "}
            <span className="text-ink">OneMark</span> · Kakinada, Andhra
            Pradesh, India — built for businesses everywhere.
          </p>
          <p>© {year} OneMark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
