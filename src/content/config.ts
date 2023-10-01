/* https://docs.astro.build/en/guides/content-collections/ */
// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
//const blogCollection = defineCollection({ /* ... */ });
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
          title: z.string(),
          description: z.string().optional(),
          date: z.date(),
          category: z.string(),
      })
});

const illustrationsCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    filename: z.string(),
    title: z.string(),
    image: image(),
    year: z.number(),
  })
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'posts': postsCollection,
  'illustrations': illustrationsCollection,
};
