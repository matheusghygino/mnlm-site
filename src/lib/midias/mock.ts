import type { Media } from "./types";

export const mockMedias: Media[] = [
  {
    id: 1,
    title: "SPU e CONAB, NÃO NOS ABANDONE",
    description: "A luta da ocupação Miguel Lobato em Marabá.",
    type: "video",

    thumbnail: "/midias/spu-conab-thumb.jpg",
    file: "/midias/spu-conab-nao-abandone.mp4",

    date: "26 de janeiro de 2026",
    size: "170 MB",
  },
  {
    id: 2,
    title: "Assembleia Popular no Tocantins",
    description:
      "Reunião comunitária do MNLM no estado do Tocantins discutindo políticas habitacionais.",
    type: "image",

    thumbnail: "/midias/assembleia-popular-tocantins.jpeg",
    file: "/midias/assembleia-popular-tocantins.jpeg",

    date: "5 de março de 2024",
    size: "1.8 MB",
  },
];
