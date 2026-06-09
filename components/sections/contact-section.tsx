"use client";

import { useState } from "react";
import AnimatedSection from "@/components/animated-section";

const CONTACT_EMAIL = "jeff@hdhp-theengine.com";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Briefing request \u2014 ${form.organization || form.name || "The Engine"}`;
    const body = [
      `Name: ${form.name}`,
      `Organization: ${form.organization}`,
      `Email: ${form.email}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  const inputClass =
    "w-full rounded-md border border-white/15 bg-brand-dark px-4 py-3 text-sm text-brand-offwhite placeholder:text-brand-offwhite/35 focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent";

  return (
    <section id="contact" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <AnimatedSection>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent">
              {"// Contact"}
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-offwhite sm:text-4xl">
              Request a briefing.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-offwhite/60">
              Tell us a little about your organization and what you&apos;re
              trying to tighten up. We&apos;ll follow up directly.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-8 inline-block font-mono text-sm text-brand-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-xl border border-white/10 bg-brand-teal/20 p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-brand-offwhite/55"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="organization"
                    className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-brand-offwhite/55"
                  >
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={form.organization}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Acme Health"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-brand-offwhite/55"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="jane@acmehealth.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-brand-offwhite/55"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Where is follow-through breaking down for you?"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-brand-accent px-6 py-3 font-mono text-sm font-medium text-brand-dark transition-colors hover:bg-brand-accent/90"
              >
                Send Briefing Request
              </button>

              <p className="text-center text-xs text-brand-offwhite/40">
                This form opens your email client with the details pre-filled.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
