"use client";

import { useState } from "react";
import Button from "./Button";
import { IconArrowRight, IconCheck } from "./icons";

const inputClass =
  "w-full rounded-sm border border-line-on-paper bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-muted/70 outline-none transition-colors focus:border-oxblood";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.target);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-line-on-paper bg-paper-2/50 px-8 py-16 text-center">
        <IconCheck className="text-harbor-deep" />
        <p className="font-display text-xl text-ink">Message sent.</p>
        <p className="text-sm text-ink-muted">
          We&rsquo;ll get back to you within a business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs text-ink-muted" htmlFor="name">
            Your name
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Priya Rao" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs text-ink-muted" htmlFor="company">
            Business name
          </label>
          <input id="company" name="company" required className={inputClass} placeholder="Rao & Associates" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs text-ink-muted" htmlFor="email">
            Email
          </label>
          <input id="email" type="email" name="email" required className={inputClass} placeholder="priya@company.com" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs text-ink-muted" htmlFor="teamSize">
            Team size
          </label>
          <select id="teamSize" name="teamSize" required className={inputClass}>
            <option value="">Select one</option>
            <option>1 – 15</option>
            <option>16 – 60</option>
            <option>60+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs text-ink-muted" htmlFor="message">
          What are you hoping to replace?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="e.g. spreadsheets for timesheets, a separate payroll tool, WhatsApp for client follow-ups…"
        />
      </div>

      <Button type="submit" variant="brass" className="w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
        {status !== "sending" && <IconArrowRight />}
      </Button>

      {status === "error" && (
        <p className="text-sm text-oxblood">
          Something went wrong — please email us directly instead.
        </p>
      )}
    </form>
  );
}
