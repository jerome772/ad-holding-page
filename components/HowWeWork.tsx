const STAGES = [
  {
    number: "01",
    name: "Ground",
    body: "Ground the work before building it. Business case, requirements, semantics, technical constraints - captured as a living document that grounds every decision, and evolves with each one.",
  },
  {
    number: "02",
    name: "Create",
    body: "Create in tight cycles with real feedback. Designs, specifications, architecture, code and delivery running in parallel. AI-accelerated, senior-led, shipped to production.",
  },
  {
    number: "03",
    name: "Scale",
    body: "Embed, adopt, and compound. Shipping to production is the first step - the goal is value that grows.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how"
      className="border-t border-[var(--hairline)] px-5 sm:px-14 py-12 sm:py-[72px] lg:py-[110px] flex items-center"
      style={{ background: "var(--off-white)" }}
    >
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="lg:w-[320px] lg:flex-shrink-0">
          <p className="text-[11px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[var(--terracotta)] mb-4">
            How we work
          </p>
          <h2 className="font-extrabold text-[24px] sm:text-[28px] lg:text-[34px] leading-[1.15] text-[var(--navy)] mb-4">
            Ground. Create. Scale.
          </h2>
          <p className="text-[14.5px] sm:text-[15px] leading-[1.6] text-[var(--ink-on-white)]">
            A living framework, not a straight line - human-centred design
            and senior engineering judgement, building a shared
            understanding that evolves as we go. Senior people, embedded in
            your team, hands-on from Ground through Scale.
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
