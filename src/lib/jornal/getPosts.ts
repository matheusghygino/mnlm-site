// src/lib/jornal/getPosts.ts
import { postsMock } from "./posts.mock";
import type { Post, ContentBlock } from "./types";
import { calculateReadingTimeFromContent } from "./readingTime";

  const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL;
  const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN;

/* =========================
   HELPERS
========================= */

function withAbsoluteImageUrl(image: any) {
  if (!image?.url) return image;

  if (image.url.startsWith("http")) return image;

  return {
    ...image,
    url: `${STRAPI_URL}${image.url}`,
  };
}

function sort(posts: Post[]): Post[] {
  return posts.slice().sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime(),
  );
}

/* =========================
   FETCH ALL POSTS
========================= */

export async function getPosts(): Promise<Post[]> {
  const mockPosts = postsMock.map((p) => ({
    ...p,
    readingTime: calculateReadingTimeFromContent(p.content),
  }));

  // Se não houver Strapi configurado → só mocks
  if (!STRAPI_URL) {
    return sort(mockPosts);
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

    console.log("STRAPI DATA:", JSON.stringify(json.data, null, 2));

    const strapiPosts = json.data.map(normalizePost);

    // 🔥 Junta os dois
    const merged = [...strapiPosts, ...mockPosts];

    // 🔥 Remove duplicados por slug
    const unique = merged.filter(
      (post, index, self) =>
        index === self.findIndex((p) => p.slug === post.slug)
    );

    return sort(unique);

  } catch (err) {
    console.warn("⚠️ Strapi indisponível, usando mocks", err);
    return sort(mockPosts);
  }
}

/* =========================
   FETCH SINGLE POST
========================= */

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug);
}

/* =========================
   ÚLTIMAS NOTÍCIAS
========================= */

export async function getLatestNews(limit = 3): Promise<Post[]> {
  const posts = await getPosts();

  return posts
    .filter((p) => p.type === "tribuna" || p.type === "boletim")
    .slice(0, limit);
}

/* =========================
   NORMALIZER (STRAPI → FRONT)
========================= */

function normalizePost(item: any): Post {
  return {
    id: item.id,
    slug: item.slug,
    type: item.type,

    title: item.title,
    excerpt: item.excerpt,

    author: item.author,
    publishedAt: item.publishedAt,

    readingTime: calculateReadingTimeFromContent([]),

    tags: item.tags ?? [],

    coverImage: null,

    content: [],
  };
}


function normalizeBlock(block: any): ContentBlock | null {
  switch (block.__component) {
    case "content.paragraph":
      return {
        type: "paragraph",
        text: block.text, // markdown
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
        image: withAbsoluteImageUrl(
          block.Image?.data?.attributes,
        ),
        caption: block.caption,
        align: block.align,
      };

    default:
      return null;
  }
}
