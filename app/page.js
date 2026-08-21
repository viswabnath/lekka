import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import LedgerRow from "@/components/LedgerRow";
import ScreenshotImage from "@/components/ScreenshotImage";
import ProductShowcase from "@/components/hero/ProductShowcase";
import {
  IconPeople,
  IconInvoice,
  IconClients,
  IconShield,
  IconChart,
  IconArrowRight,
  IconAnchor,
} from "@/components/icons";

const MODULES = [
  {
    code: "HR",
    icon: <IconPeople />,
    title: "People & payroll",
    description:
      "Employee records, payslips, timesheets, PTO, and holidays — one directory instead of a folder of spreadsheets.",
    stat: "5 tools → 1",
  },
  {
    code: "FIN",
    icon: <IconInvoice />,
    title: "Invoices & finance",
    description:
      "GST and non-GST invoices, quotations, income and expenses, advances, and a live balance across every account.",
    stat: "Live balance",
  },
  {
    code: "RPT",
    icon: <IconChart />,
    title: "Reports & insights",
    description:
      "Top clients, top services, and where the money actually goes — computed automatically, exportable in one click.",
    stat: "Auto-computed",
  },
  {
    code: "CRM",
    icon: <IconClients />,
    title: "Clients & leads",
    description:
      "Every client, lead, and follow-up in one place, with the services and history attached — nothing lives in someone's inbox.",
    stat: "One record",
  },
  {
    code: "SEC",
    icon: <IconShield />,
    title: "Access & records",
    description:
      "Who can see what is enforced by role, every change is logged, and your data is backed up automatically, every night.",
    stat: "Nightly backups",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
            <Reveal direction="left">
              <span className="font-mono-figures inline-block rounded-sm border border-line-on-paper px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-accent">
                Now taking early customers
              </span>
              <h1 className="font-display mt-6 text-5xl font-medium leading-[1.05] text-ink sm:text-6xl">
                One ledger for
                <br />
                your whole business.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
                Lekka brings your payroll, invoices, timesheets, and clients
                into one place — so you stop stitching five disconnected
                tools together every week.
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
          <Reveal direction="down">
            <p className="font-display max-w-3xl text-2xl leading-snug text-ink sm:text-3xl">
              Right now, your invoices live in one app, timesheets in a
              spreadsheet, payslips get rebuilt by hand every month, and
              nobody can say what your real cash position is without adding
              it up themselves.
            </p>
            <p className="mt-6 max-w-xl text-ink-muted">
              Lekka replaces that with one system your whole team already
              knows how to use — because it&rsquo;s built the way your
              business already runs, not the other way around.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Module ledger */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-4xl px-6 pb-20 lg:px-10 lg:pb-28">
          <Reveal>
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">
              What&rsquo;s inside
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

      {/* Trust strip */}
      <section className="bg-paper-2">
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
            <div className="rounded-lg border border-accent/25 bg-paper px-8 py-16 text-center sm:px-16">
              <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
                See Lekka running your business.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-ink-muted">
                We&rsquo;ll set it up with your own data and walk you
                through it — no generic demo account.
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
