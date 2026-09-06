"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { ProjectItem } from "@/components/ui/project-item";
import { ProjectVisual } from "@/components/ui/project-visual";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { SectionReveal, ImageReveal } from "@/components/animation/motion-primitives";
import type { FeaturedProject, Project } from "@/lib/types";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-background" id="work">
      <Container className="px-6 py-20 md:px-16">
        <SectionReveal>
          {/* Header */}
          <div className="flex flex-col justify-between gap-4 border-b border-border pb-8 md:flex-row md:items-end">
            <div>
              <TechnicalLabel className="text-accent">{"// PROJECT INDEX"}</TechnicalLabel>
              <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">Projects</h2>
              <p className="mt-3 max-w-xl text-[15px] md:text-base leading-relaxed text-muted-foreground font-normal">
                A summary of digital solutions built to solve real business challenges and create better customer experiences.
              </p>
            </div>
            <TechnicalLabel className="text-muted-foreground">
              {"PROVEN RESULTS // 04 VERIFIED PROJECTS"}
            </TechnicalLabel>
          </div>

          {/* Table Column Headers */}
          <div className="hidden grid-cols-12 border-b border-border py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground lg:grid">
            <div className="col-span-4">BUSINESS / PROJECT</div>
            <div className="col-span-4">WHAT WE SOLVED</div>
            <div className="col-span-2">TECHNOLOGY</div>
            <div className="col-span-2 text-right">RESULT</div>
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

  const rawX = useTransform(scrollYProgress, [0.15, 0.85], [0, -50]);
  const horizontalX = shouldReduceMotion || !isDesktop ? 0 : rawX;

  const primary = projects.find((project) => project.placement === "primary");
  const secondary = projects.find((project) => project.placement === "secondary");
  const lower = projects.filter((project) => project.placement === "lower");

  return (
    <section className="bg-background overflow-hidden" id="featured-work" ref={sectionRef}>
      <Container className="px-6 py-20 md:px-16">
        <SectionReveal>
          {/* Header */}
          <div className="flex flex-col justify-between gap-4 border-b border-border pb-8 md:flex-row md:items-end">
            <div>
              <TechnicalLabel className="text-accent">{"// DETAILED CASE STUDIES"}</TechnicalLabel>
              <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">Featured Work</h2>
              <p className="mt-3 max-w-xl text-[15px] md:text-base leading-relaxed text-muted-foreground font-normal">
                Detailed case studies and visual walkthroughs of custom web platforms engineered by SyntaxLab.
              </p>
            </div>
            <TechnicalLabel className="text-muted-foreground">{"// AGENCY PORTFOLIO"}</TechnicalLabel>
          </div>
        </SectionReveal>

        <motion.div style={{ x: horizontalX }} className="mt-12 grid gap-8 md:grid-cols-12 lg:gap-10">
          {/* Primary Feature (7 cols) */}
          {primary ? (
            <ImageReveal className="md:col-span-7">
              <article className="group overflow-hidden rounded-xl border border-border/80 bg-surface/50 p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface hover:shadow-[0_16px_40px_rgba(196,114,68,0.12)]">
                <ProjectVisual alt={primary.alt ?? primary.title} className="aspect-[16/10] w-full overflow-hidden rounded-lg" image={primary.image ?? ""} />
                <div className="mt-5 flex items-center justify-between font-mono text-[11px]">
                  <TechnicalLabel className="text-muted-foreground">{primary.category}</TechnicalLabel>
                  {primary.telemetryValue ? (
                    <span className="font-semibold text-success">{primary.telemetryValue}</span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-xl md:text-2xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">{primary.title}</h3>
                <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-muted-foreground font-normal">{primary.description}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-4 font-mono text-[11px]">
                  <span className="text-muted-foreground">{primary.stackText}</span>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 rounded border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent transition-all duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-[#08090A]">
                    <span>{primary.actionText ?? "EXPLORE CASE STUDY →"}</span>
                  </Link>
                </div>
              </article>
            </ImageReveal>
          ) : null}

          {/* Secondary Feature (5 cols) */}
          {secondary ? (
            <ImageReveal className="md:col-span-5">
              <article className="group overflow-hidden rounded-xl border border-border/80 bg-surface/50 p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface hover:shadow-[0_16px_40px_rgba(196,114,68,0.12)]">
                <ProjectVisual alt={secondary.alt ?? secondary.title} className="aspect-[16/10] w-full overflow-hidden rounded-lg" image={secondary.image ?? ""} />
                <div className="mt-5 flex items-center justify-between font-mono text-[11px]">
                  <TechnicalLabel className="text-muted-foreground">{secondary.category}</TechnicalLabel>
                  {secondary.telemetryValue ? (
                    <span className="font-semibold text-success">{secondary.telemetryValue}</span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">{secondary.title}</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">{secondary.description}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-4 font-mono text-[11px]">
                  <span className="text-muted-foreground">{secondary.stackText}</span>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 rounded border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent transition-all duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-[#08090A]">
                    <span>{secondary.actionText ?? "EXPLORE CASE STUDY →"}</span>
                  </Link>
                </div>
              </article>
            </ImageReveal>
          ) : null}

          {/* Lower Features (6 cols each) */}
          {lower.map((project) => (
            <ImageReveal className="md:col-span-6" key={project.id}>
              <article className="group overflow-hidden rounded-xl border border-border/80 bg-surface/50 p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface hover:shadow-[0_16px_40px_rgba(196,114,68,0.12)]">
                <ProjectVisual alt={project.alt ?? project.title} className="aspect-[16/10] w-full overflow-hidden rounded-lg" image={project.image ?? ""} />
                <div className="mt-5 flex items-center justify-between font-mono text-[11px]">
                  <TechnicalLabel className="text-muted-foreground">{project.category}</TechnicalLabel>
                  {project.telemetryValue ? (
                    <span className="font-semibold text-success">{project.telemetryValue}</span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">{project.title}</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">{project.description}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-4 font-mono text-[11px]">
                  <span className="text-muted-foreground">{project.stackText}</span>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 rounded border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent transition-all duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-[#08090A]">
                    <span>{project.actionText ?? "VIEW CASE STUDY →"}</span>
                  </Link>
                </div>
              </article>
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


