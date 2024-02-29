import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
  integrations: [tailwind(), mdx()],
});
