import * as React from "react";
import { cn } from "@/lib/utils";
import { IconArrowRight, IconCheck } from "@/components/ui/icons";

/* -------------------------------------------------------------------------- */
/*                                CARD BASE                                   */
/* -------------------------------------------------------------------------- */

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "interactive" | "active" | "featured" | "ghost";
  padding?: "none" | "sm" | "md" | "lg";
  as?: React.ElementType;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      padding = "md",
      as: Component = "div",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "group relative rounded-2xl border transition-all duration-200 ease-out",
          // Surface & border treatments for Light & Dark mode
          variant === "default" &&
            "border-border/80 bg-surface/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:bg-surface/90 dark:border-border/70 dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
          variant === "elevated" &&
            "border-border/90 bg-surface-elevated/95 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)]",
          variant === "interactive" &&
            "border-border/80 bg-surface/70 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:border-accent/60 hover:bg-surface hover:shadow-[0_12px_32px_rgba(196,114,68,0.12)] dark:bg-surface/80 dark:border-border/70 dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] dark:hover:border-accent/60 dark:hover:shadow-[0_12px_36px_rgba(196,114,68,0.18)] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
          variant === "active" &&
            "border-accent bg-surface-elevated/95 shadow-[0_8px_24px_rgba(196,114,68,0.14)] -translate-y-0.5",
          variant === "featured" &&
            "border-accent bg-surface-elevated/95 shadow-[0_12px_36px_rgba(196,114,68,0.16)] dark:border-accent dark:shadow-[0_14px_40px_rgba(196,114,68,0.22)]",
          variant === "ghost" && "border-transparent bg-transparent shadow-none",
          // Padding options
          padding === "none" && "p-0",
          padding === "sm" && "p-3 md:p-4",
          padding === "md" && "p-5 md:p-6",
          padding === "lg" && "p-6 md:p-8",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Card.displayName = "Card";

/* -------------------------------------------------------------------------- */
/*                                CARD ATOMS                                  */
/* -------------------------------------------------------------------------- */

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center justify-between gap-3", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  as: Component = "h3",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { as?: React.ElementType }) {
  return (
    <Component
      className={cn("text-base md:text-lg font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-xs md:text-[13px] leading-relaxed text-muted-foreground font-normal", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-3 space-y-2", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-5 pt-3.5 border-t border-border/60 flex items-center justify-between", className)} {...props}>
      {children}
    </div>
  );
}

export function CardBadge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/15 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function CardIconBox({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-surface-elevated/80 text-accent transition-all duration-200 group-hover:border-accent/60 group-hover:bg-accent/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardChecklist({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-2 font-mono text-xs", className)}>
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
          <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
            <IconCheck className="size-2.5" />
          </span>
          <span className="text-foreground/90">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------------------- */
/*                            SPECIALIZED CARDS                               */
/* -------------------------------------------------------------------------- */

/**
 * ServiceCard: Matches the "Service Card (Light & Dark)" from the Pass 11 specification.
 * Features icon box, number, title, description, and "Learn More →" link.
 */
export interface ServiceCardProps {
  number: string;
  category?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionText?: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ServiceCard({
  number,
  category,
  title,
  description,
  icon,
  actionText = "Learn More →",
  isActive = false,
  onClick,
  className,
}: ServiceCardProps) {
  return (
    <Card
      as="article"
      variant={isActive ? "active" : "interactive"}
      padding="md"
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={cn("flex flex-col justify-between", className)}
    >
      <div>
        {/* Top Header: Icon + Number */}
        <div className="flex items-center justify-between">
          {icon ? (
            <CardIconBox>{icon}</CardIconBox>
          ) : (
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {category}
            </span>
          )}
          <span className="font-mono text-xs font-semibold text-accent">{number}</span>
        </div>

        {/* Title */}
        <h3
          className={cn(
            "mt-4 text-[15px] md:text-base font-semibold leading-snug transition-colors duration-200",
            isActive ? "text-accent" : "text-foreground group-hover:text-accent"
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="mt-1.5 text-xs md:text-[13px] leading-relaxed text-muted-foreground font-normal line-clamp-2">
          {description}
        </p>
      </div>

      {/* Bottom Link with animated arrow */}
      <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between font-mono text-[11px] text-accent">
        <span className="font-semibold tracking-wider uppercase text-[10px]">{actionText}</span>
        <IconArrowRight
          className={cn(
            "size-3.5 transition-transform duration-200",
            isActive ? "translate-x-1 opacity-100" : "opacity-70 group-hover:translate-x-1 group-hover:opacity-100"
          )}
        />
      </div>
    </Card>
  );
}

/**
 * FeatureCard: Matches the "Feature Card (Light & Dark)" from Pass 11 specification.
 * Features top illustrative/icon element, title, description, and copper checkmark list.
 */
export interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  features,
  className,
}: FeatureCardProps) {
  return (
    <Card variant="default" padding="md" className={cn("flex flex-col justify-between", className)}>
      <div>
        {icon ? <CardIconBox className="mb-4">{icon}</CardIconBox> : null}
        <h3 className="text-base md:text-lg font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="mt-1.5 text-xs md:text-[13px] leading-relaxed text-muted-foreground font-normal">
          {description}
        </p>

        <div className="mt-4 border-t border-border/60 pt-3.5">
          <CardChecklist items={features} />
        </div>
      </div>
    </Card>
  );
}

/**
 * TestimonialCard: Matches the "Testimonial Card (Light & Dark)" from Pass 11 specification.
 * Features copper quote mark, quote text, author initials avatar, name, and role.
 */
export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  initials?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  initials,
  className,
}: TestimonialCardProps) {
  const displayInitials =
    initials ??
    author
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <Card variant="elevated" padding="md" className={cn("flex flex-col justify-between", className)}>
      <div>
        {/* Copper Quote Icon */}
        <div className="flex size-8 items-center justify-center rounded-full bg-accent/15 text-accent font-serif text-lg font-bold">
          “
        </div>

        {/* Quote text */}
        <blockquote className="mt-3 text-xs md:text-[13px] leading-relaxed text-foreground/90 font-normal italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>

      {/* Author Details */}
      <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-3.5">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent text-xs font-bold text-[#08090A]">
          {displayInitials}
        </div>
        <div className="font-mono text-xs leading-tight">
          <p className="font-bold text-foreground">{author}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">
            {role}
            {company ? ` • ${company}` : ""}
          </p>
        </div>
      </div>
    </Card>
  );
}
