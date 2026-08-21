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
    code: "APR",
    icon: <IconCheck />,
    title: "Approvals",
    description:
      "Every pending timesheet in one global queue for managers — self-approval blocked at the database, not just hidden in the UI.",
    stat: "One queue",
    statColor: "text-success",
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
      <section className="relative isolate overflow-hidden bg-paper">
        <BackgroundDoodle />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
            <Reveal direction="left">
              <span className="font-mono-figures inline-block rounded-sm border border-line-on-paper px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-accent-bright">
                Now taking early customers
              </span>
              <h1 className="font-display mt-6 text-5xl font-medium leading-[1.05] text-ink sm:text-6xl">
                One ledger for
                <br />
                your <span className="text-accent">whole</span> business.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
                Most businesses don&rsquo;t fail from one bad decision — they
                drift, quietly, because nobody&rsquo;s watching all the
                numbers at once. Lekka brings your payroll, invoices,
                timesheets, and clients into one place, so nothing about
                your business happens without you knowing.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="accent">
                  Book a demo
                  <IconArrowRight />
                </Button>
                <Button href="/product" variant="outlineLight">
                  See what&rsquo;s inside
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
                That&rsquo;s not a workflow problem. That&rsquo;s a business
                running on assumptions — and assumptions are how good
                businesses quietly go sideways. Lekka replaces that with one
                system your whole team already knows how to use, built the
                way your business already runs, not the other way around.
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

      {/* What "ignoring it" actually costs */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal direction="up">
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-danger">
              This is what &ldquo;we&rsquo;ll sort it out later&rdquo; usually looks like
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "A client who was never actually billed",
                  body: "The work got done, the invoice didn't get sent, and nobody noticed until the money should already have landed.",
                },
                {
                  title: "An expense nobody remembers approving",
                  body: "It's in the account statement. It's not in anyone's head. By the time someone asks, the answer is a shrug.",
                },
                {
                  title: "A number in your head that isn't the number in your account",
                  body: "You could tell someone your cash position right now. It would be a guess — and you'd be running the business on it anyway.",
                },
              ].map((v) => (
                <div key={v.title}>
                  <h2 className="font-display text-xl font-medium text-ink">
                    {v.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-display mt-14 max-w-2xl text-2xl leading-snug text-ink sm:text-3xl">
              You don&rsquo;t need more software. You need one place where
              nothing about your business can{" "}
              <span className="text-danger">quietly hide</span>.
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
                  Finance, at a glance
                </div>
                <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  Know your real balance,
                  <br />
                  not last month&rsquo;s guess.
                </h2>
                <p className="mt-5 max-w-md text-ink-muted">
                  Every payment method, every invoice, every advance —
                  reconciled automatically. The number on your screen is the
                  number in your account.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <ScreenshotImage src="/screenshots/finance.jpg" alt="Client statement showing billed, paid, and outstanding totals in Lekka" />
            </Reveal>
          </div>

          <div className="mt-24 grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            <Reveal direction="left" className="order-2 lg:order-1">
              <ScreenshotImage src="/screenshots/timesheet.jpg" alt="Timesheet dashboard showing monthly attendance heatmap and productivity trend" />
            </Reveal>
            <Reveal direction="right" className="order-1 lg:order-2">
              <div>
                <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-danger">
                  Attendance, without the spreadsheet
                </div>
                <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  See who logged what,
                  <br />
                  without asking.
                </h2>
                <p className="mt-5 max-w-md text-ink-muted">
                  A month at a glance, a year of trend — built straight from
                  daily entries, so payroll and approvals never start with
                  &ldquo;let me check.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-24 grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            <Reveal direction="left">
              <div>
                <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-danger">
                  Documents that look designed
                </div>
                <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  Invoices and proposals
                  <br />
                  clients actually notice.
                </h2>
                <p className="mt-5 max-w-md text-ink-muted">
                  GST-compliant invoices, sequential and never duplicated,
                  and a branded multi-slide quotation deck generated from
                  your service catalog in seconds.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <ScreenshotImage src="/screenshots/invoice.jpg" alt="GST tax invoice generated in Lekka, with line items and bank details" />
            </Reveal>
          </div>

          <div className="mt-24 grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            <Reveal direction="left" className="order-2 lg:order-1">
              <ScreenshotImage src="/screenshots/reports.jpg" alt="Financial reports showing top clients, top services, and revenue breakdown" />
            </Reveal>
            <Reveal direction="right" className="order-1 lg:order-2">
              <div>
                <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-danger">
                  Reports without the spreadsheet
                </div>
                <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  Know your top clients
                  <br />
                  without building a report.
                </h2>
                <p className="mt-5 max-w-md text-ink-muted">
                  Revenue by client, revenue by service, your biggest expense
                  categories — computed automatically from records you
                  already have, exportable in one click.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Real numbers */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">
              Not projections — what&rsquo;s actually running on it today
            </div>
            <div className="ledger-rule mt-6 text-line-on-paper" />
            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                ["140+", "clients & leads tracked"],
                ["700+", "expense records logged"],
                ["250+", "income entries reconciled"],
                ["12", "tools behind one login"],
              ].map(([big, small]) => (
                <div key={big}>
                  <div className="font-mono-figures text-3xl font-medium text-ink sm:text-4xl">
                    {big}
                  </div>
                  <div className="mt-2 text-sm text-ink-muted">{small}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-xl text-sm text-ink-muted">
              These are OneMark&rsquo;s own numbers, from running our own
              agency on Lekka every day — not a demo account, not a sales
              projection.
            </p>
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
      <section className="bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-lg border border-accent/25 bg-paper px-8 py-16 text-center sm:px-16">
              <BackgroundDoodle className="rounded-lg" />
              <h2 className="relative font-display text-3xl font-medium text-ink sm:text-4xl">
                The one system your business{" "}
                <span className="text-danger">can&rsquo;t afford</span> to
                keep putting off.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-ink-muted">
                Every week you run on a pile of disconnected tools is a week
                you&rsquo;re choosing to make this harder than it needs to
                be. Let&rsquo;s set it up with your own data and show you
                what you&rsquo;ve been missing.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/contact" variant="accent">
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
