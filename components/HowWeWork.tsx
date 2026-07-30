"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
}

const STAGES = [
  {
    number: "01",
    name: "Ground",
    body: "Ground what we're solving: the problem, the goal, the business case, the requirements. Living semantic context, always open, that grounds every decision and evolves with each one.",
  },
  {
    number: "02",
    name: "Create",
    body: "Design, build and iterate in tight cycles with real feedback. Specifications, architecture, code and delivery running in parallel. AI-accelerated, senior-led, shipped to production.",
  },
  {
    number: "03",
    name: "Scale",
    body: "Embed, adopt, and compound. Shipping to production is the first step - the goal is value that compounds.",
  },
];

const DIAGRAM_SVG_CLASS =
  "w-full h-auto lg:w-auto lg:h-[55vh] lg:max-w-full block mx-auto";

export default function HowWeWork() {
  const diagramWrapRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/how-we-work-diagram.svg")
      .then((res) => res.text())
      .then((text) => {
        if (cancelled) return;
        const withClass = text.replace(
          "<svg ",
          `<svg class="${DIAGRAM_SVG_CLASS}" `
        );
        setSvgMarkup(withClass);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!svgMarkup || !diagramWrapRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const root = diagramWrapRef.current;
    const nodeGround = root.querySelectorAll("#circle-ground, #label-ground");
    const nodeCreate = root.querySelectorAll("#circle-create, #label-create");
    const nodeScale = root.querySelectorAll("#circle-scale, #label-scale");
    const lineGC = root.querySelectorAll(".line-ground-create");
    const lineCS = root.querySelectorAll(".line-create-scale");
    const descBlocks = root.querySelectorAll(
      "#desc-ground, #desc-create, #desc-scale"
    );

    // The dashed return path is 11 separate elements in the source SVG, not
    // one continuous path (2 arc paths, 6 short solid stub lines, 1 dashed
    // straight segment, 2 arrow chevrons). We animate them as an ordered
    // sequence matching the true visual route - Scale down the right arc,
    // across the bottom, up the left arc into Ground - rather than their
    // arbitrary order in the source file.
    const stubScaleEdge = root.querySelector('line[x1="309.39"]');
    const arcRight = root.querySelector('path[d^="M263.51,174.95"]');
    const stubRightOfMiddle = root.querySelector('line[x1="257.69"]');
    const chevronRight = root.querySelector('polyline[points^="250.73"]');
    const stubMiddleRight = root.querySelector('line[x1="235.4"]');
    const middleDashed = root.querySelector('line[x1="177.27"]');
    const stubMiddleLeft = root.querySelector('line[x1="171.71"]');
    const chevronLeft = root.querySelector('polyline[points^="163.87"]');
    const stubLeftOfMiddle = root.querySelector('line[x1="146.55"]');
    const arcLeft = root.querySelector('path[d^="M97.43,114.86"]');
    const stubGroundEdge = root.querySelector('line[x1="103.21"]');

    if (
      !nodeGround.length ||
      !nodeCreate.length ||
      !nodeScale.length ||
      !lineGC.length ||
      !lineCS.length ||
      !descBlocks.length ||
      !stubScaleEdge ||
      !arcRight ||
      !stubRightOfMiddle ||
      !chevronRight ||
      !stubMiddleRight ||
      !middleDashed ||
      !stubMiddleLeft ||
      !chevronLeft ||
      !stubLeftOfMiddle ||
      !arcLeft ||
      !stubGroundEdge
    ) {
      return;
    }

    // DrawSVGPlugin animates a reveal by taking over stroke-dasharray /
    // stroke-dashoffset itself - at "100%" it sets one long dash spanning
    // the whole path with a near-zero gap, which reads as a solid line.
    // That silently replaces the arcs' and middle segment's authored dash
    // pattern (3.9/3.86/3.63) with DrawSVG's own, so we capture the
    // original values now (before DrawSVG touches anything) and restore
    // them once each element's reveal finishes.
    const originalDasharrays = new Map<Element, string>();
    for (const el of [arcRight, arcLeft, middleDashed]) {
      originalDasharrays.set(el, getComputedStyle(el).strokeDasharray);
    }
    function restoreDasharray(els: Element[]) {
      for (const el of els) {
        const value = originalDasharrays.get(el);
        if (value) gsap.set(el, { strokeDasharray: value });
      }
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });

    tl.from(
      nodeGround,
      {
        opacity: 0,
        scale: 0.4,
        transformOrigin: "center",
        duration: 0.45,
        ease: "back.out(2)",
      },
      0
    )
      .from(
        nodeCreate,
        {
          opacity: 0,
          scale: 0.4,
          transformOrigin: "center",
          duration: 0.45,
          ease: "back.out(2)",
        },
        0.18
      )
      .from(
        nodeScale,
        {
          opacity: 0,
          scale: 0.4,
          transformOrigin: "center",
          duration: 0.45,
          ease: "back.out(2)",
        },
        0.36
      )
      .fromTo(
        lineGC,
        { drawSVG: "0%" },
        { drawSVG: "100%", duration: 0.35, ease: "power1.inOut" },
        0.65
      )
      .fromTo(
        lineCS,
        { drawSVG: "0%" },
        { drawSVG: "100%", duration: 0.35, ease: "power1.inOut" },
        0.95
      )
      // Return path, Scale -> Ground, in true visual order. arcRight and
      // arcLeft are drawn in reverse (from: "100% 100%" to: "0% 100%")
      // because their authored path direction runs the opposite way to the
      // flow we want (arcRight's path data runs bottom-to-top; arcLeft's
      // runs top-to-bottom) - drawing them "forward" would visually flow
      // away from Scale and away from Ground instead of toward them.
      .fromTo(
        [stubScaleEdge, arcRight],
        { drawSVG: "100% 100%" },
        { drawSVG: "0% 100%", duration: 0.25, ease: "power1.inOut" },
        1.25
      )
      .fromTo(
        [stubRightOfMiddle, chevronRight, stubMiddleRight],
        { drawSVG: "0%" },
        { drawSVG: "100%", duration: 0.15, ease: "power1.inOut" },
        1.45
      )
      .fromTo(
        middleDashed,
        { drawSVG: "100% 100%" },
        { drawSVG: "0% 100%", duration: 0.2, ease: "power1.inOut" },
        1.55
      )
      .fromTo(
        [stubMiddleLeft, chevronLeft, stubLeftOfMiddle],
        { drawSVG: "0%" },
        { drawSVG: "100%", duration: 0.15, ease: "power1.inOut" },
        1.7
      )
      .fromTo(
        [arcLeft, stubGroundEdge],
        { drawSVG: "100% 100%" },
        {
          drawSVG: "0% 100%",
          duration: 0.25,
          ease: "power1.inOut",
          onComplete: () =>
            restoreDasharray([arcRight, arcLeft, middleDashed]),
        },
        1.8
      )
      .from(
        descBlocks,
        { opacity: 0, y: 4, duration: 0.4, ease: "power1.out" },
        2.15
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [svgMarkup]);

  return (
    <section
      id="how"
      ref={sectionRef}
      className="border-t border-[var(--hairline)] py-12 sm:py-[72px] lg:py-[110px] flex flex-col justify-center"
      style={{ background: "var(--off-white)" }}
    >
      <div className="px-5 sm:px-14">
        <p className="text-[11px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[var(--terracotta)] mb-4">
          How we work
        </p>
        <h2 className="font-extrabold text-[24px] sm:text-[28px] lg:text-[34px] leading-[1.15] text-[var(--navy)]">
          Ground. Create. Scale.
        </h2>
      </div>

      <div
        className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-10 lg:mt-14 py-10 sm:py-16"
        style={{ background: "var(--navy)" }}
      >
        <div
          ref={diagramWrapRef}
          role="img"
          aria-label="Ground, Create, Scale: a continuous cycle - Ground (problem, goal, requirements), Create (design, build, iterate), Scale (embed, adopt, compound), looping back to Ground."
          dangerouslySetInnerHTML={svgMarkup ? { __html: svgMarkup } : undefined}
        />
      </div>

      <div className="px-5 sm:px-14 mt-10 lg:mt-16 flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="lg:w-[320px] lg:flex-shrink-0">
          <p className="text-[14.5px] sm:text-[15px] leading-[1.6] text-[var(--ink-on-white)]">
            A non-linear, living framework - human-centred design and senior
            engineering, building an always open ecosystem. Senior people,
            embedded in your team, hands-on from Ground through Scale.
          </p>
        </div>

        <div className="flex-1">
          {STAGES.map((stage) => (
            <div
              key={stage.number}
              className="flex gap-6 py-8 border-t border-[var(--hairline)]"
            >
              <div className="w-8 flex-shrink-0 text-[13px] font-extrabold text-[var(--terracotta)] pt-1">
                {stage.number}
              </div>
              <div className="flex-1">
                <h3 className="text-[20px] font-bold text-[var(--navy)] mb-2">
                  {stage.name}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-[var(--ink-on-white)]">
                  {stage.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
