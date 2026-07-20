"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#what", id: "what", label: "What We Do" },
  { href: "#how", id: "how", label: "How We Work" },
  { href: "#who", id: "who", label: "Who We Are" },
  { href: "#contact", id: "contact", label: "Let's Talk" },
];

const SECTION_IDS = ["hero", "what", "how", "who", "contact"];

export default function Header() {
  const lenis = useLenis();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const ratiosRef = useRef<Record<string, number>>({});

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratiosRef.current[entry.target.id] = entry.intersectionRatio;
        });
        const [topId] =
          Object.entries(ratiosRef.current).sort((a, b) => b[1] - a[1])[0] ?? [];
        if (topId) setActiveSection(topId);
      },
      { threshold: [0, 0.25, 0.4, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMenuOpen(false);
      if (lenis) {
        lenis.scrollTo(href, { offset: -72 });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenis]
  );

  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-[var(--white)] border-b border-[var(--hairline)]">
      <header className="flex items-center justify-between h-[60px] lg:h-auto px-[18px] lg:px-[56px] py-0 lg:py-5">
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="text-[var(--navy)] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)] rounded-sm"
        >
          <Logo className="h-[18px] lg:h-6 w-auto" />
        </a>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-[14px] font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)] rounded-sm ${
                activeSection === link.id
                  ? "text-[var(--terracotta)]"
                  : "text-[var(--ink-on-white)] hover:text-[var(--navy)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-dropdown"
          className="lg:hidden flex items-center justify-center w-11 h-11 -mr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)] rounded-sm"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M2 5h16"
              stroke="var(--navy)"
              strokeWidth="2"
              strokeLinecap="round"
              className={`origin-center transition-transform duration-200 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <path
              d="M2 15h16"
              stroke="var(--navy)"
              strokeWidth="2"
              strokeLinecap="round"
              className={`origin-center transition-transform duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </svg>
        </button>
      </header>

      <div
        id="mobile-nav-dropdown"
        className={`lg:hidden grid transition-[grid-template-rows] duration-300 ease-out ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile"
            className="flex flex-col gap-[18px] px-[18px] pb-[18px]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={menuOpen ? undefined : -1}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[16px] font-semibold no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)] rounded-sm ${
                  activeSection === link.id
                    ? "text-[var(--terracotta)]"
                    : "text-[var(--navy)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
