import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, r as renderTemplate, e as renderComponent, u as unescapeHTML, o as renderHead, p as renderSlot, q as renderScript } from './astro/server_mvkG5t2W.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

const $$Astro$d = createAstro("https://safha.dev");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, text, active, icon, style, target, classes, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(target, "target")}${addAttribute(`link ${style} ${classes}`, "class")}${spreadAttributes(rest)}> ${icon && icon.side === "left" && renderTemplate`<i${addAttribute(`icon-${icon.name} icon-left`, "class")}></i>`} ${text} ${icon && icon.side === "right" && renderTemplate`<i${addAttribute(`icon-${icon.name} icon-right`, "class")}></i>`} </a>`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/components/Link.astro", void 0);

function NavSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [fuse, setFuse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsLoading(true);
    fetch(`${"/"}search-index.json`).then((res) => res.json()).then((data) => {
      setFuse(
        new Fuse(data, {
          keys: ["title", "content"],
          threshold: 0.3,
          minMatchCharLength: 2
        })
      );
      setIsLoading(false);
    }).catch((error) => {
      console.error("Search index load failed:", error);
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    if (fuse && query.trim().length > 1) {
      const searchResult = fuse.search(query).map((res) => res.item);
      setResults(searchResult);
    } else {
      setResults([]);
    }
  }, [query, fuse]);
  return /* @__PURE__ */ jsxs("div", { className: "relative group mt-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "ابحث...",
          className: "block w-full md:w-64 px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all",
          value: query,
          onChange: (e) => setQuery(e.target.value),
          "aria-label": "بحث"
        }
      ),
      /* @__PURE__ */ jsx(
        "svg",
        {
          className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
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
    query && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 right-0 z-50 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-96 overflow-y-auto", children: isLoading ? /* @__PURE__ */ jsx("div", { className: "p-4 text-gray-500 dark:text-gray-400", children: "جاري التحميل..." }) : results.length > 0 ? results.map((post) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: `/blog/${post.slug}`,
        className: "block p-4 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-600 last:border-0 transition-colors",
        children: [
          /* @__PURE__ */ jsx("h3", { className: "font-medium text-blue-600 dark:text-blue-400", children: post.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2", children: post.content })
        ]
      },
      post.slug
    )) : /* @__PURE__ */ jsx("div", { className: "p-4 text-gray-500 dark:text-gray-400", children: "لا توجد نتائج" }) })
  ] });
}

const $$Astro$c = createAstro("https://safha.dev");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Navbar;
  const navItems = Astro2.props.navItems ?? [
    { title: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", url: "/", active: true },
    { title: "\u0627\u0644\u0645\u062F\u0648\u0646\u0629", url: "/blog" },
    { title: "\u0645\u0646 \u0646\u062D\u0646", url: "/about" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="font-[Cairo] bg-white border-gray-200 dark:bg-gray-900 relative"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <!-- Logo --> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="/صفحة.png" class="h-8" alt="Safha Logo"> </a> <!-- Search and Mobile Menu --> <div class="flex md:order-2 gap-2"> <!-- Desktop Search --> <div class="hidden md:block"> ${renderComponent($$result, "NavSearch", NavSearch, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/naser/Desktop/Safha blog/safha/src/components/NavSearch", "client:component-export": "default" })} </div> <!-- Mobile Search Toggle --> <button type="button" data-collapse-toggle="mobile-search" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg> <span class="sr-only">Search</span> </button> <!-- Mobile Menu Toggle --> <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <!-- Mobile Search (Hidden by default) --> <div class="hidden w-full md:hidden" id="mobile-search"> ${renderComponent($$result, "NavSearch", NavSearch, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/naser/Desktop/Safha blog/safha/src/components/NavSearch", "client:component-export": "default" })} </div> <!-- Navigation Links --> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search"> <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 list-none"> ${navItems.map((item) => renderTemplate`<li> ${renderComponent($$result, "Link", $$Link, { "href": item.url, "text": item.title, "active": item.active, "classes": "block py-2 px-3 text-2xl text-[#27FFE3] rounded-sm md:bg-transparent md:p-0 no-underline outline-none", "aria-current": item.active ? "page" : void 0, "style": item.active ? "primary" : "secondary" })} </li>`)} </ul> </div> </div> </nav>`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/components/Navbar.astro", void 0);

const $$Astro$b = createAstro("https://safha.dev");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Footer;
  const footerItems = Astro2.props.footerItems ?? [
    { title: "\u0635\u0641\u062D\u0629", url: "about" },
    // { title: "سياسة الخصوصية", url: "#" },
    { title: "\u0628\u062D\u062B", url: "search" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="font-[Cairo] bg-white rounded-lg shadow-sm dark:bg-gray-900"> <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"> <div class="sm:flex sm:items-center sm:justify-between"> <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"> <img src="/صفحة.png" class="h-8" alt="Safha app footer Logo"> </a> <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 list-none"> ${footerItems.map((item) => renderTemplate`<li> <a${addAttribute(item.url, "href")} class="hover:underline text-[#27FFE3] me-4 md:me-6"> ${item.title} </a> </li>`)} </ul> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
. جميع الحقوق محفوظة © <span id="copyright"></span><a href="https://safha.dev/" class="hover:underline">صفحة</a></span> </div> </footer>`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/components/Footer.astro", void 0);

const $$Astro$a = createAstro("https://safha.dev");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/naser/AppData/Local/Yarn/Berry/cache/astro-seo-npm-0.8.4-19a4a026a0-10c0.zip/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$9 = createAstro("https://safha.dev");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/naser/AppData/Local/Yarn/Berry/cache/astro-seo-npm-0.8.4-19a4a026a0-10c0.zip/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$8 = createAstro("https://safha.dev");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/naser/AppData/Local/Yarn/Berry/cache/astro-seo-npm-0.8.4-19a4a026a0-10c0.zip/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$7 = createAstro("https://safha.dev");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/naser/AppData/Local/Yarn/Berry/cache/astro-seo-npm-0.8.4-19a4a026a0-10c0.zip/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$6 = createAstro("https://safha.dev");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/Users/naser/AppData/Local/Yarn/Berry/cache/astro-seo-npm-0.8.4-19a4a026a0-10c0.zip/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$5 = createAstro("https://safha.dev");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/naser/AppData/Local/Yarn/Berry/cache/astro-seo-npm-0.8.4-19a4a026a0-10c0.zip/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$4 = createAstro("https://safha.dev");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/naser/AppData/Local/Yarn/Berry/cache/astro-seo-npm-0.8.4-19a4a026a0-10c0.zip/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$3 = createAstro("https://safha.dev");
const $$SEO$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SEO$1;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/naser/AppData/Local/Yarn/Berry/cache/astro-seo-npm-0.8.4-19a4a026a0-10c0.zip/node_modules/astro-seo/src/SEO.astro", void 0);

const SITE = {
  title: "صفحة -  البرمجة والتقنية بالعربية",
  description: "صفحة هي منصة عربية متخصصة في تقديم محتوى تقني عربي موجهة للمطورين والمهتمين بالتقنية.",
  url: "https://safha.dev",
  defaultImage: "https://safha.dev/default-og.png",
  twitterHandle: "not_available"
};

const $$Astro$2 = createAstro("https://safha.dev");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  const { title, description, ogImage } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "SEO", $$SEO$1, { "title": title || SITE.title, "description": description || SITE.description, "openGraph": {
    basic: {
      title: title || "Safha",
      type: "website",
      image: ogImage || "https://safha.dev/og-image.png",
      url: Astro2.url.href
    }
  }, "twitter": {
    creator: SITE.twitterHandle,
    card: "summary_large_image"
  }, "extend": {
    meta: [
      {
        name: "twitter:image",
        content: ogImage || "https://safha.dev/default-og.png"
      },
      { name: "twitter:title", content: title || "\u0635\u0641\u062D\u0629" },
      {
        name: "twitter:description",
        content: description || "\u0635\u0641\u062D\u0629 \u0647\u064A \u0645\u0646\u0635\u0629 \u0639\u0631\u0628\u064A\u0629 \u0645\u062A\u062E\u0635\u0635\u0629 \u0641\u064A \u062A\u0642\u062F\u064A\u0645 \u0645\u062D\u062A\u0648\u0649 \u062A\u0642\u0646\u064A \u0639\u0631\u0628\u064A \u0645\u0648\u062C\u0647\u0629 \u0644\u0644\u0645\u0637\u0648\u0631\u064A\u0646 \u0648\u0627\u0644\u0645\u0647\u062A\u0645\u064A\u0646 \u0628\u0627\u0644\u062A\u0642\u0646\u064A\u0629."
      }
    ],
    link: [{ rel: "icon", href: "/favicon.ico" }]
  } })}`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/components/SEO.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1, _b;
const $$Astro$1 = createAstro("https://safha.dev");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Head;
  const { title, description, image, url, type = "website", post } = Astro2.props;
  return renderTemplate(_b || (_b = __template$1(['<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Dynamic SEO -->', '<!-- Canonical --><link rel="canonical"', '><!-- Preconnect and Load Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Sans+Gunjala+Gondi:wght@400..700&family=Marhey:wght@300..700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet"><!-- Flowbite CSS --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css"><!-- Flowbite JS (defer to improve performance) --><script type="module" defer>\n    import "flowbite";\n  <\/script><!-- JSON-LD for Blog Posts -->', "", "</head>"])), renderComponent($$result, "SEO", $$SEO, { "title": title || SITE.title, "description": description || SITE.description, "ogImage": image || SITE.defaultImage }), addAttribute(new URL(url || "", SITE.url).href, "href"), post && renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">\n      {JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "BlogPosting",\n        publisher: {\n          "@type": "Organization",\n          name: SITE.title,\n          logo: `${SITE.url}/logo.png`\n        },\n        headline: post.data.title,\n        description: post.data.description,\n        image: `${SITE.url}${post.data.image || SITE.defaultImage}`,\n        url: `${SITE.url}/blog/${post.slug}`,\n        datePublished: post.data.pubDate.toISOString(),\n        dateModified: post.data.updatedAt?.toISOString() || post.data.pubDate.toISOString(),\n        mainEntityOfPage: {\n          "@type": "WebPage",\n          "@id": `${SITE.url}/blog/${post.slug}`\n        },\n        author: {\n          "@type": "Person",\n          name: "\u0646\u0627\u0635\u0631 \u062D\u0633\u064A\u0646",\n          alternateName: "Naser Hussein",\n          url: "https://nhussein.io",\n        },\n        keywords: post.data.tags?.join(", "),\n        articleBody: post.data.excerpt\n      })}\n    <\/script>'], ['<script type="application/ld+json">\n      {JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "BlogPosting",\n        publisher: {\n          "@type": "Organization",\n          name: SITE.title,\n          logo: \\`\\${SITE.url}/logo.png\\`\n        },\n        headline: post.data.title,\n        description: post.data.description,\n        image: \\`\\${SITE.url}\\${post.data.image || SITE.defaultImage}\\`,\n        url: \\`\\${SITE.url}/blog/\\${post.slug}\\`,\n        datePublished: post.data.pubDate.toISOString(),\n        dateModified: post.data.updatedAt?.toISOString() || post.data.pubDate.toISOString(),\n        mainEntityOfPage: {\n          "@type": "WebPage",\n          "@id": \\`\\${SITE.url}/blog/\\${post.slug}\\`\n        },\n        author: {\n          "@type": "Person",\n          name: "\u0646\u0627\u0635\u0631 \u062D\u0633\u064A\u0646",\n          alternateName: "Naser Hussein",\n          url: "https://nhussein.io",\n        },\n        keywords: post.data.tags?.join(", "),\n        articleBody: post.data.excerpt\n      })}\n    <\/script>']))), renderHead());
}, "C:/Users/naser/Desktop/Safha blog/safha/src/layouts/Head.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FlowbiteInit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script>\n  import { initFlowbite } from "flowbite";\n\n  // Initialize on page load\n  document.addEventListener("DOMContentLoaded", () => {\n    initFlowbite();\n  });\n<\/script>'])));
}, "C:/Users/naser/Desktop/Safha blog/safha/src/components/FlowbiteInit.astro", void 0);

const $$Astro = createAstro("https://safha.dev");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = SITE.title,
    description = SITE.description,
    image = SITE.defaultImage,
    url = SITE.url,
    lang = "ar",
    dir = "rtl",
    post
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")}${addAttribute(dir, "dir")}> ${renderComponent($$result, "Head", $$Head, { "title": title, "description": description, "image": image, "url": url, "post": post })}${maybeRenderHead()}<body class="m-0 p-0 bg-snow-white dark:bg-dark-navy min-h-screen flex flex-col"> <header class="flex-shrink-0">${renderComponent($$result, "Navbar", $$Navbar, {})}</header> <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} <!-- This is where your page content goes --> </main> <footer class="flex-shrink-0 bg-gray-100 dark:bg-gray-800"> ${renderComponent($$result, "Footer", $$Footer, {})} </footer> ${renderScript($$result, "C:/Users/naser/Desktop/Safha blog/safha/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "FlowbiteInit", $$FlowbiteInit, {})} </body></html>`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/layouts/Layout.astro", void 0);

export { $$Layout as $, SITE as S };
