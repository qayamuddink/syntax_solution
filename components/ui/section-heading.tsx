import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)} {...props}>
      {eyebrow ? <span className="type-technical text-accent">{eyebrow}</span> : null}
      <h2 className="type-section-title mt-4 text-foreground">{title}</h2>
      {description ? <p className="type-body mt-4 max-w-xl text-muted-foreground">{description}</p> : null}
    </div>
  );
}
