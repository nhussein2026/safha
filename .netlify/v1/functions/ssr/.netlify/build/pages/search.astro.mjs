/* empty css                                 */
import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_mvkG5t2W.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bec8ENT6.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
export { renderers } from '../renderers.mjs';

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [fuse, setFuse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("/search-index.json").then((res) => res.json()).then((data) => {
      setFuse(
        new Fuse(data, {
          keys: ["title", "content"],
          threshold: 0.3,
          includeMatches: true
        })
      );
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    if (fuse && query.trim()) {
      setHasSearched(true);
      const searchResult = fuse.search(query).map((res) => res.item);
      setResults(searchResult);
    } else {
      setResults([]);
    }
  }, [query, fuse]);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto p-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative mb-6", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "ابحث عن مقالة",
          className: "w-full p-4 pl-10 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all dark:focus:ring-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500",
          value: query,
          onChange: (e) => setQuery(e.target.value),
          "aria-label": "Search blog posts"
        }
      ),
      /* @__PURE__ */ jsx(
        "svg",
        {
          className: "absolute left-3 top-4 h-5 w-5 text-gray-400",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            }
          )
        }
      )
    ] }),
    isLoading ? /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center py-8", children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" }) }) : /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      query.trim() && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: results.length > 0 ? `Found ${results.length} ${results.length === 1 ? "result" : "results"} for "${query}"` : hasSearched ? `No results found for "${query}"` : "" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: results.map((post) => /* @__PURE__ */ jsx(
        "li",
        {
          className: "p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",
          children: /* @__PURE__ */ jsxs("a", { href: `/blog/${post.slug}`, className: "block group", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-blue-600 group-hover:text-blue-800 transition-colors", children: post.title }),
            /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-gray-600 line-clamp-2", children: [
              post.content.substring(0, 150),
              "..."
            ] })
          ] })
        },
        post.slug
      )) })
    ] })
  ] });
}

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0628\u062D\u062B" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "Search", Search, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/naser/Desktop/Safha blog/safha/src/components/Search.tsx", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/pages/search.astro", void 0);

const $$file = "C:/Users/naser/Desktop/Safha blog/safha/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
