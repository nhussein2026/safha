import type { APIRoute } from "astro";
import fs from "fs/promises";
import path from "path";
import { z } from "zod";

// --- 1) Define a zod schema for incoming data ---
const CreatePostSchema = z.object({
  year: z.string().regex(/^\d{4}$/),
  month: z.string().regex(/^\d{1,2}$/),
  day: z.string().regex(/^\d{1,2}$/),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  description: z.string().min(1),
  author: z.string().optional(),
  tags: z.string().optional(), // comma-separated
  categories: z.string().optional(), // comma-separated
  arabicDate: z.string().optional(),
  draft: z
    .string()
    .transform((val) => val === "true")
    .optional(),
  content: z.string().min(1),
});

export const POST: APIRoute = async ({ request }) => {
  // 2) Block in production
  if (!import.meta.env.DEV) {
    return new Response(
      JSON.stringify({ error: "Admin features disabled in production" }),
      { status: 403, headers: { "Content-Type": "application/json" } },
    );
  }

  try {
    // 3) Parse & validate
    const json = await request.json();
    const data = CreatePostSchema.parse(json);

    // 4) Build filename & directory
    const mm = data.month.padStart(2, "0");
    const dd = data.day.padStart(2, "0");
    const filename = `${data.year}-${mm}-${dd}-${data.slug}.mdx`;
    const contentDir = path.join(
      process.cwd(),
      "src",
      "content",
      "blog",
      data.year,
      mm,
    );
    await fs.mkdir(contentDir, { recursive: true });

    // 5) Turn comma-lists into arrays
    const tagsArr = data.tags
      ? data.tags
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : [];
    const categoriesArr = data.categories
      ? data.categories
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

    // 6) Prepare MDX frontmatter
    const frontmatter = `---
title: "${data.title.replace(/"/g, '\\"')}"
pubDate: ${data.year}-${mm}-${dd}
description: "${data.description.replace(/"/g, '\\"')}"
${data.author ? `author: "${data.author.replace(/"/g, '\\"')}"` : ""}
tags:
${tagsArr.map((t) => `  - "${t}"`).join("\n")}
categories:
${categoriesArr.map((c) => `  - "${c}"`).join("\n")}
draft: ${data.draft === true ? "true" : "false"}
${data.arabicDate ? `arabicDate: "${data.arabicDate.replace(/"/g, '\\"')}"` : ""}
slug: "${data.slug}"
---

`;

    // 7) Write file
    const filePath = path.join(contentDir, filename);
    await fs.writeFile(filePath, frontmatter + data.content);

    return new Response(
      JSON.stringify({
        success: true,
        filePath: filePath.replace(process.cwd(), ""),
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }
};
