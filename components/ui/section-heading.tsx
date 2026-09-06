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
      {eyebrow ? <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">{eyebrow}</span> : null}
      <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-[3.25rem]">{title}</h2>
      {description ? <p className="mt-4 max-w-xl text-[15px] md:text-base leading-relaxed text-muted-foreground font-normal">{description}</p> : null}
    </div>
  );
}
