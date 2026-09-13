import type { Metric as MetricData } from "@/lib/types";
import { TechnicalLabel } from "@/components/ui/technical-label";

export function Metric({ value, label, className }: MetricData & { className?: string }) {
  return (
    <div className={className}>
      <p className="type-metric text-foreground">{value}</p>
      <TechnicalLabel className="mt-1.5 block text-muted-foreground">{label}</TechnicalLabel>
    </div>
  );
}
