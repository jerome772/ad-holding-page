"use client";

import { useState } from "react";
import LogoVertical from "./LogoVertical";

const inputClasses =
  "bg-transparent border-0 border-b border-[rgba(1,1,37,0.2)] rounded-none text-[var(--navy)] text-[15px] py-[10px] px-0 placeholder:text-[var(--ink-on-white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--terracotta)] focus:border-[var(--terracotta)]";

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
    <>
      <section
        id="contact"
        className="border-t border-[var(--hairline)] px-5 sm:px-14 py-12 sm:py-[72px] lg:py-[110px]"
        style={{ background: "var(--off-white)" }}
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="lg:w-[420px] lg:flex-shrink-0">
            <p className="text-[11px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[var(--terracotta)] mb-4">
              Let&apos;s talk
            </p>
            <h2 className="font-extrabold text-[24px] sm:text-[28px] lg:text-[34px] leading-[1.15] text-[var(--navy)]">
              If you&apos;ve got tough problems, a passion for innovation and
              you&apos;re looking for a genuine partner in solving them -
              let&apos;s talk.
            </h2>
          </div>

          <div className="flex-1 max-w-[480px]">
            {status === "sent" ? (
              <p className="text-[18px] font-semibold text-[var(--navy)]">
                Thanks - we&apos;ll be in touch shortly.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5"
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
                  className={inputClasses}
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
                  className={inputClasses}
                />
                <label htmlFor="cta-company" className="sr-only">
                  Your company
                </label>
                <input
                  id="cta-company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  className={inputClasses}
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
                  className={inputClasses}
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
                  className="inline-block font-bold text-[15px] text-white bg-[var(--terracotta)] rounded-full px-[30px] py-[14px] mt-2 self-start transition-opacity hover:opacity-90 disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--terracotta)]"
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
          </div>
        </div>
      </section>

      <footer
        className="border-t border-[var(--hairline)] px-5 sm:px-14 py-8 flex items-center gap-4"
        style={{ background: "var(--white)" }}
      >
        <LogoVertical
          className="h-8 w-auto flex-shrink-0"
          bottomColor="var(--navy)"
        />
        <span className="text-[13px]" style={{ color: "rgba(1,1,37,0.45)" }}>
          &copy; 2026 ADV Consulting Pty Ltd. All rights reserved. &middot;{" "}
          <a
            href="/privacy"
            className="underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)] rounded-sm"
          >
            Privacy
          </a>
        </span>
      </footer>
    </>
  );
}
