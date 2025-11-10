import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    month: z.number().optional(),
    thumbnail: z.string().optional(),
    website: z.string().optional(),
    code: z.string().optional(),
    arxiv: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tldr: z.string(),
    authors: z.array(z.string()).optional(),
    year: z.number(),
    month: z.number().optional(),
    thumbnail: z.string().optional(),
    code: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    authors: z.array(z.string()).optional(),
    pubDate: z.date(),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  publications,
  projects,
  blog,
};
