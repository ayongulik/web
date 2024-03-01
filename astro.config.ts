import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { SITE_URL, BASE_PATH } from "./src/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
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
