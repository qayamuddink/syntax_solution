import type { PricingPlan } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardBadge } from "@/components/ui/card";
import { IconCheck } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function PricingCard({
  tierTag,
  name,
  subtitle,
  price,
  pricePeriod = "/ SCOPE",
  recommendedTag,
  features,
  cta,
  featured,
}: PricingPlan) {
  return (
    <Card
      as="article"
      variant={featured ? "featured" : "interactive"}
      padding="lg"
      className={cn(
        "flex flex-col justify-between transition-all duration-300",
        featured && "border-accent shadow-[0_12px_40px_rgba(196,114,68,0.18)]"
      )}
    >
      <div>
        {/* Top Tag & Badge */}
        <div className="flex items-center justify-between">
          <span className={cn("font-mono text-[11px] font-semibold uppercase tracking-wider", featured ? "text-accent" : "text-muted-foreground")}>
            {tierTag}
          </span>
          {recommendedTag ? (
            <CardBadge>{recommendedTag.replace(/^\/\/\s*/, "")}</CardBadge>
          ) : null}
        </div>

        <h3 className="mt-4 text-xl md:text-2xl font-bold tracking-tight text-foreground">{name}</h3>
        <p className="mt-2 text-xs md:text-sm leading-relaxed text-muted-foreground font-normal">{subtitle}</p>

        <div className="mt-6 flex items-baseline gap-2 border-y border-border/60 py-4">
          <span className={cn("font-mono text-2xl md:text-3xl font-bold tracking-tight", featured ? "text-accent" : "text-foreground")}>
            {price}
          </span>
          <span className="font-mono text-xs text-muted-foreground">{pricePeriod}</span>
        </div>

        <ul className="mt-6 space-y-3 font-mono text-xs">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              {feature.included ? (
                <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent mt-0.5">
                  <IconCheck className="size-2.5" />
                </span>
              ) : (
                <span className="size-4 flex items-center justify-center font-bold text-muted-foreground/60 shrink-0 mt-0.5">
                  —
                </span>
              )}
              <span className={feature.included ? "text-foreground" : "text-muted-foreground/70 line-through"}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-4">
        <Button className="w-full" label={cta.label} variant={cta.variant} href={cta.href} />
      </div>
    </Card>
  );
}


