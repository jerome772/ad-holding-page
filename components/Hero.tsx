"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !svgRef.current) return;

    const letterA = svgRef.current.querySelector<SVGGElement>("#letter-A");
    const letterV = svgRef.current.querySelector<SVGGElement>("#letter-V");
    if (!letterA || !letterV) return;

    const boxA = letterA.getBBox();
    const boxV = letterV.getBBox();
    const centerA = { x: boxA.x + boxA.width / 2, y: boxA.y + boxA.height / 2 };
    const centerV = { x: boxV.x + boxV.width / 2, y: boxV.y + boxV.height / 2 };
    const swapDistance =
      boxV.x + boxV.width / 2 - (boxA.x + boxA.width / 2);

    function setLetterTransform(
      el: SVGGElement,
      center: { x: number; y: number },
      xOffset: number,
      scaleY: number
    ) {
      el.setAttribute(
        "transform",
        `translate(${xOffset},0) translate(${center.x},${center.y}) scale(1,${scaleY}) translate(${-center.x},${-center.y})`
      );
    }

    const stateA = { x: 0, sy: 1 };
    const stateV = { x: 0, sy: 1 };
    setLetterTransform(letterA, centerA, stateA.x, stateA.sy);
    setLetterTransform(letterV, centerV, stateV.x, stateV.sy);

    const tl = gsap.timeline({ delay: 0.1 });
    tl.to(
      stateA,
      {
        x: swapDistance,
        duration: 0.54,
        ease: "power2.inOut",
        onUpdate: () =>
          setLetterTransform(letterA, centerA, stateA.x, stateA.sy),
      },
      0
    )
      .to(
        stateV,
        {
          x: -swapDistance,
          duration: 0.54,
          ease: "power2.inOut",
          onUpdate: () =>
            setLetterTransform(letterV, centerV, stateV.x, stateV.sy),
        },
        0
      )
      .to(
        stateA,
        {
          sy: -1,
          duration: 0.25,
          ease: "power1.inOut",
          onUpdate: () =>
            setLetterTransform(letterA, centerA, stateA.x, stateA.sy),
        },
        0.59
      )
      .to(
        stateV,
        {
          sy: -1,
          duration: 0.25,
          ease: "power1.inOut",
          onUpdate: () =>
            setLetterTransform(letterV, centerV, stateV.x, stateV.sy),
        },
        0.59
      )
      .from("#logo-dot", { opacity: 0, duration: 0.2 }, 0.92)
      .from(
        ".hero-copy > *",
        { opacity: 0, y: 16, duration: 0.3, stagger: 0.06 },
        0.97
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center gap-8 px-[8vw] py-[8vh] relative"
    >
      <div className="w-full" style={{ maxWidth: "min(560px, 72vw)" }}>
        <svg
          ref={svgRef}
          id="logo-svg"
          viewBox="0 0 582.97 264.82"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block overflow-visible"
          role="img"
          aria-label="ADV"
        >
          <g id="letter-D">
            <path
              fill="var(--ink)"
              d="M324.58,64.64h-99.85v135.72h99.85c24.3,0,44.01-19.7,44.01-44v-47.71c0-24.3-19.7-44.01-44.01-44.01M324.58,87.93c11.42,0,20.72,9.3,20.72,20.72v47.71c0,11.42-9.3,20.72-20.72,20.72h-76.56v-89.15h76.56Z"
            />
          </g>
          <g id="letter-A">
            <path
              fill="var(--ink)"
              d="M89.45,200.36l43.19-110.63c.42-1.09,1.47-1.8,2.64-1.8h2.2c1.17,0,2.22.72,2.64,1.8l43.19,110.63h25l-48.27-123.64c-2.86-7.34-9.8-12.08-17.68-12.08h-11.97c-7.87,0-14.81,4.74-17.68,12.07l-48.27,123.64h25Z"
            />
          </g>
          <g id="letter-V">
            <path
              fill="var(--ink)"
              d="M493.51,64.64l-43.19,110.63c-.42,1.09-1.47,1.8-2.64,1.8h-2.2c-1.17,0-2.22-.72-2.64-1.8l-43.19-110.63h-25l48.26,123.64c2.86,7.34,9.8,12.08,17.68,12.08h11.97c7.87,0,14.81-4.74,17.68-12.07l48.27-123.64h-25Z"
            />
          </g>
          <g id="logo-dot">
            <path
              fill="var(--ink)"
              d="M530.48,200.36c6.61,0,11.97-5.36,11.97-11.97s-5.36-11.97-11.97-11.97-11.97,5.36-11.97,11.97,5.36,11.97,11.97,11.97"
            />
          </g>
        </svg>
      </div>

      <div className="hero-copy">
        <p className="text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-[var(--ink-soft)] mb-4">
          Call Advantage.
        </p>
        <h1 className="font-[var(--font-manrope)] font-extrabold text-[clamp(2.2rem,5.4vw,4.4rem)] leading-[1.05] max-w-[20ch] mx-auto mb-4">
          The right call. Advantage taken.
        </h1>
        <p className="text-[clamp(1.05rem,1.6vw,1.3rem)] text-[var(--ink-soft)] max-w-[46ch] mx-auto mb-8">
          The data underneath them isn&apos;t ready. We fix that first, then
          build AI, applications, and everything in between.
        </p>
        <a
          href="#contact"
          className="inline-block font-semibold px-9 py-4 rounded-full text-[var(--sand)] bg-[var(--ink)] border border-[var(--ink)] no-underline transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sand)]"
        >
          Let&apos;s talk
        </a>
      </div>
    </section>
  );
}
