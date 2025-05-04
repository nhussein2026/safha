"use strict";
/// <reference types="astro/client" />
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var grayMatter = require("gray-matter");
var fg = require("fast-glob");
var POSTS_PATH = "src/content/blog";
var files = fg.sync("".concat(POSTS_PATH, "/**/*.mdx"));
var index = files.map(function (file) {
  var _a;
  var raw = fs.readFileSync(file, "utf-8");
  var _b = grayMatter(raw),
    data = _b.data,
    content = _b.content;
  var relativePath = path.relative(POSTS_PATH, file);
  var slug = relativePath.replace(/\.mdx$/, "").replace(/\\/g, "/"); // Normalize for Windows
  return {
    title: (_a = data.title) !== null && _a !== void 0 ? _a : "Untitled",
    slug: slug,
    content: content.slice(0, 500), // limit for performance
  };
});
var outputPath = path.resolve("public/search-index.json");
fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));
console.log(
  "\u2705 Search index generated with "
    .concat(index.length, " posts at ")
    .concat(outputPath),
);
