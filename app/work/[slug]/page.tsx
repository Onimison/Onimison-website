import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllProjects, getProjectBySlug } from "@/lib/aiProjects";
import type { Metadata } from "next";

// ── Static params for Next.js static generation ──────────────────────────────
export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

// ── Dynamic metadata ──────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found | Onimison" };
  return {
    title: `${project.title} | AI Tools & Systems | Onimison`,
    description: project.tagline,
  };
}

const statusConfig = {
  live: { label: "Live", style: "bg-rust/20 text-rust" },
  "in-progress": {
    label: "In Progress",
    style: "bg-off-white/10 text-off-white/60",
  },
  archived: { label: "Archived", style: "bg-muted-grey/20 text-muted-grey" },
};

const sectionLabels = [
  { key: "problem", num: "01", label: "The Problem" },
  { key: "build", num: "02", label: "The Build" },
  { key: "howItWorks", num: "03", label: "How It Works" },
  { key: "reliability", num: "04", label: "Reliability" },
  { key: "result", num: "05", label: "The Result" },
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const status = statusConfig[project.status];

  return (
    <div className="w-full bg-bg-dark text-off-white">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
        <ScrollReveal>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey">
              Work / AI Tools &amp; Systems /
            </span>
            <span className="font-space-mono text-xs uppercase tracking-widest text-rust">
              {project.category}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-bebas text-7xl md:text-[9rem] leading-[0.85] tracking-tight">
            {project.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-cormorant italic text-2xl md:text-3xl text-off-white/70 mt-6 max-w-3xl leading-snug">
            {project.tagline}
          </p>
        </ScrollReveal>

        {/* Meta row */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span
              className={`font-space-mono text-[10px] uppercase tracking-widest px-3 py-1.5 ${status.style}`}
            >
              {status.label}
            </span>
            <span className="font-space-mono text-xs text-muted-grey">
              {project.year}
            </span>
            <span className="text-muted-grey/30">·</span>
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="font-space-mono text-[10px] uppercase tracking-widest text-muted-grey border border-muted-grey/30 px-2 py-1"
              >
                {tool}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Live URL button */}
        {project.liveUrl && (
          <ScrollReveal delay={0.4}>
            <div className="mt-8">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-rust text-bg-dark font-space-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-off-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark focus-visible:outline-none"
              >
                <span className="w-2 h-2 rounded-full bg-bg-dark animate-pulse inline-block"></span>
                View Live Project →
              </a>
            </div>
          </ScrollReveal>
        )}
      </section>

      {/* ── Section Nav Strip ─────────────────────────────────────────────── */}
      <nav
        aria-label="Case study sections"
        className="bg-dark-ink border-y border-muted-grey/20 overflow-x-auto"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ol className="flex items-center gap-0 min-w-max">
            {sectionLabels.map((s, i) => (
              <li key={s.key} className="flex items-center">
                <a
                  href={`#${s.key}`}
                  className="flex items-center gap-2 py-4 px-4 font-space-mono text-xs uppercase tracking-widest text-muted-grey hover:text-rust transition-colors focus-visible:ring-2 focus-visible:ring-rust focus-visible:outline-none"
                >
                  <span className="text-rust/60">{s.num}</span>
                  {s.label}
                </a>
                {i < sectionLabels.length - 1 && (
                  <span className="text-muted-grey/20 select-none">·</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* ── 01 · The Problem ──────────────────────────────────────────────── */}
      <section
        id="problem"
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24"
      >
        <ScrollReveal>
          <div className="flex items-baseline gap-4 mb-12">
            <span className="font-space-mono text-xs text-rust uppercase tracking-widest">
              01
            </span>
            <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey">
              The Problem
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal delay={0.1}>
            <h2 className="font-cormorant italic text-5xl md:text-6xl text-rust leading-tight">
              {project.problem.heading}
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {project.problem.body.map((para, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.05}>
                <p className="font-space-mono text-sm leading-relaxed text-off-white/80">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 · The Build ────────────────────────────────────────────────── */}
      <section
        id="build"
        className="bg-dark-ink py-24 px-6 md:px-12 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12">
              <span className="font-space-mono text-xs text-rust uppercase tracking-widest">
                02
              </span>
              <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey">
                The Build
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <ScrollReveal delay={0.1}>
              <h2 className="font-cormorant italic text-5xl md:text-6xl text-off-white leading-tight">
                {project.build.heading}
              </h2>
            </ScrollReveal>
            <div className="space-y-6">
              {project.build.body.map((para, i) => (
                <ScrollReveal key={i} delay={0.1 + i * 0.05}>
                  <p className="font-space-mono text-sm leading-relaxed text-off-white/80">
                    {para}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Optional build steps */}
          {project.build.steps && project.build.steps.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-muted-grey/20 border border-muted-grey/20">
              {project.build.steps.map((step, i) => (
                <ScrollReveal
                  key={i}
                  delay={i * 0.1}
                  className="bg-dark-ink p-8 md:p-10 flex flex-col gap-3"
                >
                  <span className="font-space-mono text-xs text-rust uppercase tracking-widest">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-dm-serif text-xl text-off-white">
                    {step.title}
                  </h3>
                  <p className="font-space-mono text-sm text-off-white/60 leading-relaxed">
                    {step.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── 03 · How It Works ─────────────────────────────────────────────── */}
      <section
        id="howItWorks"
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24"
      >
        <ScrollReveal>
          <div className="flex items-baseline gap-4 mb-12">
            <span className="font-space-mono text-xs text-rust uppercase tracking-widest">
              03
            </span>
            <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey">
              How It Works
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <ScrollReveal delay={0.1}>
            <h2 className="font-cormorant italic text-5xl md:text-6xl text-rust leading-tight">
              {project.howItWorks.heading}
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {project.howItWorks.body.map((para, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.05}>
                <p className="font-space-mono text-sm leading-relaxed text-off-white/80">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Optional flow diagram */}
        {project.howItWorks.flow && project.howItWorks.flow.length > 0 && (
          <div className="relative">
            {/* Connector line */}
            <div
              className="absolute top-8 left-0 right-0 h-px bg-rust/20 hidden md:block"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-none lg:flex gap-0 relative z-10">
              {project.howItWorks.flow.map((node, i) => (
                <ScrollReveal
                  key={i}
                  delay={i * 0.1}
                  className="flex-1 flex flex-col items-start md:items-center text-left md:text-center p-6 gap-4"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-rust flex items-center justify-center bg-bg-dark shrink-0">
                    <span className="font-space-mono text-sm text-rust">
                      {node.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-dm-serif text-xl text-off-white mb-2">
                      {node.label}
                    </h4>
                    <p className="font-space-mono text-xs text-off-white/60 leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                  {i < project.howItWorks.flow!.length - 1 && (
                    <span className="md:hidden font-space-mono text-rust self-center">
                      ↓
                    </span>
                  )}
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ── 04 · Reliability ──────────────────────────────────────────────── */}
      <section
        id="reliability"
        className="bg-dark-ink py-24 px-6 md:px-12 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12">
              <span className="font-space-mono text-xs text-rust uppercase tracking-widest">
                04
              </span>
              <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey">
                Reliability
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <ScrollReveal delay={0.1}>
              <h2 className="font-cormorant italic text-5xl md:text-6xl text-off-white leading-tight">
                {project.reliability.heading}
              </h2>
            </ScrollReveal>
            <div className="space-y-6">
              {project.reliability.body.map((para, i) => (
                <ScrollReveal key={i} delay={0.1 + i * 0.05}>
                  <p className="font-space-mono text-sm leading-relaxed text-off-white/80">
                    {para}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Optional challenge/solution pairs */}
          {project.reliability.items &&
            project.reliability.items.length > 0 && (
              <div className="border border-muted-grey/20 divide-y divide-muted-grey/20">
                {project.reliability.items.map((item, i) => (
                  <ScrollReveal
                    key={i}
                    delay={i * 0.08}
                    className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-muted-grey/20"
                  >
                    <div className="p-6 md:p-8 flex flex-col gap-2">
                      <span className="font-space-mono text-[10px] uppercase tracking-widest text-muted-grey">
                        Challenge
                      </span>
                      <p className="font-space-mono text-sm text-off-white/80 leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col gap-2">
                      <span className="font-space-mono text-[10px] uppercase tracking-widest text-rust">
                        Solution
                      </span>
                      <p className="font-space-mono text-sm text-off-white/80 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
        </div>
      </section>

      {/* ── 05 · The Result ───────────────────────────────────────────────── */}
      <section id="result" className="bg-rust py-24 px-6 md:px-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-12">
              <span className="font-space-mono text-xs text-bg-dark/70 uppercase tracking-widest">
                05
              </span>
              <span className="font-space-mono text-xs uppercase tracking-widest text-bg-dark/70">
                The Result
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <ScrollReveal delay={0.1}>
              <h2 className="font-cormorant italic text-5xl md:text-6xl text-bg-dark leading-tight">
                {project.result.heading}
              </h2>
            </ScrollReveal>
            <div className="space-y-6">
              {project.result.body.map((para, i) => (
                <ScrollReveal key={i} delay={0.1 + i * 0.05}>
                  <p className="font-space-mono text-sm leading-relaxed text-bg-dark/90">
                    {para}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Optional metrics */}
          {project.result.metrics && project.result.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[2px] bg-bg-dark/10 border border-bg-dark/10">
              {project.result.metrics.map((metric, i) => (
                <ScrollReveal
                  key={i}
                  delay={i * 0.1}
                  className="bg-rust p-8 flex flex-col gap-2"
                >
                  <span className="font-bebas text-5xl text-bg-dark leading-none">
                    {metric.value}
                  </span>
                  <span className="font-space-mono text-[10px] uppercase tracking-widest text-bg-dark/70">
                    {metric.label}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Back / Forward Nav ────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto border-t border-muted-grey/20 flex justify-start items-center">
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
