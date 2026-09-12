import type { TechnicalReadout } from "@/lib/types";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { TechnicalLabel } from "@/components/ui/technical-label";

export function TechnicalPanel({ readouts }: { readouts: TechnicalReadout[] }) {
  return (
    <div className="border border-border bg-surface p-5 rounded-xl">
      <TechnicalLabel className="block text-accent">TELEMETRY RUNTIME</TechnicalLabel>
      <div className="mt-6 divide-y divide-border">
        {readouts.map((readout) => (
          <div className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0" key={readout.id}>
            <TechnicalLabel>{readout.label}</TechnicalLabel>
            <div className="text-right">
              <p className="font-mono text-xs text-foreground">{readout.value}</p>
              {readout.status ? <StatusIndicator status={readout.status} /> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
