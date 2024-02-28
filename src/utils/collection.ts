import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { collections } from "../content/config";

type Collection = keyof typeof collections;

type SlugFunction = (slug: string) => string;

export async function getGroupedStaticPaths(
  collection: Collection,
  slugFn: SlugFunction,
) {
  const exerciseEntries = await getCollection(collection);
  const groupedEntries: Record<string, CollectionEntry<Collection>[]> = {};

  exerciseEntries.forEach((entry) => {
    const slug = slugFn(entry.slug);

    if (groupedEntries[slug]) {
      groupedEntries[slug].push(entry);
    } else {
      groupedEntries[slug] = [entry];
    }
  });

  return Object.keys(groupedEntries).map((key) => ({
    params: {
      group: key,
    },
    props: {
      entries: groupedEntries[key],
    },
  }));
}
