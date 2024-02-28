import { z, defineCollection } from "astro:content";

const exercisesCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string())
    })
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    ref: z.string()
  })
})

export const collections = {
  exercises: exercisesCollection,
  courses: pagesCollection,
};