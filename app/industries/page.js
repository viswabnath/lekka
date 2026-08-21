import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import {
  IconClients,
  IconPeople,
  IconInvoice,
  IconChart,
  IconArrowRight,
} from "@/components/icons";

export const metadata = {
  title: "Who it's for — Lekka",
  description: "Industries and business types Lekka is built for.",
};

const FITS = [
  {
    icon: <IconClients />,
    title: "Creative & marketing agencies",
    body: "Quotations that go out looking sharp, invoices tied to real client work, and a team roster that doesn't live in three different spreadsheets.",
  },
  {
    icon: <IconChart />,
    title: "Consultancies & studios",
    body: "Project-based billing, retainers, and a clean record of what was quoted, delivered, and paid for — for a team of 10 or a team of 60.",
  },
  {
    icon: <IconInvoice />,
    title: "Professional services firms",
    body: "GST-compliant invoicing, PAN and financial-year reporting built in from day one — not bolted on for the Indian market later.",
  },
  {
    icon: <IconPeople />,
    title: "Any services business ready to stop guessing",
    body: "If your work is quote → deliver → invoice → collect, and you're currently doing that across a handful of disconnected tools, Lekka replaces the stitching.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Who it's for"
        title={<>Built for businesses that <span className="text-accent">bill for their work</span> — not for shelves.</>}
        subtitle="Lekka fits the shape of a project- and retainer-based services business. It's not accounting software, not an inventory system, and not built for a product company."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-14 grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <Reveal direction="left">
              <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">
                Four kinds of businesses, one shape of work
              </div>
              <p className="font-display mt-4 max-w-xl text-2xl leading-snug text-ink sm:text-3xl">
                If your team bills clients for work instead of selling
                inventory off a shelf, this is who Lekka was actually built
                for.
              </p>
            </Reveal>
            <Reveal direction="right" delay={0.08} className="hidden lg:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/illustrations/growth-analytics.svg"
                alt=""
                className="w-64"
              />
            </Reveal>
          </div>
          <Reveal direction="up">
            <div className="grid gap-px overflow-hidden rounded-lg border border-line-on-paper bg-line-on-paper sm:grid-cols-2">
              {FITS.map((f) => (
                <div key={f.title} className="h-full bg-paper p-8 lg:p-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-line-on-paper text-accent">
                    {f.icon}
                  </div>
                  <h2 className="font-display mt-5 text-xl font-medium text-ink sm:text-2xl">
                    {f.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* The actual loop */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal direction="left">
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">
              The loop every one of these businesses runs on
            </div>
          </Reveal>
          <div className="mt-8 space-y-0">
            {[
              ["01", "Quote", "A branded, multi-slide proposal in minutes, not an afternoon in a slide deck."],
              ["02", "Deliver", "Timesheets and client records track the work as it happens — nothing reconstructed later."],
              ["03", "Invoice", "GST-compliant, sequential, tied to the client record — never a duplicate number."],
              ["04", "Collect", "Advances and payments reconciled automatically. Outstanding balances never a guess."],
            ].map(([num, title, body], i) => (
              <Reveal key={num} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.04}>
                <div className="flex items-start gap-6 border-b border-line-on-paper py-6 last:border-0">
                  <span className="font-mono-figures text-sm text-accent-bright">{num}</span>
                  <div>
                    <div className="font-display text-xl text-ink">{title}</div>
                    <p className="mt-1 max-w-lg text-sm text-ink-muted">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Honest about fit */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10 lg:py-24">
          <Reveal direction="down">
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-danger">
              Being straight with you
            </div>
            <p className="font-display mt-5 text-2xl leading-snug text-ink sm:text-3xl">
              If you sell physical stock, need multi-currency accounting, or
              you&rsquo;re running a 500-person company — Lekka isn&rsquo;t
              the right fit yet, and we&rsquo;d rather tell you now.
            </p>
            <p className="mt-5 text-ink-muted">
              It&rsquo;s built for teams roughly 5 to 100 people, billing
              clients for work — that&rsquo;s where it fits best today.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-28">
          <Reveal>
            <div className="rounded-lg border border-accent/25 bg-paper px-8 py-16 sm:px-16">
              <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
                Sounds like your business? Then this is the part
                where you stop guessing.
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
