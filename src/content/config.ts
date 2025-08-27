// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        tags: z.array(z.string()).optional(),
        category: z.string().optional(),
        readTime: z.string().optional(),
        featured: z.boolean().optional().default(false),
    }),
});

export const collections = { blog };