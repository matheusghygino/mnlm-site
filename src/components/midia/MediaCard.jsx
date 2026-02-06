export default function MediaCard({ media, onOpen }) {
  return (
    <div class="overflow-hidden rounded-xl bg-white shadow-md">
      {/* THUMB */}
      <div class="relative aspect-video bg-black">
        <img
          src={media.thumbnail}
          alt={media.title}
          class="h-full w-full object-cover"
        />

        {/* Badge */}
        <span class="absolute right-3 top-3 rounded bg-red-700 px-2 py-1 text-xs font-bold uppercase text-white">
          {media.type === "video" ? "VÍDEO" : "IMAGEM"}
        </span>

        {/* Play */}
        {media.type === "video" && (
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="flex h-14 w-14 items-center justify-center rounded-full bg-red-700">
              <i class="fas fa-play text-white"></i>
            </div>
          </div>
        )}
      </div>

      {/* CONTEÚDO */}
      <div class="p-5">
        <h3 class="font-bold uppercase leading-tight">
          {media.title}
        </h3>

        <p class="mt-2 text-sm text-gray-700">
          {media.description}
        </p>

        <div class="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span>{media.date}</span>
          {media.size && <span>{media.size}</span>}
        </div>

        <div class="mt-4 flex gap-3">
          <button
            onClick={onOpen}
            class="rounded bg-red-700 px-4 py-2 text-xs font-bold text-white"
          >
            VER DETALHES
          </button>

          {media.type === "video" && (
            <button
              onClick={onOpen}
              class="rounded border border-red-700 px-4 py-2 text-xs font-bold text-red-700"
            >
              ASSISTIR
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
