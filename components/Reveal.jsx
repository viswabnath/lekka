"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OFFSETS = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 48 },
  right: { x: -48 },
};

/**
 * Scroll-triggered reveal. Wraps a section and slides/fades it in from a
 * given direction once it enters the viewport. Direction is used
 * deliberately per section (text from one side, its paired visual from the
 * other; headings fall from above) rather than picked at random, so the
 * page reads as an orchestrated sequence rather than a random-effects demo.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  direction = "up",
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const offset = OFFSETS[direction] || OFFSETS.up;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, ...offset },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.65,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, direction]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
