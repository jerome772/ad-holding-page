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
          I&apos;m Jerome. 15 years leading enterprise delivery across APAC,
          at Bourne Digital and then Accenture, on some of the region&apos;s
          largest programmes.
        </p>
        <p className="text-[1.15rem] leading-[1.65] mb-5">
          The lesson: the best outcomes come from real partnership, shared
          success, built on trust.
        </p>
        <p className="text-[1.15rem] leading-[1.65]">
          AI has moved faster than the traditional consulting model can
          follow. I built ADV to close that gap: senior, hands-on, embedded
          in your business, sharing in the outcome.
        </p>
      </div>
    </section>
  );
}
