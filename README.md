# Safha

مرحبًا بك في Safha، موقع تقني باللغة العربية يقدّم محتوى عالي الجودة في مجالات البرمجة، التطوير، الذكاء الاصطناعي، وغيرها.

---

## 🚀 المقدمة

Safha هو موقع يهدف إلى خدمة المجتمع العربي الرقمي من خلال تقديم معلومات شاملة ومُنظمة حول أحدث التقنيات والأدوات البرمجية.

---

## 📚 هيكلة المشروع

```
/
├── public/                # ملفات عامة مثل الصور والأيقونات
├── src/
│   ├── components/        # مكونات مخصصة مثل ArabicList و CodeBlock
│   ├── content/           
│   │   └── blog/          # منشورات المدونة منظمة حسب السنة والشهر
│   ├── layouts/           # التخطيطات العامة للصفحات
│   ├── pages/             # صفحات الموقع
│   └── styles/            # أنماط Tailwind أو RTL
└── astro.config.mjs       # إعدادات Astro
```

---

## ✍️ تنظيم المدونة

يتم تنظيم كل منشور وفق الهيكل التالي:

```
src/content/blog/YYYY/MM/YYYY-MM-DD-title-slug.mdx
```

### مثال على منشور:
```
src/content/blog/2025/04/2025-04-24-internet-infrastructure.mdx
```

### تفاصيل التنسيق:
- **YYYY** → سنة النشر.
- **MM** → الشهر (برقمين).
- **YYYY-MM-DD** → تاريخ النشر.
- **title-slug** → نسخة إنجليزية مبسطة من العنوان بدون مسافات.

---

## 📄 محتوى الـ Frontmatter

```mdx
---
title: "البنية التحتية للإنترنت"
description: "مقال يشرح مكونات الإنترنت الأساسية"
pubDate: "2025-04-24"
categories: ["الشبكات والتكنولوجيا"]
tags: ["الإنترنت", "TCP/IP"]
slug: "internet-infrastructure"
image: "/images/blog/internet.png"
---
```

---

## 🏷️ الوسوم القياسية (Tags)

| بالعربية         | English         |
|------------------|-----------------|
| ريـاكت           | React           |
| جافاسكربت        | JavaScript      |
| تايب سكربت       | TypeScript      |
| نود.جس          | Node.js         |
| MongoDB          | MongoDB         |
| قواعد البيانات  | Databases       |
| تطوير الويب      | Web Development |
| الواجهات الأمامية | Frontend        |
| الواجهات الخلفية  | Backend         |
| ذكاء اصطناعي     | AI              |
| تعلم الآلة       | Machine Learning|
| الأمن السيبراني  | Cybersecurity   |
| البرمجة          | Programming     |
| أدوات المطور     | Dev Tools       |
| Git              | Git             |
| GitHub           | GitHub          |
| برمجة التطبيقات  | App Development |
| Docker           | Docker          |
| تقنيات جديدة    | Emerging Tech   |