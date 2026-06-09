
import AnimatedSection from "@/components/animated-section";

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
            Founder: Jeffrey Dewey
          </h2>
        </AnimatedSection>

        {/* Founder */}
        <AnimatedSection delay={100}>
          <div className="mt-12 grid gap-8 rounded-xl border border-white/10 bg-brand-dark p-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12">
            <div className="flex flex-col items-start gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-brand-accent/40 bg-brand-accent/10 font-mono text-xl font-semibold text-brand-accent">
                JD
              </div>
              <div>
                <p className="text-lg font-semibold text-brand-offwhite">
                  Jeffrey Dewey
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-brand-offwhite/50">
                  Founder, The Engine
                </p>
              </div>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-brand-offwhite/70">
              <p>
                The Engine was created after years spent studying why complex
                systems fail despite having capable people inside them.
              </p>
              <p>
                What began as an investigation into healthcare evolved into a
                broader observation:
              </p>
              <p>
                Organizations rarely fail because they lack expertise.
              </p>
              <p>
                They fail because responsibility becomes fragmented across
                people, systems, and organizations.
              </p>
              <p>
                The Engine was created to make responsibility{" "}
                <span className="text-brand-accent">
                  visible, assignable, verifiable, and measurable
                </span>
                .
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Clinical Governance Lead / Strategic Partner */}
        <AnimatedSection delay={200}>
          <div className="mt-8 grid gap-8 rounded-xl border border-white/10 bg-brand-dark p-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12">
            <div className="flex flex-col items-start gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-brand-accent/40 bg-brand-accent/10 font-mono text-xl font-semibold text-brand-accent">
                JA
              </div>
              <div>
                <p className="text-lg font-semibold text-brand-offwhite">
                  Dr. Joe Abrams
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-brand-offwhite/50">
                  Clinical Governance Lead &amp; Strategic Partner
                </p>
              </div>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-brand-offwhite/70">
              <p>
                Dr. Joe Abrams serves as Clinical Governance Lead and Strategic
                Partner.
              </p>
              <p>
                His decades of leadership in military occupational medicine and
                workforce health provided independent validation of the same
                execution failures The Engine was designed to address.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
