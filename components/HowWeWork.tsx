const STAGES = [
  {
    number: "01",
    name: "Diagnose",
    body: "Ground the work before building it. Business case, requirements, technical constraints - captured as a living document every decision refers back to.",
  },
  {
    number: "02",
    name: "Create",
    body: "Build in tight cycles with real feedback. UX, architecture, and delivery running in parallel. AI-accelerated, senior-led, shipped to production.",
  },
  {
    number: "03",
    name: "Scale",
    body: "Embed, expand, and compound. The goal is value that grows - not a handover document and a goodbye.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how"
      className="min-h-screen flex flex-col justify-center px-[8vw] py-[10vh]"
      style={{ background: "#201f1f" }}
    >
      <p className="text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-[#e8e0d0] opacity-60 mb-14 text-center">
        How we work
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 max-w-[1100px] mx-auto w-full">
        {STAGES.map((stage) => (
          <div key={stage.number} className="relative">
            <span
              aria-hidden="true"
              className="absolute -top-2 left-0 font-[var(--font-barlow)] font-black text-[80px] leading-none text-[#e8e0d0] opacity-[0.08] select-none pointer-events-none"
            >
              {stage.number}
            </span>
            <div className="relative pt-16">
              <div className="w-7 h-0.5 bg-[#e8e0d0] opacity-15 mb-6" />
              <h3 className="font-[var(--font-barlow)] font-black text-[28px] text-[#e8e0d0] mb-4">
                {stage.name}
              </h3>
              <p className="font-[var(--font-inter)] text-[15px] leading-[1.6] text-[#e8e0d0] opacity-60">
                {stage.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
