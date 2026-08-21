import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ScreenshotImage from "@/components/ScreenshotImage";
import { IconAnchor, IconArrowRight } from "@/components/icons";

export const metadata = {
  title: "About — OneMark",
  description: "Lekka is built by OneMark, based in Kakinada, Andhra Pradesh.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OneMark"
        title="We built this to run our own business first."
        subtitle="Lekka didn't start as a product idea looking for a market. It started as an internal tool we needed — and kept improving until it was too good to keep to ourselves."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal direction="left">
            <p className="text-lg leading-relaxed text-ink-muted">
              OneMark is based in <span className="text-ink">Kakinada</span>,
              on the coast of Andhra Pradesh — a working port city that has
              moved goods and done business for generations. We&rsquo;re not
              a Bangalore startup with a Kakinada mailing address. This is
              where we&rsquo;re from, and where Lekka was built.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Like most small businesses, we were running our operations
              across too many disconnected tools — one for invoices, one for
              payroll, a spreadsheet for timesheets, and a lot of things
              that just lived in someone&rsquo;s head. So we built the
              system we actually wanted, tested it against our own payroll,
              our own client invoices, our own cash position — every month,
              for real.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Lekka is that system, made available to other businesses.
              Built in India, for businesses anywhere that run on the same
              simple loop we do: quote the work, deliver it, invoice it,
              get paid, pay your team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* This is literally our own dashboard */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="right">
              <ScreenshotImage src="/screenshots/dashboard.jpg" alt="OneMark's own live Lekka dashboard" />
            </Reveal>
            <Reveal direction="left">
              <div>
                <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-accent">
                  Not a demo account
                </div>
                <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl">
                  This is the dashboard we actually look at.
                </h2>
                <p className="mt-5 max-w-md text-ink-muted">
                  140+ clients and leads, 700+ expense records, 250+ income
                  entries reconciled — that&rsquo;s our own agency&rsquo;s
                  data, not a seed script written to look impressive for a
                  screenshot.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal direction="right">
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">
              What we hold ourselves to
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Built on our own data first",
                  body: "Every feature runs against our real payroll and real client invoices before it ever reaches a customer.",
                },
                {
                  title: "Your deployment, your data",
                  body: "No shared database. No exceptions. Your business's records sit in an environment built for you.",
                },
                {
                  title: "Straight talk, not sales talk",
                  body: "If Lekka isn't the right fit for how you run your business, we'll say so — see Who it's for.",
                },
              ].map((v) => (
                <div key={v.title}>
                  <h3 className="font-display text-xl font-medium text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <IconAnchor className="h-8 w-8 text-accent" />
              <p className="font-display max-w-xl text-2xl leading-snug text-ink sm:text-3xl">
                Kakinada roots. Built for businesses everywhere.
              </p>
              <Button href="/contact" variant="accent" className="mt-4">
                Talk to us <IconArrowRight />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
