import Link from 'next/link';
import { notFound } from 'next/navigation';
import ScrollReveal from '@/components/ScrollReveal';
import { getStoryBySlug } from '@/lib/markdown';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getStoryBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | Storytelling`,
        description: post.description,
    };
}

export default async function StoryPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getStoryBySlug(slug);

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <article className="w-full min-h-screen pb-24">
            {/* Article Header */}
            <header className="pt-40 pb-16 px-6 md:px-12 max-w-4xl mx-auto text-center border-b border-muted-grey/20">
                <ScrollReveal>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <Link
                            href="/storytelling"
                            className="font-space-mono text-xs uppercase tracking-widest text-muted-grey hover:text-rust transition-colors"
                        >
                            ← Back to Stories
                        </Link>
                        <span className="text-muted-grey/30">•</span>
                        <span className="font-space-mono text-xs uppercase tracking-widest text-rust">
                            {formattedDate}
                        </span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <h1 className="font-cormorant italic text-5xl md:text-7xl leading-tight mb-8 text-off-white">
                        {post.title}
                    </h1>
                </ScrollReveal>

                {post.description && (
                    <ScrollReveal delay={0.2}>
                        <p className="font-space-mono text-sm leading-relaxed text-off-white/70 max-w-2xl mx-auto">
                            {post.description}
                        </p>
                    </ScrollReveal>
                )}
            </header>

            {/* Article Content */}
            <section className="px-6 md:px-12 pt-16 max-w-3xl mx-auto">
                <ScrollReveal delay={0.3}>
                    <div
                        className="prose prose-invert prose-lg max-w-none font-space-mono
              prose-headings:font-cormorant prose-headings:italic prose-headings:font-normal
              prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl
              prose-p:text-off-white/80 prose-p:leading-relaxed prose-p:mb-8
              prose-a:text-rust prose-a:no-underline hover:prose-a:underline
              prose-strong:text-off-white prose-strong:font-bold
              prose-blockquote:border-l-rust prose-blockquote:bg-dark-ink/50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:not-italic prose-blockquote:text-off-white/90
              prose-ul:list-disc prose-ul:pl-6 prose-li:text-off-white/80
              prose-ol:list-decimal prose-ol:pl-6"
                        dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
                    />
                </ScrollReveal>
            </section>

            {/* Footer CTA */}
            <section className="mt-24 px-6 md:px-12 max-w-3xl mx-auto text-center">
                <ScrollReveal>
                    <Link
                        href="/storytelling"
                        className="inline-block border border-off-white text-off-white font-space-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-off-white hover:text-dark-ink transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-off-white focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark focus-visible:outline-none"
                    >
                        Read More Stories
                    </Link>
                </ScrollReveal>
            </section>
        </article>
    );
}
