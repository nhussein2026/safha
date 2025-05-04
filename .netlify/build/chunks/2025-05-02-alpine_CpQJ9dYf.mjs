import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_mvkG5t2W.mjs';
import { a as $$ComparisonTable, $ as $$CodeBlock } from './ProCon_DK5Udhrp.mjs';

/*1. المقدمة*/
/*## 2. المميزات الرئيسية*/
/*## 3. حالات الاستخدام الأمثل*/
/*4. الأوامر الأساسية*/
/*5. البدء السريع*/
/*6. روابط*/
const frontmatter = {
  "title": "مقدمة إلى Alpine.js لتطوير الواجهات الأمامية ",
  "pubDate": "2025-05-02T00:00:00.000Z",
  "description": "دليل شامل لـ Alpine.js - المكتبة الخفيفة لإضافة التفاعلية إلى واجهات الويب دون تعقيد",
  "author": "ناصر حسين",
  "tags": ["الواجهات الامامية", "Alpine.js", "JavaScript"],
  "categories": ["تطوير الويب"],
  "draft": false,
  "arabicDate": "٣ ذو القعدة ١٤٤٦ هـ",
  "slug": "alpine"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "المزايا-الرئيسية-لـ-alpinejs",
    "text": "المزايا الرئيسية لـ Alpine.js"
  }, {
    "depth": 2,
    "slug": "حالات-الاستخدام-الشائعة",
    "text": "حالات الاستخدام الشائعة"
  }, {
    "depth": 2,
    "slug": "الأوامر-الرئيسية",
    "text": "الأوامر الرئيسية"
  }, {
    "depth": 2,
    "slug": "كيف-تعمل-alpinejs",
    "text": "كيف تعمل Alpine.js؟"
  }, {
    "depth": 2,
    "slug": "التثبيت",
    "text": "التثبيت"
  }, {
    "depth": 2,
    "slug": "-مثال-تفاعلي",
    "text": "💻 مثال تفاعلي"
  }, {
    "depth": 2,
    "slug": "-روابط-مفيدة",
    "text": "🔗 روابط مفيدة"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: ["\n", createVNode(_components.p, {
      children: "Alpine.js هي مكتبة JavaScript خفيفة موجهة لتطوير واجهات المستخدم التفاعلية، وتُعد بديلاً بسيطًا وخفيفًا لإطارات مثل Vue وReact في المشاريع الصغيرة أو المتوسطة. تعتمد على كتابة التعليمات التفاعلية مباشرة داخل HTML باستخدام خصائص مخصصة x-*، مما يجعلها مشابهة في الفكرة لـ jQuery ولكن بأسلوب حديث ومُنظم."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "المزايا-الرئيسية-لـ-alpinejs",
      children: "المزايا الرئيسية لـ Alpine.js"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "خفيف الوزن (حجمه ~7KB فقط)."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "لا حاجة إلى حزمة بناء (Build Process)، يعمل مباشرة في المتصفح."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["تركيبة سهلة تشبه Vue (مثل ", createVNode(_components.code, {
            children: "x-data"
          }), "، ", createVNode(_components.code, {
            children: "x-show"
          }), ")."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "مثالي للمشاريع الصغيرة أو إضافة تفاعلات سريعة دون تعقيد."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "مناسبة للمكونات التفاعلية الصغيرة مثل القوائم المنسدلة، النماذج، التبديل بين العناصر، إلخ."
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", createVNode(_components.h2, {
      id: "حالات-الاستخدام-الشائعة",
      children: "حالات الاستخدام الشائعة"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "إضافة قوائم dropdowns أو modals سريعة."
      }), "\n", createVNode(_components.li, {
        children: "إنشاء نماذج (forms) تفاعلية دون تعقيد."
      }), "\n", createVNode(_components.li, {
        children: "تحديث المحتوى ديناميكيًا دون إعادة تحميل الصفحة."
      }), "\n", createVNode(_components.li, {
        children: "إذا كنت تستخدم HTML وTailwind CSS وتحتاج إلى تفاعلية سريعة."
      }), "\n"]
    }), "\n", "\n", createVNode(_components.h2, {
      id: "الأوامر-الرئيسية",
      children: "الأوامر الرئيسية"
    }), "\n", createVNode($$ComparisonTable, {
      headers: ['الخاصية', 'الاستخدام', 'مثال'],
      rows: [{
        الخاصية: '`x-data`',
        الاستخدام: 'تعريف البيانات',
        مثال: '`<div x-data="{ count: 0 }">`'
      }, {
        الخاصية: '`x-bind`',
        الاستخدام: 'ربط البيانات بخصائص HTML',
        مثال: '`<img x-bind:src="imageUrl">`'
      }, {
        الخاصية: '`x-on`',
        الاستخدام: 'التعامل مع الأحداث',
        مثال: '`<button x-on:click="count++">`'
      }, {
        الخاصية: '`x-show` / `x-if`',
        الاستخدام: 'إظهار/إخفاء العناصر',
        مثال: '`<p x-show="isVisible">`'
      }, {
        الخاصية: '`x-model`',
        الاستخدام: 'ربط القيمة مع عنصر الإدخال',
        مثال: '`<input x-model="name">`'
      }]
    }), "\n", "\n", createVNode(_components.h2, {
      id: "كيف-تعمل-alpinejs",
      children: "كيف تعمل Alpine.js؟"
    }), "\n", createVNode(_components.p, {
      children: "عند تضمين Alpine في صفحتك، تقوم المكتبة بتحليل تعليمات x-* داخل عناصر HTML وتقوم بتحديث DOM تلقائيًا عند تغيير البيانات، دون الحاجة لإعادة تحميل الصفحة أو إنشاء مكونات معقدة."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "<div x-data=\"{ open: false }\">"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  <button @click=\"open = !open\">إظهار/إخفاء</button>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  <p x-show=\"open\">مرحبًا بك في Alpine.js</p>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "</div>"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "التثبيت",
      children: "التثبيت"
    }), "\n", createVNode($$CodeBlock, {
      language: "JavaScript",
      code: `<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>`
    }), "\n", createVNode(_components.h2, {
      id: "-مثال-تفاعلي",
      children: "💻 مثال تفاعلي"
    }), "\n", createVNode($$CodeBlock, {
      language: "html",
      code: `
<div x-data="{ isOpen: false }">
<button 
  @click="isOpen = !isOpen"
  class="dropdown-btn"
>
  القائمة المنسدلة
</button>

<div 
  x-show="isOpen"
  class="dropdown-menu"
>
  {/*
      المحتوى هنا
  */}
</div>
</div>`
    }), "\n", createVNode(_components.p, {
      children: "جرب هذا المثال على CodePen."
    }), "\n", "\n", createVNode(_components.h2, {
      id: "-روابط-مفيدة",
      children: "🔗 روابط مفيدة"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://alpinejs.dev/",
          children: "الموقع الرسمي لـ Alpine.js"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://alpinejs.dev/start-here",
          children: "دليل البدء السريع"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.youtube.com/results?search_query=alpine.js",
          children: "دورة مجانية على YouTube"
        })
      }), "\n"]
    })]
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

const url = "src/content/blog/2025/05/2025-05-02-alpine.mdx";
const file = "C:/Users/naser/Desktop/Safha blog/safha/src/content/blog/2025/05/2025-05-02-alpine.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/naser/Desktop/Safha blog/safha/src/content/blog/2025/05/2025-05-02-alpine.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
