import AnimatedSection from "@/components/animated-section";

const stories = [
  {
    tag: "THE IMPLEMENTATION GAP",
    timeline: [
      { t: "Day 0", e: "A modified-duty plan is approved." },
      { t: "Day 1\u201318", e: "The plan sits unimplemented. No owner, no follow-up." },
      { t: "Day 18", e: "Someone notices it was never put in place." },
    ],
    result:
      "Disability duration increases and costs accumulate \u2014 entirely because an approved action was never executed.",
  },
  {
    tag: "THE VERIFICATION GAP",
    timeline: [
      { t: "Step 1", e: "Work restrictions are updated in the system." },
      { t: "Step 2", e: "No one confirms the restrictions reached the floor." },
      { t: "Step 3", e: "The employee continues full duty and is re-injured." },
    ],
    result:
      "The claim reopens. A documented decision failed because no one verified it was carried out.",
  },
];

export default function ConsequencesSection() {
  return (
    <section
      id="consequences"
      className="border-t border-white/10 bg-brand-teal/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent">
            {"// Consequences"}
          </span>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-brand-offwhite sm:text-4xl">
            What the gap actually costs.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-offwhite/60">
            Two common patterns. Both start with a correct decision and end with
            an avoidable cost.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {stories.map((story, i) => (
            <AnimatedSection key={story.tag} delay={i * 120} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-white/10 bg-brand-dark p-8">
                <span className="font-mono text-xs tracking-[0.2em] text-brand-accent">
                  {story.tag}
                </span>

                <ol className="mt-6 space-y-4">
                  {story.timeline.map((item) => (
                    <li key={item.t} className="flex gap-4">
                      <span className="w-16 shrink-0 font-mono text-xs text-brand-offwhite/45">
                        {item.t}
                      </span>
                      <span className="text-sm leading-relaxed text-brand-offwhite/75">
                        {item.e}
                      </span>
                    </li>
                  ))}
                </ol>

                <p className="mt-auto pt-6 text-sm font-medium leading-relaxed text-red-300/90">
                  {story.result}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
