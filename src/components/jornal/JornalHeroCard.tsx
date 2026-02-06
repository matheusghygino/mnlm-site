import type { Post, PostType } from "../../lib/jornal/types";

export interface JornalHeroCardProps {
  post: Post;
  variant: PostType;
  href: string;
}

export default function JornalHeroCard({ post, variant, href }: JornalHeroCardProps) {
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
        "hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]",
      ].join(" ")}
    >
      <a href={href} className="grid md:grid-cols-2">
        {/* IMAGEM */}
        <div className="relative">
          <img
            src={post.coverImage.src}
            width={post.coverImage.width}
            height={post.coverImage.height}
            alt={post.title}
            className="h-full min-h-[300px] w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* CONTEÚDO */}
        <div className="flex flex-col justify-between p-8 md:p-10">
          <div>
            {/* META */}
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
              <span className={`${accentText} font-mono`}>
                {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>

              <span className="text-muted">|</span>
              <span className="text-muted">{post.readingTime}</span>

              <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-fg">
                👤 <strong>{post.author}</strong>
              </span>

              <span
                className={[
                  "ml-auto rounded-full px-3 py-1 text-xs font-bold uppercase",
                  tagBg,
                  accentText,
                ].join(" ")}
              >
                {isBoletim ? "BOLETIM" : "JORNAL"}
              </span>
            </div>

            {/* TÍTULO */}
            <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-4xl">
              {post.title}
            </h2>

            {/* EXCERPT */}
            <p className="mb-6 text-base leading-relaxed text-muted">
              {post.excerpt}
            </p>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={`${post.id}-hero-${t}`}
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
