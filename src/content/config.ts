import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    readingMinutes: z.number().int().positive().optional(),
    keywords: z.array(z.string()).optional(),
  }),
});

export const collections = { news };