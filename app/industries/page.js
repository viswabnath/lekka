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
    body: "If your work is quote → deliver → invoice → collect, and you're currently doing that across five tools, Lekka replaces the stitching.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Who it's for"
        title="Built for businesses that bill for their work — not for shelves."
        subtitle="Lekka fits the shape of a project- and retainer-based services business. It's not accounting software, not an inventory system, and not built for a product company."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal direction="up">
            <div className="grid gap-px overflow-hidden rounded-lg border border-line-on-paper bg-line-on-paper sm:grid-cols-2">
              {FITS.map((f) => (
                <div key={f.title} className="h-full bg-paper p-8 lg:p-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-line-on-paper text-accent">
                    {f.icon}
                  </div>
                  <h3 className="font-display mt-5 text-xl font-medium text-ink sm:text-2xl">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Honest about fit */}
      <section className="bg-paper-2">
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

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-28">
          <Reveal>
            <div className="rounded-lg border border-accent/25 bg-paper-2 px-8 py-16 sm:px-16">
              <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
                Sounds like your business?
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
