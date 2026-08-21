"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Counts up from 0 to the numeric part of `value` (e.g. "140+" or "12")
 * once the figure scrolls into view, keeping any non-digit suffix fixed.
 * Falls back to rendering the raw string for anything without a leading
 * number.
 */
export default function StatCounter({ value, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      el.textContent = value;
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2] || "";
    const counter = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: target,
        duration: 1.5,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = Math.round(counter.val) + suffix;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [value, delay]);

  return (
    <div ref={ref} className={className}>
      0{value.replace(/^\d+/, "")}
    </div>
  );
}
