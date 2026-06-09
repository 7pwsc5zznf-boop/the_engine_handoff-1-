import AnimatedSection from "@/components/animated-section";

const credentials = [
"30+ years in occupational medicine and workforce health",
"Clinical leadership across military and civilian environments",
"Harvard MPH, retired Air Force Lieutenant Colonel",
];

export default function CredibilitySection() {
return ( <section
   id="credibility"
   className="border-t border-white/10 bg-brand-teal/30 py-24"
 > <div className="mx-auto max-w-6xl px-6"> <AnimatedSection> <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent">
{"// Credibility"} </span> <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-brand-offwhite sm:text-4xl">
Built by people who have owned the consequences. </h2> </AnimatedSection>

```
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

        <div>
          <p className="text-base leading-relaxed text-brand-offwhite/70">
            The Engine was founded after years of observing the same pattern
            across healthcare, finance, athletics, and other complex systems:
            recommendations are made, plans are approved, but accountability
            for execution is often unclear. The result is missed actions,
            delayed outcomes, unnecessary cost, and avoidable frustration.
          </p>

          <p className="mt-4 text-base leading-relaxed text-brand-offwhite/70">
            The Engine focuses on responsibility, ownership, verification,
            and follow-through — helping organizations identify who is
            responsible, what must be done, whether it was completed, and
            what outcomes resulted.
          </p>

          <div className="mt-8 rounded-lg border border-white/10 bg-black/20 p-6">
            <p className="text-lg font-semibold text-brand-offwhite">
              Clinical Governance
            </p>

            <p className="mt-3 text-base leading-relaxed text-brand-offwhite/70">
              Dr. Joe Abrams serves as Clinical Governance Lead and Strategic
              Partner. With more than three decades of experience in
              occupational medicine, workforce health, and clinical
              leadership, he helps ensure that The Engine's accountability
              framework aligns with real-world healthcare operations.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
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
      </div>
    </AnimatedSection>
  </div>
</section>
```

);
}

