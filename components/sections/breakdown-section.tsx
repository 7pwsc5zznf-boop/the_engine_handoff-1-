import AnimatedSection from "@/components/animated-section";

const stages = [
  {
    step: "01",
    label: "Decision",
    state: "OK",
    note: "The right call is made. A recommendation or plan is documented.",
  },
  {
    step: "02",
    label: "Handoff",
    state: "WEAK",
    note: "Ownership of the next action is implied, not assigned.",
  },
  {
    step: "03",
    label: "Execution",
    state: "AT RISK",
    note: "Action is delayed, partially done, or quietly skipped.",
  },
  {
    step: "04",
    label: "Verification",
    state: "FAIL",
    note: "No one confirms the action actually happened.",
  },
  {
    step: "05",
    label: "Measurement",
    state: "BLIND",
    note: "The gap never surfaces in any report or dashboard.",
  },
];

const stateColor: Record<string, string> = {
  OK: "text-brand-accent",
  WEAK: "text-yellow-400",
  "AT RISK": "text-orange-400",
  FAIL: "text-red-400",
  BLIND: "text-red-500",
};

export default function BreakdownSection() {
  return (
    <section
      id="breakdown"
      className="border-t border-white/10 bg-brand-teal/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent">
            {"// Breakdown"}
          </span>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-brand-offwhite sm:text-4xl">
            Where execution breaks down.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-offwhite/60">
            The decision is rarely the problem. The breakdown happens in the
            steps after the decision &mdash; where ownership, follow-through, and
            verification quietly disappear.
          </p>
        </AnimatedSection>

        <div className="mt-14 space-y-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
          {stages.map((stage, i) => (
            <AnimatedSection key={stage.step} delay={i * 70}>
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 bg-brand-dark px-6 py-5 sm:gap-8 sm:px-8">
                <span className="font-mono text-sm text-brand-offwhite/40">
                  {stage.step}
                </span>
                <div>
                  <p className="font-medium text-brand-offwhite">
                    {stage.label}
                  </p>
                  <p className="mt-1 text-sm text-brand-offwhite/55">
                    {stage.note}
                  </p>
                </div>
                <span
                  className={`font-mono text-xs tracking-[0.15em] ${stateColor[stage.state]}`}
                >
                  [{stage.state}]
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
