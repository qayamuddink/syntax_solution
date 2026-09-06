import type { Metric as MetricData } from "@/lib/types";
import { TechnicalLabel } from "@/components/ui/technical-label";

export function Metric({ value, label }: MetricData) {
  return (
    <div className="border-l border-border pl-4">
      <p className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">{value}</p>
      <TechnicalLabel className="mt-2 block">{label}</TechnicalLabel>
    </div>
  );
}
