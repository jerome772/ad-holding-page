export default function Who() {
  return (
    <section
      id="who"
      className="min-h-screen flex flex-col items-center justify-center px-[8vw] py-[8vh]"
      style={{ background: "var(--paper)" }}
    >
      <div className="max-w-[56ch]">
        <p className="text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-[var(--ink-soft)] mb-5">
          Who
        </p>
        <p className="text-[1.15rem] leading-[1.65] mb-5">
          I&apos;m Jerome. I&apos;ve spent 15 years helping businesses across
          APAC innovate - at Bourne Digital, then Accenture, across some of
          the biggest enterprise programmes in the region.
        </p>
        <p className="text-[1.15rem] leading-[1.65] mb-5">
          Along the way I learnt that the best results come from true
          partnerships - committed, shared success, built on trust.
        </p>
        <p className="text-[1.15rem] leading-[1.65]">
          The pace of AI has outstripped the traditional consulting model. I
          built ADV to close that gap - authentic, hands-on expertise,
          embedded in your business, sharing in the outcome.
        </p>
      </div>
    </section>
  );
}
