import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import LedgerRow from "@/components/LedgerRow";
import ScreenshotFrame from "@/components/ScreenshotFrame";
import FinanceMockup from "@/components/mockups/FinanceMockup";
import PayrollMockup from "@/components/mockups/PayrollMockup";
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-canvas">
        <LedgerHeroLoader />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-canvas/40 via-transparent to-canvas" />

        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 lg:px-10 lg:pb-40 lg:pt-32">
          <div className="max-w-2xl">
            <Reveal>
              <span className="font-mono-figures inline-block rounded-sm border border-line-on-canvas px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-brass">
                Now taking early customers
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display mt-6 text-5xl font-medium leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
                One ledger for
                <br />
                your whole business.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream-muted">
                Lekka brings your payroll, invoices, timesheets, and clients
                into one place — so you stop stitching five disconnected
                tools together every week.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="brass">
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
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <p className="font-display max-w-3xl text-2xl leading-snug text-cream sm:text-3xl">
              Right now, your invoices live in one app, timesheets in a
              spreadsheet, payslips get rebuilt by hand every month, and
              nobody can say what your real cash position is without adding
              it up themselves.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-cream-muted">
              Lekka replaces that with one system your whole team already
              knows how to use — because it&rsquo;s built the way your
              business already runs, not the other way around.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Module ledger */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-4xl px-6 pb-20 lg:px-10 lg:pb-28">
          <Reveal as="div">
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-cream-muted">
              What&rsquo;s inside
            </div>
          </Reveal>
          <div className="mt-4">
            {MODULES.map((m, i) => (
              <LedgerRow key={m.code} {...m} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            <Reveal>
              <div>
                <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-oxblood">
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
            <Reveal delay={0.1}>
              <ScreenshotFrame label="lekka.app/finance">
                <FinanceMockup />
              </ScreenshotFrame>
            </Reveal>
          </div>

          <div className="mt-24 grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            <Reveal className="order-2 lg:order-1">
              <ScreenshotFrame label="lekka.app/payroll">
                <PayrollMockup />
              </ScreenshotFrame>
            </Reveal>
            <Reveal delay={0.1} className="order-1 lg:order-2">
              <div>
                <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-oxblood">
                  Payroll without the spreadsheet
                </div>
                <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  Payslips your team
                  <br />
                  can find themselves.
                </h2>
                <p className="mt-5 max-w-md text-ink-muted">
                  Generated straight from attendance and leave records, and
                  every employee can pull up their own history — no more
                  &ldquo;can you resend my payslip&rdquo; messages.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-cream-muted">
              Built the hard way — by running our own business on it, first
            </div>
          </Reveal>
          <div className="ledger-rule mt-6 text-line-on-canvas" />
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              ["Role-based", "access, enforced at the database"],
              ["Nightly", "encrypted, automatic backups"],
              ["Every action", "logged, permanently"],
              ["Built in India,", "for businesses everywhere"],
            ].map(([big, small]) => (
              <Reveal key={big} delay={0.05}>
                <div className="font-display text-2xl text-cream sm:text-3xl">
                  {big}
                </div>
                <div className="mt-2 text-sm text-cream-muted">{small}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Origin line */}
      <section className="bg-canvas-2">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <Reveal>
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <IconAnchor className="text-brass" />
                <p className="max-w-md text-sm text-cream-muted">
                  Designed and built by OneMark on the coast of Andhra
                  Pradesh, in Kakinada — and made to run a business
                  anywhere in the world.
                </p>
              </div>
              <Link
                href="/about"
                className="flex shrink-0 items-center gap-2 text-sm text-brass hover:text-brass-bright"
              >
                Our story <IconArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
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
                <Button href="/contact" variant="brass">
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
