"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import {
  IconArrowRight,
  IconCheck,
  IconMonitor,
  IconShoppingCart,
  IconLayoutDashboard,
  IconCrosshair,
  IconLayers,
  IconShieldCheck,
} from "@/components/ui/icons";
import {
  LaptopBrowserVisual,
  CommerceCheckoutVisual,
  DashboardAnalyticsVisual,
  CampaignConversionVisual,
  ModernizationLayersVisual,
  SupportShieldVisual,
} from "@/components/ui/perspective-visuals";
import { SectionReveal } from "@/components/animation/motion-primitives";
import type { CapabilityGroup, Solution } from "@/lib/types";

interface SolutionOverviewMeta {
  index: string;
  category: string;
  spec: string;
  benefits: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

const solutionOverviewData: Record<string, SolutionOverviewMeta> = {
  "business-websites": {
    index: "01 / 06",
    category: "BUSINESS WEBSITES",
    spec: "NEXT.JS SSR • SUB-SECOND RENDERING",
    benefits: [
      "Custom Design Architecture",
      "Mobile & Tablet Optimized",
      "Technical SEO & Metadata",
      "Core Web Vitals 99+",
    ],
    metrics: [
      { label: "PERFORMANCE", value: "99+ LIGHTHOUSE SCORE" },
      { label: "LOAD TIME", value: "< 0.8s AVERAGE" },
      { label: "RESPONSIVE", value: "MOBILE + TABLET READY" },
    ],
  },
  "e-commerce": {
    index: "02 / 06",
    category: "E-COMMERCE",
    spec: "SUB-1S STRIPE & SHOPIFY CHECKOUT",
    benefits: [
      "Sub-1s Instant Checkout",
      "Headless Stripe & Shopify",
      "Automated Inventory Sync",
      "Zero Cart Drop-Off",
    ],
    metrics: [
      { label: "CHECKOUT SPEED", value: "SUB-1S TRANSACTION" },
      { label: "CONVERSION", value: "ZERO DROP-OFF FUNNEL" },
      { label: "PLATFORM", value: "HEADLESS STRIPE & SHOPIFY" },
    ],
  },
  "business-tools": {
    index: "03 / 06",
    category: "BUSINESS TOOLS",
    spec: "INTERNAL PORTALS • RELATIONAL PIPELINES",
    benefits: [
      "Role-Based Access Control",
      "Database & API Pipelines",
      "Secure Internal Portals",
      "Automated Operational Flows",
    ],
    metrics: [
      { label: "QUERY LATENCY", value: "< 50ms P95 RESPONSE" },
      { label: "SECURITY", value: "ENCRYPTED RBAC VAULT" },
      { label: "PIPELINES", value: "AUTOMATED EVENT SYNC" },
    ],
  },
  "marketing": {
    index: "04 / 06",
    category: "LANDING PAGES",
    spec: "HIGH CONVERSION • SERVER TELEMETRY",
    benefits: [
      "A/B Testing Infrastructure",
      "Sub-Second Asset Loading",
      "Conversion-Optimized Forms",
      "First-Party Event Analytics",
    ],
    metrics: [
      { label: "FIRST PAINT", value: "< 400ms HERO ASSETS" },
      { label: "ATTRIBUTION", value: "SERVER-SIDE TELEMETRY" },
      { label: "EXPERIMENTS", value: "INSTANT VARIANT ROUTING" },
    ],
  },
  "modernization": {
    index: "05 / 06",
    category: "MODERNIZATION",
    spec: "ZERO-DOWNTIME ROLLOUT • CLEAN REFACTOR",
    benefits: [
      "Zero-Downtime Migration",
      "Clean Modular Architecture",
      "Security Hardening & Audits",
      "Complete Source Ownership",
    ],
    metrics: [
      { label: "DOWNTIME", value: "ZERO-DOWNTIME CUTOVER" },
      { label: "TECH DEBT", value: "LEGACY CODE ELIMINATION" },
      { label: "OWNERSHIP", value: "100% UNRESTRICTED IP" },
    ],
  },
  "support": {
    index: "06 / 06",
    category: "SUPPORT & RELIABILITY",
    spec: "SLA GUARANTEE • DIRECT ESCALATION",
    benefits: [
      "99.9% Uptime Guarantee",
      "Proactive Security Patches",
      "Direct Engineer Escalation",
      "Automated Health Checks",
    ],
    metrics: [
      { label: "UPTIME SLA", value: "99.9% CONTRACTUAL" },
      { label: "ESCALATION", value: "DIRECT CORE LEAD ACCESS" },
      { label: "MONITORING", value: "24/7 CONTINUOUS PING" },
    ],
  },
};

export function SolutionsSection({
  capabilities,
  solutions,
}: {
  capabilities?: CapabilityGroup[];
  solutions: Solution[];
  telemetry?: unknown;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeSolution = solutions[activeIndex] ?? solutions[0];
  const overviewMeta =
    solutionOverviewData[activeSolution?.id ?? "business-websites"] ??
    solutionOverviewData["business-websites"];

  const card1 = solutions[0];
  const card2 = solutions[1];
  const card3 = solutions[2];
  const card4 = solutions[3];
  const card5 = solutions[4];
  const card6 = solutions[5];

  return (
    <section className="bg-background py-8 md:py-10 scroll-mt-6 md:scroll-mt-8" id="solutions">
      <Container className="px-6 md:px-12 lg:px-16 max-w-[1400px]">
        <SectionReveal>
          <div className="flex flex-col lg:flex-row items-stretch gap-6 xl:gap-7">
            {/* ---------------------------------------------------------------- */}
            {/* LEFT COLUMN — Intro, Headline, CTA & Architecture Standards (~25%) */}
            {/* ---------------------------------------------------------------- */}
            <div className="w-full lg:w-[280px] xl:w-[310px] shrink-0 flex flex-col justify-between">
              <div>
                {/* Eyebrow with copper bar */}
                <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-accent tracking-[0.14em]">
                  <span className="w-3.5 h-[1.5px] bg-accent inline-block" />
                  <span>WHAT WE BUILD</span>
                </div>

                {/* 3-line Display Headline */}
                <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold leading-[1.06] tracking-tight text-foreground">
                  Digital Solutions<br />
                  for Growing<br />
                  Businesses
                </h2>

                {/* Supporting Description */}
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground font-normal">
                  Engineered web systems and custom software designed for commercial clarity, high conversion, and operational autonomy.
                </p>

                {/* Technical Metadata Row */}
                <div className="mt-4 flex items-center gap-2 font-mono text-[9.5px] tracking-[0.12em] text-muted-foreground border-y border-border/70 py-2">
                  <span className="size-1.5 rounded-full bg-accent inline-block shrink-0" />
                  <span>06 PRACTICES</span>
                  <span className="text-border">•</span>
                  <span>FIXED SCOPE</span>
                  <span className="text-border">•</span>
                  <span>DIRECT ACCESS</span>
                </div>

                {/* CTA Button */}
                <div className="mt-4">
                  <Button
                    href="/contact"
                    label="REQUEST A PROPOSAL →"
                    variant="primary"
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>

              {/* Architecture Standards Technical Readout Card */}
              {capabilities && capabilities.length > 0 && (
                <div className="mt-6 rounded-xl border border-border/80 bg-surface/80 p-3.5 font-mono text-xs shadow-xs">
                  <div className="flex items-center justify-between border-b border-border/60 pb-2 text-[10px] uppercase tracking-[0.12em]">
                    <span className="font-semibold text-foreground">ARCHITECTURE STANDARDS</span>
                    <span className="text-accent text-[9px] font-semibold">ENTERPRISE</span>
                  </div>
                  <div className="mt-2.5 space-y-1.5 text-[10.5px]">
                    {capabilities.map((cap) => (
                      <div key={cap.id} className="flex items-center justify-between">
                        <span className="text-muted-foreground">{cap.label}</span>
                        <span className="font-semibold text-foreground/90">{cap.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* CENTER / MAIN — Bento Grid of Solutions Cards (~50%)             */}
            {/* ---------------------------------------------------------------- */}
            <div className="flex-1 min-w-0 flex flex-col gap-3">
              {/* ROW 1: Primary Featured Card (Card 01 - Business Websites) */}
              {card1 && (
                <article
                  tabIndex={0}
                  role="button"
                  aria-pressed={activeIndex === 0}
                  onMouseEnter={() => {
                    setActiveIndex(0);
                    setHoveredIndex(0);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveIndex(0)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIndex(0);
                    }
                  }}
                  className={`group relative rounded-xl border p-4 sm:p-5 transition-all duration-200 ease-out cursor-pointer flex flex-col justify-between min-h-[205px] sm:min-h-[220px] ${
                    activeIndex === 0
                      ? "border-accent bg-surface-elevated/95 shadow-[0_4px_24px_rgba(196,114,68,0.12)]"
                      : "border-border/80 bg-surface/80 hover:border-accent/50 hover:bg-surface"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                    <div className="max-w-md flex-1 min-w-0">
                      {/* Pill Badge with Icon */}
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded border border-accent/40 bg-accent/15 flex items-center justify-center text-accent">
                          <IconMonitor className="size-3.5" />
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-semibold">
                          01 — BUSINESS WEBSITES
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className={`mt-2 text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${
                          activeIndex === 0 ? "text-accent" : "text-foreground group-hover:text-accent"
                        }`}
                      >
                        {card1.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground font-normal">
                        {card1.description}
                      </p>

                      {/* Technical Feature Tags */}
                      <div className="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[9px] text-muted-foreground">
                        <span className="rounded border border-border/60 bg-surface-elevated/60 px-2 py-0.5">NEXT.JS SSR</span>
                        <span className="rounded border border-border/60 bg-surface-elevated/60 px-2 py-0.5">SUB-1S SPEED</span>
                        <span className="rounded border border-border/60 bg-surface-elevated/60 px-2 py-0.5">100% OWNERSHIP</span>
                      </div>
                    </div>

                    {/* Dedicated Showcase Stage for Hero Laptop */}
                    <div className="w-full md:w-[300px] lg:w-[340px] xl:w-[360px] shrink-0 flex items-center justify-center pt-1 md:pt-0">
                      <LaptopBrowserVisual
                        isHovered={hoveredIndex === 0}
                        className="w-full max-w-[360px] h-auto"
                      />
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="mt-3.5 pt-2.5 border-t border-border/40 flex items-center justify-between">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground transition-all duration-200 group-hover:border-accent group-hover:text-accent group-hover:translate-x-0.5">
                      <IconArrowRight className="size-3" />
                    </div>
                    <span className="font-mono text-[9px] text-muted-foreground tracking-wider uppercase">
                      DESIGN • DEVELOP • GROW
                    </span>
                  </div>
                </article>
              )}

              {/* ROW 2: Two Secondary Bento Cells (Cards 02 & 03) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* CARD 02: E-Commerce */}
                {card2 && (
                  <article
                    tabIndex={0}
                    role="button"
                    aria-pressed={activeIndex === 1}
                    onMouseEnter={() => {
                      setActiveIndex(1);
                      setHoveredIndex(1);
                    }}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(1)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveIndex(1);
                      }
                    }}
                    className={`group relative rounded-xl border p-4 transition-all duration-200 ease-out cursor-pointer flex flex-col justify-between min-h-[160px] ${
                      activeIndex === 1
                        ? "border-accent bg-surface-elevated/95 shadow-[0_4px_24px_rgba(196,114,68,0.12)]"
                        : "border-border/80 bg-surface/80 hover:border-accent/50 hover:bg-surface"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="size-6 rounded border border-accent/40 bg-accent/15 flex items-center justify-center text-accent">
                            <IconShoppingCart className="size-3.5" />
                          </div>
                          <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">
                            02 — E-COMMERCE
                          </span>
                        </div>
                      </div>

                      <h3
                        className={`mt-2 text-sm sm:text-[15px] font-bold tracking-tight transition-colors duration-200 ${
                          activeIndex === 1 ? "text-accent" : "text-foreground group-hover:text-accent"
                        }`}
                      >
                        {card2.title}
                      </h3>

                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground font-normal">
                        {card2.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-1 flex items-end justify-between">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground transition-all duration-200 group-hover:border-accent group-hover:text-accent group-hover:translate-x-0.5">
                        <IconArrowRight className="size-3" />
                      </div>
                      <CommerceCheckoutVisual
                        isHovered={hoveredIndex === 1}
                        className="h-[52px] w-[88px] sm:h-[60px] sm:w-[102px] flex shrink-0"
                      />
                    </div>
                  </article>
                )}

                {/* CARD 03: Business Tools */}
                {card3 && (
                  <article
                    tabIndex={0}
                    role="button"
                    aria-pressed={activeIndex === 2}
                    onMouseEnter={() => {
                      setActiveIndex(2);
                      setHoveredIndex(2);
                    }}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(2)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveIndex(2);
                      }
                    }}
                    className={`group relative rounded-xl border p-4 transition-all duration-200 ease-out cursor-pointer flex flex-col justify-between min-h-[160px] ${
                      activeIndex === 2
                        ? "border-accent bg-surface-elevated/95 shadow-[0_4px_24px_rgba(196,114,68,0.12)]"
                        : "border-border/80 bg-surface/80 hover:border-accent/50 hover:bg-surface"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="size-6 rounded border border-accent/40 bg-accent/15 flex items-center justify-center text-accent">
                            <IconLayoutDashboard className="size-3.5" />
                          </div>
                          <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">
                            03 — BUSINESS TOOLS
                          </span>
                        </div>
                      </div>

                      <h3
                        className={`mt-2 text-sm sm:text-[15px] font-bold tracking-tight transition-colors duration-200 ${
                          activeIndex === 2 ? "text-accent" : "text-foreground group-hover:text-accent"
                        }`}
                      >
                        {card3.title}
                      </h3>

                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground font-normal">
                        {card3.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-1 flex items-end justify-between">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground transition-all duration-200 group-hover:border-accent group-hover:text-accent group-hover:translate-x-0.5">
                        <IconArrowRight className="size-3" />
                      </div>
                      <DashboardAnalyticsVisual
                        isHovered={hoveredIndex === 2}
                        className="h-[50px] w-[85px] sm:h-[58px] sm:w-[98px] flex shrink-0"
                      />
                    </div>
                  </article>
                )}
              </div>

              {/* ROW 3: Three Supporting Bento Cells (Cards 04, 05, 06) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* CARD 04: Landing Pages */}
                {card4 && (
                  <article
                    tabIndex={0}
                    role="button"
                    aria-pressed={activeIndex === 3}
                    onMouseEnter={() => {
                      setActiveIndex(3);
                      setHoveredIndex(3);
                    }}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(3)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveIndex(3);
                      }
                    }}
                    className={`group relative rounded-xl border p-3.5 transition-all duration-200 ease-out cursor-pointer flex flex-col justify-between min-h-[145px] ${
                      activeIndex === 3
                        ? "border-accent bg-surface-elevated/95 shadow-[0_4px_24px_rgba(196,114,68,0.12)]"
                        : "border-border/80 bg-surface/80 hover:border-accent/50 hover:bg-surface"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <div className="size-5 rounded border border-accent/40 bg-accent/15 flex items-center justify-center text-accent">
                          <IconCrosshair className="size-3" />
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">
                          04 — CAMPAIGNS
                        </span>
                      </div>
                      <h3
                        className={`mt-2 text-xs sm:text-[13.5px] font-bold tracking-tight transition-colors duration-200 ${
                          activeIndex === 3 ? "text-accent" : "text-foreground group-hover:text-accent"
                        }`}
                      >
                        {card4.title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground font-normal line-clamp-2">
                        {card4.description}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-1 flex items-end justify-between">
                      <div className="flex size-5.5 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground transition-all duration-200 group-hover:border-accent group-hover:text-accent">
                        <IconArrowRight className="size-2.5" />
                      </div>
                      <CampaignConversionVisual
                        isHovered={hoveredIndex === 3}
                        className="h-[32px] w-[50px] sm:h-[36px] sm:w-[58px] flex shrink-0"
                      />
                    </div>
                  </article>
                )}

                {/* CARD 05: Modernization */}
                {card5 && (
                  <article
                    tabIndex={0}
                    role="button"
                    aria-pressed={activeIndex === 4}
                    onMouseEnter={() => {
                      setActiveIndex(4);
                      setHoveredIndex(4);
                    }}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(4)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveIndex(4);
                      }
                    }}
                    className={`group relative rounded-xl border p-3.5 transition-all duration-200 ease-out cursor-pointer flex flex-col justify-between min-h-[145px] ${
                      activeIndex === 4
                        ? "border-accent bg-surface-elevated/95 shadow-[0_4px_24px_rgba(196,114,68,0.12)]"
                        : "border-border/80 bg-surface/80 hover:border-accent/50 hover:bg-surface"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <div className="size-5 rounded border border-accent/40 bg-accent/15 flex items-center justify-center text-accent">
                          <IconLayers className="size-3" />
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">
                          05 — MODERNIZATION
                        </span>
                      </div>
                      <h3
                        className={`mt-2 text-xs sm:text-[13.5px] font-bold tracking-tight transition-colors duration-200 ${
                          activeIndex === 4 ? "text-accent" : "text-foreground group-hover:text-accent"
                        }`}
                      >
                        {card5.title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground font-normal line-clamp-2">
                        {card5.description}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-1 flex items-end justify-between">
                      <div className="flex size-5.5 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground transition-all duration-200 group-hover:border-accent group-hover:text-accent">
                        <IconArrowRight className="size-2.5" />
                      </div>
                      <ModernizationLayersVisual
                        isHovered={hoveredIndex === 4}
                        className="h-[32px] w-[50px] sm:h-[36px] sm:w-[58px] flex shrink-0"
                      />
                    </div>
                  </article>
                )}

                {/* CARD 06: Support & Reliability */}
                {card6 && (
                  <article
                    tabIndex={0}
                    role="button"
                    aria-pressed={activeIndex === 5}
                    onMouseEnter={() => {
                      setActiveIndex(5);
                      setHoveredIndex(5);
                    }}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(5)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveIndex(5);
                      }
                    }}
                    className={`group relative rounded-xl border p-3.5 transition-all duration-200 ease-out cursor-pointer flex flex-col justify-between min-h-[145px] ${
                      activeIndex === 5
                        ? "border-accent bg-surface-elevated/95 shadow-[0_4px_24px_rgba(196,114,68,0.12)]"
                        : "border-border/80 bg-surface/80 hover:border-accent/50 hover:bg-surface"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <div className="size-5 rounded border border-accent/40 bg-accent/15 flex items-center justify-center text-accent">
                          <IconShieldCheck className="size-3" />
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">
                          06 — SUPPORT & SLA
                        </span>
                      </div>
                      <h3
                        className={`mt-2 text-xs sm:text-[13.5px] font-bold tracking-tight transition-colors duration-200 ${
                          activeIndex === 5 ? "text-accent" : "text-foreground group-hover:text-accent"
                        }`}
                      >
                        {card6.title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground font-normal line-clamp-2">
                        {card6.description}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-1 flex items-end justify-between">
                      <div className="flex size-5.5 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground transition-all duration-200 group-hover:border-accent group-hover:text-accent">
                        <IconArrowRight className="size-2.5" />
                      </div>
                      <SupportShieldVisual
                        isHovered={hoveredIndex === 5}
                        className="h-[32px] w-[50px] sm:h-[36px] sm:w-[58px] flex shrink-0"
                      />
                    </div>
                  </article>
                )}
              </div>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* RIGHT COLUMN — Solution Overview & Commitment Panel (~25%)       */}
            {/* ---------------------------------------------------------------- */}
            <div className="w-full lg:w-[280px] xl:w-[310px] shrink-0 flex flex-col justify-between gap-3.5">
              {/* DYNAMIC DARK OVERVIEW CARD */}
              <div className="relative overflow-hidden rounded-xl border border-[#1e222b] bg-[#0c0e12] p-4 sm:p-5 text-white shadow-xl flex flex-col justify-between flex-1 min-h-[420px]">
                {/* Background subtle copper geometric ambient glow */}
                <div className="pointer-events-none absolute -right-8 -bottom-8 size-36 rounded-full bg-accent/10 blur-2xl" />
                <svg
                  className="pointer-events-none absolute inset-0 size-full opacity-20"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="160" cy="160" r="100" stroke="#c47244" strokeWidth="0.75" strokeDasharray="3 3" />
                  <circle cx="160" cy="160" r="60" stroke="#c47244" strokeWidth="0.75" />
                  <circle cx="160" cy="160" r="25" stroke="#c47244" strokeWidth="0.75" strokeDasharray="2 2" />
                </svg>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={overviewMeta.index}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 flex flex-col justify-between h-full"
                  >
                    {/* TOP TIER: Header + Service Title + Spec + Deliverables Checklist */}
                    <div>
                      {/* Panel Top Header */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 font-mono text-[9px] uppercase tracking-[0.14em]">
                        <span className="text-white/60 font-medium">SOLUTION OVERVIEW</span>
                        <span className="text-accent font-semibold">
                          {overviewMeta.index}
                        </span>
                      </div>

                      {/* Selected Service Title */}
                      <h4 className="mt-3.5 text-base sm:text-lg font-bold tracking-tight text-white leading-snug">
                        {overviewMeta.category}
                      </h4>

                      {/* Technical Spec Tag */}
                      <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-accent/90">
                        {overviewMeta.spec}
                      </div>

                      {/* Deliverables Checklist */}
                      <ul className="mt-3.5 space-y-2 font-mono text-xs">
                        {overviewMeta.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-2 text-white/90">
                            <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full bg-accent text-[#08090a]">
                              <IconCheck className="size-2.5 stroke-[3]" />
                            </span>
                            <span className="text-[11px] font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* MIDDLE TIER: Technical Performance Metrics Rows */}
                    <div className="my-3.5 border-t border-white/10 pt-3.5">
                      <div className="space-y-3 font-mono">
                        {overviewMeta.metrics.map((m, idx) => (
                          <div key={idx} className="flex flex-col gap-0.5">
                            <span className="text-[8.5px] uppercase tracking-[0.14em] text-white/45">
                              {m.label}
                            </span>
                            <span className="text-[10.5px] font-semibold text-white/95 tracking-wide">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BOTTOM TIER: Outcome Statement & Verified Status */}
                    <div className="border-t border-white/10 pt-3 flex items-center justify-between font-mono text-[9px] font-bold tracking-[0.12em] text-white/60 uppercase">
                      <div>
                        BUILT FOR REAL<br />
                        BUSINESS OUTCOMES.
                      </div>
                      <div className="flex items-center gap-1.5 text-accent text-[8.5px] font-semibold">
                        <span className="size-1.5 rounded-full bg-accent animate-pulse inline-block" />
                        <span>VERIFIED</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* SYNTAXLAB COMMITMENT CARD */}
              <div className="rounded-xl border border-border/80 bg-surface/80 p-3 font-mono text-xs shadow-xs">
                <div className="flex items-center gap-1.5 text-[9px] font-bold text-accent uppercase tracking-wider">
                  <span className="size-1.5 rounded-full bg-accent inline-block" />
                  <span>SYNTAXLAB COMMITMENT</span>
                </div>
                <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground font-normal">
                  Every system is engineered from clean code — eliminating recurring license dependencies and plugin vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
      <Container className="px-6 md:px-16 mt-10 md:mt-12">
        <Divider />
      </Container>
    </section>
  );
}

