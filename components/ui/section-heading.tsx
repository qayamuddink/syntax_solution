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
      {eyebrow ? <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{eyebrow}</span> : null}
      <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-foreground md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
