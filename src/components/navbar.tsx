'use client';

import { useState } from 'react';
import Link from 'next/link';

const topics = [
  { href: '/about', label: 'About', desc: 'Project overview & our goals' },
  { href: '/impact', label: 'AI Impact', desc: 'How AI reshapes the world' },
  { href: '/timeline', label: 'Timeline', desc: 'AI milestones through history' },
  { href: '/ethics', label: 'Ethics', desc: 'Fairness & responsibility in AI' },
];

const sectors = [
  { href: '/education', label: 'Education', desc: 'AI in learning & schools' },
  { href: '/healthcare', label: 'Healthcare', desc: 'AI in medicine & diagnosis' },
  { href: '/business', label: 'Business', desc: 'AI in industry & economy' },
  { href: '/daily-life', label: 'Daily Life', desc: 'AI in everyday routines' },
  { href: '/resources', label: 'Resources', desc: 'Further reading & links' },
  { href: '/presentation', label: 'Presentation', desc: 'Our class presentation plan' },
];

const directLinks = [
  { href: '/videos', label: 'Videos' },
  { href: '/shorts', label: 'Shorts' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-px opacity-60">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-baseline gap-2"
        >
          <span className="text-base font-bold tracking-tight text-cyan-300">404 Minds</span>
          <span className="hidden text-xs text-slate-500 sm:inline">AI &amp; The Future</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">

          {/* Topics dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800/70 hover:text-cyan-300">
              Topics <ChevronDown />
            </button>
            <div className="invisible absolute left-0 top-full mt-1 w-60 rounded-2xl border border-slate-700/80 bg-slate-900 p-2 opacity-0 shadow-2xl shadow-black/40 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              {topics.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="flex flex-col rounded-xl px-3 py-2.5 transition hover:bg-slate-800"
                >
                  <span className="text-sm font-medium text-slate-200">{t.label}</span>
                  <span className="mt-0.5 text-xs text-slate-500">{t.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sectors dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800/70 hover:text-cyan-300">
              Sectors <ChevronDown />
            </button>
            <div className="invisible absolute left-0 top-full mt-1 w-60 rounded-2xl border border-slate-700/80 bg-slate-900 p-2 opacity-0 shadow-2xl shadow-black/40 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              {sectors.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex flex-col rounded-xl px-3 py-2.5 transition hover:bg-slate-800"
                >
                  <span className="text-sm font-medium text-slate-200">{s.label}</span>
                  <span className="mt-0.5 text-xs text-slate-500">{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Divider */}
          <span className="mx-1 h-5 w-px bg-slate-700" />

          {/* Direct links */}
          {directLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800/70 hover:text-cyan-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200 lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-950 lg:hidden">
          <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6">

            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-cyan-500">Topics</p>
              <div className="grid grid-cols-2 gap-2">
                {topics.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-700 hover:text-cyan-300"
                  >
                    {t.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-emerald-500">Sectors</p>
              <div className="grid grid-cols-2 gap-2">
                {sectors.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-emerald-700 hover:text-emerald-300"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">More</p>
              <div className="flex flex-wrap gap-2">
                {directLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg border border-slate-800 px-4 py-2 text-sm text-slate-300 hover:text-slate-100"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
