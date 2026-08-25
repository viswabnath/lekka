"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScreenshotImage from "@/components/ScreenshotImage";

/**
 * The hero visual: real product screenshots, not abstract art — this is
 * what the business actually does. Two screens stacked with a gentle,
 * continuous float so the hero isn't static once it's on screen.
 */
export default function ProductShowcase() {
  const frontRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(frontRef.current, {
        y: -10,
        duration: 3.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(backRef.current, {
        y: 8,
        duration: 3.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.3,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-r from-accent/20 to-accent-bright/10 blur-3xl opacity-70" />

      <div ref={backRef} className="absolute -bottom-6 -left-6 w-[78%] sm:-bottom-10 sm:-left-10 z-10">
        <ScreenshotImage
          src="/screenshots/finance.jpg"
          alt="Client statement in Lekka showing billed, paid, and outstanding totals"
          shadowClassName="shadow-[0_30px_70px_-20px_rgba(99,102,241,0.3)]"
          priority
        />
        {/* Floating badge 1 */}
        <div className="hidden sm:flex absolute -top-4 -left-4 z-30 items-center gap-2 rounded-full border border-line-on-paper bg-paper-2/95 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="font-mono-figures text-xs font-semibold text-ink">Live Balance Reconciled</span>
        </div>
      </div>

      <div ref={frontRef} className="relative ml-[18%] sm:ml-[22%] z-20">
        <ScreenshotImage
          src="/screenshots/dashboard.jpg"
          alt="Lekka dashboard showing live balance, tools, and the team activity feed"
          shadowClassName="shadow-[0_40px_90px_-25px_rgba(99,102,241,0.4)]"
          priority
        />
        {/* Floating badge 2 */}
        <div className="hidden sm:flex absolute -bottom-4 -right-4 z-30 items-center gap-2 rounded-full border border-line-on-paper bg-paper-2/95 px-4 py-1.5 shadow-xl backdrop-blur-md">
          <span className="font-mono-figures text-xs font-bold text-accent-bright">GST Compliant</span>
          <span className="text-xs text-ink-muted">&middot; Auto-Archived</span>
        </div>
      </div>
    </div>
  );
}
