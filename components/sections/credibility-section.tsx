import AnimatedSection from "@/components/animated-section";

const credentials = [
  "Air Force occupational medicine leadership",
  "Workforce health program oversight at scale",
  "Operational readiness & medical accountability",
];

export default function CredibilitySection() {
  return (
    <section
      id="credibility"
      className="border-t border-white/10 bg-brand-teal/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent">
            {"// Credibility"}
          </span>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-brand-offwhite sm:text-4xl">
            Built by someone who has owned the consequences.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mt-12 grid gap-8 rounded-xl border border-white/10 bg-brand-dark p-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12">
            <div className="flex flex-col items-start gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-brand-accent/40 bg-brand-accent/10 font-mono text-xl font-semibold text-brand-accent">
                JA
              </div>
              <div>
                <p className="text-lg font-semibold text-brand-offwhite">
                  Dr. Joe Abrams
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-brand-offwhite/50">
                  Founder, The Engine
                </p>
              </div>
            </div>

            <div>
              <p className="text-base leading-relaxed text-brand-offwhite/70">
                The Engine grew out of decades spent leading occupational
                medicine programs where follow-through wasn&apos;t optional and
                the cost of a missed action was measured in readiness, not just
                dollars. Those environments demanded that every recommendation
                be executed, verified, and accounted for &mdash; the same
                discipline The Engine now brings to civilian workforce health.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {credentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-sm text-brand-offwhite/70"
                  >
                    <span
                      className="mt-1.5 status-dot shrink-0"
                      aria-hidden="true"
                    />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
