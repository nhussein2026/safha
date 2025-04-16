import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import glob from 'fast-glob';

const POSTS_PATH = 'src/content/blog';
const files = glob.sync(`${POSTS_PATH}/**/*.mdx`);

const index = files.map((file) => {
  const raw = fs.readFileSync(file, 'utf-8');
  const { data, content } = matter(raw);

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
