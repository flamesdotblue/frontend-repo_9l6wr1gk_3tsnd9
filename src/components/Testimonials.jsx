import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maya Chen',
    role: 'CMO, HelixFit',
    quote:
      'ImpactGrid understood our buyer better than we did. The first week after launch we saw a 2.8x lift in checkouts—and it kept climbing.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Jonas Patel',
    role: 'Founder, Stackwise',
    quote:
      'They didn’t just redesign our site—they rebuilt our story. Demos doubled. Our pipeline finally feels inevitable.',
    avatar: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Elise Martín',
    role: 'Head of Growth, Verde',
    quote:
      'Every suggestion came with data and a test plan. The clarity and speed were unmatched. Partners, not vendors.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_10%,rgba(255,115,22,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Proof in people’s words</h2>
          <p className="mt-3 text-white/70">We win when you win. Here’s what that looks like in real life.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-white/60">{t.role}</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-orange-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-300" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-white/80">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
