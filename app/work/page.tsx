import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Onimison",
  description: "Selected projects — brand, content, community, and AI systems.",
};

const projects = [
  {
    title: "Appliq",
    role: "Founder · Fullstack Developer",
    desc: "AI that rewrites your CV for every job — without inventing a single thing you haven't done. Built with Next.js, Supabase, and Google Gemini.",
    featured: true,
    href: "/work/appliq",
    external: false,
    tag: "AI SaaS",
    status: "ongoing",
  },
  {
    title: "NIGCOMSAT Media Intelligence",
    role: "AI Systems Engineer",
    desc: "An autonomous PR engine that tracks, reads, and scores national news mentions in real-time using Groq AI and automated pipelines.",
    featured: false,
    href: "/work/nigcomsat-media-intel",
    external: false,
    tag: "AI & Automation",
    status: "live",
  },
  {
    title: "10.8.8 Africa",
    role: "Co-founder · Brand",
    desc: "From a campus magazine at FUTMINNA to 3 editions of FUTCH, 2,000+ event guests, ₦2M+ in partnerships, and a community of 3,000+.",
    featured: false,
    href: "/work/10-8-8-africa",
    external: false,
    tag: "Brand & Community",
    status: "ongoing",
  },
  {
    title: "Purple University",
    role: "Founder · Content · Growth",
    desc: "Built a team, created a content engine, and took a page from zero to 2,000+ followers and 100k+ reach in under 6 months.",
    featured: false,
    href: "/work/purple-university",
    external: false,
    tag: "Content & Growth",
    status: "archived",
  },
];

const statusStyles: Record<string, string> = {
  ongoing: "bg-rust/20 text-rust",
  archived: "bg-muted-grey/20 text-muted-grey",
  completed: "bg-off-white/10 text-off-white/50",
};

const statusStylesFeatured: Record<string, string> = {
  ongoing: "bg-bg-dark/20 text-bg-dark/70",
  archived: "bg-bg-dark/10 text-bg-dark/50",
  completed: "bg-bg-dark/10 text-bg-dark/50",
};

export default function Work() {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
        <ScrollReveal>
          <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-8 block">
            02 — Projects
          </span>
        </ScrollReveal>

        <div className="relative">
          <ScrollReveal delay={0.1}>
            <h1 className="font-bebas text-8xl md:text-[12rem] leading-[0.8] tracking-tight relative z-10">
              SELECTED
              <br />
              WORK
            </h1>
          </ScrollReveal>
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 text-[15rem] md:text-[25rem] font-bebas text-off-white/5 leading-none select-none pointer-events-none -translate-y-1/4 -translate-x-1/4"
          >
            WORK
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-dark-ink py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-muted-grey/20 border border-muted-grey/20">
            {projects.map((project, i) => {
              const isFeatured = project.featured;
              const LinkEl = project.external
                ? ({
                    href,
                    className,
                    children,
                  }: {
                    href: string;
                    className: string;
                    children: React.ReactNode;
                  }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {children}
                    </a>
                  )
                : Link;

              return (
                <ScrollReveal
                  key={i}
                  delay={i * 0.1}
                  className={`group relative p-8 md:p-12 flex flex-col ${isFeatured ? "md:col-span-2 bg-rust text-bg-dark" : "bg-dark-ink text-off-white"}`}
                >
                  {/* Top Row */}
                  <div className="flex justify-between items-start mb-12">
                    <span
                      className={`font-space-mono text-xs uppercase tracking-widest ${isFeatured ? "text-bg-dark/70" : "text-rust"}`}
                    >
                      {project.role}
                    </span>
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`font-space-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm ${isFeatured ? statusStylesFeatured[project.status] : statusStyles[project.status]}`}
                      >
                        {project.tag}
                      </span>
                      <span
                        className={`font-space-mono text-sm ${isFeatured ? "text-bg-dark/30" : "text-muted-grey/30"}`}
                      >
                        0{i + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-dm-serif text-3xl md:text-4xl mb-6">
                    {project.title}
                  </h3>

                  <p
                    className={`font-space-mono text-sm leading-relaxed mb-12 flex-grow ${isFeatured ? "text-bg-dark/90" : "text-off-white/70"}`}
                  >
                    {project.desc}
                  </p>

                  <div className="mt-auto">
                    <LinkEl
                      href={project.href}
                      className={`inline-flex items-center font-space-mono text-xs uppercase tracking-widest transition-colors focus-visible:ring-2 focus-visible:ring-rust focus-visible:outline-none p-1 rounded-sm ${isFeatured ? "text-bg-dark hover:text-off-white focus-visible:ring-bg-dark" : "text-off-white hover:text-rust"}`}
                    >
                      View Details <span className="ml-2">→</span>
                    </LinkEl>
                  </div>
                </ScrollReveal>
              );
            })}
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
            <Link
              href="/storytelling"
              className="border border-bg-dark text-bg-dark font-space-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-bg-dark hover:text-rust transition-colors duration-300 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-bg-dark focus-visible:ring-offset-2 focus-visible:ring-offset-rust focus-visible:outline-none"
            >
              Read the Stories →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
