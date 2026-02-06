// src/lib/jornal/types.ts
import type { ImageMetadata } from "astro";

export type PostType = "tribuna" | "boletim";

/* =========================
   BLOCOS DE CONTEÚDO
========================= */

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | HighlightBlock;

export interface ParagraphBlock {
  type: "paragraph";
  text: string; // markdown
}

export interface HeadingBlock {
  type: "heading";
  level: 2 | 3;
  text: string;
}

export interface HighlightBlock {
  type: "highlight";
  title?: string;
  text: string;
}

export interface ImageBlock {
  type: "image";
  image: ImageMetadata;
  caption?: string;
  align?: "left" | "center" | "right";
}

/* =========================
   POST
========================= */

export interface Post {
  id: number;
  slug: string;
  type: PostType;

  title: string;
  excerpt: string;

  author: string;
  publishedAt: string;
  readingTime: string;

  tags: string[];

  coverImage: ImageMetadata;

  content: ContentBlock[];
}

/* =========================
   AUTOR
========================= */

export interface Author {
  id: number;
  name: string;
  role: string;
  image: ImageMetadata;
  jornal: number;
  boletim: number;
  posts: number;
}
