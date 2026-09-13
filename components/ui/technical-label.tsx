import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function TechnicalLabel({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("type-technical text-muted-foreground", className)} {...props} />;
}
