export type MediaType = "image" | "video";

export interface Media {
  id: number;
  title: string;
  description: string;
  type: MediaType;

  /** usados direto no JSX */
  thumbnail: string;
  file: string;
  date: string;

  size?: string;
}
