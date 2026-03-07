import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function Fiction() {
  const stories = [
    {
      title: "The Sunday He Stopped Going",
      note: "A meditation on losing faith and the quiet that follows.",
      link: "#"
    },
    {
      title: "After the Money Left",
      note: "What happens when the bull market ends and the group chat goes silent.",
      link: "#"
    },
    {
      title: "Nobody Called It a Career",
      note: "The difference between building a life and building a resume.",
      link: "#"
    },
    {
      title: "What the Magazine Became",
      note: "A eulogy for print, ambition, and the things we leave behind.",
      link: "#"
    }
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-8 block">03 — Fiction</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="font-cormorant italic text-6xl md:text-8xl leading-tight mb-8">
            Stories that don&apos;t<br />
            <span className="font-bold text-rust not-italic">wrap up neatly.</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="font-space-mono text-sm leading-relaxed text-off-white/70 max-w-lg">
            Short fiction on Substack. Honest, unfinished, resistant to neat conclusions.
          </p>
        </ScrollReveal>
      </section>

      {/* Story List */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="border-t border-muted-grey/20">
          {stories.map((story, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link href={story.link} className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-muted-grey/20 hover:bg-dark-ink/50 transition-colors px-4 -mx-4">
                <div className="flex items-center gap-8 mb-4 md:mb-0 w-full md:w-auto">
                  <span className="font-space-mono text-xs text-muted-grey/30 group-hover:text-rust transition-colors w-8">
                    0{i + 1}
                  </span>
                  <div className="flex flex-col gap-2">
                    <span className="font-space-mono text-[10px] uppercase tracking-widest text-rust">
                      Short Fiction
                    </span>
                    <h3 className="font-cormorant italic text-3xl md:text-4xl text-off-white group-hover:text-rust transition-colors">
                      {story.title}
                    </h3>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 w-full md:w-auto pl-16 md:pl-0">
                  <p className="font-space-mono text-xs text-muted-grey max-w-xs">
                    {story.note}
                  </p>
                  <span className="font-space-mono text-[10px] uppercase tracking-widest text-off-white/50 border border-off-white/20 px-3 py-1 rounded-full whitespace-nowrap">
                    Substack
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={0.4} className="mt-20 text-center">
          <a href="#" className="inline-block bg-rust text-bg-dark font-space-mono text-sm uppercase tracking-widest px-12 py-5 hover:bg-off-white transition-colors duration-300">
            Read on Substack →
          </a>
        </ScrollReveal>
      </section>

      {/* CTA Strip */}
      <section className="bg-dark-ink w-full py-16 px-6 md:px-12 border-t border-muted-grey/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <ScrollReveal>
            <p className="font-space-mono text-sm leading-relaxed text-off-white/80 max-w-xl">
              The same person who writes these also builds websites and automation systems.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <Link href="/work" className="border border-off-white text-off-white font-space-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-off-white hover:text-dark-ink transition-colors duration-300 whitespace-nowrap">
              See the Work →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
