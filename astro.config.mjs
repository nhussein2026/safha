// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import astroMetaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind(),
    react(),
    sitemap({ changefreq: "weekly", priority: 0.7, lastmod: new Date() }),
    astroMetaTags(),
  ],
  site: "https://safha.dev",
  output: "server",
  adapter: netlify({
    builders: true, // Enable ISR
  }),
});
