import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIGCOMSAT | Onimison",
  description:
    "Led a team of interns producing video content for Nigeria's national satellite agency during NYSC. Strategy, direction, and social media execution.",
};

// ─── Edit this data to add/remove videos ───────────────────────────────────
// platform: 'instagram' | 'twitter' | 'youtube' | 'other'
// url: the full link to the post or video
// type: 'video' | 'reel' | 'post'
const workSamples: {
  id: number;
  title: string;
  description: string;
  platform: "instagram" | "twitter" | "youtube" | "other";
  url: string;
  type: "video" | "reel" | "post";
}[] = [
  {
    id: 1,
    title: "NIGCOMSAT Reel — Vol. 1",
    description:
      "Directed and shot for NIGCOMSAT's official Instagram. Part of the content push to give a government satellite agency a more human, engaging social presence.",
    platform: "instagram",
    url: "https://www.instagram.com/reel/DVdtskIjFK1/?igsh=MThha2szODkwZG55dQ==",
    type: "reel",
  },
  {
    id: 2,
    title: "NIGCOMSAT Reel — Vol. 2",
    description:
      "Shot and directed during my NYSC posting. Conceptualised the brief, led the intern team on set, and oversaw editing to match the agency's communication goals.",
    platform: "instagram",
    url: "https://www.instagram.com/reel/DOaqWCcDEBz/?igsh=MWV6Mzhtb3pydTd2NQ==",
    type: "reel",
  },
  {
    id: 3,
    title: "NIGCOMSAT Reel — Vol. 3",
    description:
      "One of several reels produced for NIGCOMSAT's social channels. Strategy, direction, and production led entirely by the intern team I managed.",
    platform: "instagram",
    url: "https://www.instagram.com/reel/DOn-Y1dDDg7/?igsh=MXhtdTh1cWx2OXU5bg==",
    type: "reel",
  },
  // ── Add more videos below as you gather them ────────────────────────────
];
// ──────────────────────────────────────────────────────────────────────────

const platformLabels: Record<string, string> = {
  instagram: "Instagram",
  twitter: "Twitter / X",
  youtube: "YouTube",
  other: "View",
};

const typeLabels: Record<string, string> = {
  reel: "Reel",
  video: "Video",
  post: "Post",
};

const stats = [
  { value: "NYSC", label: "Service Year" },
  { value: "Gov't", label: "Client Type" },
  { value: "Team Lead", label: "My Role" },
];

const whatILed = [
  {
    title: "Intern Team Leadership",
    body: "Managed and directed a team of interns throughout the NYSC posting. Set the creative brief, maintained quality control, and kept everyone moving in the same direction even without a formal budget.",
  },
  {
    title: "Video Production Strategy",
    body: "Defined what kind of content a government satellite agency should actually be putting out — not just press releases, but content people engage with. Directed the shoots and oversaw editing.",
  },
  {
    title: "Social Media Execution",
    body: "Managed distribution across Instagram and other platforms. Built the posting cadence, wrote captions, and tracked what was working. Turned a dormant social presence into an active one.",
  },
];

export default function Nigcomsat() {
  return (
    <div className="w-full bg-bg-dark text-off-white">
      {/* Page Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
        <ScrollReveal>
          <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-8 block">
            Work / Video & Leadership
          </span>
        </ScrollReveal>

        <div className="relative">
          <ScrollReveal delay={0.1}>
            <h1 className="font-bebas text-8xl md:text-[9rem] leading-[0.85] tracking-tight relative z-10">
              NIGERIA
              <br />
              COMMUNICATIONS
              <br />
              <span className="text-rust">SATELLITE LTD.</span>
            </h1>
          </ScrollReveal>
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 text-[10rem] md:text-[18rem] font-bebas text-off-white/[0.03] leading-none select-none pointer-events-none -translate-y-1/4"
          >
            NYSC
          </div>
        </div>

        <ScrollReveal delay={0.2}>
          <p className="font-cormorant italic text-2xl md:text-3xl text-off-white/70 mt-8 max-w-2xl leading-snug">
            Led a team of interns producing video content for a government
            satellite agency. Directed, strategised, and built a social media
            presence from near zero.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-off-white/50 border border-muted-grey/30 px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rust inline-block"></span>
            NYSC Posting · Abuja
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

      {/* Leadership Context */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <h2 className="font-cormorant italic text-5xl md:text-6xl text-rust leading-tight">
              Making government content people actually watch.
            </h2>
          </ScrollReveal>

          <div className="space-y-6 font-space-mono text-sm leading-relaxed text-off-white/80">
            <ScrollReveal delay={0.1}>
              <p>
                NIGCOMSAT — Nigeria Communications Satellite Limited — is a
                government-owned agency. During my NYSC year, I wasn&apos;t
                placed in a corner writing memos. I was given responsibility:
                lead the interns, build the content, run the social presence.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                The challenge with government content isn&apos;t talent —
                it&apos;s institutional inertia. Everything wants to be stiff
                and corporate. My job was to create content that represented the
                agency well while actually being worth watching.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                The work below represents the videos and posts I helped
                conceive, direct, and get published across NIGCOMSAT&apos;s
                social media channels.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What I Led */}
      <section className="bg-dark-ink py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-12 block">
              My Role
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-muted-grey/20 border border-muted-grey/20">
            {whatILed.map((item, i) => (
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

      {/* Work Samples Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-4 block">
            Selected Work
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-cormorant italic text-4xl md:text-5xl text-off-white mb-16">
            Videos & content I helped create.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-muted-grey/20 border border-muted-grey/20">
          {workSamples.map((sample, i) => (
            <ScrollReveal
              key={sample.id}
              delay={i * 0.05}
              className="bg-dark-ink flex flex-col"
            >
              {/* Thumbnail Placeholder */}
              <div className="relative aspect-video bg-bg-dark border-b border-muted-grey/20 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bebas text-[6rem] text-off-white/5 select-none pointer-events-none leading-none">
                    {String(sample.id).padStart(2, "0")}
                  </span>
                </div>
                {/* Play icon */}
                <div className="relative z-10 w-14 h-14 rounded-full border-2 border-rust flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-rust ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <div className="flex items-center gap-2">
                  <span className="font-space-mono text-[10px] uppercase tracking-widest text-rust px-2 py-0.5 border border-rust/30">
                    {typeLabels[sample.type]}
                  </span>
                  <span className="font-space-mono text-[10px] uppercase tracking-widest text-muted-grey">
                    {platformLabels[sample.platform]}
                  </span>
                </div>
                <h3 className="font-dm-serif text-xl text-off-white">
                  {sample.title}
                </h3>
                <p className="font-space-mono text-xs text-off-white/60 leading-relaxed flex-grow">
                  {sample.description}
                </p>
                <a
                  href={sample.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center font-space-mono text-xs uppercase tracking-widest text-rust hover:text-off-white transition-colors focus-visible:ring-2 focus-visible:ring-rust focus-visible:outline-none p-1 -m-1 rounded-sm self-start"
                >
                  Watch on {platformLabels[sample.platform]}{" "}
                  <span className="ml-2">→</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Closing Quote */}
      <section className="bg-dark-ink py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <blockquote className="font-cormorant italic text-4xl md:text-5xl text-off-white/90 leading-tight">
              &ldquo;The constraint of working inside a government institution
              taught me something no startup ever could: how to create momentum
              when the system isn&apos;t designed for it.&rdquo;
            </blockquote>
          </ScrollReveal>
        </div>
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
