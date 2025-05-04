import { useState, useEffect } from "react";
import Fuse from "fuse.js";

type Post = {
  title: string;
  slug: string;
  content: string;
};

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Post[]>([]);
  const [fuse, setFuse] = useState<Fuse<Post> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/search-index.json")
      .then((res) => res.json())
      .then((data: Post[]) => {
        setFuse(
          new Fuse(data, {
            keys: ["title", "content"],
            threshold: 0.3,
            includeMatches: true,
          }),
        );
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (fuse && query.trim()) {
      setHasSearched(true);
      const searchResult = fuse.search(query).map((res) => res.item);
      setResults(searchResult);
    } else {
      setResults([]);
    }
  }, [query, fuse]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="ابحث عن مقالة"
          className="w-full p-4 pl-10 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all dark:focus:ring-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search blog posts"
        />
        <svg
          className="absolute left-3 top-4 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {query.trim() && (
            <p className="text-sm text-gray-500">
              {results.length > 0
                ? `Found ${results.length} ${results.length === 1 ? "result" : "results"} for "${query}"`
                : hasSearched
                  ? `No results found for "${query}"`
                  : ""}
            </p>
          )}

          <ul className="space-y-3">
            {results.map((post) => (
              <li
                key={post.slug}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <a href={`/blog/${post.slug}`} className="block group">
                  <h3 className="text-lg font-medium text-blue-600 group-hover:text-blue-800 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                    {post.content.substring(0, 150)}...
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
