import { useEffect, useMemo, useState } from "preact/hooks";
import type {
  Author,
  JournalTab,
  Post,
  PostType,
  PrintedEdition,
} from "../../lib/jornal/types";

import JornalHeroCard from "./JornalHeroCard";
import PostCard from "./PostCard";
import AuthorCard from "./AuthorCard";
import PrintedEditionCard from "./PrintedEditionCard";

export interface JornalTabsProps {
  posts: Post[];
  authors: Author[];
  printedEditions: PrintedEdition[];
  initialTab?: JournalTab;
  onTabChange?: (tab: JournalTab) => void;
}

export default function JornalTabs({
  posts,
  authors,
  printedEditions,
  initialTab = "tribuna",
  onTabChange,
}: JornalTabsProps) {
  const [tab, setTab] = useState<JournalTab>(initialTab);

  // ✅ quando initialTab mudar (via hash), reflete na UI
  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  // IMPRESSO state
  const [openEditionId, setOpenEditionId] = useState<number | null>(null);
  const [modalEditionId, setModalEditionId] = useState<number | null>(null);

  const tribunaPosts = useMemo(() => posts.filter((p) => p.type === "tribuna"), [posts]);
  const boletimPosts = useMemo(() => posts.filter((p) => p.type === "boletim"), [posts]);

  const activePosts =
    tab === "tribuna" ? tribunaPosts : tab === "boletim" ? boletimPosts : [];

  // ✅ hero sempre = mais recente do tipo (posts já vêm ordenados por data desc)
  const hero = activePosts[0];
  const rest = activePosts.slice(1, 7);

  const postUrl = (slug: string) => `/jornal/${slug}`;

  const pillMeta = (() => {
    switch (tab) {
      case "tribuna":
        return {
          bg: "bg-[var(--color-jornal-bg)]",
          text: "text-[var(--color-jornal)]",
          icon: "📰",
          label: "JORNAL - ANÁLISES E REPORTAGENS",
        };
      case "boletim":
        return {
          bg: "bg-[var(--color-boletim-bg)]",
          text: "text-[var(--color-boletim)]",
          icon: "📣",
          label: "BOLETIM - NOTÍCIAS E ATUALIZAÇÕES",
        };
      case "impresso":
        return {
          bg: "bg-orange-50",
          text: "text-orange-700",
          icon: "📄",
          label: "IMPRESSO - EDIÇÕES EM PDF",
        };
      case "autores":
      default:
        return {
          bg: "bg-[var(--color-autor-bg)]",
          text: "text-[var(--color-autor)]",
          icon: "👥",
          label: "AUTORES - NOSSA EQUIPE",
        };
    }
  })();

  const modalEdition = modalEditionId
    ? printedEditions.find((e) => e.id === modalEditionId)
    : null;

  function go(next: JournalTab) {
    setTab(next);
    onTabChange?.(next);
  }

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4">
        {/* Tabs */}
        <div className="flex justify-center">
          <div
            className={[
              "overflow-hidden rounded-xl bg-[rgba(0,0,0,0.06)] p-2",
              // ✅ mobile vertical / desktop horizontal
              "flex w-full max-w-sm flex-col gap-2 md:max-w-none md:w-auto md:flex-row md:gap-0",
            ].join(" ")}
          >
            <TabButton
              active={tab === "tribuna"}
              label="TRIBUNA"
              icon="📰"
              onClick={() => go("tribuna")}
              activeClass="bg-[var(--color-jornal)] text-white shadow-[0_10px_20px_rgba(195,0,0,0.25)]"
            />

            <TabButton
              active={tab === "boletim"}
              label="BOLETIM"
              icon="📣"
              onClick={() => go("boletim")}
              activeClass="bg-[var(--color-boletim)] text-white shadow-[0_10px_20px_rgba(0,102,204,0.25)]"
            />

            <TabButton
              active={tab === "impresso"}
              label="IMPRESSO"
              icon="📄"
              onClick={() => go("impresso")}
              activeClass="bg-orange-600 text-white shadow-[0_10px_20px_rgba(234,88,12,0.25)]"
            />

            <TabButton
              active={tab === "autores"}
              label="AUTORES"
              icon="👥"
              onClick={() => go("autores")}
              activeClass="bg-[var(--color-autor)] text-white shadow-[0_10px_20px_rgba(138,43,226,0.25)]"
            />
          </div>
        </div>

        {/* Pill */}
        <div className="mt-7 flex justify-center">
          <div
            className={[
              "w-full max-w-6xl rounded-xl px-4 py-3 text-center text-sm font-bold uppercase tracking-widest",
              pillMeta.bg,
              pillMeta.text,
            ].join(" ")}
          >
            <span className="mr-2">{pillMeta.icon}</span>
            {pillMeta.label}
          </div>
        </div>
      </div>

      {/* TRIBUNA / BOLETIM */}
      {(tab === "tribuna" || tab === "boletim") && hero && (
        <>
          <div className="mx-auto mt-10 max-w-6xl px-4">
            <JornalHeroCard post={hero} variant={tab as PostType} href={postUrl(hero.slug)} />
          </div>

          <div className="mx-auto mt-8 max-w-6xl px-4">
            <div className="grid gap-6 md:grid-cols-3">
              {rest.map((p) => (
                <PostCard
                  key={p.id}
                  post={p}
                  variant={tab as PostType}
                  href={postUrl(p.slug)}
                />
              ))}
            </div>

            <div className="mt-14 flex justify-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-jornal)] text-white">
                1
              </span>
            </div>
          </div>
        </>
      )}

      {/* AUTORES */}
      {tab === "autores" && (
        <div className="mx-auto mt-10 max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {authors.map((a) => (
              <AuthorCard key={a.id} author={a} />
            ))}
          </div>
        </div>
      )}

      {/* IMPRESSO */}
      {tab === "impresso" && (
        <div className="mx-auto mt-10 max-w-6xl px-4">
          <div className="space-y-5">
            {printedEditions.map((ed) => (
              <PrintedEditionCard
                key={ed.id}
                edition={ed}
                open={openEditionId === ed.id}
                onToggle={() => setOpenEditionId((cur) => (cur === ed.id ? null : ed.id))}
                onView={() => setModalEditionId(ed.id)}
              />
            ))}
          </div>

          {/* Modal simples (iframe) */}
          {modalEdition && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              role="dialog"
              aria-modal="true"
              onClick={() => setModalEditionId(null)}
            >
              <div
                className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between bg-orange-600 px-6 py-4 text-white">
                  <div className="text-lg font-semibold">{modalEdition.title}</div>
                  <button
                    type="button"
                    className="rounded-full bg-white/20 px-3 py-1"
                    onClick={() => setModalEditionId(null)}
                    aria-label="Fechar"
                  >
                    ✕
                  </button>
                </div>

                <iframe title={modalEdition.title} src={modalEdition.ipfsUrl} className="h-[80vh] w-full" />
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

interface TabButtonProps {
  active: boolean;
  label: string;
  icon: string;
  activeClass: string;
  onClick: () => void;
}

function TabButton({ active, label, icon, activeClass, onClick }: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-extrabold",
        "transition-all duration-300",
        // ✅ mobile full width + centralizado (igual print)
        "w-full justify-center md:w-auto md:justify-start",
        active ? activeClass : "text-[var(--color-muted)] hover:text-[var(--color-fg)]",
      ].join(" ")}
      aria-pressed={active}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </button>
  );
}
