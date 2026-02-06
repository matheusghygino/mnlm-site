// src/lib/jornal/readingTime.ts
export function calculateReadingTimeFromContent(content: any[]): string {
  const WORDS_PER_MINUTE = 200;

  const text = content
    .map((block) => {
      if (block.type === "paragraph" || block.type === "highlight") {
        return block.text;
      }
      if (block.type === "heading") {
        return block.text;
      }
      return "";
    })
    .join(" ");

  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

  return `${minutes} min`;
}
