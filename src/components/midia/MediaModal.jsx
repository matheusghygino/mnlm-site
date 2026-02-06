import { useEffect } from "preact/hooks";

export default function MediaModal({ media, onClose }) {
  // 🔒 trava scroll do body
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
      {/* overlay click */}
      <div class="absolute inset-0" onClick={onClose} />

      {/* modal */}
      <div class="relative z-[10000] flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-black">
        {/* fechar */}
        <button
          onClick={onClose}
          class="absolute right-4 top-4 z-[10001] flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white hover:bg-black"
        >
          ✕
        </button>

        {/* mídia */}
        <div class="flex flex-1 items-center justify-center bg-black">
          {media.type === "video" ? (
            <video
              controls
              autoPlay
              class="max-h-[70vh] w-auto max-w-full"
            >
              <source src={media.file} />
            </video>
          ) : (
            <img
              src={media.file}
              alt={media.title}
              class="max-h-[70vh] w-auto max-w-full object-contain"
            />
          )}
        </div>

        {/* info */}
        <div class="bg-white p-6">
          <h3 class="font-bold uppercase">{media.title}</h3>
          <p class="mt-2 text-sm text-gray-700">{media.description}</p>
        </div>
      </div>
    </div>
  );
}
