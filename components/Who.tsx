export default function Who() {
  return (
    <section
      id="who"
      className="border-t border-[var(--hairline)] px-5 sm:px-14 py-12 sm:py-[72px] lg:py-[110px]"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-[640px]">
        <p className="text-[11px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[var(--terracotta)] mb-4">
          Who
        </p>
        <p className="text-[20px] sm:text-[23px] font-bold leading-[1.4] text-[var(--navy)] mb-5">
          I&apos;m Jerome. 15 years leading enterprise delivery across APAC,
          at Bourne Digital and then Accenture, on some of the region&apos;s
          largest programmes.
        </p>
        <p className="text-[16px] leading-[1.6] text-[var(--ink-on-white)] mb-5">
          The lesson: the best outcomes come from real partnership, shared
          success, built on trust.
        </p>
        <p className="text-[16px] leading-[1.6] text-[var(--ink-on-white)]">
          AI has moved faster than the traditional consulting model can
          follow. I built ADV to close that gap: senior, hands-on, embedded
          in your business, sharing in the outcome.
        </p>
      </div>
    </section>
  );
}
