// This component only works SSR
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getPlaiceholder } from "plaiceholder";

export interface BlurPlaceholderImageInterface {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  loading?: "eager" | "lazy";
  sizes?: string;
  priority?: boolean;
  quality?: number;
}
const BlurPlaceholderImage = async ({
  src,
  alt,
  className,
  imageClassName,
  loading = "lazy",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  quality = 80,
}: BlurPlaceholderImageInterface) => {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className={cn(`relative`, className)}>
      <Image
        src={src}
        fill
        alt={alt}
        className={cn(`object-cover`, imageClassName)}
        placeholder="blur"
        blurDataURL={base64}
        sizes={sizes}
        loading={loading}
        priority={priority}
        quality={quality}
      />
    </div>
  );
};

export default BlurPlaceholderImage;
