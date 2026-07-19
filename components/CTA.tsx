"use client";

import { useState } from "react";

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement)
        .value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      website: (form.elements.namedItem("website") as HTMLInputElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center text-center px-[8vw] py-[8vh] relative"
    >
      <p className="text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-[var(--ink-soft)] mb-5">
        Let&apos;s talk
      </p>
      <h2 className="font-[var(--font-manrope)] font-extrabold text-[clamp(1.8rem,3.6vw,2.6rem)] max-w-[22ch] mx-auto mb-10 leading-[1.1]">
        If you&apos;ve got tough problems, a passion for innovation and
        you&apos;re looking for a genuine partner in solving them - let&apos;s
        talk.
      </h2>

      {status === "sent" ? (
        <p className="text-[1.05rem] font-semibold">
          Thanks - we&apos;ll be in touch shortly.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[420px] flex flex-col gap-3"
        >
          <label htmlFor="cta-name" className="sr-only">
            Your name
          </label>
          <input
            id="cta-name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="px-4 py-3 rounded-lg border border-[var(--ink)]/20 bg-[var(--paper)] text-[var(--ink)] placeholder:text-[var(--ink-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
          />
          <label htmlFor="cta-email" className="sr-only">
            Your email
          </label>
          <input
            id="cta-email"
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="px-4 py-3 rounded-lg border border-[var(--ink)]/20 bg-[var(--paper)] text-[var(--ink)] placeholder:text-[var(--ink-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
          />
          <label htmlFor="cta-company" className="sr-only">
            Your company
          </label>
          <input
            id="cta-company"
            name="company"
            type="text"
            placeholder="Your company"
            className="px-4 py-3 rounded-lg border border-[var(--ink)]/20 bg-[var(--paper)] text-[var(--ink)] placeholder:text-[var(--ink-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
          />
          <label htmlFor="cta-message" className="sr-only">
            What are you working on?
          </label>
          <textarea
            id="cta-message"
            name="message"
            placeholder="What are you working on?"
            rows={3}
            required
            className="px-4 py-3 rounded-lg border border-[var(--ink)]/20 bg-[var(--paper)] text-[var(--ink)] placeholder:text-[var(--ink-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
          />
          <div
            style={{ position: "absolute", left: "-9999px" }}
            aria-hidden="true"
          >
            <label htmlFor="cta-website">Website</label>
            <input
              id="cta-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-block font-semibold px-9 py-4 rounded-full bg-transparent text-[var(--ink)] border border-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--sand)] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
          >
            {status === "sending" ? "Sending..." : "Get in touch"}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-700">
              Something went wrong - email us directly at{" "}
              <a href="mailto:hello@advhq.com.au" className="underline">
                hello@advhq.com.au
              </a>
            </p>
          )}
        </form>
      )}

      <footer className="absolute bottom-[3vh] left-0 right-0 text-center text-[0.75rem] text-[var(--ink-soft)]">
        <span>
          &copy; 2026 ADV Consulting Pty Ltd. All rights reserved. &middot;{" "}
          <a
            href="/privacy"
            className="underline inline-block py-3 -my-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)] rounded-sm"
          >
            Privacy
          </a>
        </span>
      </footer>
    </section>
  );
}
