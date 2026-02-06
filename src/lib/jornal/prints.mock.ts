// src/lib/jornal/prints.mock.ts
import type { PrintedEdition } from "./types";

export const printedEditionsMock: PrintedEdition[] = [
  {
    id: 1,
    title: "Boletim 2022-2025",
    description:
      "Edições do boletim impresso do MNLM com análises políticas e sociais. Inclui artigos sobre política urbana, direitos humanos e movimentos sociais.",
    publishedAt: "2025-12-31",
    kind: "boletim",
    pages: 12,
    ipfsUrl: "https://ipfs.io/ipfs/bafybeie274zbthnh35j2cr5l4qk1glpzu7i2ztoebe7od25pse7h7wj7he",
    // downloadUrl: "https://ipfs.io/ipfs/<cid>/<arquivo>.pdf",
  },
];
