"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { ProjectItem } from "@/components/ui/project-item";
import { ProjectVisual } from "@/components/ui/project-visual";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Card, CardBadge } from "@/components/ui/card";
import { IconArrowRight } from "@/components/ui/icons";
import { SectionReveal, ImageReveal } from "@/components/animation/motion-primitives";
import type { FeaturedProject, Project } from "@/lib/types";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-background" id="work">
      <Container className="px-6 py-14 md:py-16 md:px-16">
        <SectionReveal>
          {/* Header */}
          <div className="flex flex-col justify-between gap-3 border-b border-border pb-6 md:flex-row md:items-end">
            <div>
              <TechnicalLabel className="text-accent font-mono text-[11px] tracking-[0.14em]">PORTFOLIO INDEX</TechnicalLabel>
              <h2 className="mt-3 text-3xl font-bold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">Projects Index</h2>
              <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-muted-foreground font-normal">
                Technical overviews and operational metrics of custom production systems engineered by SyntaxLab.
              </p>
            </div>
            <TechnicalLabel className="text-muted-foreground font-mono text-[10px]">
              04 PRODUCTION BUILDS • 100% SPEC PASS
            </TechnicalLabel>
          </div>

          {/* Table Column Headers */}
          <div className="hidden grid-cols-12 border-b border-border py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground lg:grid">
            <div className="col-span-4">BUSINESS / SYSTEM</div>
            <div className="col-span-4">ENGINEERING SOLUTION</div>
            <div className="col-span-2">CORE STACK</div>
            <div className="col-span-2 text-right">METRIC / RESULT</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-border">
            {projects.map((project) => (
              <ProjectItem key={project.id} {...project} />
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

export function FeaturedWorkSection({ projects }: { projects: FeaturedProject[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawX = useTransform(scrollYProgress, [0.2, 0.8], [0, -32]);
  const horizontalX = shouldReduceMotion || !isDesktop ? 0 : rawX;

  const primary = projects.find((project) => project.placement === "primary");
  const secondary = projects.find((project) => project.placement === "secondary");
  const lower = projects.filter((project) => project.placement === "lower");

  return (
    <section className="bg-background overflow-hidden" id="featured-work" ref={sectionRef}>
      <Container className="px-6 py-14 md:py-16 md:px-16">
        <SectionReveal>
          {/* Header */}
          <div className="flex flex-col justify-between gap-3 border-b border-border pb-6 md:flex-row md:items-end">
            <div>
              <TechnicalLabel className="text-accent font-mono text-[11px] tracking-[0.14em]">SELECTED WORK</TechnicalLabel>
              <h2 className="mt-3 text-3xl font-bold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">Featured Work</h2>
              <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-muted-foreground font-normal">
                Visual walkthroughs, interaction models, and architectural narratives of selected web platforms.
              </p>
            </div>
            <TechnicalLabel className="text-muted-foreground font-mono text-[10px]">STUDIO SHOWCASE • PRODUCTION BUILDS</TechnicalLabel>
          </div>
        </SectionReveal>

        <motion.div style={{ x: horizontalX }} className="mt-10 grid gap-6 md:grid-cols-12 lg:gap-8">
          {/* Primary Feature (7 cols) */}
          {primary ? (
            <ImageReveal className="md:col-span-7">
              <Card as="article" variant="interactive" padding="none" className="overflow-hidden p-4 md:p-5">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                  <ProjectVisual alt={primary.alt ?? primary.title} className="h-full w-full" image={primary.image ?? ""} priority />
                  <div className="absolute left-3 top-3 z-10">
                    <CardBadge>FEATURED</CardBadge>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-muted-foreground uppercase tracking-wider text-[10px]">{primary.category.replace(/\/\/\s*/g, "• ")}</span>
                  {primary.telemetryValue ? (
                    <span className="font-semibold text-success">{primary.telemetryValue}</span>
                  ) : null}
                </div>
                <h3 className="mt-2 text-lg md:text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">{primary.title}</h3>
                <p className="mt-1.5 text-xs md:text-sm leading-relaxed text-muted-foreground font-normal">{primary.description}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-3.5 font-mono text-[11px]">
                  <span className="text-muted-foreground text-[10px]">{primary.stackText ? primary.stackText.replace(/\/\/\s*/g, "• ") : ""}</span>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-accent transition-all duration-200 group-hover:translate-x-1">
                    <span>{primary.actionText ?? "VIEW CASE STUDY →"}</span>
                    <IconArrowRight className="size-3.5" />
                  </Link>
                </div>
              </Card>
            </ImageReveal>
          ) : null}

          {/* Secondary Feature (5 cols) */}
          {secondary ? (
            <ImageReveal className="md:col-span-5">
              <Card as="article" variant="interactive" padding="none" className="overflow-hidden p-4 md:p-5">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                  <ProjectVisual alt={secondary.alt ?? secondary.title} className="h-full w-full" image={secondary.image ?? ""} />
                  <div className="absolute left-3 top-3 z-10">
                    <CardBadge>FEATURED</CardBadge>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-muted-foreground uppercase tracking-wider text-[10px]">{secondary.category.replace(/\/\/\s*/g, "• ")}</span>
                  {secondary.telemetryValue ? (
                    <span className="font-semibold text-success">{secondary.telemetryValue}</span>
                  ) : null}
                </div>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">{secondary.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{secondary.description}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-3.5 font-mono text-[11px]">
                  <span className="text-muted-foreground text-[10px]">{secondary.stackText ? secondary.stackText.replace(/\/\/\s*/g, "• ") : ""}</span>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-accent transition-all duration-200 group-hover:translate-x-1">
                    <span>{secondary.actionText ?? "VIEW CASE STUDY →"}</span>
                    <IconArrowRight className="size-3.5" />
                  </Link>
                </div>
              </Card>
            </ImageReveal>
          ) : null}

          {/* Lower Features (6 cols each) */}
          {lower.map((project) => (
            <ImageReveal className="md:col-span-6" key={project.id}>
              <Card as="article" variant="interactive" padding="none" className="overflow-hidden p-4 md:p-5">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                  <ProjectVisual alt={project.alt ?? project.title} className="h-full w-full" image={project.image ?? ""} />
                  <div className="absolute left-3 top-3 z-10">
                    <CardBadge>FEATURED</CardBadge>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-muted-foreground uppercase tracking-wider text-[10px]">{project.category.replace(/\/\/\s*/g, "• ")}</span>
                  {project.telemetryValue ? (
                    <span className="font-semibold text-success">{project.telemetryValue}</span>
                  ) : null}
                </div>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">{project.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-3.5 font-mono text-[11px]">
                  <span className="text-muted-foreground text-[10px]">{project.stackText ? project.stackText.replace(/\/\/\s*/g, "• ") : ""}</span>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-accent transition-all duration-200 group-hover:translate-x-1">
                    <span>{project.actionText ?? "VIEW CASE STUDY →"}</span>
                    <IconArrowRight className="size-3.5" />
                  </Link>
                </div>
              </Card>
            </ImageReveal>
          ))}
        </motion.div>
      </Container>
      <Container className="px-6 md:px-16">
        <Divider />
      </Container>
    </section>
  );
}


