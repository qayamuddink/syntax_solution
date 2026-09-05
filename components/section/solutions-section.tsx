"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { IconArrowRight, IconCode } from "@/components/ui/icons";
import type { CapabilityGroup, Solution, TechnicalReadout } from "@/lib/types";

const solutionImages = [
  { img: "/images/osteria-riva-milano.png", tag: "SYS_FLAGSHIP_01", label: "SCALABLE SYSTEMS // FLAGSHIP WEBSITES" },
  { img: "/images/komorebi-living.png", tag: "SYS_COMMERCE_02", label: "SUB-1S CHECKOUT // E-COMMERCE ARCHITECTURE" },
  { img: "/images/nordic-interior.png", tag: "SYS_DASHBOARD_03", label: "INTERNAL CRMS // CUSTOM DASHBOARDS" },
  { img: "/images/nexus-clinic-suite.png", tag: "SYS_CAMPAIGN_04", label: "HIGH-IMPACT CAMPAIGN SYSTEMS" },
  { img: "/images/osteria-riva-milano.png", tag: "SYS_LEGACY_05", label: "LEGACY MODERNIZATION & CODE REFITS" },
  { img: "/images/komorebi-living.png", tag: "SYS_SLA_06", label: "DEDICATED SUPPORT & ENGINEERING SLA" },
];

export function SolutionsSection({
  capabilities,
  solutions,
}: {
  capabilities: CapabilityGroup[];
  solutions: Solution[];
  telemetry?: TechnicalReadout[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeVisual = solutionImages[activeIndex] || solutionImages[0];

  return (
    <section className="border-b border-border bg-background" id="solutions">
      <Container className="px-6 py-20 md:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Zone — 4 cols */}
          <div className="flex flex-col justify-between lg:col-span-4 lg:pr-4">
            <div>
              <TechnicalLabel className="text-accent">{"// WHAT WE BUILD"}</TechnicalLabel>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">Core Solutions</h2>
              <p className="mt-4 text-xs leading-6 text-muted-foreground">
                Custom, fast, and responsive digital systems configured to solve real operational bottlenecks for local businesses, boutiques, and specialized practices.
              </p>
              <div className="mt-6">
                <Link href="#contact" className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent transition-opacity hover:opacity-80">
                  <span>DISCUSS BESPOKE SPECIFICATIONS</span>
                  <IconArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Our Technology Stack Card */}
            <div className="mt-12 border border-border bg-surface p-6 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.35)] rounded-lg">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <IconCode className="size-4 text-accent" />
                  <TechnicalLabel className="text-foreground">OUR TECHNOLOGY STACK</TechnicalLabel>
                </div>
                <TechnicalLabel className="text-muted-foreground">PRODUCTION_READY</TechnicalLabel>
              </div>
              <div className="mt-4 space-y-3 font-mono text-[11px]">
                {capabilities.map((cap) => (
                  <div className="flex justify-between gap-4" key={cap.id}>
                    <span className="text-muted-foreground uppercase">{cap.label}:</span>
                    <span className={cap.id === "accessibility" ? "text-success font-medium" : "text-foreground font-medium"}>
                      {cap.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Zone — 5 cols */}
          <div className="lg:col-span-5 lg:px-2">
            <div className="divide-y divide-border border-y border-border lg:border-t-0">
              {solutions.map((solution, idx) => (
                <article
                  key={solution.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`group border-b border-border py-6 transition-all duration-300 cursor-pointer px-3 rounded-lg ${
                    activeIndex === idx ? "bg-white/[0.03] border-accent/40 shadow-sm" : "hover:bg-white/[0.015]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-xs font-semibold">
                      <span className="text-accent">{solution.number} /</span>
                      <span className="text-foreground uppercase tracking-wider">{solution.title}</span>
                    </div>
                    <IconArrowRight className={`size-3.5 text-accent transition-all duration-300 ${
                      activeIndex === idx ? "translate-x-1 opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                    }`} />
                  </div>
                  <p className="mt-3 text-xs leading-6 text-muted-foreground">{solution.description}</p>
                  <div className="mt-4">
                    <TechnicalLabel className="text-accent">{solution.spec}</TechnicalLabel>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Zone — 3 cols (Visual Image Preview Panel & Performance SLA) */}
          <div className="lg:col-span-3 lg:pl-2">
            <div className="sticky top-28 space-y-6">
              {/* Visual Card Image Panel */}
              <div className="group relative overflow-hidden border border-border bg-surface shadow-[0_12px_40px_rgba(0,0,0,0.35)] rounded-lg">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={activeVisual.img}
                    alt={activeVisual.label}
                    fill
                    quality={90}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  <div className="absolute top-3 left-3 bg-surface/90 px-2.5 py-1 border border-border font-mono text-[9px] text-accent tracking-wider rounded-md">
                    {activeVisual.tag}
                  </div>
                </div>

                <div className="p-4 border-t border-border">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent font-semibold">
                    {activeVisual.label}
                  </p>
                  <p className="mt-1 font-mono text-[9px] text-muted-foreground uppercase">
                    SCALABLE SYSTEMS FOR REAL BUSINESS
                  </p>
                </div>
              </div>

              {/* System Performance Sidebar Widget */}
              <div className="border border-border bg-surface p-5 backdrop-blur-sm rounded-lg shadow-sm">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <TechnicalLabel className="text-foreground">SYSTEM PERFORMANCE</TechnicalLabel>
                  <span className="font-mono text-[10px] font-semibold text-success flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-success animate-pulse" />
                    ONLINE
                  </span>
                </div>

                <div className="mt-4 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="text-muted-foreground text-[10px]">NETWORK LATENCY</span>
                    <span className="font-bold text-foreground">4.2 ms</span>
                  </div>
                  <div className="flex justify-between items-baseline border-t border-border/40 pt-2">
                    <span className="text-muted-foreground text-[10px]">CORE WEB VITALS</span>
                    <span className="font-bold text-success">100 / 100 PASS</span>
                  </div>
                  <div className="flex justify-between items-baseline border-t border-border/40 pt-2">
                    <span className="text-muted-foreground text-[10px]">EDGE SLA</span>
                    <span className="font-semibold text-foreground">99.99% Uptime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


