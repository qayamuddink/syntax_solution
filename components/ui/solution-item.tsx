import type { Solution } from "@/lib/types";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { IconArrowRight } from "@/components/ui/icons";

export function SolutionItem({ number, category, title, description, spec }: Solution) {
  return (
    <article className="group border-b border-border py-6 transition-colors duration-300 hover:bg-white/[0.015] hover:px-2 last:border-b-0 rounded-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold text-accent">{number}</span>
          <TechnicalLabel className="text-muted-foreground">{"// "}{category}</TechnicalLabel>
        </div>
        <IconArrowRight className="size-3.5 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
      </div>
      <h3 className="mt-2 text-lg font-bold text-foreground transition-colors duration-200 group-hover:text-accent">{title}</h3>
      <p className="mt-2 text-xs leading-6 text-muted-foreground">{description}</p>
      <div className="mt-4">
        <TechnicalLabel className="text-accent">{spec}</TechnicalLabel>
      </div>
    </article>
  );
}


