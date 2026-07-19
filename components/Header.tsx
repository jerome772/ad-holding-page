"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const NAV_LINKS = [
  { href: "#what", label: "What" },
  { href: "#how", label: "How" },
  { href: "#who", label: "Who" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const main = document.querySelector("main");
    if (menuOpen) {
      main?.setAttribute("aria-hidden", "true");
    } else {
      main?.removeAttribute("aria-hidden");
    }
    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("aria-hidden");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      closeRef.current?.focus();
    } else {
      hamburgerRef.current?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab" || !overlayRef.current) return;

      const focusable = Array.from(
        overlayRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMenuOpen(false);
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return (
    <>
      <header
        aria-hidden={menuOpen}
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-[6vw] transition-colors duration-300 ${
          scrolled
            ? "bg-[#e8e0d0] border-b border-[rgba(32,31,31,0.1)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <a
          href="#hero"
          tabIndex={menuOpen ? -1 : undefined}
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="font-[var(--font-manrope)] font-extrabold text-[1.3rem] text-[var(--ink)] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)] rounded-sm"
        >
          ADV
        </a>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={menuOpen ? -1 : undefined}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="py-2 text-[0.9rem] font-medium text-[var(--ink)] no-underline hover:opacity-70 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          ref={hamburgerRef}
          type="button"
          tabIndex={menuOpen ? -1 : undefined}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-overlay"
          className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)] rounded-sm"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="#201f1f"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {menuOpen && (
        <div
          ref={overlayRef}
          id="mobile-nav-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-10 bg-[#201f1f]"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-4 right-[6vw] flex items-center justify-center w-11 h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8e0d0] rounded-sm"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 5l14 14M19 5L5 19"
                stroke="#e8e0d0"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <nav aria-label="Mobile" className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-[var(--font-barlow)] font-black text-[#e8e0d0] text-[48px] leading-tight no-underline text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8e0d0] rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
