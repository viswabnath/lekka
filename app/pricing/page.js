import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import FaqItem from "@/components/FaqItem";
import { IconCheck, IconArrowRight } from "@/components/icons";

export const metadata = {
  title: "Pricing — Lekka",
  description: "Every Lekka deployment is your own — no shared database, no per-seat surprises.",
};

const TIERS = [
  {
    name: "Starter",
    size: "Up to 15 people",
    description: "For a small team ready to leave spreadsheets behind.",
    points: [
      "HR, payroll & timesheets",
      "Invoices, quotations & finance module",
      "Client & lead tracking",
      "Nightly encrypted backups",
      "Email support",
    ],
  },
  {
    name: "Growth",
    size: "Up to 60 people",
    description: "For an established agency or consultancy running full operations.",
    featured: true,
    points: [
      "Everything in Starter",
      "Reports & insights, financial year & quarterly",
      "Custom roles & approval workflows",
      "Priority support",
      "Guided onboarding & data migration",
    ],
  },
  {
    name: "Enterprise",
    size: "60+ people, or custom needs",
    description: "For businesses that need it built around a specific requirement.",
    points: [
      "Everything in Growth",
      "Custom modules on request",
      "Dedicated deployment & domain",
      "SLA-backed support",
      "A direct line to the people who built it",
    ],
  },
];

const FAQS = [
  {
    q: "Why isn't there a public price list?",
    a: "Because every deployment is sized to your team and configured around how you actually work — there's no per-seat meter to quote you against. Tell us your team size and what you're replacing, and we'll quote it straight, on the call.",
  },
  {
    q: "Can I move from Excel, Tally, or another tool?",
    a: "Yes — data migration is part of onboarding on the Growth and Enterprise tiers. We map your existing clients, invoices, and employee records into Lekka before you go live, not after.",
  },
  {
    q: "Is my data shared with any other business?",
    a: "No. Every customer gets their own deployment — your own database, your own domain. It's the fork-and-deploy model, not a shared multi-tenant database with a row-level filter standing between your data and someone else's.",
  },
  {
    q: "What happens to our data if we ever stop using Lekka?",
    a: "It's yours. Every module that generates records — invoices, payslips, reports — supports CSV or PDF export, and because it's your own deployment, you can request a full data export at any time.",
  },
  {
    q: "Can we start small and grow into a bigger tier?",
    a: "Yes. Tiers are based on team size, not feature-gating — as your team grows past a tier's range, we move you up. Nothing gets locked away as a surprise upsell.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Your own deployment. Your own data. No exceptions."
        subtitle="Lekka isn't a shared database with your data sitting next to a competitor's. Every customer gets their own deployment — so pricing is based on your team's size, not a per-seat meter."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-3">
              {TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`flex h-full flex-col rounded-lg border p-8 ${
                    tier.featured
                      ? "border-accent bg-paper-2 shadow-[0_20px_50px_-25px_rgba(94,106,210,0.35)]"
                      : "border-line-on-paper bg-paper-2/60"
                  }`}
                >
                  {tier.featured && (
                    <span className="font-mono-figures mb-4 inline-block w-fit rounded-sm bg-accent px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white">
                      Most common
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-medium text-ink">
                    {tier.name}
                  </h3>
                  <div className="font-mono-figures mt-2 text-sm text-accent">
                    {tier.size}
                  </div>
                  <p className="mt-4 text-sm text-ink-muted">{tier.description}</p>

                  <ul className="mt-7 flex-1 space-y-3">
                    {tier.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-ink/90">
                        <IconCheck className="mt-0.5 shrink-0 text-success" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant={tier.featured ? "accent" : "outlineLight"}
                    className="mt-8 w-full"
                  >
                    Talk to us
                  </Button>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why deployment-based pricing */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="left">
              <div>
                <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-accent">
                  Why it works this way
                </div>
                <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  You&rsquo;re not renting a seat. You&rsquo;re getting a
                  deployment.
                </h2>
                <p className="mt-5 max-w-md text-ink-muted">
                  Most business software charges per person and hopes you
                  don&rsquo;t read the invoice too closely. Lekka is priced
                  around the size of your team and what you actually need
                  running — not a meter that climbs every time you hire.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/illustrations/payments.svg"
                alt=""
                className="mx-auto mb-10 hidden w-full max-w-xs sm:block"
              />
              <ul className="space-y-5">
                {[
                  ["Your own database", "not a shared table with a filter separating you from someone else's business."],
                  ["Your own domain", "lekka.yourcompany.com, not a subdomain shared across every customer."],
                  ["No per-seat surprises", "pricing moves with your team's size, reviewed at renewal, not billed per login."],
                ].map(([title, body]) => (
                  <li key={title} className="border-b border-line-on-paper pb-5 last:border-0">
                    <div className="font-medium text-ink">{title}</div>
                    <div className="mt-1 text-sm text-ink-muted">{body}</div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal direction="down">
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">
              Questions worth answering upfront
            </div>
            <div className="mt-6">
              {FAQS.map((f) => (
                <FaqItem key={f.q} question={f.q} answer={f.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-28">
          <Reveal>
            <div className="rounded-lg border border-accent/25 bg-paper px-8 py-16 sm:px-16">
              <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
                Tell us your team size — we&rsquo;ll quote it on the call.
              </h2>
              <div className="mt-8 flex justify-center">
                <Button href="/contact" variant="accent">
                  Book a demo <IconArrowRight />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
