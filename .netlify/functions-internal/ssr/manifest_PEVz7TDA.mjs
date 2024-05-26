import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_BzYC2ZrC.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/404","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/starlight/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.LS5KDvwX.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/@astrojs/starlight/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:node_modules/@astrojs/starlight/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/@astrojs/starlight/utils/routing.ts",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/@astrojs/starlight/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:node_modules/@astrojs/starlight/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/@astrojs/starlight/utils/navigation.ts",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/@astrojs/starlight/components/SidebarSublist.astro",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/@astrojs/starlight/components/Sidebar.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:starlight/components/Sidebar",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/@astrojs/starlight/components/Page.astro",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/@astrojs/starlight/utils/route-data.ts",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/@astrojs/starlight/utils/translations.ts",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/@astrojs/starlight/internal.ts",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro-expressive-code/preprocess-config",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/astro-expressive-code/components/renderer.ts",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/astro-expressive-code/components/Code.astro",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/astro-expressive-code/components/index.ts",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/@astrojs/starlight/components.ts",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/src/content/docs/components/hero/color-blob.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/src/content/docs/components/hero/color-blob.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/src/content/docs/components/hero/floating-3d.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/src/content/docs/components/hero/floating-3d.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/src/content/docs/index.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/src/content/docs/index.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/@astrojs/starlight/user-components/Aside.astro",{"propagation":"in-tree","containsHead":false}],["/Users/pbthang/pbthang-components/node_modules/@astrojs/starlight/user-components/FileTree.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_PEVz7TDA.mjs","/Users/pbthang/pbthang-components/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DgM9tw--.mjs","\u0000@astro-page:node_modules/@astrojs/starlight/404@_@astro":"chunks/404_MqWo2TqK.mjs","\u0000@astro-page:node_modules/@astrojs/starlight/index@_@astro":"chunks/index_5cLwF5yi.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/hero/color-blob.mdx?astroContentCollectionEntry=true":"chunks/color-blob_Ckacy53N.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/hero/floating-3d.mdx?astroContentCollectionEntry=true":"chunks/floating-3d_6PdeiMP_.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/index.mdx?astroContentCollectionEntry=true":"chunks/index_Cv8Po40T.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/shadcn/multitag-input.mdx?astroContentCollectionEntry=true":"chunks/multitag-input_C0dODvaK.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/shadcn/obj-list-input.mdx?astroContentCollectionEntry=true":"chunks/obj-list-input_DitC8n9l.mjs","/Users/pbthang/pbthang-components/src/content/docs/guides/example.md?astroContentCollectionEntry=true":"chunks/example_tjxnyhNe.mjs","/Users/pbthang/pbthang-components/src/content/docs/index.mdx?astroContentCollectionEntry=true":"chunks/index_DGOOZAyc.mjs","/Users/pbthang/pbthang-components/src/content/docs/reference/example.md?astroContentCollectionEntry=true":"chunks/example_DRE-RFB1.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/hero/color-blob.mdx?astroPropagatedAssets":"chunks/color-blob_BSfYWGmW.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/hero/floating-3d.mdx?astroPropagatedAssets":"chunks/floating-3d_GhI4bpF0.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/index.mdx?astroPropagatedAssets":"chunks/index_DKx8IHM5.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/shadcn/multitag-input.mdx?astroPropagatedAssets":"chunks/multitag-input_Pl41THfo.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/shadcn/obj-list-input.mdx?astroPropagatedAssets":"chunks/obj-list-input_lkMzZFcE.mjs","/Users/pbthang/pbthang-components/src/content/docs/guides/example.md?astroPropagatedAssets":"chunks/example_C30WvPQt.mjs","/Users/pbthang/pbthang-components/src/content/docs/index.mdx?astroPropagatedAssets":"chunks/index_bicKQrCg.mjs","/Users/pbthang/pbthang-components/src/content/docs/reference/example.md?astroPropagatedAssets":"chunks/example_q3wq9_-I.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/hero/color-blob.mdx":"chunks/color-blob_CLoO8Cqo.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/hero/floating-3d.mdx":"chunks/floating-3d_CLRe3_yB.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/index.mdx":"chunks/index_B_btlNfG.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/shadcn/multitag-input.mdx":"chunks/multitag-input_Bw_iybBp.mjs","/Users/pbthang/pbthang-components/src/content/docs/components/shadcn/obj-list-input.mdx":"chunks/obj-list-input_D71Q80IV.mjs","/Users/pbthang/pbthang-components/src/content/docs/guides/example.md":"chunks/example_9-1YnX1d.mjs","/Users/pbthang/pbthang-components/src/content/docs/index.mdx":"chunks/index_BEBNal4V.mjs","/Users/pbthang/pbthang-components/src/content/docs/reference/example.md":"chunks/example_Lg_-YC0k.mjs","\u0000virtual:astro-expressive-code/config":"chunks/config_BZHyBxOU.mjs","/Users/pbthang/pbthang-components/node_modules/astro-expressive-code/dist/index.js":"chunks/index_DaVK51eC.mjs","\u0000virtual:astro-expressive-code/preprocess-config":"chunks/preprocess-config_BA2b3j8v.mjs","/Users/pbthang/pbthang-components/ec.config.mjs":"chunks/ec.config_Df1Ki6Nr.mjs","astro:scripts/page.js":"_astro/page.LS5KDvwX.js","/astro/hoisted.js?q=0":"_astro/hoisted.HGjI7Ppm.js","/Users/pbthang/pbthang-components/node_modules/@astrojs/starlight/user-components/Tabs.astro?astro&type=script&index=0&lang.ts":"_astro/Tabs.astro_astro_type_script_index_0_lang.CCIyraCc.js","/Users/pbthang/pbthang-components/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs":"_astro/ui-core.B0-XXYKm.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","/Users/pbthang/pbthang-components/src/components/hero/Floating3D.astro?astro&type=script&index=0&lang.ts":"_astro/Floating3D.astro_astro_type_script_index_0_lang.Sxht2a_w.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/ec.pa4qu.css","/_astro/ec.3zb7u.js","/_astro/houston.CZZyCf7p.webp","/_astro/multitagDemo.Cw53OboW.gif","/_astro/objListDemo.BLgGa4p8.gif","/_astro/index.DO0vqqdZ.css","/cactus.glb","/favicon.svg","/_astro/Floating3D.astro_astro_type_script_index_0_lang.Sxht2a_w.js","/_astro/Tabs.astro_astro_type_script_index_0_lang.CCIyraCc.js","/_astro/client.5I5BMcNS.js","/_astro/hoisted.HGjI7Ppm.js","/_astro/page.LS5KDvwX.js","/_astro/ui-core.B0-XXYKm.js","/_astro/page.LS5KDvwX.js","/404.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { manifest };
