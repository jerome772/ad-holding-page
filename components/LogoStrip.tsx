"use client";

import { useEffect, useRef, useState } from "react";

const LOGOS = ["SAP", "Suntory"];

export default function LogoStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`py-10 px-[8vw] border-t border-b border-[rgba(32,31,31,0.08)] transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ background: "#e8e0d0" }}
    >
      <div className="max-w-[900px] mx-auto flex flex-col items-center gap-6">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
          Trusted by
        </p>
        <div className="flex items-center justify-center gap-16 flex-wrap">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="font-[var(--font-manrope)] font-bold text-[1.1rem] text-[var(--ink-soft)]"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
