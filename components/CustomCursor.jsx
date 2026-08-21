"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Replaces the system pointer with a precise accent dot plus a lagging,
 * blend-inverted ring — only on devices with a real mouse (hover: hover
 * and pointer: fine), so touch devices keep native tap behavior untouched.
 */
export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const modeRef = useRef("default");

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    document.documentElement.classList.add("has-custom-cursor");

    const ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" });
    const dotX = gsap.quickTo(dot, "x", { duration: 0.06, ease: "power3" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.06, ease: "power3" });

    const onMove = (e) => {
      ringX(e.clientX);
      ringY(e.clientY);
      dotX(e.clientX);
      dotY(e.clientY);
    };

    const setMode = (mode) => {
      if (modeRef.current === mode) return;
      modeRef.current = mode;
      ring.dataset.mode = mode;
      dot.dataset.mode = mode;
    };

    const onOver = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (target.closest("input, textarea, select, .screenshot-lens")) {
        setMode("hide");
      } else if (target.closest('a, button, [role="button"], .cursor-interactive')) {
        setMode("interactive");
      } else if (target.closest("h1, h2, h3, blockquote")) {
        setMode("text");
      } else {
        setMode("default");
      }
    };

    const onLeaveWindow = () => setMode("hide");

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeaveWindow);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeaveWindow);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
