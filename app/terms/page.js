import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Terms of Service — Lekka",
  description: "The terms that govern using Lekka, by OneMark.",
};

const SECTIONS = [
  {
    heading: "1. What these terms cover",
    body: [
      "These terms govern your use of Lekka, the business management software built and operated by OneMark (\"we\", \"us\", \"OneMark\"). By using Lekka, whoever signs up on behalf of your business (\"you\", \"your business\") agrees to them.",
      "If you're evaluating Lekka before signing up — reading this page, browsing the product pages — these terms don't yet apply to you. They take effect once your business has an active deployment.",
    ],
  },
  {
    heading: "2. Your own deployment",
    body: [
      "Every customer gets their own deployment of Lekka — their own database, provisioned separately from every other customer's. We don't run a shared multi-tenant database with a row-level filter standing between your data and someone else's.",
      "You're responsible for who on your team has access, and for the accuracy of the data your team enters — invoices, payroll, timesheets, client records. Lekka enforces role-based access at the database level, but the roles you assign are yours to manage.",
    ],
  },
  {
    heading: "3. Your data, your ownership",
    body: [
      "Records you create in Lekka — invoices, quotations, payslips, timesheets, client and employee data — belong to your business. We don't claim ownership over it, and we don't use it to train models, sell it, or share it with anyone outside your own deployment.",
      "Every module that generates records supports CSV or PDF export. If you ever stop using Lekka, you can request a full export of your deployment's data.",
    ],
  },
  {
    heading: "4. Payment and cancellation",
    body: [
      "Pricing is based on your team's size and configured deployment, agreed on directly with you — see Pricing for how that works. Renewal terms and cancellation notice periods are set out in your individual agreement with OneMark, not on this page, since every deployment is negotiated individually rather than sold off a fixed price list.",
    ],
  },
  {
    heading: "5. Availability and support",
    body: [
      "We aim to keep Lekka available and responsive, and we run our own agency's day-to-day operations on the same system — so an outage affects us as directly as it affects you. That said, we don't guarantee uninterrupted availability, and scheduled maintenance may occasionally take a deployment offline briefly.",
      "Support channels and response expectations are set out per tier — see Pricing.",
    ],
  },
  {
    heading: "6. Changes to these terms",
    body: [
      "We may update these terms as Lekka evolves. Material changes that affect an active customer will be communicated directly, not just posted here silently.",
    ],
  },
  {
    heading: "7. Contact",
    body: [
      "Questions about these terms can be sent to hello@onemark.co.in, or through the Contact page.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Plain terms, written the way we'd want to read them ourselves — last updated August 2026."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="space-y-14">
            {SECTIONS.map((s, i) => (
              <Reveal
                key={s.heading}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={0.02 * i}
              >
                <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-[15px] leading-relaxed text-ink-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
