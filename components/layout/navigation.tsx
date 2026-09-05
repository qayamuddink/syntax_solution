"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useThemeStore } from "@/lib/stores/theme-store";
import { useUiStore } from "@/lib/stores/ui-store";
import type { NavigationItem } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  items: NavigationItem[];
}

export function Navigation({ items }: NavigationProps) {
  const mode = useThemeStore((state) => state.mode);
  const toggleMode = useThemeStore((state) => state.toggleMode);
  const isOpen = useUiStore((state) => state.isMobileMenuOpen);
  const toggleMenu = useUiStore((state) => state.toggleMobileMenu);
  const closeMenu = useUiStore((state) => state.closeMobileMenu);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 pb-1">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between rounded-xl border border-border/80 bg-surface/85 px-6 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300">
        <Link href="/home" className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-accent">
          <span className="flex size-6 items-center justify-center rounded-sm border border-accent text-[11px] font-semibold text-accent font-mono">→</span>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
            SyntaxLab <span className="text-accent">Solutions</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {items.map((item) => (
            <Link className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent" href={item.href} key={item.id}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          {/* Animated SVG Sun/Moon Theme Toggle */}
          <button
            aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} theme`}
            className="group relative flex size-9 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            onClick={toggleMode}
            type="button"
          >
            <motion.div
              animate={{ rotate: mode === "dark" ? 0 : 180, scale: [0.85, 1] }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              {mode === "dark" ? (
                /* Moon Icon for Dark Mode */
                <svg className="size-4 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              ) : (
                /* Sun Icon for Light Mode */
                <svg className="size-4 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m-7.07-17.07 1.41 1.41m12.73 12.73 1.41 1.41M2 12h2m16 0h2m-17.07 7.07 1.41-1.41m12.73-12.73 1.41-1.41" />
                </svg>
              )}
            </motion.div>
          </button>

          <Button href="/contact" label="START A PROJECT" />
        </div>
        <button aria-expanded={isOpen} aria-label="Toggle navigation menu" className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground lg:hidden" onClick={toggleMenu} type="button">
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </div>
      <div className={cn("mx-auto mt-2 max-w-[1240px] rounded-xl border border-border bg-surface p-4 shadow-lg lg:hidden", !isOpen && "hidden")}>
        <nav className="flex flex-col" aria-label="Mobile navigation">
          {items.map((item) => (
            <Link className="border-b border-border py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground last:border-b-0" href={item.href} key={item.id} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <button className="flex items-center justify-between border-b border-border py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground" onClick={toggleMode} type="button">
            <span>THEME: {mode.toUpperCase()}</span>
            {mode === "dark" ? (
              <svg className="size-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            ) : (
              <svg className="size-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v2m0 16v2m-7.07-17.07 1.41 1.41m12.73 12.73 1.41 1.41M2 12h2m16 0h2m-17.07 7.07 1.41-1.41m12.73-12.73 1.41-1.41" />
              </svg>
            )}
          </button>
          <Link className="mt-3 inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#0B0C0E]" href="/contact" onClick={closeMenu}>START A PROJECT</Link>
        </nav>
      </div>
    </header>
  );
}

