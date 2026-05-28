import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { getAllProjects } from '@/lib/aiProjects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Tools & Systems | Onimison',
  description: 'Custom-built tools and systems powered by AI. Not just workflows — actual products, each with a full case study.',
};

const statusConfig = {
  live: { label: 'Live', style: 'bg-rust/20 text-rust' },
  'in-progress': { label: 'In Progress', style: 'bg-off-white/10 text-off-white/60' },
  archived: { label: 'Archived', style: 'bg-muted-grey/20 text-muted-grey' },
};

export default function AiToolsIndex() {
  const projects = getAllProjects();

  return (
    <div className="w-full bg-bg-dark text-off-white">

      {/* Page Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
        <ScrollReveal>
          <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-8 block">
            Work / AI & Systems
          </span>
        </ScrollReveal>

        <div className="relative">
          <ScrollReveal delay={0.1}>
            <h1 className="font-bebas text-8xl md:text-[10rem] leading-[0.8] tracking-tight relative z-10">
              AI TOOLS<br /><span className="text-rust">&amp; SYSTEMS</span>
            </h1>
          </ScrollReveal>
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 text-[10rem] md:text-[20rem] font-bebas text-off-white/[0.03] leading-none select-none pointer-events-none -translate-y-1/4"
          >
            BUILD
          </div>
        </div>

        <ScrollReveal delay={0.2}>
          <p className="font-cormorant italic text-2xl md:text-3xl text-off-white/70 mt-8 max-w-2xl leading-snug">
            Not just automations — tools that solve real problems. Each project is a case study: what broke, what was built, how it runs, and what changed.
          </p>
        </ScrollReveal>
      </section>

      {/* What "AI Tools & Systems" means */}
      <section className="bg-dark-ink py-16 px-6 md:px-12 border-y border-muted-grey/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-muted-grey/20">
          {[
            { label: 'What this isn\'t', body: 'Drag-and-drop templates and 5-minute Zapier setups. Anyone can do that.' },
            { label: 'What this is', body: 'Systems designed around a real problem — with error handling, edge cases, and something at the end that actually works.' },
            { label: 'Who it\'s for', body: 'Clients who need something built properly, and anyone hiring who wants to know I can think in systems, not just tools.' },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="md:px-12 first:pl-0 last:pr-0">
              <span className="font-space-mono text-[10px] uppercase tracking-widest text-rust block mb-3">{item.label}</span>
              <p className="font-space-mono text-sm text-off-white/70 leading-relaxed">{item.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-12 block">
            Case Studies — {projects.length} Project{projects.length !== 1 ? 's' : ''}
          </span>
        </ScrollReveal>

        <div className="flex flex-col divide-y divide-muted-grey/20 border-y border-muted-grey/20">
          {projects.map((project, i) => {
            const status = statusConfig[project.status];
            return (
              <ScrollReveal key={project.slug} delay={i * 0.08}>
                <Link
                  href={`/work/ai-tools/${project.slug}`}
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 px-4 -mx-4 hover:bg-off-white/[0.02] transition-colors gap-6 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rust focus-visible:outline-none rounded-sm"
                >
                  {/* Left: number + title + tagline */}
                  <div className="flex items-start gap-6 md:gap-10 flex-1 min-w-0">
                    <span className="font-space-mono text-sm text-muted-grey/40 group-hover:text-rust transition-colors shrink-0 mt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-cormorant italic text-3xl md:text-4xl text-off-white group-hover:text-rust transition-colors mb-1">
                        {project.title}
                      </h3>
                      <p className="font-space-mono text-xs text-off-white/50 leading-relaxed line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right: meta + arrow */}
                  <div className="flex items-center gap-6 md:gap-8 shrink-0 pl-10 md:pl-0">
                    {/* Tools */}
                    <div className="hidden md:flex flex-wrap gap-1.5 max-w-[200px] justify-end">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span key={tool} className="font-space-mono text-[10px] uppercase tracking-widest text-muted-grey border border-muted-grey/30 px-2 py-0.5">
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Status */}
                    <span className={`font-space-mono text-[10px] uppercase tracking-widest px-2 py-1 ${status.style} shrink-0`}>
                      {status.label}
                    </span>

                    {/* Year */}
                    <span className="font-space-mono text-xs text-muted-grey shrink-0 hidden lg:inline">
                      {project.year}
                    </span>

                    {/* Arrow */}
                    <span className="font-space-mono text-sm text-muted-grey group-hover:text-rust group-hover:translate-x-1 transition-all duration-200">
                      →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* More coming */}
        <ScrollReveal delay={0.2} className="mt-16 pt-8 border-t border-muted-grey/20">
          <p className="font-space-mono text-xs text-muted-grey uppercase tracking-widest">
            More projects being documented — check back soon.
          </p>
        </ScrollReveal>
      </section>

      {/* Back Nav */}
      <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto border-t border-muted-grey/20">
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
