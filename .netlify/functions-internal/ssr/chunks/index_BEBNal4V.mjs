import { q as Fragment, _ as __astro_tag_component__, y as createVNode } from './astro_BzYC2ZrC.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_BgdWMxSg.mjs';
import { b as $$CardGrid, c as $$LinkCard } from './Code_B2dLFuAb.mjs';
import './prerender_Exw1nQnx.mjs';
import 'clsx';

/*<LinkCard title="Components" href="/guides/components/" />*/
const frontmatter = {
  "title": "pbthang's collection",
  "description": "My collection of reuseable code snippets and other useful stuff",
  "template": "splash",
  "hero": {
    "tagline": "where I keep my reusable code snippets and other useful stuff",
    "image": {
      "file": "../../assets/houston.webp"
    },
    "actions": [{
      "text": "My Portfolio",
      "link": "https://pbthang.netlify.app/",
      "icon": "external",
      "variant": "primary"
    }]
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "next-steps",
    "text": "Next steps"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<h2 id=\"next-steps\">Next steps</h2>\n"
    }), createVNode($$CardGrid, {
      children: createVNode($$LinkCard, {
        title: "Components",
        href: "/components/",
        description: "My collection of reuseable components using HTML, CSS, React, TailwindCSS, etc."
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/index.mdx";
const file = "/Users/pbthang/pbthang-components/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/pbthang/pbthang-components/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
