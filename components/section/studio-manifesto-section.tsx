import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { SectionReveal } from "@/components/animation/motion-primitives";
import type { StudioManifestoConfig } from "@/lib/types";

export function StudioManifestoSection({ manifesto }: { manifesto: StudioManifestoConfig }) {
  return (
    <section className="bg-background py-16 md:py-20" id="manifesto">
      <Container className="px-6 md:px-16">
        <SectionReveal>
          <div className="border-copper-glow relative grid grid-cols-1 gap-10 rounded-xl border border-border/90 bg-surface-elevated p-8 shadow-[0_16px_50px_rgba(0,0,0,0.25)] md:p-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Metadata Column (4 cols) */}
            <div className="flex flex-col justify-between border-b border-border/80 pb-8 lg:col-span-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
              <div>
                <TechnicalLabel className="text-accent font-mono text-[11px] tracking-[0.14em]">
                  {manifesto.eyebrow ?? "// OUR APPROACH"}
                </TechnicalLabel>
                <h2 className="mt-3 font-mono text-xl font-bold uppercase tracking-[0.12em] text-foreground">
                  {manifesto.title ?? "BUILT FOR YOUR BUSINESS"}
                </h2>

                <div className="mt-5 h-px w-16 bg-border/80" />
              </div>

              <div className="mt-10 space-y-2 font-mono text-[11px] tracking-[0.1em] text-muted-foreground">
                <p>{manifesto.ref}</p>
                <p>{manifesto.rev}</p>
                <p className="mt-5 italic text-foreground font-mono text-xs">{manifesto.tagline}</p>
              </div>
            </div>

            {/* Right Editorial Quote Column (8 cols) */}
            <div className="flex flex-col justify-center lg:col-span-8 lg:pl-2">
              <blockquote className="text-2xl font-semibold leading-[1.25] tracking-tight text-foreground md:text-3xl lg:text-[2.25rem]">
                {manifesto.quotePrefix ?? "“Most businesses don't need more complicated software. They need the "}
                <span className="text-accent">{manifesto.quoteAccent ?? "right digital solution."}</span>
                {manifesto.quoteSuffix ?? "”"}
              </blockquote>

              <p className="mt-6 max-w-2xl text-[15px] md:text-base leading-relaxed text-muted-foreground font-normal">
                {manifesto.paragraph}
              </p>
            </div>
          </div>
        </SectionReveal>
      </Container>
      <Container className="px-6 md:px-16 mt-16 md:mt-20">
        <Divider />
      </Container>
    </section>
  );
}


