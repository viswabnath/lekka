"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Button from "./Button";

const NAV = [
  { href: "/product", label: "Product" },
  { href: "/industries", label: "Who it's for" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const menuRef = useRef(null);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open || !menuRef.current) return;

    document.body.style.overflow = "hidden";
    const links = menuRef.current.querySelectorAll(".mobile-nav-link");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        menuRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        links,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.06, delay: 0.1, ease: "power3.out" }
      );
    }, menuRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-line-on-paper bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-medium text-ink">
            Lekka
          </span>
          <span className="font-mono-figures text-[10px] uppercase tracking-[0.18em] text-ink-muted">
            by OneMark
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                pathname === item.href
                  ? "text-accent"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="accent">
            Book a demo
          </Button>
        </div>

        <button
          className="relative z-[70] flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>
    </header>

    {open && (
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 flex flex-col bg-paper pt-20 md:hidden"
      >
        <div className="flex-1 overflow-y-auto px-6 pb-10 pt-10">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link border-b border-line-on-paper py-5 font-display text-4xl font-medium transition-colors ${
                  pathname === item.href ? "text-accent" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mobile-nav-link mt-10">
            <Button
              href="/contact"
              variant="accent"
              className="w-full justify-center"
            >
              Book a demo
            </Button>
            <p className="mt-8 text-center text-xs text-ink-subtle">
              OneMark &middot; Kakinada, Andhra Pradesh, India
            </p>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
