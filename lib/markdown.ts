import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface StoryData {
    slug: string;
    title: string;
    date: string;
    description: string;
    contentHtml?: string;
}

/**
 * Ensures the specified content directory exists.
 */
function ensureDirectory(folder: string) {
    const directory = path.join(process.cwd(), 'content', folder);
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
    return directory;
}

/**
 * Retrieves all posts from a specified content directory sorted by date desc.
 * @param folder The folder inside `content/` to read (e.g. 'storytelling' or 'blog')
 */
export function getPosts(folder: string): StoryData[] {
    const directory = ensureDirectory(folder);
    const fileNames = fs.readdirSync(directory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(directory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);

            return {
                slug,
                title: matterResult.data.title || 'Untitled',
                date: matterResult.data.date || new Date().toISOString(),
                description: matterResult.data.description || '',
            };
        });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

/**
 * Retrieves a single post by its slug, including rendered HTML.
 * @param folder The folder inside `content/` to read (e.g. 'storytelling' or 'blog')
 */
export async function getPostBySlug(folder: string, slug: string): Promise<StoryData | null> {
    const directory = ensureDirectory(folder);
    const fullPath = path.join(directory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html, { sanitize: false })
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        slug,
        title: matterResult.data.title || 'Untitled',
        date: matterResult.data.date || new Date().toISOString(),
        description: matterResult.data.description || '',
        contentHtml,
    };
}

/**
 * Legacy wrapper for getPosts('storytelling') to avoid breaking existing imports.
 */
export function getStorytellingPosts(): StoryData[] {
    return getPosts('storytelling');
}

/**
 * Legacy wrapper for getPostBySlug('storytelling', slug) to avoid breaking existing imports.
 */
export async function getStoryBySlug(slug: string): Promise<StoryData | null> {
    return getPostBySlug('storytelling', slug);
}
