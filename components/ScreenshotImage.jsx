"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const LENS_SIZE = 220;
const ZOOM = 2.3;

/**
 * A Flipkart-style magnifier: hovering the screenshot shows a lens that
 * follows the cursor, revealing a zoomed-in crop of the same image at that
 * spot — not a whole-image scale, an actual loupe over the detail. Desktop
 * (real mouse) only; touch devices just get the plain screenshot.
 */
export default function ScreenshotImage({
  src,
  alt,
  width = 1457,
  height = 843,
  className = "",
  shadowClassName = "shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]",
  priority = false,
}) {
  const containerRef = useRef(null);
  const [lens, setLens] = useState(null);

  function handleMove(e) {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLens({
      left: x - LENS_SIZE / 2,
      top: y - LENS_SIZE / 2,
      bgWidth: rect.width * ZOOM,
      bgHeight: rect.height * ZOOM,
      bgX: -(x * ZOOM - LENS_SIZE / 2),
      bgY: -(y * ZOOM - LENS_SIZE / 2),
    });
  }

  return (
    <div
      ref={containerRef}
      className={`screenshot-lens relative overflow-hidden rounded-lg border border-line-on-paper ${shadowClassName} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={() => setLens(null)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
        className="h-auto w-full"
        priority={priority}
      />

      {lens && (
        <div
          className="pointer-events-none absolute rounded-full border-2 border-white shadow-[0_10px_35px_rgba(0,0,0,0.35)] ring-1 ring-black/10"
          style={{
            width: LENS_SIZE,
            height: LENS_SIZE,
            left: lens.left,
            top: lens.top,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${lens.bgWidth}px ${lens.bgHeight}px`,
            backgroundPosition: `${lens.bgX}px ${lens.bgY}px`,
          }}
        />
      )}
    </div>
  );
}
