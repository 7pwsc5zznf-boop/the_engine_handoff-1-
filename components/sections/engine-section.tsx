import AnimatedSection from "@/components/animated-section";

const workflow = [
  {
    key: "S",
    label: "Surface",
    body: "Every recommendation and required action is captured the moment it is made \u2014 nothing lives only in someone's head.",
  },
  {
    key: "A",
    label: "Assign",
    body: "A single, named owner is attached to each action, with a clear due window. Accountability stops being implied.",
  },
  {
    key: "O",
    label: "Operate",
    body: "The owner executes against a closed-loop checklist. Status is visible, not assumed.",
  },
  {
    key: "V",
    label: "Verify",
    body: "Completion is confirmed \u2014 the action reached the floor and took effect. No silent skips.",
  },
  {
    key: "M",
    label: "Measure",
    body: "Gaps, delays, and outcomes roll up into reporting leaders can act on before costs accrue.",
  },
];

export default function EngineSection() {
  return (
    <section id="engine" className="border-t border-white/10 py-24 grid-bg">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent">
            {"// The Engine"}
          </span>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-brand-offwhite sm:text-4xl">
            A checklist workflow that closes the execution gap.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-offwhite/60">
            The Engine runs every action through a five-stage operating loop
            &mdash; <span className="font-mono text-brand-accent">S &rarr; A &rarr; O &rarr; V &rarr; M</span>{" "}
            &mdash; so nothing moves forward unowned, unverified, or unmeasured.
          </p>
        </AnimatedSection>

        <div className="mt-14 space-y-4">
          {workflow.map((stage, i) => (
            <AnimatedSection key={stage.key} delay={i * 90}>
              <div className="flex items-start gap-6 rounded-xl border border-white/10 bg-brand-dark/80 p-6 backdrop-blur sm:p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand-accent/40 bg-brand-accent/10 font-mono text-lg font-bold text-brand-accent">
                  {stage.key}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-offwhite">
                    {stage.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-offwhite/65">
                    {stage.body}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
