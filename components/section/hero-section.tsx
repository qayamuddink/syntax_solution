"use client";

import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Metric } from "@/components/ui/metric";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { HeroShader } from "@/components/animation/hero-shader";
import { HeroOrbVisual } from "@/components/animation/hero-orb";
import {
  IconSystem,
  IconTarget,
  IconDispatch,
  IconLatency,
  IconNode,
  IconMemory,
  IconRender,
  IconDaemon,
} from "@/components/ui/icons";
import type { HeroConfig } from "@/lib/types";

const heroEyebrowVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.05, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const heroHeadlineVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.13, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const heroParagraphVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const heroCtaVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.27, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const heroMetricsVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.34, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

export function HeroSection({ hero }: { hero: HeroConfig }) {
  const telemetryIcons = [
    IconTarget,
    IconDispatch,
    IconLatency,
    IconNode,
    IconMemory,
    IconRender,
    IconDaemon,
  ];

  return (
    <>
      <section className="relative bg-background overflow-hidden" id="top">
      {/* Layer 1: Architectural atmospheric grid & copper light background */}
      <HeroShader className="absolute inset-0 pointer-events-none z-0 opacity-70" />

      {/* Layer 2: 3D Spherical/Orbital Architectural Topology visual behind telemetry card */}
      <HeroOrbVisual className="absolute right-[-40px] top-1/2 -translate-y-1/2 h-[640px] w-[640px] pointer-events-none z-0 opacity-50 lg:opacity-85" />


      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 pb-8 pt-4 md:px-16 md:pb-10 md:pt-6 lg:grid-cols-12 lg:gap-10">
        {/* Left Column — Editorial Hero Content */}
        <div className="flex flex-col justify-between lg:col-span-7 lg:pr-4">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroEyebrowVariants}
            >
              <TechnicalLabel className="text-accent font-mono text-[11px] md:text-xs font-medium tracking-[0.14em]">
                {hero.eyebrow ?? "WEB DESIGN & SOFTWARE DEVELOPMENT"}
              </TechnicalLabel>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={heroHeadlineVariants}
              className="mt-3.5 max-w-3xl text-[2.25rem] sm:text-4xl md:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.0] tracking-[-0.035em] text-foreground"
            >
              YOUR BUSINESS.
              <br />
              <span className="text-accent">BUILT FOR THE</span>
              <br />
              <span className="text-accent">MODERN WEB.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={heroParagraphVariants}
              className="mt-3 max-w-xl text-[14px] md:text-[15px] leading-relaxed text-muted-foreground font-normal"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroCtaVariants}
            >
              <div className="mt-5 flex flex-wrap items-center gap-3.5">
                <Button href="/contact" label="START A PROJECT" variant="primary" />
                <Button href="/solutions" label="EXPLORE SOLUTIONS" variant="secondary" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Metrics with Vertical Line Dividers */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroMetricsVariants}
            className="mt-6 grid max-w-xl grid-cols-3 divide-x divide-border border-t border-border pt-4 lg:mt-7"
          >
            {hero.metrics.map((metric) => (
              <div key={metric.id} className="first:pl-0 px-4 last:pr-0">
                <Metric {...metric} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column — System Architecture & Runtime Telemetry Panel */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroMetricsVariants}
            className="border-copper-glow group relative overflow-hidden rounded-xl border border-border/90 bg-surface-elevated/90 p-4 backdrop-blur-md shadow-[0_16px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-accent/40 md:p-5"
          >
            {/* Panel Top Header */}
            <div className="flex items-center justify-between border-b border-border/80 pb-2.5">
              <div className="flex items-center gap-2.5">
                <IconSystem className="size-4 text-accent" />
                <TechnicalLabel className="font-mono text-[11px] font-semibold tracking-[0.14em] text-foreground">
                  {hero.telemetryTitle ?? "SYSTEM ARCHITECTURE & RUNTIME"}
                </TechnicalLabel>
              </div>
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="size-2 rounded-full bg-success inline-block"
                />
                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-success">
                  {hero.telemetryStatus ?? "ACTIVE • VERIFIED"}
                </span>
              </div>
            </div>

            {/* Spec / Telemetry Rows */}
            <div className="mt-2.5 divide-y divide-border/60">
              {hero.telemetryRows?.map((row, idx) => {
                const RowIcon = telemetryIcons[idx % telemetryIcons.length] ?? IconSystem;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1.5 font-mono text-[10.5px] tracking-[0.06em] transition-colors duration-150 hover:bg-white/[0.02] px-1 rounded-sm"
                  >
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <RowIcon className="size-3 text-muted-foreground shrink-0" />
                      <span className="uppercase text-[9.5px]">{row.label}</span>
                    </div>
                    <span
                      className={
                        row.variant === "accent"
                          ? "text-accent font-semibold"
                          : row.variant === "success"
                          ? "text-success font-semibold flex items-center gap-1.5"
                          : "text-foreground font-medium"
                      }
                    >
                      {row.variant === "success" ? <span className="size-1.5 rounded-full bg-success inline-block" /> : null}
                      {row.value}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Bottom Card Annotation */}
            <div className="mt-3 flex items-center justify-between border-t border-border/80 pt-2 font-mono text-[9.5px] text-muted-foreground uppercase tracking-[0.14em]">
              <span>ARCHITECTURE / OBSERVED</span>
              <span className="text-accent font-bold">V.01.24</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <Container className="px-6 md:px-16">
      <Divider />
    </Container>
    </>
  );
}



