import { z, defineCollection } from "astro:content";

const coursesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
  })
})

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    ref: z.string()
  })
})

export const collections = {
  courses: coursesCollection,
  pages: pagesCollection,
};