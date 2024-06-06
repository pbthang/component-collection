import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import liveCode from "astro-live-code";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "pbthang",
      social: {
        email: "mailto:bathang02@gmail.com",
        github: "https://github.com/pbthang",
        linkedin: "https://www.linkedin.com/in/pbthang/",
      },
      favicon: "/favicon.svg",
      head: [
        {
          tag: "link",
          attrs: {
            rel: "sitemap",
            href: "/sitemap-index.xml",
          },
        },
      ],
      sidebar: [
        {
          label: "Components",
          items: [
            {
              label: "Overview",
              link: "/components",
            },
            {
              label: "Hero",
              autogenerate: {
                directory: "/components/hero",
              },
            },
            {
              label: "Loader",
              autogenerate: {
                directory: "/components/loader",
              },
            },
            {
              label: "Shadcn/ui",
              autogenerate: {
                directory: "/components/shadcn",
              },
            },
          ],
        },
      ],
      editLink: {
        baseUrl:
          "https://github.com/pbthang/component-collection/edit/edit-page",
      },
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    liveCode(),
    react(),
    sitemap(),
    robotsTxt(),
  ],
  site: "https://pbthang-collection.netlify.app/",
  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
  }),
});
