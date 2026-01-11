import { defineCollection, z } from 'astro:content';

const regulations = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		authority: z.string().optional(),
		jurisdiction: z.string().optional(),
		sourceUrl: z.string().url().optional(),
		publishedAt: z.date().optional(),
		updatedAt: z.date().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

const bands = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		genre: z.string().optional(),
		origin: z.string().optional(),
		playlistUrl: z.string().url().optional(),
		latestRelease: z.string().optional(),
		releaseDate: z.date().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

const vendors = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		category: z.string(),
		description: z.string(),
		website: z.string().url(),
		contactEmail: z.string().email().optional(),
		certifications: z.array(z.string()).default([]),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { regulations, bands, vendors };
