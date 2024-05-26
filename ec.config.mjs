/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

export default {
  // You can set configuration options here
  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
};
