export function slugify(str: string): string {
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\u0600-\u06FF\-]+/g, "") // Remove non-word characters except Arabic
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+|-+$/g, ""); // Trim - from start/end
}

export const deslugify = (slug) => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
};
