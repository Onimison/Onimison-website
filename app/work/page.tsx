import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function Work() {
  const projects = [
    {
      title: "10.8.8 Africa",
      role: "Co-founder, Brand Identity, Web",
      desc: "From zero to organisation. Designed the original identity, built the first website, and co-built everything that followed — events, partnerships, fundraising, the full structure.",
      featured: true,
    },
    {
      title: "Creator Brand Platform",
      role: "Next.js, Make, Airtable, Resend",
      desc: "A custom digital home for a creator, integrating content, newsletter, and automated workflows.",
      featured: false,
    },
    {
      title: "Purple University",
      role: "Content/Leadership",
      desc: "Led community growth, educational content, and strategic initiatives for a growing digital academy.",
      featured: false,
    },
    {
      title: "Automation Workflows",
      role: "n8n, Make, Airtable, Zapier",
      desc: "Complex, multi-step automations connecting CRMs, email marketing, and internal tools to save hundreds of hours.",
      featured: false,
    },
    {
      title: "Corporate Social Campaign",
      role: "NIGCOMSAT",
      desc: "Digital strategy and execution for a major corporate social responsibility campaign.",
      featured: false,
    }
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
        <ScrollReveal>
          <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-8 block">02 — Projects</span>
        </ScrollReveal>

        <div className="relative">
          <ScrollReveal delay={0.1}>
            <h1 className="font-bebas text-8xl md:text-[12rem] leading-[0.8] tracking-tight relative z-10">
              SELECTED<br />WORK
            </h1>
          </ScrollReveal>
          <div aria-hidden="true" className="absolute top-0 left-0 text-[15rem] md:text-[25rem] font-bebas text-off-white/5 leading-none select-none pointer-events-none -translate-y-1/4 -translate-x-1/4">
            WORK
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-dark-ink py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-muted-grey/20 border border-muted-grey/20">
            {projects.map((project, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.1}
                className={`group relative p-8 md:p-12 flex flex-col ${project.featured ? 'md:col-span-2 bg-rust text-bg-dark' : 'bg-dark-ink text-off-white'}`}
              >
                <div className="flex justify-between items-start mb-12">
                  <span className={`font-space-mono text-xs uppercase tracking-widest ${project.featured ? 'text-bg-dark/70' : 'text-rust'}`}>
                    {project.role}
                  </span>
                  <span className={`font-space-mono text-sm ${project.featured ? 'text-bg-dark/30' : 'text-muted-grey/30'}`}>
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-dm-serif text-3xl md:text-4xl mb-6">{project.title}</h3>

                <p className={`font-space-mono text-sm leading-relaxed mb-12 flex-grow ${project.featured ? 'text-bg-dark/90' : 'text-off-white/70'}`}>
                  {project.desc}
                </p>

                <div className="mt-auto">
                  <Link href="#contact" className={`inline-flex items-center font-space-mono text-xs uppercase tracking-widest transition-colors focus-visible:ring-2 focus-visible:ring-rust focus-visible:outline-none p-1 rounded-sm ${project.featured ? 'text-bg-dark hover:text-off-white focus-visible:ring-bg-dark' : 'text-off-white hover:text-rust'}`}>
                    View Details <span className="ml-2">→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-rust w-full py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <ScrollReveal>
            <p className="font-cormorant italic text-3xl md:text-4xl text-bg-dark max-w-xl">
              Some people build. Some people write. Onimison does both.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link href="/fiction" className="border border-bg-dark text-bg-dark font-space-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-bg-dark hover:text-rust transition-colors duration-300 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-bg-dark focus-visible:ring-offset-2 focus-visible:ring-offset-rust focus-visible:outline-none">
              Read the Fiction →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
