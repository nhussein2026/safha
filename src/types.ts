// src/types.ts
export interface NavItem {
  title: string;
  url: string;
  active?: boolean;
}

export interface Post {
  title: string;
  slug: string;
  content: string;
}
