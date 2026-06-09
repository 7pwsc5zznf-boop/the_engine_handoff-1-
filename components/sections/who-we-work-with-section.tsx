import AnimatedSection from "@/components/animated-section";

const operators = [
  "Employers",
  "Occupational Medicine Teams",
  "Workforce Health Leaders",
  "Safety & Risk Professionals",
  "Disability Management Programs",
];

export default function WhoWeWorkWithSection() {
  return (
    <section id="who-we-work-with" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent">
            {"// Operators"}
          </span>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-brand-offwhite sm:text-4xl">
            Who we work with.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-offwhite/60">
            Organizations responsible for ensuring workforce-health actions are
            executed, verified, and measured.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {operators.map((op, i) => (
            <AnimatedSection key={op} delay={i * 60} className="h-full">
              <div className="flex h-full items-center gap-4 bg-brand-dark p-7">
                <span
                  className="font-mono text-sm text-brand-accent/70"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-medium text-brand-offwhite">
                  {op}
                </span>
              </div>
            </AnimatedSection>
          ))}
          <AnimatedSection delay={operators.length * 60} className="h-full">
            <div className="flex h-full items-center bg-brand-accent/10 p-7">
              <a
                href="#contact"
                className="font-mono text-sm font-medium text-brand-accent hover:underline"
              >
                Not sure if you fit? Talk to us &rarr;
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
