/* empty css                                 */
import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_mvkG5t2W.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bec8ENT6.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="font-[Cairo] bg-gray-50 dark:bg-gray-900"> <section class="h-screen flex items-center"> <div class="container rtl mx-auto px-4"> <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 lg:py-16"> <div class="grid grid-cols-12 gap-8"> <div class="col-span-12 text-center"> <h1 class="mb-4 text-7xl font-extrabold tracking-tight text-indigo-600 lg:text-9xl dark:text-indigo-500">
404
</h1> <p class="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
الصفحة غير موجودة
</p> <p class="mb-8 text-lg font-light text-gray-500 dark:text-gray-400">
عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها.
</p> <div class="flex justify-center"> <a href="/" class="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 transform -scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 15L3 9m0 0l6-6m-6 6h12a6 6 0 110 12h-3"></path> </svg>
العودة للصفحة الرئيسية
</a> </div> </div> </div> </div> </div> </section> </div> ` })}`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/pages/404.astro", void 0);

const $$file = "C:/Users/naser/Desktop/Safha blog/safha/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
