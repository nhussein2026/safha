# Astro Starter Kit: Basics

---
title: "Astro Starter Kit: Basics"
description: "Kickstart your Astro project with the Basics template."
tags: ["Astro", "Starter Kit"]
---

import { CodeBlock } from '../components/CodeBlock';

# Astro Starter Kit: Basics

<CodeBlock language="sh">
{`npm create astro@latest -- --template basics`}
</CodeBlock>

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

<img src="https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554" alt="just-the-basics" loading="lazy" />

## 🚀 Project Structure

Within your Astro project, you will find:

<pre><code class="language-text">/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
</code></pre>

For more details on the folder structure, visit [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

Run these commands from your project root in a terminal:

| Command                   | Action                                           |
| ------------------------- | ------------------------------------------------ |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts the local dev server at `localhost:4321`  |
| `npm run build`           | Builds your production site to `./dist/`         |
| `npm run preview`         | Previews your build locally                      |
| `npm run astro ...`       | Runs CLI commands (e.g., `astro add`, `astro check`)|
| `npm run astro -- --help` | Displays help for the Astro CLI                  |

## 👀 Want to learn more?

Check [our documentation](https://docs.astro.build) or join our [Discord server](https://astro.build/chat).

---

**Blog Structure & Naming Convention**

All blog posts are stored in the following format:

<pre><code class="language-text">src/content/blog/YYYY/MM/YYYY-MM-DD-title-slug.mdx</code></pre>

Example:

<pre><code class="language-text">src/content/blog/2025/04/2025-04-23-introduction-to-react.mdx</code></pre>

📌 Naming Format Details:
- YYYY → Year of publishing
- MM → Month (2 digits)
- YYYY-MM-DD → Publication date
- title-slug → URL-safe, lowercase, hyphenated version of the title

Use Arabic in the frontmatter title while keeping filenames and slugs in English for compatibility.

Example Frontmatter:

<pre><code class="language-mdx">---
title: "مقدمة إلى React"
description: "شرح مبسط عن مكتبة رياكت لتطوير الواجهات"
pubDate: "2025-04-23"
categories: ["تطوير الويب"]
tags: ["ريـاكت", "JavaScript"]
slug: "introduction-to-react"
image: "/images/blog/react-intro.png"
---</code></pre>

🏷️ Standard Tags for Organization:

| Arabic              | English             |
| ------------------- | ------------------- |
| ريـاكت              | React               |
| جافاسكربت           | JavaScript          |
| تايب سكربت         | TypeScript          |
| نود.جس             | Node.js             |
| إكسبريس            | Express             |
| MongoDB             | MongoDB             |
| SQL                 | SQL                 |
| قواعد البيانات     | Databases           |
| تطوير الويب         | Web Development     |
| الواجهات الأمامية   | Frontend            |
| الواجهات الخلفية   | Backend             |
| API                 | API                 |
| ذكاء اصطناعي        | AI                  |
| تعلم الآلة          | Machine Learning    |
| الأمن السيبراني     | Cybersecurity       |
| البرمجة            | Programming         |
| أدوات المطور       | Dev Tools           |
| Git                 | Git                 |
| GitHub              | GitHub              |
| برمجة التطبيقات     | App Development     |
| Docker              | Docker              |
| تقنيات جديدة       | Emerging Tech       |

📂 Categories:

| Arabic               | English                  |
| -------------------- | ------------------------ |
| تطوير الويب          | Web Development          |
| الذكاء الاصطناعي     | Artificial Intelligence  |
| الأمن السيبراني      | Cybersecurity            |
| قواعد البيانات       | Databases                |
| DevOps               | DevOps                   |
| الأدوات              | Tools                    |
| تعلم البرمجة         | Learn Programming        |
| مقالات متنوعة        | Miscellaneous            |