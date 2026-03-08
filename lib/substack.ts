export interface SubstackPost {
    title: string;
    pubDate: string;
    link: string;
    description: string;
    thumbnail: string;
}

export async function fetchSubstackFeed(): Promise<SubstackPost[]> {
    const feedUrl = 'https://bashthebroken.substack.com/feed';

    try {
        const res = await fetch(feedUrl, {
            next: { revalidate: 3600 },
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; RSS reader)',
                'Accept': 'application/rss+xml, application/xml, text/xml, */*',
            },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch Substack feed: ${res.status}`);
        }

        const xml = await res.text();

        // Parse <item> blocks from the RSS XML
        const items = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];

        return items.map((item) => {
            const getTag = (tag: string) => {
                const match = item.match(new RegExp(`<${tag}(?:[^>]*)><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}(?:[^>]*)>([\\s\\S]*?)<\\/${tag}>`));
                return match ? (match[1] ?? match[2] ?? '').trim() : '';
            };

            // For link, handle the self-closing or text node form
            const linkMatch = item.match(/<link>([^<]+)<\/link>|<link\/>([^<]*)/);
            const link = linkMatch ? (linkMatch[1] ?? '').trim() : getTag('link');

            // Strip HTML from description for a clean excerpt
            const rawDesc = getTag('description');
            const plainDesc = rawDesc.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();

            // Try to find a thumbnail / enclosure image
            const enclosure = item.match(/enclosure[^>]*url="([^"]+)"/)?.[1] ?? '';
            const imgInContent = item.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? '';

            return {
                title: getTag('title'),
                pubDate: getTag('pubDate'),
                link: link || getTag('guid'),
                description: plainDesc.slice(0, 280) + (plainDesc.length > 280 ? '…' : ''),
                thumbnail: enclosure || imgInContent,
            };
        }).filter(post => post.title && post.link);

    } catch (error) {
        console.error('Error fetching Substack feed:', error);
        return [];
    }
}
