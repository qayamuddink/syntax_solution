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
    "inline-flex min-h-11 items-center justify-center gap-3 border px-5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
    variant === "primary" && "border-accent bg-accent text-[#0B0C0E] hover:bg-[#c98b5e]",
    variant === "secondary" && "border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
    variant === "text" && "border-transparent px-0 text-foreground hover:text-accent",
    className,
  );

  if (href) {
    return <Link className={styles} href={href}>{label}</Link>;
  }

  return <button className={styles} {...props}>{label}</button>;
}

export type ButtonAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonProps;
