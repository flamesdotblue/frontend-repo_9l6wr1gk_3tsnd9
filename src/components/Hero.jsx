import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white" id="home">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to blend with brand colors */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,115,0,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-28">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_18px_2px_rgba(249,115,22,0.6)]" />
          ImpactGrid • Digital Growth Agency
        </span>

        <h1 className="max-w-5xl bg-gradient-to-b from-white to-white/80 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Turn Curious Clicks into Paying Customers
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/80 sm:text-lg">
          We blend psychology, motion, and performance marketing to engineer moments of awe that convert. Stop chasing attention—command it.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-6 py-3 font-semibold text-black shadow-lg shadow-orange-500/20 transition hover:scale-[1.02] hover:shadow-orange-400/30"
          >
            Get My Growth Plan
            <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            See Our Work
          </a>
        </div>

        <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-4 text-left sm:grid-cols-4">
          {[
            { kpi: '3.2x', label: 'Avg. ROAS in 90 days' },
            { kpi: '+187%', label: 'Lift in qualified leads' },
            { kpi: '42s', label: 'Avg. time on page' },
            { kpi: 'A/B', label: 'Tested, never guessed' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="text-2xl font-bold text-white">{item.kpi}</div>
              <div className="text-xs text-white/60">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
