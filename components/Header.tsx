"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import Logo from "./Logo";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const NAV_LINKS = [
  { href: "#what", label: "What We Do" },
  { href: "#how", label: "How We Work" },
  { href: "#who", label: "Who We Are" },
  { href: "#contact", label: "Let's Talk" },
];

export default function Header() {
  const lenis = useLenis();
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
      if (lenis) {
        lenis.scrollTo(href, { offset: -72 });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenis]
  );

  return (
    <>
      <header
        aria-hidden={menuOpen}
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center px-[6vw] transition-colors duration-300 ${
          scrolled
            ? "bg-[#e8e0d0] border-b border-[rgba(32,31,31,0.1)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center gap-10">
          <a
            href="#hero"
            tabIndex={menuOpen ? -1 : undefined}
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="text-[var(--ink)] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)] rounded-sm"
          >
            <Logo className="h-6 w-auto" />
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
        </div>

        <button
          ref={hamburgerRef}
          type="button"
          tabIndex={menuOpen ? -1 : undefined}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-overlay"
          className="md:hidden ml-auto flex items-center justify-center w-11 h-11 -mr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)] rounded-sm"
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

      <div
        ref={overlayRef}
        id="mobile-nav-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-[#201f1f] transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
      >
        <a
          href="#hero"
          tabIndex={menuOpen ? undefined : -1}
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="absolute top-4 left-[6vw] text-[#e8e0d0] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8e0d0] rounded-sm"
        >
          <Logo className="h-6 w-auto" />
        </a>

        <button
          ref={closeRef}
          type="button"
          tabIndex={menuOpen ? undefined : -1}
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

        <nav aria-label="Mobile" className="flex flex-col items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={menuOpen ? undefined : -1}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-[var(--font-barlow)] font-black text-[#e8e0d0] text-[34px] leading-tight no-underline text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8e0d0] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
