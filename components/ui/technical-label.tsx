import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function TechnicalLabel({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground", className)} {...props} />;
}
