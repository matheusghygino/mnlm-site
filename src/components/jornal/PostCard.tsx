import type { Post, PostType } from "../../lib/jornal/types";

export interface PostCardProps {
  post: Post;
  variant: PostType;
  href: string;
}

function formatDatePtBR(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function PostCard({ post, variant, href }: PostCardProps) {
  const isBoletim = variant === "boletim";

  const accentText = isBoletim ? "text-boletim" : "text-jornal";
  const tagBg = isBoletim ? "bg-boletim-bg" : "bg-jornal-bg";
  const borderAccent = isBoletim ? "border-boletim" : "border-jornal";

  return (
    <article
      className={[
        "group overflow-hidden rounded-2xl bg-bg",
        "border border-border border-l-4",
        borderAccent,
        "shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]",
      ].join(" ")}
    >
      <a href={href} className="block">
        {/* IMAGEM */}
        <div className="relative">
          <img
            src={post.coverImage.src}
            width={post.coverImage.width}
            height={post.coverImage.height}
            alt={post.title}
            className="h-48 w-full object-cover"
            loading="lazy"
            decoding="async"
          />

          <span
            className={[
              "absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase",
              tagBg,
              accentText,
            ].join(" ")}
          >
            {isBoletim ? "BOLETIM" : "JORNAL"}
          </span>
        </div>

        {/* TEXTO */}
        <div className="p-6">
          <div className="mb-3 flex flex-wrap items-center gap-3 text-xs">
            <span className={`${accentText} font-mono`}>
              {formatDatePtBR(post.publishedAt)}
            </span>

            <span className="text-muted">|</span>
            <span className="text-muted">{post.readingTime}</span>

            <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-fg">
              👤 <strong>{post.author}</strong>
            </span>
          </div>

          <h3 className="mb-3 text-xl font-extrabold leading-snug">
            {post.title}
          </h3>

          <p className="mb-5 text-sm leading-relaxed text-muted">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={`${post.id}-${t}`}
                className={[
                  "rounded-full px-3 py-1 text-xs font-semibold uppercase",
                  tagBg,
                  accentText,
                ].join(" ")}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}
