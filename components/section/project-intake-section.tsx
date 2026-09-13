"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { FormField } from "@/components/ui/form-field";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Card } from "@/components/ui/card";
import { IconSecurity, IconCheck } from "@/components/ui/icons";
import { SectionReveal } from "@/components/animation/motion-primitives";
import type { FormFieldConfig } from "@/lib/types";

export function ProjectIntakeSection({
  fields,
}: {
  fields: FormFieldConfig[];
  telemetry?: unknown;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tier = params.get("tier") || params.get("interest");
      if (tier) {
        const lower = tier.toLowerCase();
        if (lower.includes("starter")) {
          setSelectedService("Starter Tier (Essential Digital Presence)");
        } else if (lower.includes("growth")) {
          setSelectedService("Growth Tier (Conversion & Growth System)");
        } else if (lower.includes("custom")) {
          setSelectedService("Custom Tier (Custom Digital System)");
        }
      }
    }
  }, []);

  const nameField = fields.find((f) => f.id === "name");
  const bizNameField = fields.find((f) => f.id === "businessName" || f.id === "organization");
  const emailField = fields.find((f) => f.id === "email");
  const phoneField = fields.find((f) => f.id === "phone");
  const serviceField = fields.find((f) => f.id === "service" || f.id === "budget");
  const reqField = fields.find((f) => f.id === "requirements");

  const configuredServiceField = serviceField
    ? {
        ...serviceField,
        defaultValue: selectedService || serviceField.defaultValue,
      }
    : undefined;

  return (
    <>
      <section className="bg-background" id="contact">
        <Container className="px-6 py-14 md:py-16 md:px-16">
          <SectionReveal>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12">
              {/* Left Panel — 5 cols */}
              <div className="flex flex-col justify-between lg:col-span-5">
                <div>
                  <TechnicalLabel className="text-accent font-mono text-[11px] tracking-[0.14em]">START A CONVERSATION</TechnicalLabel>
                  <h2 className="mt-3 text-3xl font-bold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">Start a Project</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground font-normal">
                    Tell us about your project requirements. We&apos;ll review your scope and provide a clear technical roadmap within 24 hours.
                  </p>

                  {/* What Happens Next Reassuring Box */}
                  <Card variant="default" padding="md" className="mt-6 font-mono text-xs space-y-3">
                    <TechnicalLabel className="text-accent font-semibold block border-b border-border/60 pb-2.5">
                      WHAT HAPPENS NEXT
                    </TechnicalLabel>
                    <div className="space-y-2 pt-1 text-[11px]">
                      <div className="flex items-start gap-2.5">
                        <span className="font-bold text-accent">01</span>
                        <span className="text-foreground font-medium">We review your specifications.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="font-bold text-accent">02</span>
                        <span className="text-foreground font-medium">We conduct a discovery consultation.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="font-bold text-accent">03</span>
                        <span className="text-foreground font-medium">We define architecture & deliverables.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="font-bold text-accent">04</span>
                        <span className="text-foreground font-medium">We deliver a fixed-price proposal.</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <p className="mt-6 font-mono text-[10px] text-muted-foreground flex items-center gap-1.5">
                  <IconSecurity className="size-3.5 text-accent shrink-0" />
                  <span>* Direct engineering consultation. We respect your business privacy.</span>
                </p>
              </div>

              {/* Right Panel — Form (7 cols) */}
              <div className="lg:col-span-7">
                {submitted ? (
                  <Card variant="featured" padding="lg" className="text-center space-y-4">
                    <div className="inline-flex size-12 items-center justify-center rounded-full bg-accent/10 border border-accent/40 text-accent">
                      <IconCheck className="size-6 text-accent" />
                    </div>
                    <TechnicalLabel className="text-accent block font-mono text-xs tracking-wider">
                      ENQUIRY RECEIVED
                    </TechnicalLabel>
                    <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                      We have received your project details. Our team will review your requirements and get back to you within 24 hours with a recommended approach.
                    </p>
                    <div className="pt-4">
                      <Button
                        onClick={() => setSubmitted(false)}
                        label="SEND ANOTHER ENQUIRY"
                        variant="secondary"
                      />
                    </div>
                  </Card>
                ) : (
                  <Card as="form" variant="elevated" padding="lg" className="backdrop-blur-sm" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div className="space-y-5">
                      {/* Row 1: Name + Business Name */}
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {nameField ? <FormField {...nameField} /> : null}
                        {bizNameField ? <FormField {...bizNameField} /> : null}
                      </div>

                      {/* Row 2: Email + Phone / WhatsApp */}
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {emailField ? <FormField {...emailField} /> : null}
                        {phoneField ? <FormField {...phoneField} /> : null}
                      </div>

                      {/* Row 3: What do you need? */}
                      {configuredServiceField ? <FormField {...configuredServiceField} /> : null}

                      {/* Row 4: Requirements Textarea */}
                      {reqField ? <FormField {...reqField} /> : null}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      label="Start a Conversation →"
                      variant="primary"
                      className="mt-6 w-full"
                    />

                    <p className="mt-3 text-center font-mono text-[11px] text-muted-foreground">
                      Your information stays private. We&apos;ll review your enquiry and get back to you.
                    </p>
                  </Card>
                )}
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>
      <Container className="px-6 md:px-16">
        <Divider />
      </Container>
    </>
  );
}


