// src/lib/jornal/getPosts.ts
import { postsMock } from "./posts.mock";
import type { Post } from "./types";
import { calculateReadingTimeFromContent } from "./readingTime";

const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN;

/* =========================
   FETCH ALL POSTS
========================= */

export async function getPosts(): Promise<Post[]> {
  // fallback total (sem Strapi)
  if (!STRAPI_URL) {
    return sort(
      postsMock.map((p) => ({
        ...p,
        readingTime: calculateReadingTimeFromContent(p.content),
      })),
    );
  }

  try {
    const res = await fetch(
      `${STRAPI_URL}/api/posts?populate=deep&sort=publishedAt:desc`,
      {
        headers: STRAPI_TOKEN
          ? { Authorization: `Bearer ${STRAPI_TOKEN}` }
          : {},
      },
    );

    if (!res.ok) throw new Error("Strapi error");

    const json = await res.json();

    return sort(json.data.map(normalizePost));
  } catch {
    // fallback seguro
    return sort(
      postsMock.map((p) => ({
        ...p,
        readingTime: calculateReadingTimeFromContent(p.content),
      })),
    );
  }
}

/* =========================
   FETCH SINGLE POST
========================= */

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug);
}

/* =====================
  Últimas notícias
======================= */
export async function getLatestNews(limit = 3): Promise<Post[]> {
  const posts = await getPosts();

  return posts
    .filter((p) => p.type === "tribuna" || p.type === "boletim")
    .slice(0, limit);
}

/* =========================
   HELPERS
========================= */

function sort(posts: Post[]): Post[] {
  return posts.slice().sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime(),
  );
}

/* =========================
   NORMALIZER (STRAPI → FRONT)
========================= */

function normalizePost(item: any): Post {
  const a = item.attributes;

  const content = a.content.map(normalizeBlock);

  return {
    id: item.id,
    slug: a.slug,
    type: a.type,
    title: a.title,
    excerpt: a.excerpt,
    author: a.author,
    publishedAt: a.publishedAt,
    readingTime: calculateReadingTimeFromContent(content),
    tags: a.tags ?? [],
    coverImage: a.coverImage?.data?.attributes,
    coverCaption: a.coverCaption,
    coverCredit: a.coverCredit,
    content,
  };
}

function normalizeBlock(block: any) {
  switch (block.__component) {
    case "content.paragraph":
      return {
        type: "paragraph",
        text: block.text,
      };

    case "content.heading":
      return {
        type: "heading",
        level: block.level === "h2" ? 2 : 3,
        text: block.text,
      };

    case "content.highlight":
      return {
        type: "highlight",
        title: block.title,
        text: block.text,
      };

    case "content.image":
      return {
        type: "image",
        image: block.image?.data?.attributes,
        caption: block.caption,
        credit: block.credit,
        align: block.align,
      };
  }
}
