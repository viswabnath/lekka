"use client";

import { useState } from "react";

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line-on-paper py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg text-ink">{question}</span>
        <span
          className={`shrink-0 text-xl text-accent transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
          {answer}
        </p>
      )}
    </div>
  );
}
