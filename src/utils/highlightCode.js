// utils/highlightCode.js
export function highlightCode(code, lang = "html") {
  // Sanitize the code to prevent XSS attacks
  const sanitizedCode = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  // Define regex patterns for different languages
  const patterns = {
    html: [
      [/(&lt;\/?)([\w-]+)/g, '<span class="token tag">$1$2</span>'],
      [/(\s+)([\w-]+)(?==)/g, '$1<span class="token attr-name">$2</span>'],
      [/"([^"]*)"/g, '<span class="token attr-value">"$1"</span>'],
      [/({|})/g, '<span class="token punctuation">$1</span>'],
    ],
    javascript: [
      [
        /(\bfunction\b|\bconst\b|\blet\b)/g,
        '<span class="token keyword">$1</span>',
      ],
      [/(["'`])(.*?)\1/g, '<span class="token string">$1$2$1</span>'],
      [/\/\/.*/g, '<span class="token comment">$&</span>'],
    ],
  };

  return sanitizedCode.replace(patterns[lang] || patterns.html);
}
