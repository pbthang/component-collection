import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import liveCode from "astro-live-code";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import starlightImageZoom from "starlight-image-zoom";

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
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css",
            integrity:
              "sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww",
            crossorigin: "anonymous",
          },
        },
        {
          tag: "script",
          attrs: {
            defer: true,
            src: "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js",
            integrity:
              "sha384-hIoBPJpTUs74ddyc4bFZSM1TVlQDA60VBbJS0oA934VSz82sBx1X7kSx2ATBDIyd",
            crossorigin: "anonymous",
          },
        },
        {
          tag: "script",
          attrs: {
            defer: true,
            src: "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.min.js",
            integrity:
              "sha384-43gviWU0YVjaDtb/GhzOouOXtZMP/7XUzwPTstBeZFe/+rCMvRwr4yROQP43s0Xk",
            crossorigin: "anonymous",
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
        {
          label: "Notes",
          collapsed: true,
          autogenerate: {
            directory: "/notes",
          },
        },
      ],
      editLink: {
        baseUrl:
          "https://github.com/pbthang/component-collection/edit/edit-page",
      },
      customCss: ["./src/tailwind.css"],
      plugins: [starlightImageZoom()],
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
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
