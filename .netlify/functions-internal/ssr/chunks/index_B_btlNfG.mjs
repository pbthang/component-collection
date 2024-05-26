import { q as Fragment, _ as __astro_tag_component__, y as createVNode } from './astro_BzYC2ZrC.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_BgdWMxSg.mjs';
import 'clsx';

const frontmatter = {
  "title": "Overview",
  "description": "My collection of reuseable components using HTML, CSS, React, TailwindCSS, etc."
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>This is my collection of reuseable components using HTML, CSS, React, TailwindCSS, etc.\nFeel free to use them in your projects.</p>\n<p>If you have any questions or suggestions, feel free to reach out to me by <a href=\"mailto:bathang02@gmail.com\">email</a></p>"
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
const url = "src/content/docs/components/index.mdx";
const file = "/Users/pbthang/pbthang-components/src/content/docs/components/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/pbthang/pbthang-components/src/content/docs/components/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
