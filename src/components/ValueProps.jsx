import React from 'react';
import { Rocket, Target, Shield, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Conversion-First Creative',
    desc: 'Design that earns attention and guides action. Every pixel and word is engineered to reduce friction and amplify intent.',
  },
  {
    icon: Target,
    title: 'Psychology-Driven Messaging',
    desc: 'We craft narratives that trigger desire, authority, and urgency—rooted in behavioral science, not gut feelings.',
  },
  {
    icon: Shield,
    title: 'Performance with Proof',
    desc: 'Every decision is tracked, tested, and iterated. We don’t just ship campaigns—we scale winners.',
  },
  {
    icon: Sparkles,
    title: 'Awe that Converts',
    desc: 'Immersive visuals and motion that make people feel something—and act on it. Beautiful isn’t enough. Effective is non‑negotiable.',
  },
];

export default function ValueProps() {
  return (
    <section id="value" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_10%,rgba(255,140,0,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Marketing that feels inevitable</h2>
          <p className="mt-3 text-white/70">
            When your offer is framed right, the next step becomes obvious. We turn uncertainty into desire and clicks into customers.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-orange-400/30">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(120deg, rgba(249,115,22,0.08), transparent 40%)' }} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-300/10 p-3 text-orange-400 ring-1 ring-inset ring-orange-400/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
