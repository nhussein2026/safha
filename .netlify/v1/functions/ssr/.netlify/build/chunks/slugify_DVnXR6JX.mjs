function slugify(str) {
  return str.toString().trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\u0600-\u06FF\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+|-+$/g, "");
}

export { slugify as s };
