import type { JournalTab } from "../../lib/jornal/types";

interface JournalTabsNavProps {
  active: JournalTab; // "tribuna" | "boletim" | "impresso" | "autores"
}

export default function JournalTabsNav({ active }: JournalTabsNavProps) {
  const pillMeta = (() => {
    switch (active) {
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

  return (
    <div className="mx-auto max-w-3xl px-4 md:px-0">
      <div className="flex justify-center">
        <div
          className={[
            "overflow-hidden rounded-xl bg-[rgba(0,0,0,0.06)] p-2",
            "flex w-full max-w-sm flex-col gap-2 md:max-w-none md:w-auto md:flex-row md:gap-0",
          ].join(" ")}
        >
          <TabLink
            href="/jornal#tribuna"
            active={active === "tribuna"}
            label="TRIBUNA"
            icon="📰"
            activeClass="bg-[var(--color-jornal)] text-white shadow-[0_10px_20px_rgba(195,0,0,0.25)]"
          />

          <TabLink
            href="/jornal#boletim"
            active={active === "boletim"}
            label="BOLETIM"
            icon="📣"
            activeClass="bg-[var(--color-boletim)] text-white shadow-[0_10px_20px_rgba(0,102,204,0.25)]"
          />

          <TabLink
            href="/jornal#impresso"
            active={active === "impresso"}
            label="IMPRESSO"
            icon="📄"
            activeClass="bg-orange-600 text-white shadow-[0_10px_20px_rgba(234,88,12,0.25)]"
          />

          <TabLink
            href="/jornal#autores"
            active={active === "autores"}
            label="AUTORES"
            icon="👥"
            activeClass="bg-[var(--color-autor)] text-white shadow-[0_10px_20px_rgba(138,43,226,0.25)]"
          />
        </div>
      </div>

      {/* Pill igual print */}
      <div className="mt-6 flex justify-center">
        <div
          className={[
            "w-full rounded-xl px-4 py-3 text-center text-sm font-bold uppercase tracking-widest",
            pillMeta.bg,
            pillMeta.text,
          ].join(" ")}
        >
          <span className="mr-2">{pillMeta.icon}</span>
          {pillMeta.label}
        </div>
      </div>
    </div>
  );
}

interface TabLinkProps {
  href: string;
  active: boolean;
  label: string;
  icon: string;
  activeClass: string;
}

function TabLink({ href, active, label, icon, activeClass }: TabLinkProps) {
  return (
    <a
      href={href}
      className={[
        "flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-extrabold",
        "transition-all duration-300",
        "w-full justify-center md:w-auto md:justify-start",
        active ? activeClass : "text-[var(--color-muted)] hover:text-[var(--color-fg)]",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </a>
  );
}
