import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '10.8.8 Africa | Onimison',
  description: 'Co-founder of 10.8.8 Africa. From a campus magazine at FUTMINNA to 2,000+ event guests, ₦2M+ in partnerships, and a community of 3,000+ across five years.',
};

const stats = [
  { value: '3,000+', label: 'Community Members' },
  { value: '2,000+', label: 'Event Guests (FUTCH)' },
  { value: '₦2M+',   label: 'Partnerships Raised' },
  { value: '5 Yrs',  label: 'And Still Going' },
];

const myRole = [
  {
    title: 'Co-Founder',
    body: 'One of the original people who sat in a room and decided to make something out of nothing. Every major decision — creative, strategic, operational — ran through the founding team.',
  },
  {
    title: 'Brand & Identity',
    body: 'Designed the 10.8.8 Africa logo. Built the first website. Set the visual language the brand has carried since day one.',
  },
  {
    title: 'Content & Talent',
    body: 'Wrote for the magazine and scouted the creatives, models, writers, and designers who gave 10.8.8 its creative edge. Building the team was as much the work as the output itself.',
  },
  {
    title: 'Partnerships & Fundraising',
    body: 'Helped raise over ₦2 million in partnerships across events. Learned to sell an idea to people who had no reason to believe in it yet — and close the deal.',
  },
  {
    title: 'Event Production',
    body: 'Co-produced the restaurant launch (200+ guests), three editions of FUTCH (2,000+ cumulative guests), and a campus festival that brought all tertiary institutions in Minna together.',
  },
  {
    title: 'Leadership',
    body: 'Led teams through the chaos of real events with real stakes. Showed up in ways I didn\'t know I could until the moment required it.',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'The Magazine',
    body: 'It started with a simple idea: a campus magazine for engineering students at FUTMINNA. Not just academic — lifestyle, culture, creativity. Multiple issues. Real production. Real distribution.',
  },
  {
    year: '2021',
    title: 'First Events',
    body: 'A restaurant chain opened a new campus outlet and needed a launch event. We pitched, they said yes. 200+ guests showed up. That partnership opened a new chapter for what 10.8.8 could be.',
  },
  {
    year: '2021–2022',
    title: 'FUTCH Is Born',
    body: 'The Futminna Techies and Creative Hangout — our headline event. The idea was simple: bring the builders and the creatives into the same room. The execution was anything but simple.',
  },
  {
    year: '2022',
    title: 'Going Beyond Campus',
    body: 'After graduation, we renamed FUTCH to Fusion of Techies and Creatives Hangout — keeping the brand, expanding the market. The community followed.',
  },
  {
    year: '2023–Present',
    title: 'Three Editions. Still Building.',
    body: 'Across 3 editions of FUTCH, over 2,000 guests. A campus festival. A social community of 3,000+. 10.8.8 is no longer a student project — it\'s a record of what happens when young people refuse to wait for permission.',
  },
];

export default function Africa() {
  return (
    <div className="w-full bg-bg-dark text-off-white">

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
        <ScrollReveal>
          <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-8 block">
            Work / Brand & Community
          </span>
        </ScrollReveal>

        <div className="relative">
          <ScrollReveal delay={0.1}>
            <h1 className="font-bebas text-8xl md:text-[10rem] leading-[0.8] tracking-tight relative z-10">
              10.8.8<br /><span className="text-rust">AFRICA</span>
            </h1>
          </ScrollReveal>
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 text-[10rem] md:text-[20rem] font-bebas text-off-white/[0.03] leading-none select-none pointer-events-none -translate-y-1/4"
          >
            1088
          </div>
        </div>

        <ScrollReveal delay={0.2}>
          <p className="font-cormorant italic text-2xl md:text-3xl text-off-white/70 mt-8 max-w-2xl leading-snug">
            What started as a campus magazine at FUTMINNA became events, partnerships, a headline festival, and a community of over 3,000 people. Five years of building something real.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-rust border border-rust/30 px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rust inline-block"></span>
            Co-founder · 2020 – Present · FUTMINNA &amp; Beyond
          </div>
        </ScrollReveal>
      </section>

      {/* Stats Strip */}
      <section className="bg-rust py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-bg-dark/20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4 py-2">
              <span className="font-bebas text-5xl md:text-6xl text-bg-dark leading-none">{stat.value}</span>
              <span className="font-space-mono text-[10px] uppercase tracking-widest text-bg-dark/70 mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Origin */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <h2 className="font-cormorant italic text-5xl md:text-6xl text-rust leading-tight">
              A bunch of young people who decided to make something happen.
            </h2>
          </ScrollReveal>

          <div className="space-y-6 font-space-mono text-sm leading-relaxed text-off-white/80">
            <ScrollReveal delay={0.1}>
              <p>
                10.8.8 Africa didn&apos;t start with a business plan or a pitch deck. It started with a group of engineering students at FUTMINNA who looked around at the creative energy on campus and decided someone needed to document it. We decided to be that someone.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                The magazine was the beginning — a real publication covering the lifestyle, culture, and creativity of engineering students. I wrote for it, scouted the people who made it look the way it did, and designed the logo that would become the face of everything that followed.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                Then we built the website. Then we did events. Then we built a festival. Five years later, 10.8.8 Africa is a community of 3,000+ and a brand that has outlasted our time on campus — because we built it to.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-dark-ink py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-16 block">
              How It Grew
            </span>
          </ScrollReveal>

          <div className="relative pl-8 border-l border-rust/30 space-y-16">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-rust border-2 border-bg-dark"></div>
                <span className="font-space-mono text-xs text-rust mb-2 block">{item.year}</span>
                <h3 className="font-dm-serif text-2xl md:text-3xl mb-3">{item.title}</h3>
                <p className="font-space-mono text-sm text-off-white/70 leading-relaxed max-w-2xl">{item.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FUTCH Spotlight */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-12 block">
            The Headline Event
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={0.1}>
            <h2 className="font-bebas text-7xl md:text-9xl leading-[0.85] tracking-tight">
              FUTCH<span className="text-rust">.</span>
            </h2>
            <p className="font-cormorant italic text-2xl text-off-white/70 mt-4 leading-snug">
              Fusion of Techies and Creatives Hangout.<br />3 editions. 2,000+ guests. Still going.
            </p>
          </ScrollReveal>

          <div className="space-y-6 font-space-mono text-sm leading-relaxed text-off-white/80">
            <ScrollReveal delay={0.2}>
              <p>
                FUTCH started as a simple conviction: that the builders and the creatives on campus deserved a space to meet each other. Not a seminar. Not a lecture. A real event — with energy, with purpose, with production value they&apos;d remember.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                We ran the first edition as students. We ran the next editions after graduation, renaming it Fusion of Techies and Creatives Hangout — keeping the FUTCH identity, expanding the audience. The brand survived the transition because it was never just about FUTMINNA. It was about what young Nigerians can build when they put their minds together.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p>
                Three editions. Over 2,000 cumulative guests. Partnerships closed. Money raised. Teams led. Every edition harder than the last. Every edition better.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* FUTCH Stats */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-muted-grey/20 border border-muted-grey/20">
            {[
              { value: '3', label: 'Editions Hosted', sub: 'FUTMINNA → Open Market' },
              { value: '2,000+', label: 'Cumulative Guests', sub: 'Across all editions' },
              { value: '₦2M+', label: 'In Partnerships', sub: 'Raised across the brand' },
            ].map((item, i) => (
              <div key={i} className="bg-bg-dark p-8 md:p-12 flex flex-col gap-2">
                <span className="font-bebas text-6xl text-rust leading-none">{item.value}</span>
                <span className="font-dm-serif text-xl text-off-white">{item.label}</span>
                <span className="font-space-mono text-xs text-muted-grey">{item.sub}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* My Role */}
      <section className="bg-dark-ink py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-12 block">
              What I Did
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-muted-grey/20 border border-muted-grey/20">
            {myRole.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="bg-dark-ink p-8 md:p-10 flex flex-col gap-4">
                <span className="font-space-mono text-xs text-rust uppercase tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-dm-serif text-2xl">{item.title}</h3>
                <p className="font-space-mono text-sm text-off-white/70 leading-relaxed">{item.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-muted-grey/20">
        <ScrollReveal>
          <blockquote className="font-cormorant italic text-4xl md:text-5xl text-off-white/90 max-w-4xl leading-tight">
            &ldquo;I have led and shown up in ways I never knew I could until the moment required it. 10.8.8 didn&apos;t just build a brand — it built the people building it.&rdquo;
          </blockquote>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="bg-rust py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-bebas text-6xl md:text-8xl text-bg-dark leading-[0.85]">
              STILL BUILDING.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-cormorant italic text-2xl text-bg-dark/80 mt-4 mb-12">
              10.8.8 Africa is still active. The community is still growing.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a
              href="https://instagram.com/10.8.8africa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-bg-dark text-bg-dark font-space-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-bg-dark hover:text-rust transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-bg-dark focus-visible:outline-none"
            >
              Follow on Instagram <span>→</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Back Nav */}
      <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <Link
          href="/work"
          className="font-space-mono text-xs uppercase tracking-widest text-rust hover:text-off-white transition-colors focus-visible:ring-2 focus-visible:ring-rust focus-visible:outline-none p-1 rounded-sm"
        >
          ← Back to Work
        </Link>
      </div>

    </div>
  );
}
