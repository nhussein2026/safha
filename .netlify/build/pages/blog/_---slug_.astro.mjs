/* empty css                                    */
import { c as createAstro, a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_mvkG5t2W.mjs';
import { a as getEntry, g as getCollection } from '../../chunks/_astro_content_iunSULMc.mjs';
import { f as formatArabicDate } from '../../chunks/dates_7UadJ9qq.mjs';
import { S as SITE, $ as $$Layout } from '../../chunks/Layout_Bec8ENT6.mjs';
import { s as slugify } from '../../chunks/slugify_DVnXR6JX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://safha.dev");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug.split("/") },
    props: { slug: post.slug }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const slugParam = Astro2.params.slug;
  const slug = Array.isArray(slugParam) ? slugParam.join("/") : slugParam;
  if (!slug) {
    console.error("Missing slug:", { params: Astro2.params });
    return new Response(null, { status: 404 });
  }
  const post = await getEntry("blog", slug);
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "description": post.data.description, "url": `/blog/${slug}`, "image": post.data.image ?? SITE.defaultImage, "type": "article", "post": post }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-4xl mx-auto px-4 py-8"> <header class="mb-8 text-right"> <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-4"> ${post.data.title} </h1> <div class="flex flex-col md:flex-row md:items-center gap-4 text-gray-600 dark:text-gray-400"> <time${addAttribute(post.data.pubDate.toISOString(), "datetime")} class="flex items-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <a${addAttribute(`/blog/year/${post.data.pubDate.getFullYear()}`, "href")} class="text-purple-600 hover:text-purple-800 dark:text-purple-400"> ${formatArabicDate(post.data.pubDate)} </a> </time> <div class="flex flex-wrap gap-2"> <!-- Categories Section --> ${post.data.categories.length > 0 && renderTemplate`<div class="mt-6 text-right"> <div class="flex flex-wrap gap-2 mt-2"> ${post.data.categories.map((category) => renderTemplate`<a${addAttribute(`/blog/category/${slugify(category)}`, "href")} class="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 px-3 py-1 rounded-full text-sm hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors"> ${category} </a>`)} </div> </div>`} <!-- Tags Section --> ${post.data.tags.length > 0 && renderTemplate`<div class="mt-6 text-right"> <div class="flex flex-wrap gap-2 mt-2"> ${post.data.tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${slugify(tag)}`, "href")} class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"> ${tag} </a>`)} </div> </div>`} </div> </div> </header> <hr class="mb-8 border-gray-200 dark:border-gray-700"> <div class="prose dark:prose-invert max-w-none text-right"> ${renderComponent($$result2, "Content", Content, {})} </div> <div class="mt-12 flex gap-4 justify-end"> <a href="/blog" class="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"> <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path> </svg>
العودة إلى المدونة
</a> </div> <!-- Add categories section --> ${post.data.categories.length > 0 && renderTemplate`<div class="mt-6 flex flex-wrap gap-2 text-right"> <span class="text-gray-500">التصنيفات:</span> ${post.data.categories.map((category) => renderTemplate`<a${addAttribute(`/blog/category/${slugify(category)}`, "href")} class="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 px-3 py-1 rounded-full text-sm hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors"> ${category} </a>`)} </div>`} <!-- Update tags section --> ${post.data.tags.length > 0 && renderTemplate`<div class="mt-4 flex flex-wrap gap-2 text-right"> <span class="text-gray-500">الوسوم:</span> ${post.data.tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${slugify(tag)}`, "href")} class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
#${tag} </a>`)} </div>`} </article> ` })}`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/naser/Desktop/Safha blog/safha/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
