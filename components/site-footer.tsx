export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="status-dot" aria-hidden="true" />
          <span className="font-mono text-sm font-semibold tracking-tight text-brand-offwhite">
            THE&nbsp;ENGINE
          </span>
        </div>

        <p className="max-w-md text-sm text-brand-offwhite/50">
          Accountability, visibility, and follow-through across workforce
          health.
        </p>

        <div className="flex flex-col gap-1 text-sm">
          <a
            href="mailto:jeff@hdhp-theengine.com"
            className="font-mono text-brand-accent transition-colors hover:text-brand-accent/80"
          >
            jeff@hdhp-theengine.com
          </a>
          <span className="text-brand-offwhite/40">
            &copy; {year} The Engine. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
