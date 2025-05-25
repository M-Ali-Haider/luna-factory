// Cool thing about this component is that if you pass a blurDataURL prop
// it will have the placeholder on it a simple quality of life change.

import { cn } from "@/lib/utils";
import Image from "next/image";

export interface CustomImageInterface {
  src: string;
  alt: string;
  blurDataURL?: string;
  className?: string;
  imageClassName?: string;
  loading?: "eager" | "lazy";
  sizes?: string;
  priority?: boolean;
  quality?: number;
}
const CustomImage = ({
  src,
  alt,
  blurDataURL,
  className,
  imageClassName,
  loading = "lazy",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  quality = 80,
}: CustomImageInterface) => {
  return (
    <div className={cn(`relative`, className)}>
      <Image
        src={src}
        fill
        alt={alt}
        className={cn(`object-cover`, imageClassName)}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL || undefined}
        sizes={sizes}
        loading={loading}
        priority={priority}
        quality={quality}
      />
    </div>
  );
};

export default CustomImage;
