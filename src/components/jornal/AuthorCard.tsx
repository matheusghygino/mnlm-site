import type { Author } from "../../lib/jornal/types";

export interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <article
      className={[
        "group overflow-hidden rounded-2xl bg-card-bg",
        "border border-border-light border-l-4 border-[#8a2be2]",
        "shadow-[0_10px_30px_var(--card-shadow)]",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(138,43,226,0.18)]",
      ].join(" ")}
    >
      <img
        src={author.image}
        alt={author.name}
        className="h-56 w-full object-cover"
        loading="lazy"
      />

      <div className="p-6">
        <h3 className="mb-2 text-2xl font-extrabold">{author.name}</h3>

        <p className="mb-5 text-sm leading-relaxed text-text-secondary">
          {author.role}
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-[rgba(195,0,0,0.12)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
            📰 {author.jornal} no jornal
          </span>

          <span className="rounded-full bg-[rgba(0,102,204,0.12)] px-3 py-1 text-xs font-semibold text-[#0066CC]">
            📣 {author.boletim} no boletim
          </span>

          <span className="rounded-full bg-[rgba(138,43,226,0.12)] px-3 py-1 text-xs font-semibold text-[#8a2be2]">
            ✍️ {author.posts} posts
          </span>
        </div>
      </div>
    </article>
  );
}
