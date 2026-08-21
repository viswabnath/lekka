import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import LedgerRow from "@/components/LedgerRow";
import ScreenshotImage from "@/components/ScreenshotImage";
import {
  IconPeople,
  IconInvoice,
  IconClients,
  IconShield,
  IconArrowRight,
  IconAnchor,
} from "@/components/icons";
import LedgerHeroLoader from "@/components/hero/LedgerHeroLoader";

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
      {/* Hero — the one dark signature moment */}
      <section className="relative overflow-hidden bg-canvas">
        <LedgerHeroLoader />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-canvas/40 via-transparent to-canvas" />

        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 lg:px-10 lg:pb-40 lg:pt-32">
          <div className="max-w-2xl">
            <Reveal>
              <span className="font-mono-figures inline-block rounded-sm border border-line-on-canvas px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-accent">
                Now taking early customers
              </span>
              <h1 className="font-display mt-6 text-5xl font-medium leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
                One ledger for
                <br />
                your whole business.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream-muted">
                Lekka brings your payroll, invoices, timesheets, and clients
                into one place — so you stop stitching five disconnected
                tools together every week.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="accent">
                  Book a demo
                  <IconArrowRight />
                </Button>
                <Button href="/product" variant="outlineDark">
                  See what&rsquo;s inside
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The problem, said plainly */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
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
      <section className="bg-paper">
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
      <section className="bg-paper-2 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
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
              <ScreenshotImage src="/screenshots/finance.jpg" alt="Client statement showing billed, paid, and outstanding totals in Lekka" />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-24 grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
              <ScreenshotImage src="/screenshots/timesheet.jpg" alt="Timesheet dashboard showing monthly attendance heatmap and productivity trend" className="order-2 lg:order-1" />
              <div className="order-1 lg:order-2">
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
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-24 grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
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
              <ScreenshotImage src="/screenshots/invoice.jpg" alt="GST tax invoice generated in Lekka, with line items and bank details" />
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

      {/* Origin line */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <Reveal>
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

      {/* CTA band — the closing dark bookend */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="rounded-lg border border-line-on-canvas bg-canvas-2 px-8 py-16 text-center sm:px-16">
              <h2 className="font-display text-3xl font-medium text-cream sm:text-4xl">
                See Lekka running your business.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-cream-muted">
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
