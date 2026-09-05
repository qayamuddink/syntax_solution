import type { PricingPlan } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { TechnicalLabel } from "@/components/ui/technical-label";
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
    <article
      className={cn(
        "group flex flex-col justify-between border border-border bg-surface p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-8 rounded-sm",
        featured && "border-accent bg-surface-elevated shadow-xl hover:border-accent"
      )}
    >
      <div>
        {recommendedTag ? (
          <TechnicalLabel className="block text-accent font-semibold">{recommendedTag}</TechnicalLabel>
        ) : null}
        <TechnicalLabel className={cn("block mt-1", featured ? "text-accent" : "text-muted-foreground")}>
          {tierTag}
        </TechnicalLabel>

        <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">{name}</h3>
        <p className="mt-2 text-xs leading-6 text-muted-foreground">{subtitle}</p>

        <div className="mt-6 flex items-baseline gap-2 border-y border-border/60 py-4">
          <span className={cn("font-mono text-3xl font-bold", featured ? "text-accent" : "text-foreground")}>
            {price}
          </span>
          <span className="font-mono text-xs text-muted-foreground">{pricePeriod}</span>
        </div>

        <ul className="mt-6 space-y-3 font-mono text-xs">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              {feature.included ? (
                <IconCheck className="size-3.5 text-success shrink-0 mt-0.5" />
              ) : (
                <span className="size-3.5 flex items-center justify-center font-bold text-muted-foreground/40 shrink-0 mt-0.5">
                  !
                </span>
              )}
              <span className={feature.included ? "text-foreground" : "text-muted-foreground/50 line-through"}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-4">
        <Button className="w-full" label={cta.label} variant={cta.variant} href={cta.href} />
      </div>
    </article>
  );
}


