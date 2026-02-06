// src/lib/jornal/extractText.ts
import type { ContentBlock } from "./types";

export function extractTextFromContent(content: ContentBlock[]): string {
  return content
    .map((block) => {
      switch (block.type) {
        case "paragraph":
          return block.text;

        case "heading":
          return block.text;

        case "highlight":
          return block.text;

        default:
          return "";
      }
    })
    .join(" ");
}
