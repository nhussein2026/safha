/* empty css                                 */
import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_mvkG5t2W.mjs';
import { g as getCollection } from '../chunks/_astro_content_iunSULMc.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bec8ENT6.mjs';
import { f as formatArabicDate } from '../chunks/dates_7UadJ9qq.mjs';
import { s as slugify } from '../chunks/slugify_DVnXR6JX.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_B3uKEqVo.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
  const firstPagePosts = allPosts.slice(0, 4);
  const totalPages = Math.ceil(allPosts.length / 4);
  const categories = new Set(allPosts.flatMap((post) => post.data.categories));
  const tags = new Set(allPosts.flatMap((post) => post.data.tags));
  const years = new Set(allPosts.map((post) => post.data.pubDate.getFullYear()));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-gray-50 dark:bg-gray-900 min-h-screen"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- Header Section --> <div class="text-right mb-16"> <h1 class="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
المدونة
</h1> <p class="text-gray-600 dark:text-gray-400 text-lg">
استكشف أحدث المقالات والموارد التعليمية
</p> </div> <div class="flex flex-col lg:flex-row gap-8"> <!-- Main Content --> <div class="lg:w-2/3"> <div class="grid gap-8 md:grid-cols-2"> ${firstPagePosts.map((post) => renderTemplate`<article class="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="block p-6"> <div class="mb-3"> <time class="text-sm text-purple-600 dark:text-purple-400"> ${formatArabicDate(post.data.pubDate)} </time> </div> <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 hover:text-purple-600 transition-colors"> ${post.data.title} </h2> <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3"> ${post.data.description} </p> <div class="flex flex-wrap gap-2 mb-4"> ${post.data.tags.map((tag) => renderTemplate`<span class="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300">
#${tag} </span>`)} </div> <div class="flex items-center justify-end gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"> <span>اقرأ المزيد</span> <svg class="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </a> </article>`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": 1, "totalPages": totalPages, "baseUrl": "/blog/page" })} </div> <!-- Sidebar Filters --> <aside class="lg:w-1/3 space-y-8"> <!-- Years Archive --> <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"> <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2"> <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg>
الأرشيف السنوي
</h2> <div class="flex flex-wrap gap-2"> ${Array.from(years).map((year) => renderTemplate`<a${addAttribute(`/blog/year/${year}`, "href")} class="px-3 py-1.5 text-sm rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"> ${year} <span class="text-gray-500 dark:text-gray-400 ml-1">
(
${allPosts.filter(
    (p) => p.data.pubDate.getFullYear() === year
  ).length}
)
</span> </a>`)} </div> </div> <!-- Categories --> <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"> <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2"> <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path> </svg>
التصنيفات
</h2> <div class="space-y-2"> ${Array.from(categories).map((category) => renderTemplate`<a${addAttribute(`/blog/category/${slugify(category)}`, "href")} class="flex justify-between items-center px-4 py-2.5 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors group"> <span class="text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"> ${category} </span> <span class="text-sm text-gray-500 dark:text-gray-400">
(
${allPosts.filter(
    (p) => p.data.categories.includes(category)
  ).length}
)
</span> </a>`)} </div> </div> <!-- Tags Cloud --> <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"> <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2"> <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path> </svg>
الوسوم
</h2> <div class="flex flex-wrap gap-2"> ${Array.from(tags).map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${slugify(tag)}`, "href")} class="px-3 py-1.5 text-sm rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
#${tag} </a>`)} </div> </div> </aside> </div> </div> </main> ` })}`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/naser/Desktop/Safha blog/safha/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
