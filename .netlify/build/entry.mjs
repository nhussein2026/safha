import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DhfRSDyC.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/blog/category/_category_.astro.mjs');
const _page4 = () => import('./pages/blog/page/_---page_.astro.mjs');
const _page5 = () => import('./pages/blog/tag/_tag_.astro.mjs');
const _page6 = () => import('./pages/blog/year/_year_.astro.mjs');
const _page7 = () => import('./pages/blog.astro.mjs');
const _page8 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page9 = () => import('./pages/search.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["../../../AppData/Local/Yarn/Berry/cache/astro-npm-5.7.10-e3b7855276-10c0.zip/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog/category/[category].astro", _page3],
    ["src/pages/blog/page/[...page].astro", _page4],
    ["src/pages/blog/tag/[tag].astro", _page5],
    ["src/pages/blog/year/[year].astro", _page6],
    ["src/pages/blog/index.astro", _page7],
    ["src/pages/blog/[...slug].astro", _page8],
    ["src/pages/search.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "48253116-3cf7-46ea-ae19-abd6d1e12778"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
