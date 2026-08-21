import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Privacy Policy — Lekka",
  description: "How OneMark handles data inside Lekka.",
};

const SECTIONS = [
  {
    heading: "1. What we collect",
    body: [
      "Inside your deployment, Lekka stores what your team enters to run your business: employee records, payslips, timesheets, client and lead information, invoices, quotations, and financial records. This is business data your team controls — we don't add anything to it you didn't put there.",
      "Separately, this marketing site collects only what's needed to respond to a demo request — name, business name, email, and team size, submitted through the Contact form.",
    ],
  },
  {
    heading: "2. Where your data lives",
    body: [
      "Each customer's deployment has its own database, isolated from every other customer's. Your business's records aren't stored alongside anyone else's in a shared table.",
      "Backups are encrypted (AES-256) and retained on a rolling basis, so a deployment can be restored if something goes wrong — not so the data can be repurposed elsewhere.",
    ],
  },
  {
    heading: "3. Who can see it",
    body: [
      "Access inside your deployment is enforced by role, at the database level — not just hidden in the interface. What an employee, HR user, or admin can see is determined by the role your business assigns them.",
      "OneMark's own team doesn't access a customer's deployment data except to provide support you've asked for, or to keep the system running (backups, security patches).",
    ],
  },
  {
    heading: "4. What we don't do",
    body: [
      "We don't sell customer data. We don't use it to train models. We don't share it with advertisers or data brokers. There's no ad-tracking or third-party analytics pixel embedded inside the product itself.",
    ],
  },
  {
    heading: "5. Cookies on this site",
    body: [
      "This marketing site (lekka's public pages, not the product itself) uses only what's needed for the site to function — no third-party ad or tracking cookies.",
    ],
  },
  {
    heading: "6. Your rights",
    body: [
      "You can request a full export of your deployment's data at any time, and request deletion of your business's records if you stop using Lekka, subject to what we're legally required to retain (such as statutory financial records).",
    ],
  },
  {
    heading: "7. Contact",
    body: [
      "Questions about this policy, or a data request, can be sent to hello@onemark.co.in, or through the Contact page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="What we collect, where it lives, and who can see it — last updated August 2026."
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
