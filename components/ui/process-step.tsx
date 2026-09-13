import type { ProcessStep as ProcessStepData } from "@/lib/types";
import { TechnicalLabel } from "@/components/ui/technical-label";

export function ProcessStep({ number, title, description }: ProcessStepData) {
  return (
    <article className="border-t border-border pt-4">
      <TechnicalLabel className="text-accent">{number}</TechnicalLabel>
      <h3 className="type-card-title mt-8 text-foreground">{title}</h3>
      <p className="type-body-sm mt-3 text-muted-foreground">{description}</p>
    </article>
  );
}
