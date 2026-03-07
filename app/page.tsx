import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <ScrollReveal>
              <span className="font-space-mono text-xs uppercase tracking-[0.2em] text-muted-grey mb-6 block">
                Builder · Fiction Writer · Operator
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
              <Link href="/work" className="bg-rust text-bg-dark font-space-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-off-white transition-colors duration-300">
                See the Work
              </Link>
              <Link href="#contact" className="border border-rust text-rust font-space-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-rust hover:text-bg-dark transition-colors duration-300">
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
          <div className="flex flex-wrap justify-between items-center px-6 md:px-12 py-4 font-space-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-grey">
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
              <span>FICTION WRITING</span>
              <span>✦</span>
              <span>BRAND BUILDING</span>
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
                  It started with Photoshop. Then it bled into frontend development because I wanted the things I designed to actually exist. Then came fiction, because code couldn&apos;t hold everything I needed to say.
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
              { title: "NIGCOMSAT + Freelance", date: "2024–Present", desc: "Building digital infrastructure and systems." },
              { title: "Crypto/Degen Era", date: "2021–2023", desc: "Made real money. Lost it. Learned the mechanics of hype and value." },
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

      {/* Services Section */}
      <section id="services" className="bg-cream text-dark-ink py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <ScrollReveal>
              <h2 className="font-bebas text-7xl md:text-8xl leading-[0.85] tracking-tight">
                I BUILD<br />THINGS THAT<br /><span className="text-rust">WORK.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="flex items-end">
              <p className="font-space-mono text-sm leading-relaxed max-w-md">
                No agency overhead. No guesswork. I bring the full range — frontend that looks like someone cared, automations that actually run, and content strategy backed by experience building real audiences.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: "■", title: "Website Design & Dev", desc: "Custom, performant sites built with Next.js and Tailwind. No generic templates." },
              { icon: "▲", title: "Automation & AI Systems", desc: "Workflows that save hours. Make, Airtable, Zapier, and custom integrations." },
              { icon: "●", title: "Content & Social Strategy", desc: "Audience building that doesn&apos;t feel like marketing. Honest, effective copy." }
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group border border-dark-ink/10 p-8 hover:border-rust transition-colors duration-300 relative h-full flex flex-col">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-rust scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                  <span className="text-rust text-2xl mb-6 block">{service.icon}</span>
                  <h3 className="font-bebas text-3xl tracking-wide mb-4">{service.title}</h3>
                  <p className="font-space-mono text-xs leading-relaxed text-dark-ink/70 mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <Link href="#contact" className="font-space-mono text-xs uppercase tracking-widest text-rust group-hover:text-dark-ink transition-colors mt-auto inline-flex items-center">
                    Start a project <span className="ml-2">→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="border-t border-dark-ink/10 pt-8 flex flex-wrap gap-6 font-space-mono text-xs uppercase tracking-widest text-dark-ink/50">
              <span>Next.js</span>
              <span>Make</span>
              <span>Airtable</span>
              <span>Zapier</span>
              <span>Resend</span>
              <span>Tally</span>
              <span>Figma</span>
              <span>n8n</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-8 block">05 — Contact</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h2 className="font-bebas text-7xl md:text-9xl leading-[0.85] tracking-tight mb-6">
            LET&apos;S<br />BUILD<br />SOMETHING.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="font-cormorant italic text-2xl text-muted-grey mb-12">
            Whether it&apos;s code, copy, or systems.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <a href="mailto:HELLO@ONIMISON.COM" className="font-space-mono text-xl md:text-3xl text-rust border-b-2 border-rust pb-2 hover:text-off-white hover:border-off-white transition-colors duration-300 inline-block mb-20">
            HELLO@ONIMISON.COM
          </a>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-8 font-space-mono text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-rust transition-colors">Substack</a>
            <a href="#" className="hover:text-rust transition-colors">Twitter/X</a>
            <a href="#" className="hover:text-rust transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-rust transition-colors">Instagram</a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
