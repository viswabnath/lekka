"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

/**
 * A brass rule sweeps across the top on every navigation — like a pen
 * underlining a fresh ledger entry — while the page content fades and
 * lifts in underneath it. One deliberate transition, not scattered effects.
 */
export default function PageTransition({ children }) {
  const pathname = usePathname();
  const contentRef = useRef(null);
  const sweepRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const content = contentRef.current;
    const sweep = sweepRef.current;
    if (!content || !sweep) return;

    const ctx = gsap.context(() => {
      if (isFirstRender.current) {
        gsap.fromTo(
          content,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
        );
        isFirstRender.current = false;
        return;
      }

      const tl = gsap.timeline();
      tl.set(sweep, { scaleX: 0, transformOrigin: "left" })
        .set(content, { opacity: 0, y: 14 })
        .to(sweep, { scaleX: 1, duration: 0.45, ease: "power3.inOut" })
        .to(
          sweep,
          { scaleX: 0, transformOrigin: "right", duration: 0.45, ease: "power3.inOut" },
          "-=0.05"
        )
        .to(
          content,
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      <div
        ref={sweepRef}
        className="fixed top-0 left-0 right-0 h-[3px] bg-brass z-[100] pointer-events-none"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />
      <main ref={contentRef} className="flex-1">
        {children}
      </main>
    </>
  );
}
