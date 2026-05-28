import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purple University | Onimison",
  description:
    "Took a page from zero to 2,000+ followers and 100k+ reach in under 6 months. Content strategy, team leadership, and community building.",
};

const stats = [
  { value: "2,000+", label: "Followers Gained" },
  { value: "100k+", label: "Organic Reach" },
  { value: "<6 Months", label: "Time to Results" },
];

const contributions = [
  {
    title: "Team Building",
    body: "Assembled and led the content team from scratch. Defined roles, set the creative direction, and built a system where everyone knew what they were doing and why it mattered.",
  },
  {
    title: "Content Strategy",
    body: "Designed the content engine — formats, cadence, tone, and distribution. Every post had a purpose. The 100k+ reach was the result of system-thinking, not posting and praying.",
  },
  {
    title: "Community Growth",
    body: "Took the page from zero followers to a real community. Built engagement loops, managed the audience relationship, and created content that made people want to stay.",
  },
];

export default function PurpleUniversity() {
  return (
    <div className="w-full bg-bg-dark text-off-white">
      {/* Page Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
        <ScrollReveal>
          <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-8 block">
            Work / Content & Growth
          </span>
        </ScrollReveal>

        <div className="relative">
          <ScrollReveal delay={0.1}>
            <h1 className="font-bebas text-8xl md:text-[10rem] leading-[0.8] tracking-tight relative z-10">
              PURPLE
              <br />
              UNIVERSITY
            </h1>
          </ScrollReveal>
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 text-[12rem] md:text-[20rem] font-bebas text-off-white/[0.03] leading-none select-none pointer-events-none -translate-y-1/4 -translate-x-1/8"
          >
            PURPLE
          </div>
        </div>

        <ScrollReveal delay={0.2}>
          <p className="font-cormorant italic text-2xl md:text-3xl text-off-white/70 mt-8 max-w-2xl leading-snug">
            Zero to 2,000 followers. Over 100,000 organic reach. Under six
            months. One team, one strategy, no ad spend.
          </p>
        </ScrollReveal>

        {/* Status Badge */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-muted-grey border border-muted-grey/30 px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-grey inline-block"></span>
            Archived · No Longer Active · 2022
          </div>
        </ScrollReveal>
      </section>

      {/* Stats Strip */}
      <section className="bg-rust py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-bg-dark/20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4"
            >
              <span className="font-bebas text-5xl md:text-6xl text-bg-dark leading-none">
                {stat.value}
              </span>
              <span className="font-space-mono text-[10px] uppercase tracking-widest text-bg-dark/70 mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* What It Was */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <h2 className="font-cormorant italic text-5xl md:text-6xl text-rust leading-tight">
              Content that moved without a budget.
            </h2>
          </ScrollReveal>

          <div className="space-y-6 font-space-mono text-sm leading-relaxed text-off-white/80">
            <ScrollReveal delay={0.1}>
              <p>
                Purple University was a digital community for young Nigerian
                creatives who wanted to learn how to build something real. The
                page wasn&apos;t backed by money — it was backed by consistency,
                clear positioning, and a team that understood what they were
                making and who it was for.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                I put together the team, defined the content strategy, and drove
                the operation. We grew from zero to over 2,000 followers with
                more than 100,000 organic impressions — all within six months,
                all without paid promotion.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                I moved on from the project in 2022. The page still exists. The
                work stands on its own.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What I Did */}
      <section className="bg-dark-ink py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-12 block">
              My Contributions
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-muted-grey/20 border border-muted-grey/20">
            {contributions.map((item, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.1}
                className="bg-dark-ink p-8 md:p-10 flex flex-col gap-4"
              >
                <span className="font-space-mono text-xs text-rust uppercase tracking-widest">
                  0{i + 1}
                </span>
                <h3 className="font-dm-serif text-2xl">{item.title}</h3>
                <p className="font-space-mono text-sm text-off-white/70 leading-relaxed">
                  {item.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Lesson */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-muted-grey/20">
        <ScrollReveal>
          <blockquote className="font-cormorant italic text-4xl md:text-5xl text-off-white/90 max-w-4xl leading-tight">
            &ldquo;Growth isn&apos;t about volume. It&apos;s about building
            something people want to come back to. We built that — and I learned
            what it actually takes to lead creative teams under pressure.&rdquo;
          </blockquote>
        </ScrollReveal>
      </section>

      {/* CTA — See It Live */}
      <section className="bg-rust py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-bebas text-6xl md:text-8xl text-bg-dark leading-[0.85]">
              SEE THE PAGE.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-cormorant italic text-2xl text-bg-dark/80 mt-4 mb-12">
              The community still exists on Instagram. The numbers are real.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a
              href="https://instagram.com/purpleuniversity"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-bg-dark text-bg-dark font-space-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-bg-dark hover:text-rust transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-bg-dark focus-visible:outline-none"
            >
              View on Instagram <span>→</span>
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
