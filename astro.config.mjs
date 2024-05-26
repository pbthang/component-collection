import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import liveCode from "astro-live-code";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

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
              label: "Shadcn/ui",
              autogenerate: {
                directory: "/components/shadcn",
              },
            },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    liveCode(),
    react(),
  ],
  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
  }),
});
