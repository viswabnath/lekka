import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ScreenshotImage from "@/components/ScreenshotImage";
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
    body: "Every income, expense, and advance reconciled automatically against the right account and client. The number on the screen is the number in the bank.",
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
    code: "RPT",
    eyebrow: "Reports & insights",
    title: "Know your top clients and biggest costs without building a spreadsheet.",
    body: "Revenue by service, revenue by client, your five biggest expense categories — computed automatically from records you already have, not a report someone has to remember to build.",
    points: [
      "Top clients and top services, ranked by revenue",
      "Where the money actually goes, by expense category",
      "Financial year, quarterly, and month-on-month breakdowns",
      "Export to CSV or PDF for your accountant, in one click",
    ],
    screenshot: "/screenshots/reports.jpg",
    screenshotAlt: "Financial reports showing income, expenses, top clients, and revenue breakdown by service and client",
  },
  {
    code: "DOC",
    eyebrow: "Invoices, quotations & receipts",
    title: "Client-facing documents that look like you hired a design team.",
    body: "A 9-slide branded proposal deck generated from your service catalog in seconds. GST-compliant invoices, sequential and never duplicated. Acknowledgment receipts for advances.",
    points: [
      "Quotations as a polished, multi-slide branded deck",
      "Tax and non-tax invoices from one tool",
      "Per-client invoice numbering — never duplicated, never skipped",
      "Every document saved and searchable in one archive",
    ],
    screenshot: "/screenshots/quotation.jpg",
    screenshotAlt: "Nine-slide branded quotation deck with live preview in the quotation editor",
  },
  {
    code: "HR",
    eyebrow: "People & payroll",
    title: "One directory, not a folder of spreadsheets.",
    body: "Every employee's role, department, and join date in one place — with payslips generated straight from real attendance and leave, not rebuilt by hand each month.",
    points: [
      "Live-synced employee directory, role and department at a glance",
      "Payslips generated from real attendance and leave data",
      "Every employee sees their own history — no admin bottleneck",
      "PTO and holiday calendar, with approvals built in",
      "A team feed that marks birthdays and work anniversaries automatically",
    ],
    screenshot: "/screenshots/employees.jpg",
    screenshotAlt: "Employee directory showing active team members, roles, and departments",
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
    code: "APR",
    eyebrow: "Approvals",
    title: "One queue for every manager, not one inbox each.",
    body: "Every pending timesheet in a single global queue — who submitted it, how many hours, how much PTO — with approve or reject one click away. A manager can't approve their own.",
    points: [
      "Global approval queue across the whole team",
      "Pending, approved, and rejected — all in one view",
      "Self-approval blocked at the database, not just hidden in the UI",
      "Rejections require a real reason, not a blank click",
    ],
    screenshot: "/screenshots/timesheet-approval.jpg",
    screenshotAlt: "Global timesheet approval queue showing pending, approved, and rejected submissions",
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
  {
    code: "SEC",
    eyebrow: "Access, audit & backups",
    title: "Every action, permanently on record.",
    body: "Who logged in, what they changed, and when — an immutable ledger of portal activity, not a feature you have to remember to check.",
    points: [
      "Role-based access enforced at the database, not just the screen",
      "Every login, edit, and approval logged permanently",
      "Nightly encrypted, automatic backups",
      "Nothing is ever silently overwritten",
    ],
    screenshot: "/screenshots/audit-log.jpg",
    screenshotAlt: "Audit log showing a real-time immutable ledger of portal activity",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title={<>Everything your business runs on, <span className="text-accent">in one place.</span></>}
        subtitle="Not a bundle of separate apps wearing one logo — one system, built so each part already knows about the others."
      />

      {SECTIONS.map((s, i) => {
        const textFirst = i % 2 === 0;
        return (
          <section key={s.code} className={textFirst ? "bg-paper" : "bg-paper-2"}>
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
              <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
                <Reveal direction={textFirst ? "left" : "right"} className={textFirst ? "" : "lg:order-2"}>
                  <div>
                    <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-accent-bright">
                      {s.code} · {s.eyebrow}
                    </div>
                    <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl">
                      {s.title}
                    </h2>
                    <p className="mt-5 max-w-md text-ink-muted">{s.body}</p>
                    <ul className="mt-7 space-y-3">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm text-ink/90">
                          <IconCheck className="mt-0.5 shrink-0 text-success" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal direction={textFirst ? "right" : "left"} className={textFirst ? "" : "lg:order-1"}>
                  <ScreenshotImage src={s.screenshot} alt={s.screenshotAlt} />
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* More, in one place */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">
              And there&rsquo;s more inside
            </div>
            <p className="mt-3 max-w-xl text-ink-muted">
              A command-center dashboard, a self-serve payslip archive, and
              every generated document saved and searchable — the parts of
              running a business that don&rsquo;t need a whole section to
              make the point.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                {
                  src: "/screenshots/dashboard.jpg",
                  alt: "Lekka dashboard with live balance, tools, and team activity feed",
                  label: "Dashboard — everything at a glance",
                },
                {
                  src: "/screenshots/my-payslips.jpg",
                  alt: "Employee self-service payslip download screen",
                  label: "Self-serve payslip archive",
                },
                {
                  src: "/screenshots/archive.jpg",
                  alt: "Document archive listing saved quotations, invoices, and receipts",
                  label: "Every document, saved and searchable",
                },
              ].map((item) => (
                <div key={item.src}>
                  <ScreenshotImage src={item.src} alt={item.alt} />
                  <p className="mt-3 text-sm text-ink-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-28">
          <Reveal>
            <div className="rounded-lg border border-accent/25 bg-paper-2 px-8 py-16 sm:px-16">
              <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
                See it running with your own data.
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
