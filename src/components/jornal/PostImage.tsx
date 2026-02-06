import { Image } from "astro:assets";
import type { ImageMetadata } from "astro";

interface PostImageProps {
  image: ImageMetadata | string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function PostImage({
  image,
  alt,
  className,
  priority = false,
}: PostImageProps) {
  if (typeof image === "string") {
    return (
      <img
        src={image}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }

  return (
    <Image
      src={image}
      alt={alt}
      class={className}
      widths={[400, 800, 1200]}
      sizes="(max-width: 768px) 100vw, 33vw"
      format="webp"
      loading={priority ? "eager" : "lazy"}
    />
  );
}
