import AnimatedSection from "@/components/animated-section";

export default function CtaSection() {
  return (
    <section className="border-t border-white/10 bg-brand-teal/40 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <AnimatedSection>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent">
            {"// Next Step"}
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-offwhite sm:text-4xl">
            Stop losing good decisions to weak follow-through.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-offwhite/65">
            Request a briefing and we&apos;ll walk through where execution is
            most likely breaking down in your organization &mdash; and how The
            Engine closes it.
          </p>
          <div className="mt-9">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-brand-accent px-7 py-3.5 font-mono text-sm font-medium text-brand-dark transition-colors hover:bg-brand-accent/90"
            >
              Request a Briefing
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
