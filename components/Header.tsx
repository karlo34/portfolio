"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

const navItems = [
  { href: "#about", label: "EXPERIENCE" },
  { href: "#skills", label: "NOTES" },
  { href: "#what-i-do", label: "SERVICES" },
  { href: "#projects", label: "WORKS" }
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-200/60 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="font-script text-2xl font-medium tracking-wide text-slate-800"
        >
          {profile.name.split(" ")[0] || "Portfolio"}
        </a>

        {/* Desktop nav: centered */}
        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-4 font-medium uppercase tracking-wide md:flex md:gap-6 lg:gap-8"
          aria-label="Main navigation"
        >
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition-colors hover:text-teal-700 ${
                i === 0
                  ? "border-2 border-teal-400/80 text-slate-800"
                  : "text-slate-700"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: contact button on desktop, hamburger on mobile */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-teal-600 shadow-sm ring-1 ring-sky-200/80 md:flex"
            aria-label="Contact"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-sky-100 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-nav"
        className={`border-t border-sky-200/60 bg-white md:hidden ${open ? "block" : "hidden"}`}
        role="dialog"
        aria-label="Mobile menu"
      >
        <nav className="flex flex-col py-2" aria-label="Main navigation">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-sky-50 hover:text-teal-700 ${
                i === 0
                  ? "border-l-4 border-teal-500 bg-teal-50/70 text-slate-800"
                  : "text-slate-700"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-4 py-3 text-sm font-medium uppercase tracking-wide text-slate-700 hover:bg-sky-50 hover:text-teal-700"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
