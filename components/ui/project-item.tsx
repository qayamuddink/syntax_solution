"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Project } from "@/lib/types";
import { IconArrowRight } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import {
  OsteriaBookingMockup,
  KomorebiCommerceMockup,
  NordicEditorialMockup,
  NexusClinicalMockup,
} from "@/components/ui/project-mockups";

export interface ProjectItemProps extends Project {
  index?: number;
  hoveredIndex?: number | null;
  onHover?: (index: number | null) => void;
}

export function ProjectItem({
  id,
  number,
  category,
  title,
  location,
  refId,
  badge,
  description,
  stackPrimary,
  stackSecondary,
  telemetryValue,
  telemetryLabel,
  index = 0,
  hoveredIndex,
  onHover,
}: ProjectItemProps) {
  const [internalHovered, setInternalHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const isHovered = hoveredIndex !== undefined ? hoveredIndex === index : internalHovered;

  const handleMouseEnter = () => {
    if (onHover) {
      onHover(index);
    } else {
      setInternalHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!onHover) {
      setInternalHovered(false);
    }
  };

  // Render dedicated interactive UI mockup based on project ID
  const renderMockup = () => {
    switch (id) {
      case "osteria":
        return <OsteriaBookingMockup isHovered={isHovered} />;
      case "komorebi":
        return <KomorebiCommerceMockup isHovered={isHovered} />;
      case "nordic":
        return <NordicEditorialMockup isHovered={isHovered} />;
      case "nexus":
        return <NexusClinicalMockup isHovered={isHovered} />;
      default:
        return <OsteriaBookingMockup isHovered={isHovered} />;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full w-full min-w-0"
    >
      {/* 1. Aceternity-Style Shared Continuous Hover Backdrop */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute -inset-1.5 z-0 block rounded-2xl bg-accent/8 dark:bg-accent/12 pointer-events-none"
            layoutId={shouldReduceMotion ? undefined : "hoverBackground"}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                layout: {
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: {
                  duration: 0.15,
                },
              },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>

      {/* 2. Main Project Card Surface */}
      <article
        className={cn(
          "relative z-10 flex h-full flex-col justify-between rounded-xl border p-4 sm:p-5 lg:p-6 transition-all duration-200 min-w-0",
          isHovered
            ? "border-accent/60 bg-surface-elevated/95 shadow-[0_8px_30px_rgba(196,114,68,0.12)]"
            : "border-border/80 bg-surface/85 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
        )}
      >
        <div className="flex flex-col flex-1 justify-between min-w-0">
          <div>
            {/* Top Meta Row: Number, Category, Ref ID, Live Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3 font-mono text-[10px]">
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-bold text-accent">{number}</span>
                <span className="text-border">•</span>
                <span className="font-semibold uppercase tracking-wider text-muted-foreground truncate">{category}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {refId && <span className="text-muted-foreground/60 hidden sm:inline">REF: {refId}</span>}
                {badge && (
                  <span className="inline-flex items-center gap-1 rounded bg-success/15 px-2 py-0.5 text-[9px] font-semibold text-success border border-success/30">
                    <span className="size-1 rounded-full bg-success animate-pulse inline-block" />
                    {badge}
                  </span>
                )}
              </div>
            </div>

            {/* Title & Industry / Location */}
            <div className="mt-3.5">
              <h3 className="text-lg font-bold tracking-normal text-foreground transition-colors duration-200 group-hover:text-accent break-words sm:text-xl">
                {title}
              </h3>
              {location && (
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                  {location}
                </p>
              )}
            </div>

            {/* Dedicated Miniature Interactive UI Canvas Preview */}
            <div className="my-4 w-full min-w-0">
              {renderMockup()}
            </div>

            {/* Engineering Narrative Description */}
            <p className="type-body-sm text-muted-foreground break-words">
              {description}
            </p>

            {/* Tech Stack Chips */}
            <div className="mt-4 flex flex-wrap items-center gap-1.5 font-mono text-[9px] text-muted-foreground">
              {stackPrimary && (
                <span className="rounded border border-border/70 bg-surface-elevated/80 px-2 py-0.5 font-medium text-foreground/90">
                  {stackPrimary}
                </span>
              )}
              {stackSecondary && (
                <span className="rounded border border-border/70 bg-surface-elevated/80 px-2 py-0.5">
                  {stackSecondary}
                </span>
              )}
            </div>
          </div>

          {/* Bottom Telemetry & Case Action Row */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-3.5 font-mono">
            <div className="min-w-0">
              {telemetryValue && (
                <div className="text-[12px] font-bold text-success flex items-center gap-1.5 truncate">
                  <span className="size-1.5 rounded-full bg-success inline-block shrink-0" />
                  <span>{telemetryValue}</span>
                </div>
              )}
              {telemetryLabel && (
                <div className="text-[10px] text-muted-foreground font-medium truncate">
                  {telemetryLabel}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="type-button inline-flex items-center gap-1.5 text-accent transition-transform duration-200 group-hover:translate-x-1 shrink-0"
            >
              <span>VIEW CASE STUDY</span>
              <IconArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
