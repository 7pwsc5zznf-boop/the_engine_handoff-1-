"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "The Problem", href: "#recognition" },
  { label: "Why It Happens", href: "#why" },
  { label: "The Engine", href: "#engine" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-brand-dark/90 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="status-dot animate-blink" aria-hidden="true" />
          <span className="font-mono text-sm font-semibold tracking-tight text-brand-offwhite">
            THE&nbsp;ENGINE
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-brand-offwhite/70 transition-colors hover:text-brand-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-md border border-brand-accent/60 bg-brand-accent/10 px-4 py-2 font-mono text-xs font-medium text-brand-accent transition-colors hover:bg-brand-accent/20"
        >
          Request a Briefing
        </a>
      </div>
    </header>
  );
}
