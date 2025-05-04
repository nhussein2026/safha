import { useState, useEffect } from "react";
import Fuse from "fuse.js";

type Post = {
  title: string;
  slug: string;
  content: string;
};

export default function NavSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Post[]>([]);
  const [fuse, setFuse] = useState<Fuse<Post> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsLoading(true);
    fetch(`${import.meta.env.BASE_URL}search-index.json`)
      .then((res) => res.json())
      .then((data: Post[]) => {
        setFuse(
          new Fuse(data, {
            keys: ["title", "content"],
            threshold: 0.3,
            minMatchCharLength: 2,
          }),
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Search index load failed:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (fuse && query.trim().length > 1) {
      const searchResult = fuse.search(query).map((res) => res.item);
      setResults(searchResult);
    } else {
      setResults([]);
    }
  }, [query, fuse]);

  return (
    <div className="relative group mt-2">
      <div className="relative">
        <input
          type="text"
          placeholder="ابحث..."
          className="block w-full md:w-64 px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="بحث"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Results Dropdown */}
      {query && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-gray-500 dark:text-gray-400">
              جاري التحميل...
            </div>
          ) : results.length > 0 ? (
            results.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-4 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-600 last:border-0 transition-colors"
              >
                <h3 className="font-medium text-blue-600 dark:text-blue-400">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                  {post.content}
                </p>
              </a>
            ))
          ) : (
            <div className="p-4 text-gray-500 dark:text-gray-400">
              لا توجد نتائج
            </div>
          )}
        </div>
      )}
    </div>
  );
}
