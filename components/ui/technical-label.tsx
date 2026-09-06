import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function TechnicalLabel({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground", className)} {...props} />;
}
