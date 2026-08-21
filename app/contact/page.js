import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Lekka",
  description: "Book a demo of Lekka, set up with your own data.",
};

const STEPS = [
  ["01", "You tell us about your business", "Team size, what you're currently using, what's breaking."],
  ["02", "We set up a real walkthrough", "Not a canned demo account — a version configured for how you actually work."],
  ["03", "You decide, no pressure", "If it's not a fit, we'll say so ourselves — see Who it's for."],
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a demo"
        title="Let's set it up with your own data."
        subtitle="No generic demo account walkthrough — tell us about your business, and we'll show you Lekka running the way it would for you."
      />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-5xl gap-14 px-6 py-16 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-10 lg:py-20">
          <Reveal direction="left">
            <div className="font-mono-figures text-xs uppercase tracking-[0.18em] text-ink-subtle">
              What happens next
            </div>
            <div className="mt-6 space-y-6">
              {STEPS.map(([num, title, body]) => (
                <div key={num} className="flex items-start gap-4">
                  <span className="font-mono-figures text-sm text-accent">{num}</span>
                  <div>
                    <div className="font-medium text-ink">{title}</div>
                    <p className="mt-1 text-sm text-ink-muted">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="rounded-lg border border-line-on-paper bg-paper-2/60 p-8 sm:p-10">
              <ContactForm />
            </div>
            <p className="mt-8 text-center text-sm text-ink-muted">
              Prefer email? Write to us at{" "}
              <a href="mailto:hello@onemark.co.in" className="text-accent underline underline-offset-2">
                hello@onemark.co.in
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
