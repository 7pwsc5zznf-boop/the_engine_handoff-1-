import AnimatedSection from "@/components/animated-section";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden grid-bg">
      {/* Ambient teal glow */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-brand-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-6 pt-32 pb-20">
        <AnimatedSection>
          <div className="mb-6 flex items-center gap-3">
            <span className="status-dot animate-blink" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent">
              {"// Mission Control"}
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-brand-offwhite sm:text-5xl md:text-6xl">
            Recommendations are made. Plans are approved.{" "}
            <span className="text-brand-offwhite/50">
              Yet critical actions still fall through the cracks.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-offwhite/70">
            The Engine helps organizations create accountability, visibility,
            and follow-through across workforce health &mdash; so the right
            actions get executed, verified, and measured every time.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-brand-accent px-6 py-3 font-mono text-sm font-medium text-brand-dark transition-colors hover:bg-brand-accent/90"
            >
              Request a Briefing
            </a>
            <a
              href="#engine"
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-6 py-3 font-mono text-sm font-medium text-brand-offwhite/80 transition-colors hover:border-brand-accent/60 hover:text-brand-accent"
            >
              See How It Works
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
