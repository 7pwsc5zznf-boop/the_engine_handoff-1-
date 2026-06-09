import AnimatedSection from "@/components/animated-section";

const stakeholders = [
"Employers",
"Employees",
"Physicians",
"Case Managers",
"Safety Leaders",
"Human Resources",
"Insurers",
];

const gapChain = [
["Agreement", "Ownership"],
["Ownership", "Verification"],
["Verification", "Measurement"],
];

export default function WhySection() {
return ( <section id="why" className="border-t border-white/10 bg-black/20 py-24"> <div className="mx-auto max-w-6xl px-6"> <AnimatedSection> <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent">
{"// Root Cause"} </span> <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-brand-offwhite sm:text-4xl">
Why This Keeps Happening </h2> <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-offwhite/65">
Workforce health involves multiple stakeholders. Everyone may agree
on what should happen next. But agreement alone cannot close the
execution gap. </p> </AnimatedSection>

```
    <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <AnimatedSection delay={100}>
        <div className="rounded-xl border border-white/10 bg-brand-teal/40 p-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-accent">
            Multiple Stakeholders
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {stakeholders.map((stakeholder) => (
              <span
                key={stakeholder}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-brand-offwhite/75"
              >
                {stakeholder}
              </span>
            ))}
          </div>

          <p className="mt-8 text-base leading-7 text-brand-offwhite/65">
            Everyone may agree on what should happen next. But without
            structured accountability, agreement is where progress often
            stops.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <div className="rounded-xl border border-brand-accent/30 bg-brand-dark p-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-accent">
            The Execution Gap
          </p>

          <div className="mt-6 space-y-5">
            {gapChain.map(([from, to]) => (
              <div
                key={`${from}-${to}`}
                className="flex flex-col gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-semibold text-brand-offwhite">
                  {from}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-brand-offwhite/40">
                  does not create
                </span>
                <span className="font-semibold text-brand-offwhite">
                  {to}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-base leading-7 text-brand-offwhite/65">
            That is the execution gap: the space between knowing what should
            happen and proving that it actually did.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </div>
</section>
```

);
}
