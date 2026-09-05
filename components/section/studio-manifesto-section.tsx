import { Container } from "@/components/ui/container";
import { TechnicalLabel } from "@/components/ui/technical-label";
import type { StudioManifestoConfig } from "@/lib/types";

export function StudioManifestoSection({ manifesto }: { manifesto: StudioManifestoConfig }) {
  return (
    <section className="border-b border-border bg-surface/50 py-20" id="manifesto">
      <Container className="px-6 md:px-16">
        <div className="grid grid-cols-1 gap-10 rounded-xl border border-border bg-background p-8 shadow-[0_12px_40px_rgba(0,0,0,0.35)] md:p-14 lg:grid-cols-12 lg:gap-16">
          {/* Left Metadata Column */}
          <div className="flex flex-col justify-between border-b border-border pb-8 lg:col-span-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
            <div>
              <TechnicalLabel className="text-accent">{manifesto.eyebrow ?? "// PERSPECTIVE"}</TechnicalLabel>
              <h2 className="mt-3 font-mono text-xl font-bold uppercase tracking-wider text-foreground">
                {manifesto.title ?? "STUDIO MANIFESTO"}
              </h2>
            </div>

            <div className="mt-12 space-y-2 font-mono text-[11px] tracking-[0.1em] text-muted-foreground">
              <p>{manifesto.ref}</p>
              <p>{manifesto.rev}</p>
              <p className="mt-4 italic text-foreground/80">{manifesto.tagline}</p>
            </div>
          </div>

          {/* Right Editorial Quote Column */}
          <div className="flex flex-col justify-center lg:col-span-8">
            <blockquote className="text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl lg:text-4xl">
              {manifesto.quotePrefix ?? "Most businesses don’t need more software subscriptions. They need the "}
              <span className="text-accent">{manifesto.quoteAccent ?? "exact right digital architecture"}</span>
              {manifesto.quoteSuffix ?? "."}
            </blockquote>
            
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {manifesto.paragraph}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
