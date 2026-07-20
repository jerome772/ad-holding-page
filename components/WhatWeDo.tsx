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
      className="border-t border-[var(--hairline)] px-5 sm:px-14 py-12 sm:py-[72px] lg:py-[110px]"
      style={{ background: "var(--white)" }}
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="lg:w-[320px] lg:flex-shrink-0">
          <p className="text-[11px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[var(--terracotta)] mb-4">
            What we do
          </p>
          <h2 className="font-extrabold text-[24px] sm:text-[28px] lg:text-[34px] leading-[1.15] text-[var(--navy)]">
            Three ways we move your business forward.
          </h2>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {pillars.map((p) => (
              <div
                key={p.index}
                className="border-t-[3px] border-[var(--terracotta)] pt-5"
              >
                <div className="text-[13px] font-extrabold text-[var(--terracotta)] mb-3">
                  {p.index}
                </div>
                <h3 className="text-[20px] font-bold text-[var(--navy)] mb-3">
                  {p.title}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-[var(--ink-on-white)]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <p className="font-bold text-[18px] text-[var(--navy)] mt-12">
            We build with AI. And we build AI.
          </p>
        </div>
      </div>
    </section>
  );
}
