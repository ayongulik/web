import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { SITE_URL, BASE_PATH } from "./src/config";
import { RemarkLinkRewrite } from "./src/plugins/link-rewrite";

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
    remarkPlugins: [
      [
        RemarkLinkRewrite,
        {
          replacer: (url: string) => {
            if (url.startsWith("/web")) {
              return url.replace("/web", BASE_PATH);
            }
            return url;
          },
        },
      ],
    ],
  },
  integrations: [tailwind(), mdx()],
});
