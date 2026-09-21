import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { IconArrowRight, IconCheck, IconShield } from "@/components/icons";

export const metadata = {
  title: "Architecture & effort — Lekka",
  description: "The architecture, delivery effort, client pricing, and operating costs behind a Lekka-style business operations platform.",
  alternates: { canonical: "/architecture" },
};

const EFFORT = [
  ["Discovery & design", "2–3 weeks", "Workflow mapping, roles, data model, acceptance criteria, and rollout plan."],
  ["Application foundation", "3–4 weeks", "React/Vite surfaces, navigation, responsive system, Firebase Auth, sessions, and environments."],
  ["Core operations", "10–14 weeks", "People, finance, documents, timesheets, PTO, Work Calendar, planning, and approvals."],
  ["Control layer", "4–6 weeks", "Firestore rules, transactions, notifications, audit, backups, analytics, and security hardening."],
  ["Verification & launch", "4–6 weeks", "Unit and rules tests, data migration, UAT, training, deployment, and hypercare."],
];

const COSTS = [
  ["Vercel Pro", "$20/mo", "Professional deployment, collaboration, custom domain, and included usage credit."],
  ["Firebase Blaze", "Usage-based", "Firestore, Storage, Functions, Hosting, and other Google Cloud usage beyond free quotas."],
  ["Domain & email", "₹1K–₹10K/yr", "Domain renewal plus transactional email or business inboxes."],
  ["Messaging & integrations", "Usage-based", "SMS, WhatsApp, payment gateways, accounting tools, or client-specific connectors."],
  ["Operations", "₹5K–₹30K/mo", "Monitoring, backup review, support tooling, and release operations at an early stage."],
];

export default function ArchitecturePage() {
  return (
    <>
      <PageHero
        eyebrow="Architecture & effort"
        title={<>A serious system takes more than a polished <span className="text-accent">screen.</span></>}
        subtitle="This is the planning basis for building a Lekka-style operations platform from scratch: what has to be built, how long it takes, what to charge, and what it costs to operate."
      />

      <section className="bg-paper-2 border-y border-line-on-paper">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <Reveal direction="left">
              <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-accent-bright">Recommended starting point</div>
              <h2 className="font-display mt-4 max-w-md text-3xl font-medium leading-tight text-ink sm:text-5xl">Build one isolated deployment first. Productize the repetition second.</h2>
              <p className="mt-6 max-w-md leading-relaxed text-ink-muted">The current architecture is best suited to a single-tenant rollout: one customer, one Firebase project, one deployment, and a clear security boundary.</p>
              <p className="mt-4 max-w-md leading-relaxed text-ink-muted">Once the product and support process work for the first 5–10 customers, automate provisioning and decide whether multi-tenancy is worth the additional security and operational complexity.</p>
            </Reveal>
            <Reveal direction="right">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Experience", "React + Vite", "Modular SPA with partner branding"],
                  ["Authority", "Firebase Auth", "Sessions, claims, App Check"],
                  ["Data", "Cloud Firestore", "Real-time records and transactions"],
                ].map(([label, title, body]) => (
                  <div key={label} className="rounded-xl border border-line-on-paper bg-paper p-6">
                    <div className="font-mono-figures text-xs uppercase tracking-[0.15em] text-accent-bright">{label}</div>
                    <h3 className="font-display mt-5 text-xl font-semibold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-accent/30 bg-accent/5 p-6"><div className="font-mono-figures text-xs uppercase tracking-[0.15em] text-accent-bright">The important boundary</div><p className="mt-3 text-sm leading-relaxed text-ink-muted">The UI is not the security boundary. Firestore rules, custom claims, transaction preconditions, audit records, and immutable workflow states are.</p></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal direction="down">
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">01 — Delivery effort</div>
            <div className="mt-5 flex flex-col gap-5 border-b border-line-on-paper pb-8 sm:flex-row sm:items-end sm:justify-between"><h2 className="font-display text-3xl font-medium text-ink sm:text-5xl">6–9 months solo.<br /><span className="text-accent">3–5 months with a small team.</span></h2><p className="max-w-xs text-sm leading-relaxed text-ink-muted">Planning basis: approximately 1,400–2,200 engineering hours for the full operational scope.</p></div>
            <div className="mt-4 divide-y divide-line-on-paper">
              {EFFORT.map(([area, duration, detail], index) => (
                <div key={area} className="grid gap-3 py-6 sm:grid-cols-[48px_1fr_130px] sm:items-start"><div className="font-mono-figures text-xs text-accent-bright">0{index + 1}</div><div><h3 className="font-display text-xl font-medium text-ink">{area}</h3><p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-muted">{detail}</p></div><div className="font-mono-figures text-sm text-ink-subtle sm:text-right">{duration}</div></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2 border-y border-line-on-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal direction="down">
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-accent-bright">02 — What to charge</div>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-medium text-ink sm:text-5xl">Price the business system,<br /><span className="text-accent">not the number of screens.</span></h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted">These figures are for <strong className="text-ink">building an equivalent platform from scratch</strong> — bespoke engineering effort, quoted once. If you&rsquo;d rather license the existing Lekka platform and brand it for your clients instead of building it, that&rsquo;s a different, ongoing commercial model — see <Link href="/partners" className="text-accent-bright underline">partner pricing</Link>.</p>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[
                ["Focused MVP", "₹15L–₹25L", "A smaller first release covering auth, people, finance basics, documents, and one approval workflow."],
                ["Full platform", "₹40L–₹65L", "The complete operations product: Work Calendar, tasks, planning, payroll, finance, inventory, audit, and launch support."],
                ["White-label enterprise build", "₹65L–₹1.2Cr+", "A from-scratch build with partner branding, isolated deployment, data migration, integrations, and a support model — the DIY alternative to licensing Lekka as a partner."],
              ].map(([title, price, body]) => (
                <div key={title} className="rounded-2xl border border-line-on-paper bg-paper p-7"><h3 className="font-display text-2xl font-semibold text-ink">{title}</h3><div className="mt-6 font-display text-4xl font-bold text-accent-bright">{price}</div><p className="mt-5 text-sm leading-relaxed text-ink-muted">{body}</p></div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 border-t border-line-on-paper pt-8 sm:grid-cols-3"><div><span className="font-mono-figures text-xs uppercase tracking-[0.15em] text-ink-subtle">Recommended quote</span><strong className="mt-2 block font-display text-2xl text-ink">₹48L–₹60L</strong></div><div><span className="font-mono-figures text-xs uppercase tracking-[0.15em] text-ink-subtle">Support after launch</span><strong className="mt-2 block font-display text-2xl text-ink">₹1L/mo minimum</strong></div><div><span className="font-mono-figures text-xs uppercase tracking-[0.15em] text-ink-subtle">Client infrastructure</span><strong className="mt-2 block font-display text-2xl text-ink">Billed separately</strong></div></div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal direction="down">
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">03 — Your operating costs</div>
            <h2 className="font-display mt-4 text-3xl font-medium text-ink sm:text-5xl">Keep infrastructure transparent.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink-muted">The client should usually own the cloud accounts and billing. You can charge a management margin for monitoring, releases, backups, and support instead of quietly absorbing usage risk.</p>
            <div className="mt-10 divide-y divide-line-on-paper border-y border-line-on-paper">{COSTS.map(([name, cost, detail]) => <div key={name} className="grid gap-2 py-5 sm:grid-cols-[1fr_150px_1.6fr] sm:items-start"><h3 className="font-display text-lg font-medium text-ink">{name}</h3><div className="font-mono-figures text-sm text-accent-bright sm:text-right">{cost}</div><p className="m-0 text-sm leading-relaxed text-ink-muted sm:pl-8">{detail}</p></div>)}</div>
            <div className="mt-8 rounded-xl border border-line-on-paper bg-paper-2 p-6"><div className="flex items-start gap-3"><IconShield className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><div><h3 className="font-display text-xl font-medium text-ink">Early-stage monthly planning range</h3><p className="mt-2 text-sm leading-relaxed text-ink-muted">Budget approximately ₹5K–₹20K/month for a small deployment before significant traffic, messaging, storage, or integration usage. Review actual Firebase and hosting usage monthly.</p></div></div></div>
            <p className="mt-6 text-xs leading-relaxed text-ink-subtle">Vendor prices change by region and usage. Verify current rates before signing a proposal: <a className="text-accent-bright underline" href="https://firebase.google.com/docs/projects/billing/firebase-pricing-plans" target="_blank" rel="noreferrer">Firebase billing</a>, <a className="text-accent-bright underline" href="https://firebase.google.com/docs/firestore/standard-edition" target="_blank" rel="noreferrer">Firestore pricing</a>, and <a className="text-accent-bright underline" href="https://vercel.com/pricing" target="_blank" rel="noreferrer">Vercel pricing</a>.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas text-cream">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10 lg:py-28">
          <Reveal>
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-accent">The commercial principle</div>
            <h2 className="font-display mt-5 text-3xl font-medium sm:text-5xl">Don&rsquo;t sell it as a website.</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-cream-muted">Sell it as an operational system that replaces disconnected spreadsheets, approvals, finance tools, HR records, and work tracking. That is where the implementation value, support value, and recurring value come from.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3 text-xs text-cream-muted"><span className="rounded-full border border-line-on-canvas px-4 py-2">Implementation</span><span className="rounded-full border border-line-on-canvas px-4 py-2">Migration</span><span className="rounded-full border border-line-on-canvas px-4 py-2">Training</span><span className="rounded-full border border-line-on-canvas px-4 py-2">Support</span></div>
            <div className="mt-10 flex justify-center"><Button href="/contact" variant="accent">Discuss a deployment <IconArrowRight /></Button></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
