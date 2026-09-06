import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectVisualProps {
  image: string;
  alt: string;
  className?: string;
}

export function ProjectVisual({ image, alt, className }: ProjectVisualProps) {
  return (
    <div className={cn("group relative min-h-[220px] overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-all duration-300 hover:border-accent/50", className)}>
      <Image
        alt={alt}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        fill
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        src={image}
      />
    </div>
  );
}


