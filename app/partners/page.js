import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { IconArrowRight, IconCheck, IconShield } from "@/components/icons";

export const metadata = {
  title: "Partner with Lekka — OneMark",
  description: "White-label Lekka for your clients: a connected operations platform with a clear partner model, support, and deployment architecture.",
  alternates: { canonical: "/partners" },
};

const PARTNER_MODULES = [
  ["People", "Employee directory, onboarding, profiles, roles, employment documents, and payslips."],
  ["Work", "Work Calendar, client and internal work logs, correction requests, planning, tasks, and reviews."],
  ["Money", "Invoices, quotations, receipts, income, expenses, transfers, advances, and receivables."],
  ["Control", "Role-based access, audit log, notifications, approvals, backups, and deployment ownership."],
];

const PRICING = [
  {
    name: "Launch",
    label: "First branded deployment",
    price: "₹2.5L",
    cadence: "one-time setup",
    body: "For a provider validating the offer with one internal team or first client.",
    points: ["Brand, domain, and workspace configuration", "Core role model and initial data setup", "Partner enablement and go-live support"],
  },
  {
    name: "Channel",
    label: "Repeatable partner offer",
    price: "₹75K",
    cadence: "per month / platform base",
    featured: true,
    body: "For providers turning Lekka into a repeatable managed service across clients.",
    points: ["Everything in Launch", "Staging and production environments", "Release cadence, support route, and roadmap reviews"],
  },
  {
    name: "Scale",
    label: "Portfolio or enterprise rollout",
    price: "Custom",
    cadence: "scoped to portfolio",
    body: "For larger books of business, migrations, integrations, and deeper operating-model changes.",
    points: ["Multi-client rollout planning", "Priority support and SLA options", "Custom integrations and migration scope"],
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner edition"
        title={<>Sell the relationship. <span className="text-accent">Run on Lekka.</span></>}
        subtitle="If you build software or manage operations for clients, offer Lekka under your own brand instead of building and maintaining the entire system yourself."
      />

      <section className="bg-paper-2 border-y border-line-on-paper">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal direction="left">
              <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-accent-bright">Why this matters</div>
              <h2 className="font-display mt-4 max-w-lg text-3xl font-medium leading-tight text-ink sm:text-5xl">Turn trusted advice into a system your clients use every day.</h2>
              <p className="mt-6 max-w-lg leading-relaxed text-ink-muted">Many providers help clients improve their processes, but the client still goes back to spreadsheets, email, and separate finance tools. That makes the result harder to maintain and harder for the provider to support.</p>
              <p className="mt-4 max-w-lg leading-relaxed text-ink-muted">Lekka gives you a ready-made base for people, work, approvals, invoices, documents, and payroll. You bring the client relationship and implementation expertise; OneMark maintains the core product.</p>
            </Reveal>
            <Reveal direction="right">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Protect margin", "Stop rebuilding the same operational workflow for every client."],
                  ["Increase stickiness", "A system used every day creates a stronger relationship than a one-off deliverable."],
                  ["Reduce delivery risk", "Critical actions and approvals are recorded instead of living in memory."],
                  ["Open a new line", "Package implementation, migration, support, and managed operations around one core."],
                ].map(([title, body], index) => (
                  <div key={title} className="rounded-xl border border-line-on-paper bg-paper p-6 shadow-sm">
                    <div className="font-mono-figures text-xs text-accent-bright">0{index + 1}</div>
                    <h3 className="font-display mt-5 text-xl font-semibold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal direction="down">
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">What you can take to market</div>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PARTNER_MODULES.map(([title, body], index) => (
                <div key={title} className="border-t-2 border-accent/40 pt-5">
                  <div className="font-mono-figures text-xs text-accent-bright">0{index + 1}</div>
                  <h3 className="font-display mt-3 text-2xl font-medium text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal direction="left">
              <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-accent">Architecture you can explain</div>
              <h2 className="font-display mt-4 max-w-md text-3xl font-medium leading-tight sm:text-5xl">Familiar services. Clear boundaries. Fewer surprises.</h2>
              <p className="mt-6 max-w-md leading-relaxed text-cream-muted">The underlying product is a React and Vite application backed by Firebase Authentication, Cloud Firestore, Hosting, transactional writes, role-aware rules, and a staged deployment model.</p>
            </Reveal>
            <Reveal direction="right">
              <div className="rounded-2xl border border-line-on-canvas bg-canvas-2 p-6 sm:p-8">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[['Experience', 'React + Vite', 'Partner brand layer, modular surfaces'], ['Authority', 'Firebase Auth', 'Sessions, claims, App Check'], ['Data', 'Cloud Firestore', 'Real-time records, rules, transactions']].map(([eyebrow, title, body]) => (
                    <div key={title} className="rounded-lg border border-line-on-canvas bg-canvas p-5">
                      <div className="font-mono-figures text-[10px] uppercase tracking-[0.14em] text-accent">{eyebrow}</div>
                      <h3 className="mt-5 text-xl font-semibold text-cream">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream-muted">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-lg border border-accent/40 bg-accent/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4"><span className="font-mono-figures text-[10px] uppercase tracking-[0.14em] text-accent">Operating principle</span><span className="font-mono-figures text-xs text-cream-muted">UI → rules → audit</span></div>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cream-muted">A button being hidden is not the security boundary. Permissions are enforced in the data layer, approvals are re-read in transactions, and sensitive actions leave an audit trail.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 border-b border-line-on-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal direction="down">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-accent-bright">Partner pricing</div><h2 className="font-display mt-4 text-3xl font-medium text-ink sm:text-5xl">A clear base to build your margin on.</h2></div><p className="max-w-sm text-sm leading-relaxed text-ink-muted">This is partner platform pricing—not the direct customer deployment pricing on the Pricing page. It covers the commercial base for a provider to brand, implement, support, and resell Lekka. Taxes, third-party services, migration, and custom integrations are scoped separately.</p></div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {PRICING.map((tier) => (
                <div key={tier.name} className={`relative flex flex-col rounded-2xl border p-7 ${tier.featured ? "border-accent bg-paper shadow-[0_20px_50px_-20px_rgba(99,102,241,0.35)] ring-2 ring-accent/15" : "border-line-on-paper bg-paper"}`}>
                  {tier.featured && <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 font-mono-figures text-[10px] font-bold uppercase tracking-widest text-white">Recommended</span>}
                  <div className="font-mono-figures text-xs uppercase tracking-[0.16em] text-accent-bright">{tier.label}</div>
                  <h3 className="font-display mt-5 text-3xl font-bold text-ink">{tier.name}</h3>
                  <p className="mt-3 min-h-12 text-sm leading-relaxed text-ink-muted">{tier.body}</p>
                  <div className="mt-6 flex items-baseline gap-2"><strong className="font-display text-4xl text-ink">{tier.price}</strong><span className="text-xs text-ink-subtle">{tier.cadence}</span></div>
                  <ul className="mt-7 flex-1 space-y-3 border-t border-line-on-paper pt-6">{tier.points.map((point) => <li key={point} className="flex items-start gap-3 text-sm text-ink"><IconCheck className="mt-0.5 shrink-0 text-success" />{point}</li>)}</ul>
                  <Button href="/contact" variant={tier.featured ? "accent" : "outlineLight"} className="mt-8 w-full">Discuss this tier <IconArrowRight /></Button>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10 lg:py-28">
          <Reveal>
            <IconShield className="mx-auto h-8 w-8 text-accent" />
            <h2 className="font-display mt-6 text-3xl font-medium text-ink sm:text-5xl">Support is part of the product.</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-muted">OneMark owns the product core, release process, and escalation path. You own the client relationship, implementation context, and commercial packaging. That separation keeps the offer credible as it grows.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3 text-xs text-ink-muted"><span className="rounded-full border border-line-on-paper px-4 py-2">Staged releases</span><span className="rounded-full border border-line-on-paper px-4 py-2">Monthly release notes</span><span className="rounded-full border border-line-on-paper px-4 py-2">Priority support options</span></div>
            <div className="mt-10 flex justify-center"><Button href="/contact" variant="accent">Start a partner conversation <IconArrowRight /></Button></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
