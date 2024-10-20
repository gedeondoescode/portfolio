import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon({
    svgoOptions: {
      plugins: [
        "preset-default",
        {
          name: "convertColors",
          params: { currentColor: true },
        },
      ],
    },
  }), tailwind()],
  experimental: {},
  output: "hybrid",
  adapter: vercel({
    imageService: true
  })
});
