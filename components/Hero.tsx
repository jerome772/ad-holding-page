"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "./Logo";

export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);

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

    // Sequence: background + watermark are already visible (no animation) ->
    // small logo fades in, then plays its letter-swap ID ->  hero copy
    // (eyebrow/heading/subhead/CTA) follows once the logo settles.
    const tl = gsap.timeline({ delay: 0.1 });
    tl.from(logoWrapRef.current, { opacity: 0, duration: 0.3, ease: "power1.out" }, 0)
      .to(
        stateA,
        {
          x: swapDistance,
          duration: 0.54,
          ease: "power2.inOut",
          onUpdate: () =>
            setLetterTransform(letterA, centerA, stateA.x, stateA.sy),
        },
        0.25
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
        0.25
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
        0.84
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
        0.84
      )
      .from("#logo-dot", { opacity: 0, duration: 0.2 }, 1.17)
      .from(
        ".hero-copy-item",
        { opacity: 0, y: 16, duration: 0.3, stagger: 0.06 },
        1.22
      );

    // Safety net: if the tab is backgrounded/throttled during load and the
    // timeline never gets to finish, force everything visible anyway so the
    // CTA button (and the rest of the copy) can never get stuck invisible.
    const failsafe = window.setTimeout(() => {
      gsap.set(".hero-copy-item", { opacity: 1, y: 0 });
      if (logoWrapRef.current) gsap.set(logoWrapRef.current, { opacity: 1 });
    }, 3000);

    return () => {
      tl.kill();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-dvh flex flex-col justify-center lg:flex-row lg:items-center gap-10 lg:gap-[60px] px-5 lg:px-[56px] py-16 lg:py-0 relative overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      <div className="absolute inset-0 flex items-center justify-center lg:static lg:order-2 lg:flex-[0.9] lg:inset-auto pointer-events-none">
        <Logo className="w-[190%] max-w-none lg:w-[230%] text-white opacity-[0.14]" />
      </div>

      <div className="hero-copy flex-1 lg:order-1 lg:flex-[1.1] relative z-10 text-left max-w-[560px] lg:max-w-none">
        <div
          ref={logoWrapRef}
          className="w-full mb-6 mt-10 lg:mt-0"
          style={{ maxWidth: "min(280px, 55vw)" }}
        >
          <svg
            ref={svgRef}
            id="logo-svg"
            viewBox="64.44 64.64 478.01 135.72"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block overflow-visible"
            role="img"
            aria-label="ADV"
          >
            <g id="letter-D">
              <path
                fill="white"
                d="M324.58,64.64h-99.85v135.72h99.85c24.3,0,44.01-19.7,44.01-44v-47.71c0-24.3-19.7-44.01-44.01-44.01M324.58,87.93c11.42,0,20.72,9.3,20.72,20.72v47.71c0,11.42-9.3,20.72-20.72,20.72h-76.56v-89.15h76.56Z"
              />
            </g>
            <g id="letter-A">
              <path
                fill="white"
                d="M89.45,200.36l43.19-110.63c.42-1.09,1.47-1.8,2.64-1.8h2.2c1.17,0,2.22.72,2.64,1.8l43.19,110.63h25l-48.27-123.64c-2.86-7.34-9.8-12.08-17.68-12.08h-11.97c-7.87,0-14.81,4.74-17.68,12.07l-48.27,123.64h25Z"
              />
            </g>
            <g id="letter-V">
              <path
                fill="white"
                d="M493.51,64.64l-43.19,110.63c-.42,1.09-1.47,1.8-2.64,1.8h-2.2c-1.17,0-2.22-.72-2.64-1.8l-43.19-110.63h-25l48.26,123.64c2.86,7.34,9.8,12.08,17.68,12.08h11.97c7.87,0,14.81-4.74,17.68-12.07l48.27-123.64h-25Z"
              />
            </g>
            <g id="logo-dot">
              <path
                fill="white"
                d="M530.48,200.36c6.61,0,11.97-5.36,11.97-11.97s-5.36-11.97-11.97-11.97-11.97,5.36-11.97,11.97,5.36,11.97,11.97,11.97"
              />
            </g>
          </svg>
        </div>

        <p className="hero-copy-item text-[13px] font-bold tracking-[0.14em] uppercase text-[var(--terracotta)] mb-4">
          Human-centred. Data-first. AI-native.
        </p>
        <h1 className="hero-copy-item font-extrabold text-[36px] lg:text-[68px] leading-[1.05] text-white mb-4 lg:mb-6 max-w-[16ch]">
          The right call: Advantage.
        </h1>
        <p className="hero-copy-item text-[16px] lg:text-[18px] leading-[1.6] text-[var(--ink-on-navy)] mb-8 max-w-[46ch]">
          We partner for the long game - because an advantage has to be
          earned twice.
        </p>
        <a
          href="#contact"
          className="hero-copy-item inline-block font-bold text-[16px] text-white bg-[var(--terracotta)] rounded-full px-[34px] py-[16px] no-underline transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Let&apos;s talk
        </a>
      </div>
    </section>
  );
}
