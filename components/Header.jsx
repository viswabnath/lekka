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
    if (!menuRef.current) return;
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { height: 0 },
        { height: "auto", duration: 0.4, ease: "power2.out" }
      );
    }
  }, [open]);

  return (
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
          className="flex flex-col gap-1.5 md:hidden"
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

      {open && (
        <div
          ref={menuRef}
          className="overflow-hidden border-t border-line-on-paper md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2.5 text-base text-ink-muted"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" variant="accent" className="mt-3 w-full">
              Book a demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
