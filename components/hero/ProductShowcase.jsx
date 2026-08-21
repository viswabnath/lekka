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
      <div ref={backRef} className="absolute -bottom-6 -left-6 w-[78%] sm:-bottom-10 sm:-left-10">
        <ScreenshotImage
          src="/screenshots/finance.jpg"
          alt="Client statement in Lekka showing billed, paid, and outstanding totals"
          shadowClassName="shadow-[0_30px_60px_-25px_rgba(94,106,210,0.25)]"
          priority
        />
      </div>
      <div ref={frontRef} className="relative ml-[18%] sm:ml-[22%]">
        <ScreenshotImage
          src="/screenshots/dashboard.jpg"
          alt="Lekka dashboard showing live balance, tools, and the team activity feed"
          shadowClassName="shadow-[0_40px_80px_-30px_rgba(94,106,210,0.35)]"
          priority
        />
      </div>
    </div>
  );
}
