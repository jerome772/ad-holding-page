export default function Who() {
  return (
    <section
      id="who"
      className="border-t border-[var(--hairline)] px-5 sm:px-14 py-12 sm:py-[72px] lg:py-[110px] flex items-center"
      style={{ background: "var(--white)" }}
    >
      <div className="w-full max-w-[640px]">
        <p className="text-[11px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[var(--terracotta)] mb-4">
          Who We Are
        </p>
        <p className="text-[20px] sm:text-[23px] font-bold leading-[1.4] text-[var(--navy)] mb-5">
          I&apos;m Jerome. I&apos;ve spent 15 years helping enterprise across
          APAC innovate.
        </p>
        <p className="text-[16px] leading-[1.6] text-[var(--ink-on-white)] mb-5">
          The Ethos: The best outcomes come from real partnership, shared
          success, built on trust.
        </p>
        <p className="text-[16px] leading-[1.6] text-[var(--ink-on-white)] mb-5">
          AI has moved faster than the traditional consulting model can
          follow.
        </p>
        <p className="text-[16px] leading-[1.6] text-[var(--ink-on-white)]">
          I&apos;ve created ADV to close that gap: lean, nimble teams of
          hands on, experienced specialists who have a passion for deep
          continuous domain mastery.
        </p>
      </div>
    </section>
  );
}
