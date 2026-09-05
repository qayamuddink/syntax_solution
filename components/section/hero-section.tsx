import { Button } from "@/components/ui/button";
import { Metric } from "@/components/ui/metric";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { HeroShader } from "@/components/animation/hero-shader";
import { HeroOrbVisual } from "@/components/animation/hero-orb";
import { IconSystem } from "@/components/ui/icons";
import type { HeroConfig } from "@/lib/types";

export function HeroSection({ hero }: { hero: HeroConfig }) {
  return (
    <section className="relative border-b border-border bg-background overflow-hidden" id="top">
      {/* Layer 1: Architectural grid & canvas background */}
      <HeroShader className="absolute inset-0 pointer-events-none z-0 opacity-60" />

      {/* Layer 2: 3D Spherical/Orb Computational Topology visual */}
      <HeroOrbVisual className="absolute right-0 top-1/2 -translate-y-1/2 h-[550px] w-[550px] pointer-events-none z-0 opacity-40 lg:opacity-75" />

      {/* Technical Interface Side Markers */}
      <div className="pointer-events-none absolute left-6 top-10 hidden font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50 lg:block">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent" />
          <span>ITERATE // MEASURE // BUILD</span>
        </div>
      </div>
      <div className="pointer-events-none absolute right-6 top-10 hidden font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50 lg:block">
        <span>SYS_REF: STX_2025.2</span>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[665.5px] max-w-[1280px] grid-cols-1 gap-12 px-6 pb-24 pt-16 md:px-16 lg:grid-cols-12">
        {/* Left Column */}
        <div className="flex flex-col justify-between lg:col-span-7 lg:pr-6">
          <div className="max-w-2xl">
            <TechnicalLabel className="text-accent font-mono text-[11px] tracking-[0.14em]">
              {hero.eyebrow ?? "// SOFTWARE ENGINEERING & ARCHITECTURE"}
            </TechnicalLabel>
            
            <h1 className="mt-8 max-w-3xl text-[clamp(2.75rem,5.8vw,5.2rem)] font-medium leading-[0.95] tracking-[-0.055em] text-foreground">
              {hero.titlePrefix ?? "YOUR BUSINESS."}
              <br />
              <span className="text-accent">{hero.titleAccent ?? "BUILT FOR THE WEB."}</span>
            </h1>
            
            <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground md:text-[17px]">
              {hero.description}
            </p>
            
            <div className="mt-9 flex flex-wrap gap-3">
              {hero.actions.map((action) => (
                <Button href={action.href} key={action.label} label={action.label} variant={action.variant} />
              ))}
            </div>
          </div>

          {/* Bottom Metrics with Vertical Dividers */}
          <div className="mt-16 grid max-w-xl grid-cols-3 divide-x divide-border border-t border-border pt-8 lg:mt-12">
            {hero.metrics.map((metric) => (
              <div key={metric.id} className="first:pl-0 px-4 last:pr-0">
                <Metric {...metric} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — System Architecture & Runtime Panel */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <div className="group relative overflow-hidden border border-border bg-surface/90 p-6 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-accent/40 hover:shadow-[0_20px_60px_rgba(185,120,74,0.12)] md:p-8 rounded-lg">
            {/* Top Panel Header */}
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2.5">
                <IconSystem className="size-4 text-accent" />
                <TechnicalLabel className="font-mono text-[11px] tracking-[0.14em] text-foreground">
                  {hero.telemetryTitle ?? "SYSTEM ARCHITECTURE & RUNTIME"}
                </TechnicalLabel>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-success animate-pulse" />
                <span className="font-mono text-[10px] font-medium tracking-[0.14em] text-success">
                  {hero.telemetryStatus ?? "LIVE // VERIFIED"}
                </span>
              </div>
            </div>

            {/* Spec / Telemetry Rows */}
            <div className="mt-4 divide-y divide-border/60">
              {hero.telemetryRows?.map((row, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 font-mono text-[11px] tracking-[0.08em] transition-colors duration-200 hover:bg-white/[0.02] px-1 rounded-sm">
                  <span className="text-muted-foreground uppercase">{row.label}</span>
                  <span
                    className={
                      row.variant === "accent"
                        ? "text-accent font-medium"
                        : row.variant === "success"
                        ? "text-success font-medium flex items-center gap-1.5"
                        : "text-foreground font-medium"
                    }
                  >
                    {row.variant === "success" ? <span className="size-1.5 rounded-full bg-success" /> : null}
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Card Annotation */}
            <div className="mt-6 flex items-center justify-between border-t border-border pt-3 font-mono text-[9px] text-muted-foreground uppercase tracking-[0.14em]">
              <span>ARCHITECTURE / OBSERVED</span>
              <span className="text-accent font-semibold">v.01.24</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Explore Indicator */}
      <div className="absolute bottom-4 left-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70 md:left-16">
        <span className="h-6 w-px bg-accent/60 animate-pulse" />
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}


