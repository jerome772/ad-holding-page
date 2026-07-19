import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ADV Consulting",
  description:
    "How ADV Consulting collects, uses, and protects your information.",
};

const sections = [
  {
    heading: "What we collect",
    body: "Contact form submissions — your name, email, company, and message. And anonymised browsing data via Google Analytics 4, so we can see how the site's being used.",
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
    body: "Google Analytics sets minimal session cookies. No advertising or retargeting cookies — we're not tracking you around the internet.",
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
    <main className="min-h-screen px-[8vw] py-[10vh]">
      <div className="max-w-[640px] mx-auto">
        <Link
          href="/"
          className="inline-flex items-center h-11 -mx-1 px-1 font-[var(--font-manrope)] font-extrabold text-[1.4rem] text-[var(--ink)] no-underline mb-16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)] rounded-sm"
        >
          ADV
        </Link>

        <h1 className="font-[var(--font-manrope)] font-extrabold text-[clamp(2rem,4.4vw,3rem)] leading-[1.1] mb-12">
          Privacy Policy
        </h1>

        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-[var(--font-manrope)] font-bold text-[1.1rem] text-[var(--ink)] mb-2">
                {section.heading}
              </h2>
              <p className="text-[1rem] leading-[1.6] text-[var(--ink-soft)]">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-[var(--ink)]/15 text-[0.75rem] text-[var(--ink-soft)] flex gap-5 flex-wrap">
          <span>ADV Consulting Pty Ltd</span>
          <span>ABN 65 699 875 833</span>
          <span>Last updated July 2026</span>
        </footer>
      </div>
    </main>
  );
}
