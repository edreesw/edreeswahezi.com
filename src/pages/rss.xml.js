import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    let blog = await getCollection('posts'); 
    //sort to put newest post first
    blog = blog.sort((a, b) => Date.parse(b.data.date.toDateString()) - Date.parse(a.data.date.toDateString()));
    
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