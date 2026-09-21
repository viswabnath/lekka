import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import LedgerRow from "@/components/LedgerRow";
import ScreenshotImage from "@/components/ScreenshotImage";
import ProductShowcase from "@/components/hero/ProductShowcase";
import BackgroundDoodle from "@/components/BackgroundDoodle";
import {
  IconPeople,
  IconInvoice,
  IconClients,
  IconShield,
  IconChart,
  IconArrowRight,
  IconAnchor,
  IconClock,
  IconCheck,
  IconCalendar,
  IconBell,
  IconMegaphone,
  IconArchiveBox,
  IconFolder,
} from "@/components/icons";

const MODULES = [
  {
    code: "HR",
    icon: <IconPeople />,
    title: "People & payroll",
    description:
      "Employee records and payslips generated from real attendance and leave — one directory instead of a folder of spreadsheets.",
    stat: "Scattered → 1",
    statColor: "text-accent-bright",
  },
  {
    code: "FIN",
    icon: <IconInvoice />,
    title: "Invoices & finance",
    description:
      "GST and non-GST invoices, income and expenses, advances, and a live balance across every payment method.",
    stat: "Live balance",
    statColor: "text-success",
  },
  {
    code: "RPT",
    icon: <IconChart />,
    title: "Reports & insights",
    description:
      "Top clients, top services, and where the money actually goes — computed automatically, exportable in one click.",
    stat: "Auto-computed",
    statColor: "text-accent-bright",
  },
  {
    code: "DOC",
    icon: <IconFolder />,
    title: "Quotations & documents",
    description:
      "A branded, multi-slide proposal deck generated from your service catalog in seconds — not an afternoon in a slide editor.",
    stat: "9-slide decks",
  },
  {
    code: "OPS",
    icon: <IconClock />,
    title: "Timesheets & attendance",
    description:
      "Daily entries roll up into monthly views, and missed days get flagged before month-end becomes a scramble.",
    stat: "Daily entries",
  },
  {
    code: "WCL",
    icon: <IconCalendar />,
    title: "Work Calendar & corrections",
    description: "Record daily work, request a correction for missed dates, and send it directly to the reviewer responsible for that decision.",
    stat: "One reviewer",
    statColor: "text-accent-bright",
  },
  {
    code: "APR",
    icon: <IconCheck />,
    title: "Approvals",
    description:
      "Every pending timesheet in one global queue for managers — self-approval blocked at the database, not just hidden in the UI.",
    stat: "One queue",
    statColor: "text-success",
  },
  {
    code: "TSK",
    icon: <IconCheck />,
    title: "Tasks & planning",
    description: "Keep shared work visible in a review-based task board or scan the month week by week.",
    stat: "Week or month",
  },
  {
    code: "CRM",
    icon: <IconClients />,
    title: "Clients, leads & follow-ups",
    description:
      "Every client, lead, and follow-up in one place, with the services and history attached — nothing lives in someone's inbox.",
    stat: "One record",
    statColor: "text-accent-bright",
  },
  {
    code: "HOL",
    icon: <IconCalendar />,
    title: "Holiday & PTO",
    description:
      "A company holiday calendar and per-employee leave policy, with balances tracked automatically instead of chased over chat.",
    stat: "Auto-tracked",
  },
  {
    code: "ANN",
    icon: <IconMegaphone />,
    title: "Team feed & announcements",
    description:
      "Birthdays, work anniversaries, and team announcements posted automatically — deduplicated, so nobody spams the feed by accident.",
    stat: "Deduplicated",
  },
  {
    code: "NOT",
    icon: <IconBell />,
    title: "Notifications",
    description:
      "Every approval, mention, and reminder lands in one inbox — not scattered across email, chat, and someone's memory.",
    stat: "One inbox",
    statColor: "text-accent-bright",
  },
  {
    code: "ARC",
    icon: <IconArchiveBox />,
    title: "Document archive",
    description:
      "Every quotation, invoice, and payslip ever generated — saved and searchable, never lost in someone's downloads folder.",
    stat: "Fully searchable",
  },
  {
    code: "AST",
    icon: <IconArchiveBox />,
    title: "Inventory & assets",
    description:
      "Track company assets, assignments, returns, categories, and offboarding exceptions with an event history behind every handover.",
    stat: "Event history",
  },
  {
    code: "EMP",
    icon: <IconFolder />,
    title: "Employment documents",
    description:
      "Draft, review, approve, and issue employment letters and terms with private access and immutable issued records.",
    stat: "Controlled issue",
    statColor: "text-accent-bright",
  },
  {
    code: "ANA",
    icon: <IconChart />,
    title: "Analytics & audit",
    description:
      "See operational activity, financial signals, and sensitive changes in one place, with an audit record that cannot be silently rewritten.",
    stat: "Traceable",
  },
  {
    code: "SEC",
    icon: <IconShield />,
    title: "Access, audit & backups",
    description:
      "Who can see what is enforced by role, every change is logged permanently, and your data is backed up automatically, every night.",
    stat: "Nightly backups",
    statColor: "text-danger",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-paper-2/60 via-paper to-paper">
        <BackgroundDoodle />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
            <Reveal direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3.5 py-1.5 text-xs font-semibold text-accent shadow-sm">
                <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                <span className="font-mono-figures uppercase tracking-widest text-[10px]">
                  Now Onboarding Select Teams
                </span>
              </div>
              <h1 className="font-display mt-6 text-5xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl leading-[1.05]">
                One ledger for
                <br />
                your <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">whole</span> business.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                Lekka replaces spreadsheets and disconnected tools with one private workspace for your people, work, approvals, invoices, and payroll.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="accent" className="shadow-lg">
                  Book a demo
                  <IconArrowRight />
                </Button>
                <Button href="/product" variant="outlineLight">
                  Explore Platform
                </Button>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <ProductShowcase />
            </Reveal>
          </div>
        </div>
      </section>

      {/* The problem, said plainly */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <Reveal direction="down">
              <p className="font-display max-w-3xl text-2xl leading-snug text-ink sm:text-3xl">
                Right now, your invoices live in one app, timesheets in a
                spreadsheet, payslips get rebuilt by hand every month, and
                nobody can say what your real cash position is without
                adding it up themselves.
              </p>
              <p className="mt-6 max-w-xl text-ink-muted">
                When information is spread across different tools, people spend time checking what is true instead of doing the work. Lekka keeps the record, the person responsible, and the next action together.
              </p>
            </Reveal>
            <Reveal direction="right" delay={0.08} className="hidden lg:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/illustrations/teamwork.svg"
                alt=""
                className="mx-auto w-full max-w-sm"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Two clear ways into the product */}
      <section className="bg-paper border-y border-line-on-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal direction="down">
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">Choose your path</div>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-medium leading-tight text-ink sm:text-4xl">Use Lekka for your business—or offer it to your clients.</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <div className="rounded-xl border border-line-on-paper bg-paper-2 p-7 shadow-sm">
                <div className="font-mono-figures text-xs text-accent-bright">FOR BUSINESSES</div>
                <h3 className="font-display mt-4 text-2xl font-semibold text-ink">Run your own team in one place.</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted">Use Lekka for employees, work tracking, approvals, invoices, documents, and payroll. Your team gets one login and your business gets one reliable record.</p>
                <Link href="/pricing" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-bright hover:text-accent">See direct customer pricing <IconArrowRight /></Link>
              </div>
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-7 shadow-sm">
                <div className="font-mono-figures text-xs text-accent-bright">FOR DIGITAL SOLUTION PROVIDERS</div>
                <h3 className="font-display mt-4 text-2xl font-semibold text-ink">Offer a complete operating system.</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted">Put your brand and service model on top of Lekka, then sell, implement, and support it for your clients without building the whole platform yourself.</p>
                <Link href="/partners" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-bright hover:text-accent">Explore the partner model <IconArrowRight /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What "ignoring it" actually costs */}
      <section className="bg-paper border-y border-line-on-paper/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 rounded-md bg-danger/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-danger">
              <span>The Cost of Fragmented Tools</span>
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Unbilled Client Work",
                  body: "Deliverables get shipped, but invoices lag in draft state or get forgotten — quietly bleeding revenue each month.",
                },
                {
                  title: "Unapproved Expenses",
                  body: "Transactions land on bank statements with zero context or approval trail — leading to audit confusion.",
                },
                {
                  title: "Running on Financial Guesses",
                  body: "Cash position is estimated rather than reconciled live — forcing key leadership choices on inaccurate projections.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="group rounded-xl border border-line-on-paper bg-paper-2 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-danger/40 hover:shadow-md"
                >
                  <h3 className="font-display text-xl font-bold text-ink group-hover:text-danger transition-colors">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-display mt-14 max-w-2xl text-2xl font-bold leading-snug text-ink sm:text-3xl">
              You don&rsquo;t need another standalone app. You need one single source of truth where operational drift can{" "}
              <span className="text-danger underline decoration-danger/30 underline-offset-4">never hide</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Module ledger */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-4xl px-6 pb-20 lg:px-10 lg:pb-28">
          <Reveal>
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">
              What&rsquo;s inside — {MODULES.length} tools, one login
            </div>
            <div className="mt-4">
              {MODULES.map((m) => (
                <LedgerRow key={m.code} {...m} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Screenshots */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            <Reveal direction="left">
              <div>
                <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-danger">
                  Work Calendar
                </div>
                <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  A clear record of each workday.
                </h2>
                <p className="mt-5 max-w-md text-ink-muted">
                  See logged days, holidays, weekends, and gaps together. Request a correction for one missed date or a range.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <ScreenshotImage src="/screenshots/work-calendar.png" alt="Sanitized Work Calendar showing a month of work entries" />
            </Reveal>
          </div>

          <div className="mt-24 grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            <Reveal direction="left" className="order-2 lg:order-1">
              <ScreenshotImage src="/screenshots/tasks.png" alt="Sanitized shared task board with work grouped by status" />
            </Reveal>
            <Reveal direction="right" className="order-1 lg:order-2">
              <div>
                <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-danger">
                  Tasks that show the next step
                </div>
                <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  Keep ownership and review together.
                </h2>
                <p className="mt-5 max-w-md text-ink-muted">
                  Assign people, move work through review, and keep discussions with the task. Switch between a weekly board and a wider month view.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-24 grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            <Reveal direction="left">
              <div>
                <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-danger">
                  Planning across the month
                </div>
                <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  Keep a month in view, week by week.
                </h2>
                <p className="mt-5 max-w-md text-ink-muted">
                  Planning uses the same task records as the board. Move work between weeks as priorities change, without losing the shared status and ownership.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <ScreenshotImage src="/screenshots/planning.png" alt="Sanitized Planning view showing work arranged across the month" />
            </Reveal>
          </div>

        </div>
      </section>

      {/* The rest of the product remains part of the story; only its old screenshots were retired. */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal direction="down">
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-accent-bright">
              More than the new workflow
            </div>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-medium leading-tight text-ink sm:text-4xl">
              The everyday business tools are still here.
            </h2>
            <div className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Finance & reporting", "Track income, expenses, transfers, advances, receivables, and balances. Review performance by client, service, or period."],
                ["Invoices & documents", "Prepare invoices, quotations, and receipts, then keep generated documents searchable in the archive."],
                ["People & payroll", "Manage employee records and access, generate payslips, and give employees a self-service payslip history."],
                ["Timesheets & leave", "Record attendance and PTO separately, with review workflows, holiday calendars, and leave balances."],
                ["Clients & follow-ups", "Keep client and service details together with follow-up activity, rather than scattered across inboxes."],
                ["Approvals & audit", "Route work for review, keep decision history, and track sensitive activity with role-based access."],
                ["Team workspace", "Bring shared announcements, notifications, tasks, and planning into the same internal portal."],
                ["Documents & archive", "Find saved business documents in one place after they have been created and shared."],
              ].map(([title, body]) => (
                <div key={title} className="border-t border-line-on-paper py-5">
                  <h3 className="font-display text-lg text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* A clear work-log review path */}
      <section className="bg-paper-2 border-t border-line-on-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal direction="down">
            <h2 className="font-display max-w-2xl text-3xl font-medium leading-tight text-ink sm:text-4xl">
              A missed workday has a clear path to resolution.
            </h2>
            <p className="mt-4 max-w-2xl text-ink-muted">
              Lekka keeps the request, reviewer, decision, and payroll period connected — so a correction does not disappear into a crowded inbox.
            </p>
            <div className="mt-10 grid gap-8 border-t border-line-on-paper pt-6 sm:grid-cols-3">
              {[
                ["Request", "Choose one date or a working-day range, explain what happened, and select the reviewer."],
                ["Review", "Only the selected reviewer is notified. Assigned requests remain visible in their review queue."],
                ["Resolve", "A different HR or admin reviewer decides. Pending changes are checked before payroll is finalized."],
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

      {/* Trust strip */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">
              Built the hard way — by running our own business on it, first
            </div>
            <div className="ledger-rule mt-6 text-line-on-paper" />
            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                ["Role-based", "access, enforced at the database"],
                ["Nightly", "encrypted, automatic backups"],
                ["Every action", "logged, permanently"],
                ["Built in India,", "for businesses everywhere"],
              ].map(([big, small]) => (
                <div key={big}>
                  <div className="font-display text-2xl text-ink sm:text-3xl">
                    {big}
                  </div>
                  <div className="mt-2 text-sm text-ink-muted">{small}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder's note — an honest stand-in for testimonials we don't have yet */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal direction="down">
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">
              From the team that built it
            </div>
            <p className="font-display mt-5 text-2xl leading-snug text-ink sm:text-3xl">
              &ldquo;We didn&rsquo;t build this to sell it. We built it
              because we were tired of tools that didn&rsquo;t talk to
              each other. We still run our own payroll, invoices, and client
              work on it every day — if it breaks, we&rsquo;re the first to
              know.&rdquo;
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              — OneMark, Kakinada
            </p>
          </Reveal>
        </div>
      </section>

      {/* Origin line */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <Reveal direction="left">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <IconAnchor className="text-accent" />
                <p className="max-w-md text-sm text-ink-muted">
                  Designed and built by OneMark on the coast of Andhra
                  Pradesh, in Kakinada — and made to run a business
                  anywhere in the world.
                </p>
              </div>
              <Link
                href="/about"
                className="flex shrink-0 items-center gap-2 text-sm text-accent hover:text-accent-bright"
              >
                Our story <IconArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-paper-2 border-t border-line-on-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-paper via-paper-2 to-paper p-10 text-center shadow-xl sm:p-20">
              <div className="pointer-events-none absolute -inset-10 rounded-full bg-accent/10 blur-3xl" />
              <BackgroundDoodle className="rounded-2xl" />
              <h2 className="relative font-display text-3xl font-extrabold text-ink sm:text-5xl tracking-tight leading-tight">
                Stop operating in the dark.
                <br />
                <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">Reclaim total visibility today.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink-muted">
                Tell us how your business works. We&rsquo;ll show you the parts of Lekka that matter to your team or your clients.
              </p>
              <div className="relative mt-9 flex justify-center">
                <Button href="/contact" variant="accent" className="px-8 py-4 text-base shadow-xl">
                  Book a demo
                  <IconArrowRight />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
