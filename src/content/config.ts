import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    repo: z.string().url(),
    repoHost: z.enum(['github', 'gitlab']).default('github'),
    role: z.string().optional(),
    featured: z.boolean().default(false),
    isPrivate: z.boolean().default(false),
    // isPrivate=true → hide repo link on the site (link target would 404 for visitors).
    // The project is still listed; a "private repo" tag replaces the icon link.
    // (Named isPrivate, not private, because `private` is a TypeScript reserved word.)
    order: z.number().default(99),
    icon: z.enum([
      'folder', 'globe', 'gamepad', 'car', 'shield', 'layout',
      'cpu', 'database', 'flask', 'graph'
    ]).default('folder'),
  }),
});

const competitions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    team: z.string(),
    event: z.string(),
    role: z.string().optional(),
    award: z.string().optional(),     // e.g. "🥈 2nd place (Private LB)"
    kind: z.enum(['competition', 'paper', 'proposal']).default('competition'),
    pdf: z.string().optional(),       // path under /pdf/
    cover: z.string().optional(),     // path under /img/ for a hero photo
    coverAlt: z.string().optional(),  // alt text for the cover
    coverFit: z.enum(['cover', 'contain']).default('cover'),
    // 'cover' = side-by-side, image cropped to fill (good for portrait shots)
    // 'contain' = image on top, full-width, no cropping (good for landscape shots)
    tags: z.array(z.string()),
    order: z.number().default(99),
  }),
});

export const collections = { projects, competitions };
