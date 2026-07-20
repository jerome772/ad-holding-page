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
          ADV is a lean, specialist consulting firm helping mid-market and
          enterprise businesses across Australia and New Zealand turn
          complex technology challenges into real business outcomes.
        </p>
        <p className="text-[16px] leading-[1.6] text-[var(--ink-on-white)] mb-5">
          We work across three areas: custom applications, integration and
          data normalisation, and agentic AI solutions. Not as generalists.
          As specialists who have been recognised with industry credentials
          for enterprise innovation across APAC.
        </p>
        <p className="text-[16px] leading-[1.6] text-[var(--ink-on-white)] mb-5">
          Our model is different by design: lean, experienced teams of
          hands-on specialists with a passion for deep, continuous domain
          mastery - embedded in your business, accountable for the outcome,
          not the hours.
        </p>
        <p className="text-[16px] leading-[1.6] text-[var(--ink-on-white)]">
          We believe the best outcomes come from real partnership, shared
          success, and trust. That&apos;s the ethos everything else is
          built on.
        </p>
      </div>
    </section>
  );
}
