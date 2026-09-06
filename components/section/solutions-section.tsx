"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { IconArrowRight } from "@/components/ui/icons";
import { SectionReveal } from "@/components/animation/motion-primitives";
import type { CapabilityGroup, Solution, TechnicalReadout } from "@/lib/types";

export function SolutionsSection({
  solutions,
}: {
  capabilities?: CapabilityGroup[];
  solutions: Solution[];
  telemetry?: TechnicalReadout[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = solutions[activeIndex] ?? solutions[0];

  return (
    <section className="bg-background py-16 md:py-20" id="solutions">
      <Container className="px-6 md:px-16">
        <SectionReveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Zone — Heading & Navigation (4 cols) */}
          <div className="flex flex-col justify-start lg:col-span-4 lg:pr-4">
            <div>
              <TechnicalLabel className="text-accent font-mono text-[11px] tracking-[0.14em]">
                {"// WHAT WE BUILD"}
              </TechnicalLabel>
              <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
                Digital Solutions for Growing Businesses
              </h2>
              <p className="mt-4 text-[15px] md:text-base leading-relaxed text-muted-foreground font-normal">
                From professional websites to custom business tools, we build practical digital solutions that help businesses attract customers, sell online, and work more efficiently.
              </p>
              <div className="mt-8">
                <Button href="/solutions" label="VIEW ALL SOLUTIONS" variant="secondary" />
              </div>
            </div>

            {/* Bottom Category Tags */}
            <div className="mt-10 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              WEBSITES &nbsp;/&nbsp; E-COMMERCE &nbsp;/&nbsp; BUSINESS TOOLS &nbsp;/&nbsp; SUPPORT
            </div>
          </div>

          {/* Center Zone — Service Cards List (5 cols) */}
          <div className="lg:col-span-5">
            <div className="space-y-3">
              {solutions.map((solution, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <article
                    key={solution.id}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveIndex(idx);
                      }
                    }}
                    className={`group relative border p-5 transition-all duration-200 ease-out cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                      isActive
                        ? "border-accent bg-surface-elevated/90 shadow-[0_8px_30px_rgba(196,114,68,0.16)] -translate-y-0.5"
                        : "border-border/80 bg-surface/60 hover:border-accent/50 hover:bg-surface hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(196,114,68,0.1)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-mono text-xs font-semibold">
                        <span className="text-accent">{solution.number}</span>
                        <span className="text-muted-foreground">{"//"}</span>
                        <span className="text-muted-foreground uppercase text-[10px] tracking-[0.12em]">
                          {solution.category}
                        </span>
                      </div>
                      <IconArrowRight
                        className={`size-3.5 text-accent transition-all duration-200 ${
                          isActive
                            ? "translate-x-1 opacity-100"
                            : "opacity-70 group-hover:opacity-100 group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                    <h3 className={`mt-2.5 text-base md:text-lg font-semibold leading-snug transition-colors duration-200 ${
                      isActive ? "text-accent" : "text-foreground group-hover:text-accent"
                    }`}>
                      {solution.title}
                    </h3>
                    {solution.description ? (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-normal">
                        {solution.description}
                      </p>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>

          {/* Right Zone — Active Solution Preview & Impact Panel (3 cols) */}
          <div className="lg:col-span-3 lg:pl-2">
            <div className="sticky top-24 border-copper-glow rounded-xl border border-border/90 bg-surface-elevated p-5 shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition-all duration-300">
              <motion.div
                key={activeSolution?.id ?? activeIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border/80 pb-3 font-mono text-[11px]">
                  <TechnicalLabel className="font-semibold text-foreground uppercase">SOLUTION OVERVIEW</TechnicalLabel>
                  <span className="flex items-center gap-1.5 font-semibold text-accent text-[10px] tracking-[0.14em]">
                    <motion.span
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="size-2 rounded-full bg-accent inline-block"
                    />
                    {activeSolution?.context ?? "ACTIVE"}
                  </span>
                </div>

                {/* Dynamic Solution Highlight */}
                <div className="mt-4 space-y-4 font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">SELECTED SERVICE</span>
                    <p className="mt-1 text-sm font-bold text-foreground">{activeSolution?.title}</p>
                  </div>

                  <div className="border-t border-border/50 pt-3">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">TECHNICAL STANDARD</span>
                    <p className="mt-1 text-xs font-semibold text-accent">{activeSolution?.spec}</p>
                  </div>

                  <div className="border-t border-border/50 pt-3">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">CORE BENEFITS</span>
                    <ul className="mt-2 space-y-1.5 text-[11px] text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-success inline-block" />
                        <span>Fast & Mobile Optimized</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-success inline-block" />
                        <span>100% Full Code Ownership</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-success inline-block" />
                        <span>Zero Recurring Lock-in</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Quality Guarantee Box */}
                <div className="mt-5 rounded-md border border-border/60 bg-surface/80 p-3 font-mono text-[10px]">
                  <p className="font-semibold text-accent uppercase tracking-wider">SYNTAXLAB COMMITMENT</p>
                  <p className="mt-1.5 text-muted-foreground leading-relaxed">
                    We build lightweight, reliable digital solutions designed for actual business outcomes and smooth customer experiences.
                  </p>
                </div>
              </motion.div>
            </div>
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



