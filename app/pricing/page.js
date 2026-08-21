import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
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
      "Invoices & finance module",
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
      "Custom roles & approval workflows",
      "Reports by financial year & quarter",
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

            <p className="mt-10 text-center text-sm text-ink-muted">
              No public price list on purpose — every deployment is
              configured for how your business actually runs. Book a demo
              and we&rsquo;ll quote it straight, on the call.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
