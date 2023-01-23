import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  },
  integrations: [
    react(),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-light' }
    }),
    sitemap(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    tailwind()
  ]
});