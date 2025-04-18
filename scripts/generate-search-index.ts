/// <reference types="astro/client" />

import * as fs from 'fs';
import * as path from 'path';
import * as grayMatter from 'gray-matter';
import * as fg from 'fast-glob';

const POSTS_PATH = 'src/content/blog';
const files = fg.sync(`${POSTS_PATH}/**/*.mdx`);

const index = files.map((file) => {
  const raw = fs.readFileSync(file, 'utf-8');
  const { data, content } = grayMatter(raw);

  const relativePath = path.relative(POSTS_PATH, file);
  const slug = relativePath
    .replace(/\.mdx$/, '')
    .replace(/\\/g, '/'); // Normalize for Windows

  return {
    title: data.title ?? 'Untitled',
    slug,
    content: content.slice(0, 500), // limit for performance
  };
});

const outputPath = path.resolve('public/search-index.json');
fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));

console.log(`✅ Search index generated with ${index.length} posts at ${outputPath}`);
