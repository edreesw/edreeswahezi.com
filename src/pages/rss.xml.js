import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blog = await getCollection('posts'); 
    return rss({
        title: 'Edrees Wahezi | Blog',
        description: 'I write stuff here',
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link: `/blog/${post.slug}/`,
            customData: `<language>en-us</language>
                            <category>${post.data.category}</category>`,
        })),
        
    });
}