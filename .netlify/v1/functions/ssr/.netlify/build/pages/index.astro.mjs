/* empty css                                 */
import { a as createComponent, m as maybeRenderHead, r as renderTemplate, e as renderComponent, c as createAstro } from '../chunks/astro/server_mvkG5t2W.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bec8ENT6.mjs';
export { renderers } from '../renderers.mjs';

const $$HeroAnimation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Right Column - Visual Element with better mobile scaling -->${maybeRenderHead()}<div class="relative h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0 animate-reveal [animation-delay:1s]"> <!-- Morphing Shape Container --> <div class="absolute inset-0 flex items-center justify-center"> <div class="relative w-[280px] sm:w-[350px] lg:w-[400px] h-[280px] sm:h-[350px] lg:h-[400px] animate-morph"> <!-- Glass Card with improved mobile appearance --> <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-[inherit] border border-white/10 shadow-2xl"></div> <!-- Floating Elements - Responsive spacing --> <div class="absolute inset-4 sm:inset-6 flex flex-col justify-between p-4 sm:p-6"> <!-- Top Section --> <div class="space-y-3 sm:space-y-4"> <div class="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 animate-pulse"></div> <div class="h-1.5 sm:h-2 w-20 sm:w-24 bg-white/20 rounded-full"></div> <div class="h-1.5 sm:h-2 w-24 sm:w-32 bg-white/10 rounded-full"></div> </div> <!-- Middle Section --> <div class="flex justify-between items-center"> <div class="space-y-2"> <div class="h-6 sm:h-8 w-20 sm:w-24 rounded-lg bg-gradient-to-r from-violet-500/20 to-cyan-500/20"></div> <div class="h-1.5 sm:h-2 w-12 sm:w-16 bg-white/20 rounded-full"></div> </div> <div class="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-500/30 animate-float"></div> </div> <!-- Bottom Section --> <div class="space-y-2 sm:space-y-3"> <div class="h-1.5 sm:h-2 w-full bg-white/10 rounded-full"></div> <div class="h-1.5 sm:h-2 w-3/4 bg-white/20 rounded-full"></div> </div> </div> </div> </div> </div>`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/components/HeroAnimation.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const heroData = {
    title: "\u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0648\u0627\u0644\u062A\u0642\u0646\u064A\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    description: "\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0648\u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0645\u0639 \u0635\u0641\u062D\u0629"
  };
  return renderTemplate`${maybeRenderHead()}<section class="relative dark:bg-gray-900 overflow-hidden"> <!-- Main Hero Container --> <div class="relative min-h-[60vh] md:min-h-[70vh] flex items-center"> <!-- Background Animation Container --> <div class="absolute inset-0 z-0 opacity-75 dark:opacity-50"> ${renderComponent($$result, "HeroAnimation", $$HeroAnimation, {})} </div> <!-- Content Overlay --> <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto text-center"> <!-- Title --> <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 font-Marhey"> ${heroData.title} </h1> <!-- Description --> <p class="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-sens leading-relaxed"> ${heroData.description} </p> <!-- CTA Buttons (Uncomment when needed) --> <!-- <div class="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <a href="{heroData.primaryButton.href}" class="...">
            {heroData.primaryButton.text}
          </a>
          <a href="{heroData.secondaryButton.href}" class="...">
            {heroData.secondaryButton.text}
          </a>
        </div> --> </div> </div> <!-- Gradient Overlays --> <div class="absolute inset-0 z-0 pointer-events-none"> <div class="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white dark:from-gray-900"></div> <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white dark:from-gray-900"></div> </div> </div> </section>`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/components/Hero.astro", void 0);

const $$Astro = createAstro("https://safha.dev");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} </main> ` })}`;
}, "C:/Users/naser/Desktop/Safha blog/safha/src/pages/index.astro", void 0);

const $$file = "C:/Users/naser/Desktop/Safha blog/safha/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
