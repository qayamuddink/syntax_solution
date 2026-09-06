import type { Project } from "@/lib/types";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { IconArrowRight } from "@/components/ui/icons";

export function ProjectItem({
  number,
  category,
  title,
  location,
  refId,
  badge,
  description,
  stackPrimary,
  stackSecondary,
  telemetryValue,
  telemetryLabel,
}: Project) {
  return (
    <article className="group grid grid-cols-1 gap-6 border-b border-border py-6 transition-colors duration-300 hover:bg-white/[0.015] hover:px-2 last:border-b-0 rounded-sm lg:grid-cols-12 lg:items-start lg:gap-4">
      {/* Col 1: System / Client (4 cols) */}
      <div className="lg:col-span-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-accent">{number}</span>
            <TechnicalLabel className="text-muted-foreground">{"// "}{category}</TechnicalLabel>
          </div>
          <IconArrowRight className="size-3.5 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 lg:hidden" />
        </div>
        <h3 className="mt-2 text-lg md:text-xl font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-accent">{title}</h3>
        {location || refId ? (
          <p className="mt-1 font-mono text-[11px] text-muted-foreground">
            {location} {refId ? `// REF: ${refId}` : ""}
          </p>
        ) : null}
        {badge ? (
          <div className="mt-3">
            <span className="inline-block border border-success/40 bg-success/10 px-2 py-0.5 font-mono text-[9px] font-semibold tracking-wider text-success">
              {badge}
            </span>
          </div>
        ) : null}
      </div>

      {/* Col 2: Digital Architecture & Core Problem (4 cols) */}
      <div className="lg:col-span-4">
        <p className="text-sm md:text-[15px] leading-relaxed text-muted-foreground font-normal">{description}</p>
      </div>

      {/* Col 3: Stack Topology (2 cols) */}
      <div className="lg:col-span-2">
        {stackPrimary ? <p className="font-mono text-[11px] font-semibold text-foreground">{stackPrimary}</p> : null}
        {stackSecondary ? <p className="mt-1 font-mono text-[10px] text-muted-foreground">{stackSecondary}</p> : null}
      </div>

      {/* Col 4: Operational Telemetry (2 cols) */}
      <div className="flex items-center justify-between lg:col-span-2 lg:flex-col lg:items-end lg:justify-start lg:text-right">
        <div>
          {telemetryValue ? <p className="font-mono text-base font-bold text-success">{telemetryValue}</p> : null}
          {telemetryLabel ? <p className="mt-1 font-mono text-[10px] text-muted-foreground">{telemetryLabel}</p> : null}
        </div>
        <IconArrowRight className="hidden size-4 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 lg:block lg:mt-2" />
      </div>
    </article>
  );
}


