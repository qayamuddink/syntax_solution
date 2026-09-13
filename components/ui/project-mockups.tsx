"use client";

import React from "react";
import { motion } from "motion/react";

interface MockupProps {
  className?: string;
  isHovered?: boolean;
}

/**
 * Osteria Riva Milano: Custom Table Reservation Engine & Floor Plan UI Mockup
 */
export function OsteriaBookingMockup({ className = "", isHovered = false }: MockupProps) {
  return (
    <div className={`relative w-full min-h-[140px] h-auto overflow-hidden rounded-lg bg-[#0d0f13] border border-[#252830] p-3 sm:p-3.5 text-white font-mono select-none flex flex-col justify-between gap-2.5 ${className}`}>
      {/* Background ambient warm dining glow */}
      <div className="pointer-events-none absolute -right-6 -bottom-6 size-24 rounded-full bg-accent/15 blur-xl" />

      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[9px] uppercase tracking-wider text-white/60">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="size-1.5 rounded-full bg-accent inline-block shrink-0" />
          <span className="text-white/90 font-semibold truncate">OSTERIA RIVA • TABLE ENGINE</span>
        </div>
        <span className="text-accent text-[8.5px] font-bold shrink-0 ml-2">DIRECT BOOKING</span>
      </div>

      {/* Interactive Floor Plan Nodes */}
      <div className="grid grid-cols-3 gap-2">
        <motion.div
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.25 }}
          className="rounded border border-accent/40 bg-accent/10 p-2 text-center min-w-0"
        >
          <div className="text-[8px] text-accent/80 font-bold truncate">TABLE 04</div>
          <div className="text-[10px] text-white font-semibold mt-0.5 truncate">2 GUESTS</div>
          <div className="text-[7.5px] text-success font-medium flex items-center justify-center gap-1 mt-0.5">
            <span className="size-1 rounded-full bg-success inline-block shrink-0" />
            <span className="truncate">CONFIRMED</span>
          </div>
        </motion.div>

        <div className="rounded border border-white/10 bg-white/5 p-2 text-center min-w-0">
          <div className="text-[8px] text-white/50 font-bold truncate">TABLE 06</div>
          <div className="text-[10px] text-white/80 font-semibold mt-0.5 truncate">4 GUESTS</div>
          <div className="text-[7.5px] text-accent font-medium mt-0.5 truncate">20:30 HOLD</div>
        </div>

        <div className="rounded border border-white/10 bg-white/5 p-2 text-center min-w-0">
          <div className="text-[8px] text-white/50 font-bold truncate">PATIO 02</div>
          <div className="text-[10px] text-white/80 font-semibold mt-0.5 truncate">2 GUESTS</div>
          <div className="text-[7.5px] text-white/40 font-medium mt-0.5 truncate">AVAILABLE</div>
        </div>
      </div>

      {/* Bottom Live SMS Notification Bar */}
      <div className="flex flex-wrap items-center justify-between gap-1 border-t border-white/10 pt-2 text-[8.5px] text-white/70">
        <span className="flex items-center gap-1 truncate">
          <span className="text-success">✓</span> SMS Confirmed (0 commission)
        </span>
        <span className="text-accent font-bold shrink-0">&lt; 0.5s LATENCY</span>
      </div>
    </div>
  );
}

/**
 * Komorebi Living: Headless Storefront & Instant Checkout UI Mockup
 */
export function KomorebiCommerceMockup({ className = "", isHovered = false }: MockupProps) {
  return (
    <div className={`relative w-full min-h-[140px] h-auto overflow-hidden rounded-lg bg-[#0d0f13] border border-[#252830] p-3 sm:p-3.5 text-white font-mono select-none flex flex-col justify-between gap-2.5 ${className}`}>
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -left-6 -bottom-6 size-24 rounded-full bg-accent/15 blur-xl" />

      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[9px] uppercase tracking-wider text-white/60">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="size-1.5 rounded-full bg-accent inline-block shrink-0" />
          <span className="text-white/90 font-semibold truncate">KOMOREBI • HEADLESS SHOP</span>
        </div>
        <span className="text-success text-[8.5px] font-bold shrink-0 ml-2">SUB-1S CHECKOUT</span>
      </div>

      {/* Product Card & Cart Interface */}
      <div className="grid grid-cols-2 gap-2.5 items-center">
        <div className="rounded border border-white/10 bg-white/5 p-2 flex items-center gap-2 min-w-0">
          <div className="size-8 shrink-0 rounded bg-[#1c2028] border border-white/10 flex items-center justify-center text-accent text-xs">
            壺
          </div>
          <div className="min-w-0">
            <div className="text-[8.5px] font-bold text-white leading-tight truncate">CERAMIC VASE</div>
            <div className="text-[8px] text-accent mt-0.5 truncate">€ 140 • IN STOCK</div>
          </div>
        </div>

        <motion.div
          animate={{ y: isHovered ? -2 : 0 }}
          transition={{ duration: 0.25 }}
          className="rounded border border-accent/40 bg-accent/10 p-2 text-right min-w-0"
        >
          <div className="text-[8px] text-accent/80 font-bold uppercase truncate">STRIPE INSTANT</div>
          <div className="text-[9.5px] font-bold text-white mt-0.5 truncate">1-CLICK BUY</div>
          <div className="text-[7.5px] text-success font-medium truncate">0% CART DROP</div>
        </motion.div>
      </div>

      {/* Bottom Facet Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-1 border-t border-white/10 pt-2 text-[8px] text-white/60">
        <div className="flex gap-1">
          <span className="px-1.5 py-0.5 rounded bg-white/10 text-white/90">ALL</span>
          <span className="px-1.5 py-0.5 rounded bg-white/5">CERAMICS</span>
          <span className="px-1.5 py-0.5 rounded bg-white/5">LIGHTING</span>
        </div>
        <span className="text-accent font-semibold shrink-0">SYNCED INVENTORY</span>
      </div>
    </div>
  );
}

/**
 * Nordic Interior: High-Resolution Spatial Editorial Showcase Mockup
 */
export function NordicEditorialMockup({ className = "", isHovered = false }: MockupProps) {
  return (
    <div className={`relative w-full min-h-[140px] h-auto overflow-hidden rounded-lg bg-[#0d0f13] border border-[#252830] p-3 sm:p-3.5 text-white font-mono select-none flex flex-col justify-between gap-2.5 ${className}`}>
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-1/4 -top-6 size-24 rounded-full bg-accent/10 blur-xl" />

      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[9px] uppercase tracking-wider text-white/60">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="size-1.5 rounded-full bg-accent inline-block shrink-0" />
          <span className="text-white/90 font-semibold truncate">NORDIC • SPATIAL SHOWCASE</span>
        </div>
        <span className="text-accent text-[8.5px] font-bold shrink-0 ml-2">100/100 PERF</span>
      </div>

      {/* Spatial Gallery Frame */}
      <motion.div
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ duration: 0.25 }}
        className="rounded border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-2.5 flex items-center justify-between gap-2 min-w-0"
      >
        <div className="min-w-0">
          <div className="text-[7.5px] tracking-[0.14em] text-accent uppercase font-bold truncate">EDITORIAL PORTFOLIO</div>
          <div className="text-[11px] font-bold text-white mt-0.5 tracking-tight truncate">COPENHAGEN RESIDENCE</div>
          <div className="text-[8px] text-white/60 mt-0.5 truncate">AVIF / WEBP • ZERO LAYOUT SHIFT</div>
        </div>
        <div className="size-8 shrink-0 rounded border border-accent/40 bg-accent/15 flex items-center justify-center text-accent text-[10px] font-bold">
          HD
        </div>
      </motion.div>

      {/* Bottom Pipeline Spec */}
      <div className="flex flex-wrap items-center justify-between gap-1 border-t border-white/10 pt-2 text-[8.5px] text-white/60">
        <span className="text-white/80 truncate">RESPONSIVE IMAGE PIPELINE</span>
        <span className="text-success font-semibold shrink-0">INSTANT SSR LOAD</span>
      </div>
    </div>
  );
}

/**
 * Nexus Clinic Suite: Clinical Patient EHR & Encryption Vault Mockup
 */
export function NexusClinicalMockup({ className = "", isHovered = false }: MockupProps) {
  return (
    <div className={`relative w-full min-h-[140px] h-auto overflow-hidden rounded-lg bg-[#0d0f13] border border-[#252830] p-3 sm:p-3.5 text-white font-mono select-none flex flex-col justify-between gap-2.5 ${className}`}>
      {/* Background ambient secure green glow */}
      <div className="pointer-events-none absolute -right-6 -bottom-6 size-24 rounded-full bg-success/15 blur-xl" />

      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[9px] uppercase tracking-wider text-white/60">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="size-1.5 rounded-full bg-success animate-pulse inline-block shrink-0" />
          <span className="text-white/90 font-semibold truncate">NEXUS • CLINICAL VAULT</span>
        </div>
        <span className="text-success text-[8.5px] font-bold shrink-0 ml-2">HIPAA ENCRYPTED</span>
      </div>

      {/* Patient Record Card Row */}
      <div className="space-y-1.5">
        <motion.div
          animate={{ x: isHovered ? 2 : 0 }}
          transition={{ duration: 0.25 }}
          className="rounded border border-success/30 bg-success/10 px-2.5 py-1.5 flex items-center justify-between text-[9px] gap-2 min-w-0"
        >
          <div className="flex items-center gap-2 min-w-0 truncate">
            <span className="font-bold text-white truncate">PATIENT #8402</span>
            <span className="text-white/60 text-[8px] truncate">• TRIAGE COMPLETE</span>
          </div>
          <span className="text-success font-semibold text-[8px] shrink-0">AES-256 VAULT</span>
        </motion.div>

        <div className="rounded border border-white/10 bg-white/5 px-2.5 py-1.5 flex items-center justify-between text-[9px] gap-2 min-w-0">
          <div className="flex items-center gap-2 min-w-0 truncate">
            <span className="font-bold text-white/80 truncate">TELEMED ROOM 03</span>
            <span className="text-white/50 text-[8px] truncate">• DR. ARIS</span>
          </div>
          <span className="text-accent font-semibold text-[8px] shrink-0">ENCRYPTED CALL</span>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-1 border-t border-white/10 pt-2 text-[8.5px] text-white/60">
        <span className="text-white/80 truncate">RBAC ACCESS CONTROL</span>
        <span className="text-success font-semibold shrink-0">99.99% UPTIME</span>
      </div>
    </div>
  );
}
