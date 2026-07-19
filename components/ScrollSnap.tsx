"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import Snap from "lenis/snap";

const HEADER_OFFSET = 72;

export default function ScrollSnap() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const snap = new Snap(lenis, { type: "proximity", duration: 0.8 });
    let removeFns: Array<() => void> = [];

    function computeSnapPoints() {
      removeFns.forEach((fn) => fn());
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main > section")
      );
      removeFns = sections.map((el) => {
        const top =
          el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        return snap.add(Math.max(0, top));
      });
    }

    computeSnapPoints();
    window.addEventListener("resize", computeSnapPoints);

    return () => {
      window.removeEventListener("resize", computeSnapPoints);
      removeFns.forEach((fn) => fn());
      snap.destroy();
    };
  }, [lenis]);

  return null;
}
