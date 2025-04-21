import { defineCollection, z } from 'astro:content';


const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    arabicDate: z.string().optional()
  })
});

export const collections = { blog: blogCollection };