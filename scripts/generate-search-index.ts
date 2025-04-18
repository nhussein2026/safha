import fs from 'node:fs';
import path from 'node:path';
import fastGlob from 'fast-glob';
import matter from 'gray-matter';


const POSTS_PATH = 'src/content/blog';

async function generateIndex() {
const files = fastGlob.sync(`${POSTS_PATH}/**/*.mdx`);
  
  const index = files.map((file) => {
    const raw = fs.readFileSync(file, 'utf-8');
    const { data, content } = matter(raw);
    
    const relativePath = path.relative(POSTS_PATH, file);
    const slug = relativePath
      .replace(/\.mdx$/, '')
      .replace(/\\/g, '/');

    return {
      title: data.title || 'Untitled',
      slug: `/${slug}`,
      content: content.slice(0, 500),
      date: data.date || new Date().toISOString()
    };
  });

  const outputPath = path.resolve('public/search-index.json');
  fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));
  console.log(`✅ Generated search index with ${index.length} posts`);
}

generateIndex().catch(console.error);