import { mockMedias } from "./mock";
import type { Media, MediaType } from "./types";

export async function getMedias(): Promise<Media[]> {
  return mockMedias;
}

export async function getLatestMedias(limit = 3): Promise<Media[]> {
  return mockMedias.slice(0, limit);
}

export async function getMediasByType(type: MediaType): Promise<Media[]> {
  return mockMedias.filter((m) => m.type === type);
}
