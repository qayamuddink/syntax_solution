import type { ProcessStep as ProcessStepData } from "@/lib/types";
import { TechnicalLabel } from "@/components/ui/technical-label";

export function ProcessStep({ number, title, description }: ProcessStepData) {
  return (
    <article className="border-t border-border pt-4">
      <TechnicalLabel className="text-accent">{number}</TechnicalLabel>
      <h3 className="mt-8 text-lg text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
    </article>
  );
}
