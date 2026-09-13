"use client";

import * as React from "react";
import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export interface SolutionCardProps {
  index: number;
  activeIndex: number;
  hoveredIndex: number | null;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
  className?: string;
  paddingClassName?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

/**
 * SolutionCard
 * Implements a refined Aceternity-inspired card hover interaction tailored for SyntaxLab:
 * - Pointer-following radial spotlight illumination
 * - Pointer-following border highlight
 * - Shared spring backdrop when moving across cards (layoutId="solutionCardHover")
 * - Subtle content elevation with zero layout shift
 * - Touch-safe execution (no stuck hover on mobile/tablet)
 */
export function SolutionCard({
  index,
  activeIndex,
  hoveredIndex,
  onSelect,
  onHover,
  className,
  paddingClassName = "p-4 sm:p-5",
  children,
  ariaLabel,
}: SolutionCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isSelected = activeIndex === index;
  const isHovered = hoveredIndex === index;

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={ariaLabel}
      aria-pressed={isSelected}
      onClick={() => onSelect(index)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(index);
        }
      }}
      onMouseEnter={() => {
        onHover(index);
        onSelect(index);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        onHover(null);
      }}
      className={cn(
        "group relative rounded-xl transition-all duration-200 ease-out cursor-pointer select-none",
        className
      )}
    >
      {/* 1. Aceternity-Style Shared Spring Hover Backdrop */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute -inset-1.5 z-0 block rounded-2xl bg-accent/8 dark:bg-accent/12 pointer-events-none"
            layoutId="solutionCardHover"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.18, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.05, ease: "easeIn" },
            }}
          />
        )}
      </AnimatePresence>

      {/* 2. Main Card Surface */}
      <div
        className={cn(
          "relative z-10 h-full w-full overflow-hidden rounded-xl border transition-all duration-200 ease-out flex flex-col justify-between",
          paddingClassName,
          isSelected
            ? "border-accent bg-surface-elevated/95 shadow-[0_4px_24px_rgba(196,114,68,0.14)]"
            : "border-border/80 bg-surface/85 hover:border-accent/50 hover:bg-surface shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
        )}
      >
        {/* 3. Pointer-Tracking Radial Spotlight (Follows mouse smoothly) */}
        <motion.div
          className="pointer-events-none absolute -inset-px z-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                300px circle at ${mouseX}px ${mouseY}px,
                rgba(196, 114, 68, 0.12),
                transparent 80%
              )
            `,
          }}
        />

        {/* 4. Pointer-Tracking Border Highlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px z-0 rounded-xl border border-accent/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            maskImage: useMotionTemplate`
              radial-gradient(
                180px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
            WebkitMaskImage: useMotionTemplate`
              radial-gradient(
                180px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
          }}
        />

        {/* 5. Card Content Wrapper */}
        <div className="relative z-10 flex h-full flex-col justify-between pointer-events-none">
          {children}
        </div>
      </div>
    </div>
  );
}
