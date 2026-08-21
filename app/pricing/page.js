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

      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {TIERS.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.06}>
                <div
                  className={`flex h-full flex-col rounded-lg border p-8 ${
                    tier.featured
                      ? "border-brass bg-canvas-2"
                      : "border-line-on-canvas bg-canvas-2/40"
                  }`}
                >
                  {tier.featured && (
                    <span className="font-mono-figures mb-4 inline-block w-fit rounded-sm bg-brass px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-ink">
                      Most common
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-medium text-cream">
                    {tier.name}
                  </h3>
                  <div className="font-mono-figures mt-2 text-sm text-brass">
                    {tier.size}
                  </div>
                  <p className="mt-4 text-sm text-cream-muted">{tier.description}</p>

                  <ul className="mt-7 flex-1 space-y-3">
                    {tier.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-cream/90">
                        <IconCheck className="mt-0.5 shrink-0 text-harbor" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant={tier.featured ? "brass" : "outlineDark"}
                    className="mt-8 w-full"
                  >
                    Talk to us
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 text-center text-sm text-cream-muted">
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
