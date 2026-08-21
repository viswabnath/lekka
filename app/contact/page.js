import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Lekka",
  description: "Book a demo of Lekka, set up with your own data.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a demo"
        title="Let's set it up with your own data."
        subtitle="No generic demo account walkthrough — tell us about your business, and we'll show you Lekka running the way it would for you."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-2xl px-6 py-16 lg:px-10 lg:py-20">
          <Reveal>
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
