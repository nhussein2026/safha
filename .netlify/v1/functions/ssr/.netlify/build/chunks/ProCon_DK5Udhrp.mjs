import { a as createComponent, c as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_mvkG5t2W.mjs';

const $$Astro$2 = createAstro("https://safha.dev");
const $$CodeBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CodeBlock;
  const { code, language = "text" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative code-block group font-mono" dir="ltr"> <pre class="p-4 rounded-lg bg-gray-800 overflow-x-auto text-left">    <code${addAttribute(`language-${language} text-sm/6 text-gray-100 whitespace-pre`, "class")}>
      ${code}
    </code>
  </pre> <button class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-300 hover:text-white bg-gray-700/50 hover:bg-gray-600 p-1.5 rounded-md text-sm border border-gray-600 backdrop-blur-sm" onclick="navigator.clipboard.writeText(this.previousElementSibling.textContent)" aria-label="Copy code">
📋
</button> </div>`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/components/CodeBlock.astro", void 0);

const $$Astro$1 = createAstro("https://safha.dev");
const $$ComparisonTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ComparisonTable;
  const { headers, rows } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700"> <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"> <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> <tr> ${headers.map((header) => renderTemplate`<th scope="col" class="px-6 py-3"> ${header} </th>`)} </tr> </thead> <tbody> ${rows.map((row, index) => renderTemplate`<tr${addAttribute(`${index % 2 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"} border-t border-gray-200 dark:border-gray-700`, "class")}> ${Object.values(row).map((cell) => renderTemplate`<td class="px-6 py-4">${cell}</td>`)} </tr>`)} </tbody> </table> </div>`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/components/ComparisonTable.astro", void 0);

const $$Astro = createAstro("https://safha.dev");
const $$ProCon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProCon;
  const { type = "pro", items = [] } = Astro2.props;
  const title = type === "pro" ? "Pros" : "Cons";
  const iconColor = type === "pro" ? "text-green-500" : "text-red-500";
  return renderTemplate`${maybeRenderHead()}<div class="space-y-4 my-6"> <div class="flex items-center gap-2 mb-3"> <span${addAttribute(`${iconColor} text-xl`, "class")}> ${type === "pro" ? "\u2713" : "\u2717"} </span> <h3 class="text-lg font-semibold dark:text-white">${title}</h3> </div> <ul class="space-y-2 pl-8"> ${items.map((item) => renderTemplate`<li class="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full dark:before:bg-gray-400 before:bg-gray-600"> ${item} </li>`)} </ul> </div>`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/components/ProCon.astro", void 0);

export { $$CodeBlock as $, $$ComparisonTable as a };
