import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Privacy Policy | ADV Consulting",
  description:
    "How ADV Consulting collects, uses, and protects your information.",
};

const sections = [
  {
    heading: "What we collect",
    body: "Contact form submissions - your name, email, company, and message. And anonymised browsing data via Google Analytics 4, so we can see how the site's being used.",
  },
  {
    heading: "What we do with it",
    body: "We use it to respond to your enquiry and understand how people use the site. That's it. We don't sell it, share it, or use it for advertising.",
  },
  {
    heading: "Third parties",
    body: "We use Vercel for hosting and Google Analytics 4 for anonymised analytics. Neither gets more than they need to do their job.",
  },
  {
    heading: "Cookies",
    body: "Google Analytics sets minimal session cookies. No advertising or retargeting cookies - we're not tracking you around the internet.",
  },
  {
    heading: "Your rights",
    body: "Under the Australian Privacy Act 1988, you can ask us to access, correct, or delete the information we hold about you. Just get in touch.",
  },
  {
    heading: "Contact",
    body: (
      <>
        Questions about this policy? Email us at{" "}
        <a href="mailto:hello@advhq.com.au" className="underline">
          hello@advhq.com.au
        </a>
        .
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main
      className="min-h-screen px-5 sm:px-14 py-16 sm:py-24"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-[640px] mx-auto">
        <div className="flex items-center justify-between mb-16">
          <Link
            href="/"
            className="inline-flex items-center h-11 -mx-1 px-1 text-[var(--navy)] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)] rounded-sm"
          >
            <Logo className="h-6 w-auto" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center h-11 px-1 text-[0.9rem] font-semibold text-[var(--navy)] no-underline hover:text-[var(--terracotta)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)] rounded-sm"
          >
            &larr; Back to home
          </Link>
        </div>

        <h1 className="font-[var(--font-manrope)] font-extrabold text-[clamp(2rem,4.4vw,3rem)] leading-[1.1] text-[var(--navy)] mb-12">
          Privacy Policy
        </h1>

        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-[var(--font-manrope)] font-bold text-[1.1rem] text-[var(--navy)] mb-2">
                {section.heading}
              </h2>
              <p className="text-[1rem] leading-[1.6] text-[var(--ink-on-white)]">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-[var(--hairline)] text-[0.75rem] flex gap-5 flex-wrap" style={{ color: "rgba(1,1,37,0.45)" }}>
          <span>ADV Consulting Pty Ltd</span>
          <span>ABN 65 699 875 833</span>
          <span>Last updated July 2026</span>
        </footer>
      </div>
    </main>
  );
}
