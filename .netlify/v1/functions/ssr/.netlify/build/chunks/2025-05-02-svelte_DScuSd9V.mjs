import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_mvkG5t2W.mjs';

/*1. المقدمة*/
/*## 2. المميزات الرئيسية*/
/*## 3. حالات الاستخدام الأمثل*/
/*4. الأوامر الأساسية*/
/*5. البدء السريع*/
/*6. روابط*/
const frontmatter = {
  "title": "مقدمة إلى Svelte",
  "pubDate": "2025-05-02T00:00:00.000Z",
  "description": "دليل مبسط للتعرف على إطار Svelte لتطوير الواجهات.",
  "author": "ناصر حسين",
  "tags": ["الواجهات الامامية", "Svelte"],
  "categories": ["تطوير الويب"],
  "draft": true,
  "arabicDate": "٣ ذو القعدة ١٤٤٦ هـ",
  "slug": "svelte"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: ["\n", "\n", "\n", "\n", "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/blog/2025/05/2025-05-02-svelte.mdx";
const file = "C:/Users/naser/Desktop/Safha blog/safha/src/content/blog/2025/05/2025-05-02-svelte.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/naser/Desktop/Safha blog/safha/src/content/blog/2025/05/2025-05-02-svelte.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
