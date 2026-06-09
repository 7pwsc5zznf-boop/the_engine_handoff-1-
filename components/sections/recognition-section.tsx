import AnimatedSection from "@/components/animated-section";

const scenarios = [
  {
    code: "SCENARIO 01",
    title: "The plan is approved \u2014 but no one owns the next step.",
    body: "A clear recommendation is signed off. Then it sits. Days pass before anyone confirms it was actually put into motion.",
  },
  {
    code: "SCENARIO 02",
    title: "Restrictions change \u2014 but the floor never hears about it.",
    body: "An update is entered in one system. The people responsible for acting on it are working from yesterday's information.",
  },
  {
    code: "SCENARIO 03",
    title: "Everyone assumes someone else is tracking it.",
    body: "Accountability is implied, never assigned. The handoff disappears into the gap between roles.",
  },
  {
    code: "SCENARIO 04",
    title: "By the time the gap is noticed, the cost is already real.",
    body: "Duration extends, a claim reopens, an audit flags it. The breakdown was invisible until it wasn't.",
  },
];

export default function RecognitionSection() {
  return (
    <section id="recognition" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent">
            {"// Recognition"}
          </span>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-brand-offwhite sm:text-4xl">
            If any of this sounds familiar, you already know the problem.
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {scenarios.map((s, i) => (
            <AnimatedSection key={s.code} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col bg-brand-dark p-8">
                <span className="font-mono text-xs tracking-[0.2em] text-brand-accent/80">
                  {s.code}
                </span>
                <h3 className="mt-4 text-lg font-medium text-brand-offwhite">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-offwhite/60">
                  {s.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
