"use client";

import { cn } from "@/lib/utils";

interface AuroraAtmosphereProps {
  className?: string;
}

export function AuroraAtmosphere({ className }: AuroraAtmosphereProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none",
        className
      )}
    >
      {/* Atmospheric ambient glow layers */}
      {/* Layer 1: Primary diagonal sweep */}
      <div className="aurora-layer-primary absolute -inset-[20%] h-[140%] w-[140%] opacity-60 dark:opacity-75 sm:opacity-75 dark:sm:opacity-85 blur-[70px] sm:blur-[100px] lg:blur-[130px]" />

      {/* Layer 2: Counter-flowing ambient depth */}
      <div className="aurora-layer-secondary absolute -inset-[20%] h-[140%] w-[140%] opacity-45 dark:opacity-60 sm:opacity-60 dark:sm:opacity-75 blur-[80px] sm:blur-[110px] lg:blur-[140px]" />

      {/* Layer 3: Central warm breath (desktop & tablet) */}
      <div className="aurora-layer-ambient absolute -inset-[15%] hidden h-[130%] w-[130%] opacity-35 dark:opacity-50 sm:block blur-[90px] sm:blur-[120px] lg:blur-[150px]" />
    </div>
  );
}
