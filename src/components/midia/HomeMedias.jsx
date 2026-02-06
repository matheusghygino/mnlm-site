import { useState } from "preact/hooks";
import MediaCard from "./MediaCard.jsx";
import MediaModal from "./MediaModal.jsx";

export default function HomeMedias({ medias }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        {medias.map((media) => (
          <MediaCard
            media={media}
            onOpen={() => setActive(media)}
          />
        ))}
      </div>

      {active && (
        <MediaModal
          media={active}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
