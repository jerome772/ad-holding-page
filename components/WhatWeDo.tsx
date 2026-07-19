const pillars = [
  {
    index: "01",
    title: "Applications",
    body: "Design and build applications and the cloud services behind them - React, iOS, Flutter, Fiori - built on SAP BTP. Modern experiences that don't compromise on enterprise foundations.",
  },
  {
    index: "02",
    title: "Semantic Layers",
    body: "Integration that pulls your systems together, with normalised data layers built to handle what you need today and what AI will demand tomorrow.",
  },
  {
    index: "03",
    title: "Agentic Solutions",
    body: "From integrating AI tools and automating workflows through to complex, business value-driven agentic systems - multi-agent solutions that augment real decisions, not just automate simple tasks.",
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
    </section>
  );
}
