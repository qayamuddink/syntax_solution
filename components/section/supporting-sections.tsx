import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { PricingCard } from "@/components/ui/pricing-card";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { IconCheck, IconPerformance, IconDeployment } from "@/components/ui/icons";
import { SectionReveal } from "@/components/animation/motion-primitives";
import type { BenchmarkConfig, PricingPlan, ProcessStep as ProcessStepData } from "@/lib/types";

export function BusinessesSection({ benchmark }: { benchmark: BenchmarkConfig }) {
  return (
    <section className="bg-background" id="about">
      <Container className="px-6 py-20 md:px-16">
        <SectionReveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column — 5 cols */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <TechnicalLabel className="text-accent">{benchmark.eyebrow}</TechnicalLabel>
              <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
                {benchmark.title}
              </h2>
              <p className="mt-4 text-[15px] md:text-base leading-relaxed text-muted-foreground font-normal">
                {benchmark.description}
              </p>
            </div>

            <div className="mt-10 space-y-4 border-t border-border pt-8">
              {benchmark.advantages.map((adv) => (
                <div
                  key={adv.number}
                  className="group rounded-xl border border-border/80 bg-surface/60 p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface hover:shadow-[0_8px_30px_rgba(196,114,68,0.12)]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-semibold text-accent">{adv.number}</span>
                    <h3 className="text-sm md:text-base font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
                      {adv.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs md:text-sm leading-relaxed text-muted-foreground font-normal">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Engineering Specification Comparison Table (7 cols) */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="border border-border bg-surface p-6 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.35)] rounded-xl md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border pb-4 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <IconPerformance className="size-4 text-accent" />
                  <TechnicalLabel className="text-foreground">{benchmark.tableHeader}</TechnicalLabel>
                </div>
                <TechnicalLabel className="text-muted-foreground">{benchmark.auditTag}</TechnicalLabel>
              </div>

              {/* Table Column Labels */}
              <div className="grid grid-cols-12 border-b border-border/60 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                <div className="col-span-5">METRIC / FEATURE</div>
                <div className="col-span-3">OFF-THE-SHELF / WP</div>
                <div className="col-span-4 text-right">SYNTAXLAB SOLUTIONS</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-border/60 font-mono text-xs">
                {benchmark.rows.map((row, idx) => (
                  <div className="grid grid-cols-12 items-center py-3.5 transition-colors duration-150 hover:bg-white/[0.02] px-1 rounded-sm" key={idx}>
                    <div className="col-span-5 text-muted-foreground">{row.metric}</div>
                    <div className="col-span-3 text-red-400/90 text-[11px]">{row.offTheShelf}</div>
                    <div
                      className={
                        row.variant === "success"
                          ? "col-span-4 text-right font-semibold text-success flex items-center justify-end gap-1.5"
                          : row.variant === "danger"
                          ? "col-span-4 text-right font-semibold text-success flex items-center justify-end gap-1.5"
                          : "col-span-4 text-right font-semibold text-foreground"
                      }
                    >
                      <span>{row.bespoke}</span>
                      {row.variant === "success" ? <IconCheck className="size-3 text-success inline" /> : null}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Conversion Delta */}
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 font-mono text-xs">
                <span className="text-muted-foreground uppercase">PERFORMANCE ADVANTAGE:</span>
                <span className="font-bold text-accent">{benchmark.conversionDelta}</span>
              </div>
            </div>
          </div>
        </div>
        </SectionReveal>
      </Container>
      <Container className="px-6 md:px-16">
        <Divider />
      </Container>
    </section>
  );
}

export function ProcessSection({ steps }: { steps: ProcessStepData[] }) {
  return (
    <section className="bg-background" id="process">
      <Container className="px-6 py-20 md:px-16">
        <SectionReveal>
          <div className="border-b border-border pb-8">
            <TechnicalLabel className="text-accent">{"// HOW WE WORK"}</TechnicalLabel>
            <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">How We Work</h2>
            <p className="mt-3 max-w-xl text-[15px] md:text-base leading-relaxed text-muted-foreground font-normal">
              Clear communication, practical milestones, and a straightforward process from the first conversation to launch.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 border-y border-border divide-y divide-border rounded-xl overflow-hidden md:grid-cols-4 md:divide-x md:divide-y-0">
            {steps.map((step) => (
              <article className="group flex min-h-[260px] flex-col justify-between p-6 transition-colors duration-200 ease-out hover:bg-white/[0.02] md:p-8" key={step.id}>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-accent">{step.number}</span>
                      {step.tag ? <TechnicalLabel className="text-muted-foreground">{"// "}{step.tag}</TechnicalLabel> : null}
                    </div>
                    <IconDeployment className="size-4 text-accent/40 opacity-0 transition-all duration-200 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-6 text-lg md:text-xl font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-accent">{step.title}</h3>
                  <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground font-normal">{step.description}</p>
                </div>
                <div className="mt-6 h-0.5 w-full bg-border transition-colors duration-200 group-hover:bg-accent/60" />
              </article>
            ))}
          </div>
        </SectionReveal>
      </Container>
      <Container className="px-6 md:px-16">
        <Divider />
      </Container>
    </section>
  );
}

export function EngagementSection({ plans }: { plans: PricingPlan[] }) {
  return (
    <section className="bg-background" id="pricing">
      <Container className="px-6 py-20 md:px-16">
        <SectionReveal>
          <div className="border-b border-border pb-8">
            <TechnicalLabel className="text-accent">{"// TRANSPARENT PRICING"}</TechnicalLabel>
            <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">Pricing & Engagement</h2>
            <p className="mt-3 max-w-xl text-[15px] md:text-base leading-relaxed text-muted-foreground font-normal">
              Simple, transparent pricing tailored for growing businesses with zero hidden costs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard key={plan.id} {...plan} />
            ))}
          </div>
        </SectionReveal>
      </Container>
      <Container className="px-6 md:px-16">
        <Divider />
      </Container>
    </section>
  );
}


