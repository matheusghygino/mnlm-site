// src/lib/jornal/authors.mock.ts
import type { Author } from "./types";

export const authorsMock: Author[] = [
  {
    id: 1,
    name: "Gabriel Araújo",
    role: "Direção nacional do MNLM e da secretaria institucional e operacional",
    image: "/images/autores/gabriel-araujo.jpeg",
    jornal: 4,
    boletim: 3,
    posts: 7,
  },
  {
    id: 2,
    name: "Jefferson Magalhães",
    role:
      "Jornalista, historiador e especializado em direitos humanos e políticas públicas. Membro do MNLM há 10 anos.",
    image: "/images/autores/jefferson-magalhaes.jpeg",
    jornal: 2,
    boletim: 1,
    posts: 3,
  },
  {
    id: 3,
    name: "Matheus Hygino",
    role: "Colunista, militante e dirigente do MNLM-DF",
    image: "/images/autores/matheus-hygino.jpeg",
    jornal: 1,
    boletim: 0,
    posts: 1,
  },
  {
    id: 4,
    name: "Agá",
    role: "Coordenadora e educadora popular do MNLM.",
    image: "/images/autores/mnlm-author.jpeg",
    jornal: 2,
    boletim: 1,
    posts: 3,
  },
  {
    id: 5,
    name: "Vinícius Barreto",
    role: "Historiador, jornalista e militante MNLM.",
    image: "/images/autores/vinicius-barreto.jpeg",
    jornal: 0,
    boletim: 1,
    posts: 1,
  },
  {
    id: 6,
    name: "Redação MNLM",
    role: "Equipe coletiva de redação do Movimento Nacional de Luta pela Moradia.",
    image: "/images/autores/mnlm-author.jpeg",
    jornal: 2,
    boletim: 3,
    posts: 5,
  },
];
