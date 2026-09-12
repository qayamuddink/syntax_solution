"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useThemeStore } from "@/lib/stores/theme-store";
import { useUiStore } from "@/lib/stores/ui-store";
import type { NavigationItem } from "@/lib/types";

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
    <header className="relative z-50 px-4 pt-4 pb-2">
      <div className="mx-auto flex h-14 max-w-[1240px] items-center justify-between rounded-xl border border-border/80 bg-surface/85 px-5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300">
        {/* Brand Logo with [ - ] Mark */}
        <Link href="/home" className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-accent">
          <span className="flex size-6 items-center justify-center rounded-sm border border-accent/60 bg-surface-elevated text-accent transition-colors group-hover:border-accent">
            <svg className="size-3 text-accent" viewBox="0 0 16 16" fill="currentColor">
              <rect x="3" y="7.25" width="10" height="1.5" rx="0.5" />
            </svg>
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-foreground">
            SYNTAXLAB <span className="text-accent">SOLUTIONS</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {items.map((item) => (
            <Link
              className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
              href={item.href}
              key={item.id}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls: Theme Toggle + CTA Button */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} theme`}
            className="group relative flex size-9 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-all duration-200 hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            onClick={toggleMode}
            type="button"
          >
            <motion.div
              animate={{ rotate: mode === "dark" ? 0 : 180, scale: [0.85, 1] }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              {mode === "dark" ? (
                <svg className="size-4 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              ) : (
                <svg className="size-4 stroke-[1.75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m-7.07-17.07 1.41 1.41m12.73 12.73 1.41 1.41M2 12h2m16 0h2m-17.07 7.07 1.41-1.41m12.73-12.73 1.41-1.41" />
                </svg>
              )}
            </motion.div>
          </button>

          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-md bg-accent px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#08090A] shadow-[0_4px_16px_rgba(196,114,68,0.25)] transition-all duration-200 active:scale-[0.98] active:duration-100 hover:bg-[#b06337] hover:shadow-[0_6px_22px_rgba(196,114,68,0.4)]"
          >
            START A PROJECT
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground lg:hidden"
          onClick={toggleMenu}
          type="button"
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-[1240px] rounded-xl border border-border bg-surface p-4 shadow-xl lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {items.map((item) => (
                <Link
                  className="border-b border-border/60 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-150 hover:text-foreground last:border-b-0"
                  href={item.href}
                  key={item.id}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <button
                className="flex items-center justify-between border-b border-border/60 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-150 hover:text-foreground"
                onClick={toggleMode}
                type="button"
              >
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
              <Link
                className="mt-3 flex h-10 items-center justify-center rounded-md bg-accent px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#08090A] transition-all duration-200 active:scale-[0.98]"
                href="/contact"
                onClick={closeMenu}
              >
                START A PROJECT
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


