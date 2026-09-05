import { SectionReveal, StaggerGroup } from "@/components/animation/motion-primitives";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import type { FrictionStep } from "@/lib/types";

export function BusinessFrictionSection({ steps }: { steps: FrictionStep[] }) {
  return (
    <section className="border-b border-border bg-background" id="friction">
      <Container className="px-6 py-20 md:px-16">
        <SectionReveal>
          <SectionHeading
            eyebrow="// HOW WE BUILD"
            title="From Business Challenge to Running Interface"
            description="A dependable, step-by-step engineering process crafted to deliver high-performance digital tools with complete reliability."
          />
        </SectionReveal>
        
        <StaggerGroup>
          <div className="mt-14 grid grid-cols-1 border-y border-border divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">
            {steps.map((step) => (
              <article className="flex min-h-[300px] flex-col justify-between p-6 md:p-8" key={step.id}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-accent">{step.number}</span>
                    {step.estimate ? (
                      <span className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground">{step.estimate}</span>
                    ) : null}
                  </div>
                  <h3 className="mt-8 text-xl font-bold uppercase tracking-tight text-foreground">{step.title}</h3>
                  <p className="mt-4 text-xs leading-6 text-muted-foreground">{step.description}</p>
                </div>
                
                {step.deliverable ? (
                  <div className="mt-8 border-t border-border/60 pt-4">
                    <TechnicalLabel className={step.status === "success" ? "text-success" : "text-muted-foreground"}>
                      {step.deliverable}
                    </TechnicalLabel>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}

