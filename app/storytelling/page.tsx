import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { fetchSubstackFeed } from '@/lib/substack';
import { getStorytellingPosts } from '@/lib/markdown';

export const metadata = {
  title: 'Storytelling | Bashir Onimison',
  description: 'Short stories and published works. Honest, unfinished, resistant to neat conclusions.',
};

export default async function Storytelling() {
  const substackStories = await fetchSubstackFeed();
  const localPosts = getStorytellingPosts();

  const externalPosts = [
    {
      title: 'When I Met Her Father',
      date: '2024-03-01T00:00:00.000Z',
      description: 'A short story published on Kalahari Review.',
      link: 'https://kalaharireview.com/when-i-met-her-father-514a1b95796d',
      source: 'Kalahari Review'
    },
    {
      title: 'How Fintech Startups Can Attract Investors With Storytelling',
      date: '2024-02-15T00:00:00.000Z',
      description: 'An article on how startups can use storytelling for fundraising.',
      link: 'https://medium.com/@onimison/how-fintech-startups-can-attract-investors-with-storytelling-ff91cb8150ac',
      source: 'Medium'
    },
    {
      title: 'I Promise To Write About Us',
      date: '2024-01-20T00:00:00.000Z',
      description: 'A deeply personal reflection.',
      link: 'https://medium.com/@onimison/i-promise-to-write-about-us-2e749dbe1f18',
      source: 'Medium'
    }
  ];

  const publishedWorks = [
    ...externalPosts,
    ...localPosts.map(post => ({
      title: post.title,
      date: post.date,
      description: post.description,
      link: `/storytelling/${post.slug}`,
      source: 'bashironimison.com'
    }))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="font-space-mono text-xs uppercase tracking-widest text-muted-grey mb-8 block">03 — Storytelling</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-cormorant italic text-6xl md:text-8xl leading-tight mb-8">
            Stories that don&apos;t<br />
            <span className="font-bold text-rust not-italic">wrap up neatly.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-space-mono text-sm leading-relaxed text-off-white/70 max-w-lg">
            A collection of my published works and short stories. Honest, unfinished, resistant to neat conclusions.
          </p>
        </ScrollReveal>
      </section>

      {/* Substack Stories */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-space-mono text-xl uppercase tracking-widest text-off-white mb-12">Substack Fiction</h2>
        </ScrollReveal>
        <div className="border-t border-muted-grey/20">
          {substackStories.slice(0, 10).map((story, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link href={story.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-muted-grey/20 hover:bg-dark-ink/50 transition-colors px-4 -mx-4 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rust focus-visible:outline-none">
                <div className="flex items-center gap-8 mb-4 md:mb-0 w-full md:w-auto overflow-hidden">
                  <span className="font-space-mono text-xs text-muted-grey/30 group-hover:text-rust transition-colors w-8 shrink-0">
                    {i < 9 ? `0${i + 1}` : i + 1}
                  </span>
                  <div className="flex flex-col gap-2 overflow-hidden">
                    <span className="font-space-mono text-[10px] uppercase tracking-widest text-rust">
                      {new Date(story.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <h3 className="font-cormorant italic text-3xl md:text-4xl text-off-white group-hover:text-rust transition-colors turnrate-truncate pr-4 break-words">
                      {story.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 w-full md:w-auto pl-16 md:pl-0 shrink-0">
                  <div
                    className="font-space-mono text-xs text-muted-grey max-w-xs line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: story.description }}
                  />
                  <span className="font-space-mono text-[10px] uppercase tracking-widest text-off-white/50 border border-off-white/20 px-3 py-1 rounded-full whitespace-nowrap">
                    Substack
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="mt-20 text-center">
          <a href="https://bashthebroken.substack.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-rust text-bg-dark font-space-mono text-sm uppercase tracking-widest px-12 py-5 hover:bg-off-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark focus-visible:outline-none">
            Read more on Substack →
          </a>
        </ScrollReveal>
      </section>

      {/* Published Works */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-muted-grey/20">
        <ScrollReveal>
          <h2 className="font-space-mono text-xl uppercase tracking-widest text-off-white mb-12">Published Works & Articles</h2>
        </ScrollReveal>
        <div className="border-t border-muted-grey/20">
          {publishedWorks.map((work, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link
                href={work.link}
                target={work.link.startsWith('http') ? "_blank" : "_self"}
                rel={work.link.startsWith('http') ? "noopener noreferrer" : ""}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-muted-grey/20 hover:bg-dark-ink/50 transition-colors px-4 -mx-4 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rust focus-visible:outline-none"
              >
                <div className="flex items-center gap-8 mb-4 md:mb-0 w-full md:w-auto overflow-hidden">
                  <span className="font-space-mono text-xs text-muted-grey/30 group-hover:text-rust transition-colors w-8 shrink-0">
                    {i < 9 ? `0${i + 1}` : i + 1}
                  </span>
                  <div className="flex flex-col gap-2 overflow-hidden">
                    <span className="font-space-mono text-[10px] uppercase tracking-widest text-rust">
                      {new Date(work.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <h3 className="font-cormorant italic text-3xl md:text-4xl text-off-white group-hover:text-rust transition-colors turnrate-truncate pr-4 break-words">
                      {work.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 w-full md:w-auto pl-16 md:pl-0 shrink-0">
                  <div
                    className="font-space-mono text-xs text-muted-grey max-w-xs line-clamp-3"
                  >
                    {work.description}
                  </div>
                  <span className="font-space-mono text-[10px] uppercase tracking-widest text-off-white/50 border border-off-white/20 px-3 py-1 rounded-full whitespace-nowrap">
                    {work.source}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
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
            <Link href="/work" className="border border-off-white text-off-white font-space-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-off-white hover:text-dark-ink transition-colors duration-300 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-off-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark-ink focus-visible:outline-none">
              See the Work →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
