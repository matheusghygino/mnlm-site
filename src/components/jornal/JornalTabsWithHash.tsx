import { useEffect, useState } from "preact/hooks";
import JornalTabs from "./JornalTabs";
import type { JournalTab, Post, Author, PrintedEdition } from "../../lib/jornal/types";

interface Props {
  posts: Post[];
  authors: Author[];
  printedEditions: PrintedEdition[];
}

const validTabs: JournalTab[] = ["tribuna", "boletim", "impresso", "autores"];

function getTabFromHash(): JournalTab {
  const hash = window.location.hash.replace("#", "") as JournalTab;
  return validTabs.includes(hash) ? hash : "tribuna";
}

export default function JornalTabsWithHash({ posts, authors, printedEditions }: Props) {
  const [tab, setTab] = useState<JournalTab>("tribuna");

  // HASH -> STATE (inclusive quando clicam em links /jornal#boletim)
  useEffect(() => {
    const apply = () => setTab(getTabFromHash());
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  // STATE -> HASH (quando o user clica nos botões)
  const handleTabChange = (next: JournalTab) => {
    if (next !== tab) {
      window.location.hash = next;
      setTab(next);
    }
  };

  return (
    <JornalTabs
      posts={posts}
      authors={authors}
      printedEditions={printedEditions}
      initialTab={tab}
      onTabChange={handleTabChange}
    />
  );
}
