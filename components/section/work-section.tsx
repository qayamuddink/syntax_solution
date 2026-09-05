import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ProjectItem } from "@/components/ui/project-item";
import { ProjectVisual } from "@/components/ui/project-visual";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { ImageReveal } from "@/components/animation/motion-primitives";
import type { FeaturedProject, Project } from "@/lib/types";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="border-b border-border bg-background" id="work">
      <Container className="px-6 py-20 md:px-16">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <TechnicalLabel className="text-accent">{"// VERIFIED CASE RECORDS"}</TechnicalLabel>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">Projects</h2>
            <p className="mt-3 max-w-xl text-xs leading-6 text-muted-foreground">
              A register of custom digital systems engineered to solve real business problems, reduce friction, and drive measurable growth.
            </p>
          </div>
          <TechnicalLabel className="text-muted-foreground">
            {"REGISTRY: STX_PROD_2024-25 // 04 PRODUCTION UNITS"}
          </TechnicalLabel>
        </div>

        {/* Table Column Headers */}
        <div className="hidden grid-cols-12 border-b border-border py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground lg:grid">
          <div className="col-span-4">SYSTEM / CLIENT</div>
          <div className="col-span-4">DIGITAL ARCHITECTURE & CORE PROBLEM</div>
          <div className="col-span-2">STACK TOPOLOGY</div>
          <div className="col-span-2 text-right">OPERATIONAL TELEMETRY</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-border">
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FeaturedWorkSection({ projects }: { projects: FeaturedProject[] }) {
  const primary = projects.find((project) => project.placement === "primary");
  const secondary = projects.find((project) => project.placement === "secondary");
  const lower = projects.filter((project) => project.placement === "lower");

  return (
    <section className="border-b border-border bg-background" id="featured-work">
      <Container className="px-6 py-20 md:px-16">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <TechnicalLabel className="text-accent">{"// CASE STUDIES"}</TechnicalLabel>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">Featured Work</h2>
          </div>
          <TechnicalLabel className="text-muted-foreground">{"// CASE STUDIES"}</TechnicalLabel>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12 lg:gap-12">
          {/* Primary Feature (7 cols) */}
          {primary ? (
            <ImageReveal className="md:col-span-7">
              <article>
                <ProjectVisual alt={primary.alt ?? primary.title} className="aspect-[16/10] w-full" image={primary.image ?? ""} />
                <div className="mt-5 flex items-center justify-between font-mono text-[11px]">
                  <TechnicalLabel className="text-muted-foreground">{primary.category}</TechnicalLabel>
                  {primary.telemetryValue ? (
                    <span className="font-semibold text-success">{primary.telemetryValue}</span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground">{primary.title}</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">{primary.description}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-4 font-mono text-[11px]">
                  <span className="text-muted-foreground">{primary.stackText}</span>
                  <Link href="#contact" className="font-semibold text-accent hover:underline">
                    {primary.actionText ?? "VIEW ARCHITECTURE →"}
                  </Link>
                </div>
              </article>
            </ImageReveal>
          ) : null}

          {/* Secondary Feature (5 cols) */}
          {secondary ? (
            <ImageReveal className="md:col-span-5">
              <article>
                <ProjectVisual alt={secondary.alt ?? secondary.title} className="aspect-[16/10] w-full" image={secondary.image ?? ""} />
                <div className="mt-5 flex items-center justify-between font-mono text-[11px]">
                  <TechnicalLabel className="text-muted-foreground">{secondary.category}</TechnicalLabel>
                  {secondary.telemetryValue ? (
                    <span className="font-semibold text-success">{secondary.telemetryValue}</span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">{secondary.title}</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">{secondary.description}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-4 font-mono text-[11px]">
                  <span className="text-muted-foreground">{secondary.stackText}</span>
                  <Link href="#contact" className="font-semibold text-accent hover:underline">
                    {secondary.actionText ?? "EXPLORE CASE →"}
                  </Link>
                </div>
              </article>
            </ImageReveal>
          ) : null}

          {/* Lower Features (6 cols each) */}
          {lower.map((project) => (
            <ImageReveal className="md:col-span-6" key={project.id}>
              <article>
                <ProjectVisual alt={project.alt ?? project.title} className="aspect-[16/10] w-full" image={project.image ?? ""} />
                <div className="mt-5 flex items-center justify-between font-mono text-[11px]">
                  <TechnicalLabel className="text-muted-foreground">{project.category}</TechnicalLabel>
                  {project.telemetryValue ? (
                    <span className="font-semibold text-success">{project.telemetryValue}</span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">{project.title}</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">{project.description}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-4 font-mono text-[11px]">
                  <span className="text-muted-foreground">{project.stackText}</span>
                  <Link href="#contact" className="font-semibold text-accent hover:underline">
                    {project.actionText ?? "VIEW CASE →"}
                  </Link>
                </div>
              </article>
            </ImageReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}


