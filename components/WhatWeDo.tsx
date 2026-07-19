const pillars = [
  {
    index: "01",
    title: "Applications",
    body: "Full builds and modernisation, from concept to production. React, iOS, Flutter, on SAP BTP or standalone. Wherever you're starting from, legacy replacement, greenfield, or somewhere in between.",
  },
  {
    index: "02",
    title: "Integration & Data",
    body: "Your systems, pooled and normalised into a secure layer with real semantic structure, usable for reporting today, and for AI when you're ready for it.",
  },
  {
    index: "03",
    title: "Agentic",
    body: "Multi-agent systems that augment real decisions, not automate simple tasks. Business-value-driven, not demo-driven.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what"
      className="min-h-screen flex flex-col justify-center px-[8vw] py-[8vh]"
      style={{ background: "var(--paper)" }}
    >
      <div className="max-w-[60ch] mb-14">
        <p className="text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-[var(--ink-soft)] mb-5">
          What we do
        </p>
        <h2 className="font-[var(--font-manrope)] font-extrabold text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.05]">
          Three ways we move your business forward.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {pillars.map((p) => (
          <div key={p.index} className="border-t-2 border-[var(--ink)] pt-6">
            <div className="font-[var(--font-manrope)] text-[0.85rem] font-extrabold text-[var(--ink-soft)] mb-3">
              {p.index}
            </div>
            <h3 className="text-[1.4rem] font-bold mb-4">{p.title}</h3>
            <p className="text-[1rem] leading-[1.55] text-[var(--ink-soft)]">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      <p className="font-[var(--font-manrope)] font-bold text-[1.05rem] text-center mt-14">
        We build with AI. And we build AI.
      </p>
    </section>
  );
}
