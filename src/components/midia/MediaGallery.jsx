import { useState } from "preact/hooks";
import MediaCard from "./MediaCard.jsx";
import MediaModal from "./MediaModal.jsx";
import { mockMedias } from "@/lib/midias/mock";

export default function MediaGallery() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  const medias =
    filter === "all"
      ? mockMedias
      : mockMedias.filter(m => m.type === filter);

  return (
    <>
      {/* Tabs */}
      <div class="mb-10 flex gap-4">
        {["all", "image", "video"].map(t => (
          <button
            onClick={() => setFilter(t)}
            class={`rounded border px-4 py-2 text-sm font-bold uppercase transition
              ${filter === t
                ? "bg-red-700 text-white border-red-700"
                : "border-red-700 text-red-700 hover:bg-red-700 hover:text-white"}`}
          >
            {t === "all" ? "Todas as mídias" : t === "image" ? "Imagens" : "Vídeos"}
          </button>
        ))}
      </div>

      <h2 class="mb-8 text-2xl font-extrabold uppercase">
        Galeria de Mídias
      </h2>

      {/* GRID RESPONSIVO */}
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {medias.map(media => (
          <MediaCard media={media} onOpen={() => setActive(media)} />
        ))}
      </div>

      {active && (
        <MediaModal media={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
