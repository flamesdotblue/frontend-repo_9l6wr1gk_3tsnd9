import React from 'react';

const cases = [
  {
    tag: 'E‑commerce',
    title: '7-figure launch with 4.1x ROAS',
    stat: '+312% revenue in 60 days',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: 'SaaS',
    title: 'Cut CAC by 38% with narrative-led funnel',
    stat: '+2.4x trial-to-paid',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: 'Education',
    title: 'From lurkers to learners',
    stat: '+187% qualified leads',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: 'Fintech',
    title: 'Trust-first landing raised conversions',
    stat: '+41% demo bookings',
    img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: 'Health',
    title: 'Credibility engine through social proof',
    stat: 'Bounce rate −28%',
    img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: 'Blockchain',
    title: 'Complex made clear with motion UX',
    stat: '+52% time on site',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full bg-black py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Work that moves markets</h2>
          <p className="mt-3 text-white/70">A selection of outcomes we engineered through story, structure, and relentless optimization.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute left-3 top-3 inline-flex rounded-lg bg-black/60 px-2.5 py-1 text-xs text-white/80 ring-1 ring-white/10">{c.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-orange-300">{c.stat}</p>
                <div className="mt-4 inline-flex items-center text-sm text-white/80">
                  Explore case study
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(120deg, rgba(249,115,22,0.10), transparent 50%)' }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
