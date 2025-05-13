// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import astroMetaTags from "astro-meta-tags";
import path from "path";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind(),
    react(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      filter: (url) => {
        console.log("Checking URL:", url);
        // Allow exact matches
        const allowed = new Set([
          "/",
          "/about",
          "/about/",
          "/search",
          "/search/",
        ]);
        if (allowed.has(url)) return true;

        // Block any URL containing these segments
        return !/\/(about|search)(\/|$)/.test(url);
      },
    }),
    astroMetaTags(),
  ],
  site: "https://safha.dev",
  output: import.meta.env.DEV ? "server" : "static",
  adapter: import.meta.env.DEV ? netlify() : undefined,
  vite: {
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
      },
    },
  },
});
