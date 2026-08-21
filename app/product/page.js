import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ScreenshotFrame from "@/components/ScreenshotFrame";
import ScreenshotImage from "@/components/ScreenshotImage";
import PayrollMockup from "@/components/mockups/PayrollMockup";
import { IconCheck, IconArrowRight } from "@/components/icons";

export const metadata = {
  title: "Product — Lekka",
  description: "Everything Lekka does, module by module.",
};

const SECTIONS = [
  {
    code: "FIN",
    eyebrow: "Invoices, quotations & finance",
    title: "One number for your cash position — always current.",
    body: "GST and non-GST invoices, sequential and never duplicated. Quotations that go out looking professional. Every income, expense, and advance reconciled automatically against the right account.",
    points: [
      "GST-compliant and simple invoices from the same tool",
      "Advance payments auto-linked to the invoice they belong to",
      "Live balance across every payment method — cash and every bank account",
      "Reports by financial year, quarter, or custom range",
    ],
    screenshot: "/screenshots/finance.jpg",
    screenshotAlt: "Client statement showing billed, paid, and outstanding totals in Lekka",
  },
  {
    code: "HR",
    eyebrow: "People & payroll",
    title: "Payslips your team can pull up themselves.",
    body: "Generated straight from attendance and approved leave — no manual recalculation, no resending last month's PDF because someone lost it.",
    points: [
      "Payslips generated from real attendance and leave data",
      "Every employee sees their own history — no admin bottleneck",
      "PTO and holiday calendar, with approvals built in",
      "Employee directory with the details each role is allowed to see",
    ],
    mockup: <PayrollMockup />,
    label: "lekka.app/payroll",
  },
  {
    code: "OPS",
    eyebrow: "Timesheets & attendance",
    title: "Know where the hours actually went.",
    body: "Daily entries roll up into weekly and monthly views your team already understands — and missed entries get flagged before month-end becomes a scramble.",
    points: [
      "Daily entry, weekly and monthly rollups",
      "Approval workflow for managers",
      "Missed-day reminders, automatically",
      "Feeds straight into payroll — no re-entry",
    ],
    screenshot: "/screenshots/timesheet.jpg",
    screenshotAlt: "Attendance dashboard showing monthly heatmap and yearly productivity trend",
  },
  {
    code: "CRM",
    eyebrow: "Clients, leads & follow-ups",
    title: "Nothing about a client lives in someone's inbox.",
    body: "Every client, every lead, every follow-up — with the services and history attached, searchable by anyone on the team who's allowed to see it.",
    points: [
      "Clients and leads in one searchable directory",
      "Follow-up tracking across WhatsApp, email, calls",
      "Services and sectors tagged for real reporting",
      "Nothing gets lost when someone's on leave",
    ],
    screenshot: "/screenshots/clients.jpg",
    screenshotAlt: "Client and service master list showing sector, contact info, and status",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="Everything your business runs on, in one place."
        subtitle="Not a bundle of separate apps wearing one logo — one system, built so each part already knows about the others."
      />

      {SECTIONS.map((s, i) => (
        <section
          key={s.code}
          className={i % 2 === 0 ? "bg-canvas" : "bg-canvas-2"}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div>
                  <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-brass">
                    {s.code} · {s.eyebrow}
                  </div>
                  <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-cream sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-5 max-w-md text-cream-muted">{s.body}</p>
                  <ul className="mt-7 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-cream/90">
                        <IconCheck className="mt-0.5 shrink-0 text-harbor" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.1} className={i % 2 === 1 ? "lg:order-1" : ""}>
                {s.screenshot ? (
                  <ScreenshotImage src={s.screenshot} alt={s.screenshotAlt} />
                ) : (
                  <ScreenshotFrame label={s.label}>{s.mockup}</ScreenshotFrame>
                )}
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-medium text-cream sm:text-4xl">
              See it running with your own data.
            </h2>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" variant="brass">
                Book a demo <IconArrowRight />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
