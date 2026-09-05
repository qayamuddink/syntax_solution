"use client";

import { Container } from "@/components/ui/container";
import { FormField } from "@/components/ui/form-field";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { IconGlobe, IconSecurity } from "@/components/ui/icons";
import type { FormFieldConfig, IntakeTelemetry } from "@/lib/types";

export function ProjectIntakeSection({
  fields,
  telemetry,
}: {
  fields: FormFieldConfig[];
  telemetry?: IntakeTelemetry;
}) {
  const nameField = fields.find((f) => f.id === "name");
  const emailField = fields.find((f) => f.id === "email");
  const orgField = fields.find((f) => f.id === "organization");
  const budgetField = fields.find((f) => f.id === "budget");
  const reqField = fields.find((f) => f.id === "requirements");

  return (
    <section className="border-b border-border bg-background" id="contact">
      <Container className="px-6 py-20 md:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Panel — 5 cols */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <TechnicalLabel className="text-accent">{"// INITIATE DISPATCH"}</TechnicalLabel>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">Start a Project</h2>
              <p className="mt-4 text-xs leading-6 text-muted-foreground">
                Direct communication with lead architects at SyntaxLab Solutions. We review incoming project briefs within 24 hours and provide technical architecture scopes before contract signing.
              </p>

              {/* Capacity Telemetry Box */}
              <div className="mt-10 border border-border bg-surface p-6 font-mono text-xs space-y-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)] rounded-lg">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="text-muted-foreground uppercase">ONBOARDING CAPACITY:</span>
                  <span className="font-semibold text-success flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-success animate-pulse" />
                    {telemetry?.onboardingCapacity ?? "ACCEPTING Q2/Q3 SLOTS"}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="text-muted-foreground uppercase">DISCOVERY LEAD TIME:</span>
                  <span className="font-semibold text-foreground">
                    {telemetry?.discoveryLeadTime ?? "10 WORKING DAYS"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground uppercase">STUDIO LOCATIONS:</span>
                  <span className="font-semibold text-foreground flex items-center gap-1.5">
                    <IconGlobe className="size-3.5 text-accent" />
                    {telemetry?.studioLocations ?? "MILANO // ZÜRICH"}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-8 font-mono text-[10px] text-muted-foreground flex items-center gap-1.5">
              <IconSecurity className="size-3.5 text-accent shrink-0" />
              <span>* Mutual non-disclosure agreements (NDA) executed prior to operational discovery upon client request.</span>
            </p>
          </div>

          {/* Right Panel — Form (7 cols) */}
          <div className="lg:col-span-7">
            <form className="border border-border bg-surface p-6 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.35)] rounded-lg md:p-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {nameField ? <FormField {...nameField} /> : null}
                  {emailField ? <FormField {...emailField} /> : null}
                </div>

                {/* Row 2: Org + Budget */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {orgField ? <FormField {...orgField} /> : null}
                  {budgetField ? <FormField {...budgetField} /> : null}
                </div>

                {/* Row 3: Requirements Textarea */}
                {reqField ? <FormField {...reqField} /> : null}
              </div>

              {/* Submit Button */}
              <button
                className="mt-8 flex min-h-12 w-full items-center justify-center bg-accent px-6 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#0B0C0E] transition-all duration-300 hover:bg-[#c98b5e] hover:shadow-[0_4px_20px_rgba(185,120,74,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded-md"
                type="submit"
              >
                SEND PROJECT SPECIFICATION →
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}


