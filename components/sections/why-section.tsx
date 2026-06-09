
import AnimatedSection from "@/components/animated-section";

const reasons = [
{
title: "Accountability is implied, not assigned.",
body: "No single owner is named for the action, so it belongs to everyone — and therefore no one.",
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
return ( <section id="why" className="border-t border-white/10 bg-black/20 py-24"> <div className="mx-auto max-w-6xl px-6"> <AnimatedSection> <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent">
{"// Root Cause"} </span> <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-brand-offwhite sm:text-4xl">
Why this keeps happening. </h2> <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-offwhite/65">
This isn't a people problem or a knowledge problem. The right
experts make the right calls. The failure is structural — an
execution gap sits between deciding what should happen and
confirming that it did. </p> </AnimatedSection>

```
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {reasons.map((reason, index) => (
        <AnimatedSection key={reason.title} delay={index * 100}>
          <div className="h-full rounded-xl border border-white/10 bg-brand-dark p-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-accent">
              0{index + 1}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-brand-offwhite">
              {reason.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-brand-offwhite/65">
              {reason.body}
            </p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>
```

);
}
