const pillars = [
  {
    index: "01",
    title: "Applications",
    body: "User-centric design, build and modernisation, from concept to production. React, iOS, Fiori or Headless on SAP BTP or standalone. Wherever you're starting from, legacy replacement, greenfield, or somewhere in between.",
  },
  {
    index: "02",
    title: "Integration & Data",
    body: "Your current and future business data, pooled and normalised into a secure layer with real semantic structure. SAP Integration Suite, custom APIs, BDC, GCP, Snowflake or a combination. Usable for applications and reporting today, and AI when you're ready for it.",
  },
  {
    index: "03",
    title: "Agentic Systems",
    body: "Design and deploy AI that adds real business value. On SAP, GCP, AWS, Microsoft or the frontier model of the moment. From intelligent research, interaction and automation to agentic workforces, we help organisations move faster without sacrificing governance or control.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what"
      className="border-t border-[var(--hairline)] px-5 sm:px-14 py-12 sm:py-[72px] lg:py-[110px] flex items-center"
      style={{ background: "var(--white)" }}
    >
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16">
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
                <h3 className="text-[20px] font-bold text-[var(--navy)] mb-3">
                  {p.title}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-[var(--ink-on-white)]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
