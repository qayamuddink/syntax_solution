import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  label?: string;
  status?: "neutral" | "success";
}

export function StatusIndicator({ label, status = "neutral" }: StatusIndicatorProps) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
      <span className={cn("size-1.5 rounded-full bg-muted-foreground", status === "success" && "bg-success")} aria-hidden="true" />
      {label}
    </span>
  );
}
