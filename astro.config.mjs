// @ts-check
import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: "https://example.com",
    integrations: [
        tailwind(),
        expressiveCode({
            themes: ["light-plus"],
        }),
        mdx(),
        sitemap()
    ],
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },
    }),
});
