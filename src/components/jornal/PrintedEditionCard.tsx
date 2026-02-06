import type { PrintedEdition } from "../../lib/jornal/types";

export interface PrintedEditionCardProps {
  edition: PrintedEdition;
  open: boolean;
  onToggle: () => void;
  onView: () => void;
}

function formatDatePtBR(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR");
}

export default function PrintedEditionCard({
  edition,
  open,
  onToggle,
  onView,
}: PrintedEditionCardProps) {
  const kindLabel = edition.kind === "jornal" ? "JORNAL" : "BOLETIM";

  return (
    <article
      className={[
        "overflow-hidden rounded-2xl bg-card-bg",
        "border border-border-light",
        "shadow-[0_10px_30px_var(--card-shadow)]",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_16px_40px_var(--card-hover-shadow)]",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <div className="text-base font-semibold">{edition.title}</div>

        <div className="ml-auto flex items-center gap-4 text-sm text-text-secondary">
          <span>{formatDatePtBR(edition.publishedAt)}</span>
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold">
            {kindLabel}
          </span>
          <span>{edition.pages} páginas</span>
          <span className="text-lg">{open ? "▴" : "▾"}</span>
        </div>
      </button>

      {open && (
        <div className="border-t border-border-light bg-[rgba(0,0,0,0.02)] px-6 py-5">
          <p className="max-w-3xl text-sm leading-relaxed text-text-secondary">
            {edition.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onView}
              className="inline-flex items-center gap-2 rounded-full bg-tag-color px-5 py-2 text-sm font-semibold text-white"
            >
              👁️ Visualizar PDF
            </button>

            <a
              href={edition.downloadUrl ?? edition.ipfsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-tag-color px-5 py-2 text-sm font-semibold text-tag-color"
            >
              ⬇️ Baixar PDF
            </a>
          </div>
        </div>
      )}
    </article>
  );
}
