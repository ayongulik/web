import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { RemarkLinkRewrite } from "./src/plugins/link-rewrite";

import mdx from "@astrojs/mdx";

const config = {
  github: {
    SITE_URL: "https://ayongulik.github.io",
    BASE_PATH: "/web",
  },
  netlify: {
    SITE_URL: "https://ayongulik.com",
    BASE_PATH: "",
  },
};

const buildTarget = (process.env.BUILD_TARGET ??
  "netlify") as keyof typeof config;

const { SITE_URL, BASE_PATH } = config[buildTarget];

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
