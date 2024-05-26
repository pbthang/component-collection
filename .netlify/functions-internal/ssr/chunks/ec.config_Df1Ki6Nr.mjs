import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */

const ec_config = {
  // You can set configuration options here
  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
};

export { ec_config as default };
