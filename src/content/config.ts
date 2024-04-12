import { z, defineCollection } from "astro:content";

const coursesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string(),
    enableCodeEditor: z.boolean().optional(),
    enableTestCases: z.boolean().optional().default(false),
    chapter: z.number().optional(),
  }),
});

const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    ref: z.string(),
    ctaLink: z.string().optional(),
    courses: z
      .array(
        z.object({
          title: z.string(),
          slug: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  courses: coursesCollection,
  pages: pagesCollection,
};
