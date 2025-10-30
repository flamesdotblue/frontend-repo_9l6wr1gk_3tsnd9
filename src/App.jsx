import React from 'react';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-gradient-to-br from-orange-500 to-amber-300 shadow-[0_0_18px_2px_rgba(249,115,22,0.5)]" />
            <span className="font-semibold tracking-wide">ImpactGrid</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#value" className="hover:text-white">Why us</a>
            <a href="#portfolio" className="hover:text-white">Work</a>
            <a href="#testimonials" className="hover:text-white">Results</a>
            <a href="#contact" className="rounded-lg bg-white/5 px-3 py-1.5 hover:bg-white/10">Start</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <ValueProps />
        <Portfolio />
        <Testimonials />

        {/* CTA / Contact Strip */}
        <section id="contact" className="relative w-full bg-black py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,115,22,0.12),transparent_60%)]" />
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 text-center">
            <h3 className="text-2xl font-bold">Ready to make growth feel inevitable?</h3>
            <p className="mt-2 text-white/70">Book a free strategy session. We’ll map a 90‑day plan you can use—whether we work together or not.</p>
            <form className="mx-auto mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <input type="text" placeholder="Your name" className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-orange-400/0 transition placeholder:text-white/40 focus:ring-2" />
              <input type="email" placeholder="Email" className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-orange-400/0 transition placeholder:text-white/40 focus:ring-2" />
              <button type="submit" className="rounded-lg bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-4 py-3 font-semibold text-black shadow-lg shadow-orange-500/20 transition hover:scale-[1.01]">Get my plan</button>
            </form>
            <p className="mt-3 text-xs text-white/50">No spam. Just insight and clear next steps.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} ImpactGrid. Engineered in the details.
      </footer>
    </div>
  );
}
