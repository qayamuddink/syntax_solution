"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/types";
import { IconArrowRight } from "@/components/ui/icons";
import {
  OsteriaBookingMockup,
  KomorebiCommerceMockup,
  NordicEditorialMockup,
  NexusClinicalMockup,
} from "@/components/ui/project-mockups";

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
}: Project) {
  const [isHovered, setIsHovered] = useState(false);

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
    <motion.article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-surface/85 p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:border-accent/60 hover:bg-surface-elevated/95 hover:shadow-[0_8px_30px_rgba(196,114,68,0.12)] min-w-0 h-full"
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
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent break-words">
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
          <p className="text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-normal break-words">
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
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent transition-transform duration-200 group-hover:translate-x-1 shrink-0"
          >
            <span>VIEW CASE STUDY</span>
            <IconArrowRight className="size-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}


