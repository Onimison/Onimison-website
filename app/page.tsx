import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { fetchSubstackFeed } from '@/lib/substack';
import { span } from 'motion/react-client';

export default async function Home() {
  const stories = await fetchSubstackFeed();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <ScrollReveal>
              <span className="font-space-mono text-xs uppercase tracking-[0.2em] text-muted-grey mb-6 block">
                Builder · Storyteller · Operator
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-bebas text-8xl md:text-[10rem] leading-[0.85] tracking-tight mb-2">
                ONIMI<span className="text-rust">SON</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="w-full">
              <div className="w-24 h-1 bg-rust my-8"></div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="font-cormorant italic text-2xl md:text-3xl text-off-white/90 max-w-xl leading-snug mb-10">
                Designer turned dev. Dev turned writer. Writer turned operator. No clean title — just an unusual combination of range, scars, and taste.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="flex flex-wrap gap-4">
              <Link href="/work" className="bg-rust text-bg-dark font-space-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-off-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark focus-visible:outline-none">
                See the Work
              </Link>
              <Link href="#contact" className="border border-rust text-rust font-space-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-rust hover:text-bg-dark transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark focus-visible:outline-none">
                Let&apos;s Talk
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Column - Abstract Collage */}
          <div className="relative h-[60vh] hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <span className="font-bebas text-[15rem] -rotate-90 tracking-tighter select-none">ONIMISON</span>
            </div>

            {/* Geometric Shapes */}
            <ScrollReveal delay={0.5} className="absolute top-1/4 left-1/4 w-32 h-48 bg-rust mix-blend-screen"></ScrollReveal>
            <ScrollReveal delay={0.6} className="absolute top-1/3 right-1/4 w-40 h-40 border-2 border-off-white/30"></ScrollReveal>
            <ScrollReveal delay={0.7} className="absolute bottom-1/4 left-1/3 w-1 h-64 bg-muted-grey/50"></ScrollReveal>
            <ScrollReveal delay={0.8} className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-[#d4af37]/80 mix-blend-screen"></ScrollReveal>
          </div>
        </div>

        {/* Bottom Stat Strip */}
        <div className="absolute bottom-0 left-0 w-full border-t border-muted-grey/20 bg-bg-dark/80 backdrop-blur-sm z-20">
          <div className="flex flex-wrap justify-between items-center px-6 md:px-12 py-4 font-space-mono text-xs md:text-sm uppercase tracking-widest text-muted-grey">
            <span>5+ Years Building</span>
            <span className="hidden sm:inline">/</span>
            <span>10.8.8 Co-founder</span>
            <span className="hidden md:inline">/</span>
            <span className="hidden md:inline">2K+ Community Built</span>
            <span className="hidden lg:inline">/</span>
            <span className="text-rust">∞ Still Figuring It Out</span>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-rust py-4 overflow-hidden whitespace-nowrap flex items-center">
        <div className="animate-marquee flex space-x-8 items-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex space-x-8 items-center font-bebas text-4xl tracking-wider text-bg-dark">
              <span>WEB DEVELOPMENT</span>
              <span>✦</span>
              <span>AI & AUTOMATION</span>
              <span>✦</span>
              <span>STORYTELLING</span>
              <span>✦</span>
              <span>10.8.8 AFRICA</span>
              <span>✦</span>
              <span>CONTENT STRATEGY</span>
              <span>✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-12 block">01 — About</span>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <ScrollReveal>
              <h2 className="font-cormorant italic text-5xl md:text-6xl text-rust leading-tight">
                No clean title. Just range.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="font-space-mono text-sm leading-relaxed text-off-white/80 space-y-6">
                <p>
                  It started with Photoshop. Then it bled into frontend development because I wanted the things I designed to actually exist. Then came storytelling, because code couldn&apos;t hold everything I needed to say.
                </p>
                <p>
                  I co-founded 10.8.8 Africa, built the brand, and led Purple University. I spent years in the crypto trenches — made real money, lost it, learned how systems actually work when the hype dies.
                </p>
                <p>
                  Now, I build digital infrastructure for NIGCOMSAT and take on freelance projects that require more than just a template. I don&apos;t fit neatly into a box, and I stopped trying to.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative pl-8 border-l border-rust/30 space-y-12">
            {[
              { title: "NIGCOMSAT + Freelance", date: "2024–Present", desc: "Creating contents for social media and playing around with AI systems." },
              { title: "Crypto/Degen Era", date: "2022–2024", desc: "Made real money. Lost it. Learned the mechanics of hype and value." },
              { title: "Frontend Developer at Paritie Innovation Hub", date: "2023–2024", desc: "Built functional frontend for in house projects and i taught JavaScript to a bunch of interns." },
              { title: "Purple University Founder", date: "2020–2022", desc: "Led community, content, and education initiatives." },
              { title: "10.8.8 Africa Co-founder", date: "2021–Present", desc: "Built the brand, the first site, and the structure." }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="relative">
                <div className="absolute -left-[37px] top-1 w-2 h-2 rounded-full bg-rust"></div>
                <span className="font-space-mono text-xs text-rust mb-2 block">{item.date}</span>
                <h3 className="font-dm-serif text-2xl mb-2">{item.title}</h3>
                <p className="font-space-mono text-xs text-muted-grey">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section id="storytelling" className="bg-cream text-dark-ink py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="font-space-mono text-xs uppercase tracking-widest text-rust mb-12 block">03 — Storytelling</span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-cormorant italic text-6xl md:text-8xl leading-none mb-16 text-dark-ink">
              Stories that don&apos;t wrap up neatly.
            </h2>
          </ScrollReveal>

          <div className="border-t border-dark-ink/20">
            {stories.slice(0, 4).map((story, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link href={story.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-dark-ink/20 hover:bg-dark-ink/5 transition-colors px-4 -mx-4 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rust focus-visible:outline-none rounded-sm">
                  <div className="flex items-center gap-8 mb-4 md:mb-0 w-full md:w-auto">
                    <span className="font-space-mono text-xs text-dark-ink/40 group-hover:text-rust transition-colors w-8">
                      0{i + 1}
                    </span>
                    <div className="flex flex-col gap-2">
                      <span className="font-space-mono text-[10px] uppercase tracking-widest text-rust">
                        {new Date(story.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <h3 className="font-cormorant italic text-3xl md:text-4xl text-dark-ink group-hover:text-rust transition-colors line-clamp-2">
                        {story.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 w-full md:w-auto pl-16 md:pl-0">
                    <div
                      className="font-space-mono text-xs text-dark-ink/60 max-w-xs line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: story.description }}
                    />
                    <span className="font-space-mono text-[10px] uppercase tracking-widest text-dark-ink/50 border border-dark-ink/20 px-3 py-1 rounded-full whitespace-nowrap group-hover:border-rust group-hover:text-rust transition-colors">
                      Substack
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4} className="mt-20">
            <Link href="/storytelling" className="inline-flex items-center font-space-mono text-xs uppercase tracking-widest text-rust hover:text-dark-ink transition-colors focus-visible:ring-2 focus-visible:ring-rust focus-visible:outline-none p-1 rounded-sm">
              View All Stories <span className="ml-2">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>


    </div>
  );
}
