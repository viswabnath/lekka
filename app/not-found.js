import Link from "next/link";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { IconArrowRight, IconChart } from "@/components/icons";

export const metadata = {
  title: "Page not found — Lekka",
  description: "This entry doesn't exist in the ledger.",
};

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center lg:px-10">
        <Reveal direction="down">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-sm border border-line-on-paper text-accent">
            <IconChart />
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.06}>
          <div className="font-mono-figures mt-8 text-xs uppercase tracking-[0.18em] text-ink-subtle">
            Error 404
          </div>
          <h1 className="font-display mt-4 text-4xl font-medium leading-tight text-ink sm:text-5xl">
            This entry doesn&rsquo;t exist in the ledger.
          </h1>
          <p className="mt-5 max-w-md text-ink-muted mx-auto">
            Whatever you were looking for isn&rsquo;t at this address —
            either it moved, or it was never booked in the first place.
          </p>
        </Reveal>
        <Reveal direction="left" delay={0.12}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="accent">
              Back to the ledger <IconArrowRight />
            </Button>
            <Button href="/contact" variant="outlineLight">
              Talk to us instead
            </Button>
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.16}>
          <p className="mt-10 text-sm text-ink-subtle">
            Or see{" "}
            <Link href="/product" className="text-accent underline underline-offset-2">
              what&rsquo;s actually inside Lekka
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
