// src/middleware.ts
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(({ url }, next) => {
  // Block admin access in production
  if (!import.meta.env.DEV && url.pathname.startsWith("/admin")) {
    return new Response("Not found", { status: 404 });
  }
  return next();
});
