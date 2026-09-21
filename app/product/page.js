import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ScreenshotImage from "@/components/ScreenshotImage";
import { IconArrowRight, IconCheck } from "@/components/icons";

export const metadata = {
  title: "Product — Lekka",
  description: "Explore Lekka's connected work calendar, review, planning, and payroll workflows.",
  alternates: { canonical: "/product" },
};

const FEATURES = [
  {
    code: "Work Calendar",
    title: "Know what was logged—and what still needs attention.",
    body: "A shared month view separates logged work, holidays, weekends, and missing workdays. Employees can request a correction for one date or a range instead of sending a string of separate requests.",
    points: [
      "Log client or internal work by day",
      "Select a working-day range for a single correction request",
      "Keep request history beside the calendar",
    ],
    screenshot: "/screenshots/work-calendar.png",
    alt: "Sanitized Work Calendar screen showing logged days, holidays, weekends, and the request area",
  },
  {
    code: "Tasks",
    title: "Keep ownership, status, and review together.",
    body: "A shared team board shows work moving from To Do through In Progress and Review to Completed. Discussion stays with the task, while reviewer decisions and changes have a history.",
    points: [
      "Filter by person and switch between week and month",
      "Require a reviewer before work is marked complete",
      "Postpone, archive, restore, and follow recurring work",
    ],
    screenshot: "/screenshots/tasks.png",
    alt: "Sanitized Tasks board with work grouped by status and reviewer workflow",
  },
  {
    code: "Planning",
    title: "Look across the month without losing the weekly plan.",
    body: "Planning presents the same tasks as a month of weekly lists. Move work to another week when priorities shift; task details and status remain shared with the board.",
    points: [
      "Navigate months independently from the task board",
      "Postpone work by moving it to another week",
      "Review planning and task progress in one connected system",
    ],
    screenshot: "/screenshots/planning.png",
    alt: "Sanitized Planning screen showing task cards arranged by week",
  },
];

const INCLUDED = [
  ["Finance & cash tracking", "Record income, expenses, transfers, advance payments, receivables, and balances across payment methods."],
  ["Reports & insights", "Review business activity by financial year, quarter, month, client, service, and expense category."],
  ["Invoices, quotations & receipts", "Create tax or non-tax invoices, client quotations, and receipts, then find saved documents in the archive."],
  ["People & payslips", "Manage employee records and roles, publish payslips, and provide employees with their own payslip history."],
  ["Timesheets, PTO & holidays", "Track attendance and leave separately, with HR review, holiday calendars, and leave balances."],
  ["Approval workflows", "Review timesheets and work-calendar corrections in assigned queues, with self-approval blocked."],
  ["Clients, services & follow-ups", "Keep client and service records connected to follow-up activity and day-to-day work."],
  ["Inventory & asset handovers", "Track categories, assignments, returns, and offboarding exceptions with an append-only event history."],
  ["Employment documents", "Draft, review, approve, and issue employment letters and terms with private access and immutable issued records."],
  ["Analytics & audit", "Surface operational and financial signals while retaining a permanent record of sensitive changes."],
  ["Access, audit & archive", "Use role-based permissions, retain an audit trail for sensitive activity, and search saved business documents."],
  ["Dashboard & team workspace", "See important activity alongside announcements, notifications, shared tasks, and planning."],
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title={<>Work, review, and payroll—<span className="text-accent">connected.</span></>}
        subtitle="Lekka brings daily work records, accountable approvals, team planning, and payroll into one system, so people can see what needs to happen next."
      />

      {FEATURES.map((feature, index) => {
        const textFirst = index % 2 === 0;
        return (
          <section key={feature.code} className={textFirst ? "bg-paper" : "bg-paper-2"}>
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
              <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
                <Reveal direction={textFirst ? "left" : "right"} className={textFirst ? "" : "lg:order-2"}>
                  <div>
                    <div className="font-mono-figures text-xs text-accent-bright">{feature.code}</div>
                    <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl">{feature.title}</h2>
                    <p className="mt-5 max-w-md text-ink-muted">{feature.body}</p>
                    <ul className="mt-7 space-y-3">
                      {feature.points.map(point => (
                        <li key={point} className="flex items-start gap-3 text-sm text-ink/90">
                          <IconCheck className="mt-0.5 shrink-0 text-success" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal direction={textFirst ? "right" : "left"} className={textFirst ? "" : "lg:order-1"}>
                  <ScreenshotImage src={feature.screenshot} alt={feature.alt} />
                  <p className="mt-3 text-xs text-ink-subtle">Product preview · sample labels shown</p>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-paper-2 border-y border-line-on-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal direction="down">
            <h2 className="font-display max-w-2xl text-3xl font-medium leading-tight text-ink sm:text-4xl">A correction reaches the right person—and stays visible.</h2>
            <p className="mt-4 max-w-2xl text-ink-muted">The requester selects one HR or admin reviewer. That person receives the notification, while assigned requests remain available in their queue. A person cannot approve their own request.</p>
            <div className="mt-10 grid gap-8 border-t border-line-on-paper pt-6 sm:grid-cols-3">
              {[
                ["Request", "Select a missed date or range and explain what happened."],
                ["Review", "Only the selected reviewer is notified; decision history stays with the request."],
                ["Finalize", "Pending corrections and stale work revisions are checked before payroll is published."],
              ].map(([title, body], index) => (
                <div key={title} className="max-w-sm">
                  <div className="font-mono-figures text-xs text-accent-bright">{index + 1}</div>
                  <h3 className="font-display mt-3 text-xl text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal direction="down">
            <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">The connected tools around the workflow</h2>
            <p className="mt-4 max-w-2xl text-ink-muted">Work Calendar and planning sit alongside the people, finance, and document tools a team already needs.</p>
            <div className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUDED.map(([title, body]) => (
                <div key={title} className="border-t border-line-on-paper py-5">
                  <h3 className="font-display text-lg text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10 lg:py-28">
          <Reveal>
            <div className="rounded-lg border border-accent/25 bg-paper px-8 py-16 sm:px-16">
              <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">See how it fits your team&rsquo;s workflow.</h2>
              <div className="mt-8 flex justify-center">
                <Button href="/contact" variant="accent">Book a demo <IconArrowRight /></Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
