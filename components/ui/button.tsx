import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "text";
  href?: string;
  className?: string;
}

export function Button({ label, variant = "primary", href, className, ...props }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const styles = cn(
    "group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-md border px-5 font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
    variant === "primary" && "border-accent bg-accent font-semibold text-[#0B0C0E] shadow-[0_4px_20px_rgba(185,120,74,0.25)] hover:bg-[#c98b5e] hover:shadow-[0_6px_25px_rgba(185,120,74,0.4)]",
    variant === "secondary" && "border-border bg-surface/80 backdrop-blur-sm text-foreground hover:border-accent hover:text-accent hover:bg-surface-elevated",
    variant === "text" && "border-transparent px-0 text-foreground hover:text-accent",
    className,
  );

  if (href) {
    return (
      <Link className={styles} href={href}>
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      <span>{label}</span>
    </button>
  );
}

export type ButtonAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonProps;
