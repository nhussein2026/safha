# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).



📚 Blog Structure & Naming Convention
All blog posts are stored in the following format:

css
Copy
Edit
src/content/blog/YYYY/MM/YYYY-MM-DD-title-slug.mdx
Example:

css
Copy
Edit
src/content/blog/2025/04/2025-04-23-introduction-to-react.mdx
📌 Naming Format Details:
YYYY → Year of publishing

MM → Month of publishing (2 digits)

YYYY-MM-DD → Publication date

title-slug → English, URL-safe, lowercase, hyphenated version of the title

Use Arabic in the frontmatter title, but keep filenames and slugs in English to ensure compatibility and readability.

Example Frontmatter:

mdx
Copy
Edit
---
title: "مقدمة إلى React"
description: "شرح مبسط عن مكتبة رياكت لتطوير الواجهات"
pubDate: "2025-04-23"
categories: ["تطوير الويب"]
tags: ["ريـاكت", "JavaScript"]
slug: "introduction-to-react"
image: "/images/blog/react-intro.png"
---
🏷️ Tags
Use these standardized tags for filtering and organizing blog posts:


Arabic	English
ريـاكت	React
جافاسكربت	JavaScript
تايب سكربت	TypeScript
نود.جس	Node.js
إكسبريس	Express
MongoDB	MongoDB
SQL	SQL
قواعد البيانات	Databases
تطوير الويب	Web Development
الواجهات الأمامية	Frontend
الواجهات الخلفية	Backend
API	API
ذكاء اصطناعي	AI
تعلم الآلة	Machine Learning
الأمن السيبراني	Cybersecurity
البرمجة	Programming
أدوات المطور	Dev Tools
Git	Git
GitHub	GitHub
برمجة التطبيقات	App Development
Docker	Docker
تقنيات جديدة	Emerging Tech
📂 Categories
Use one or more of the following broad categories for classification:


Arabic	English
تطوير الويب	Web Development
الذكاء الاصطناعي	Artificial Intelligence
الأمن السيبراني	Cybersecurity
قواعد البيانات	Databases
DevOps	DevOps
الأدوات	Tools
تعلم البرمجة	Learn Programming
مقالات متنوعة	Miscellaneous