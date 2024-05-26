import { renderers } from './renderers.mjs';
import { manifest } from './manifest_PEVz7TDA.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_DgM9tw--.mjs');
const _page1 = () => import('./chunks/404_MqWo2TqK.mjs');
const _page2 = () => import('./chunks/index_5cLwF5yi.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@astrojs/starlight/404.astro", _page1],
    ["node_modules/@astrojs/starlight/index.astro", _page2]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "3a61a2c0-9466-4a2c-9672-749bf2512a34"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
