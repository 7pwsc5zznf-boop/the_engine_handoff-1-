import AnimatedSection from "@/components/animated-section";

const causes = [
  {
    title: "Accountability is implied, not assigned.",
    body: "No single owner is named for the action, so it belongs to everyone \u2014 and therefore no one.",
  },
  {
    title: "Visibility ends at the decision.",
    body: "Systems capture what was decided, not whether it was carried out. Status goes dark after sign-off.",
  },
  {
    title: "Follow-through depends on memory.",
    body: "Without a closed-loop checklist, execution relies on individuals remembering to chase the next step.",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent">
              {"// Root Cause"}
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-offwhite sm:text-4xl">
              Why this keeps happening.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-offwhite/60">
              This isn&apos;t a people problem or a knowledge problem. The right
              experts make the right calls. The failure is structural &mdash; an{" "}
              <span className="text-brand-accent">execution gap</span> sits
              between deciding what should happen and confirming that it did.
            </p>
          </AnimatedSection>

          <div className="space-y-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
            {causes.map((cause, i) => (
              <AnimatedSection key={cause.title} delay={i * 80}>
                <div className="bg-brand-dark p-8">
                  <h3 className="text-lg font-medium text-brand-offwhite">
                    {cause.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-offwhite/60">
                    {cause.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
