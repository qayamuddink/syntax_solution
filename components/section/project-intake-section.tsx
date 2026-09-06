"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { FormField } from "@/components/ui/form-field";
import { TechnicalLabel } from "@/components/ui/technical-label";
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

  const nameField = fields.find((f) => f.id === "name");
  const bizNameField = fields.find((f) => f.id === "businessName" || f.id === "organization");
  const emailField = fields.find((f) => f.id === "email");
  const phoneField = fields.find((f) => f.id === "phone");
  const serviceField = fields.find((f) => f.id === "service" || f.id === "budget");
  const reqField = fields.find((f) => f.id === "requirements");

  return (
    <>
      <section className="bg-background" id="contact">
        <Container className="px-6 py-20 md:px-16">
        <SectionReveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Panel — 5 cols */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <TechnicalLabel className="text-accent">{"// START A CONVERSATION"}</TechnicalLabel>
              <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">Start a Project</h2>
              <p className="mt-4 text-[15px] md:text-base leading-relaxed text-muted-foreground font-normal">
                Tell us what you&apos;re looking to build. We&apos;ll review your requirements and get back to you with the right approach for your business.
              </p>

              {/* What Happens Next Reassuring Box */}
              <div className="mt-8 border border-border bg-surface p-6 font-mono text-xs space-y-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] rounded-xl">
                <TechnicalLabel className="text-accent font-semibold block border-b border-border/60 pb-2.5">
                  WHAT HAPPENS NEXT
                </TechnicalLabel>
                <div className="space-y-2.5 pt-1 text-[11px]">
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-accent">01</span>
                    <span className="text-foreground font-medium">We review your enquiry.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-accent">02</span>
                    <span className="text-foreground font-medium">We discuss your requirements.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-accent">03</span>
                    <span className="text-foreground font-medium">We recommend the right approach.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-bold text-accent">04</span>
                    <span className="text-foreground font-medium">We send you a clear project scope.</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 font-mono text-[10px] text-muted-foreground flex items-center gap-1.5">
              <IconSecurity className="size-3.5 text-accent shrink-0" />
              <span>* Direct consultation and prompt response. We respect your business privacy.</span>
            </p>
          </div>

          {/* Right Panel — Form (7 cols) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-accent/60 bg-surface-elevated p-8 text-center shadow-[0_16px_40px_rgba(0,0,0,0.25)] rounded-xl space-y-4">
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-accent/10 border border-accent/40 text-accent">
                  <IconCheck className="size-6 text-accent" />
                </div>
                <TechnicalLabel className="text-accent block font-mono text-xs tracking-wider">
                  {"// ENQUIRY RECEIVED"}
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
              </div>
            ) : (
              <form className="border border-border bg-surface-elevated p-6 backdrop-blur-sm shadow-[0_16px_40px_rgba(0,0,0,0.25)] rounded-xl md:p-8" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="space-y-6">
                  {/* Row 1: Name + Business Name */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {nameField ? <FormField {...nameField} /> : null}
                    {bizNameField ? <FormField {...bizNameField} /> : null}
                  </div>

                  {/* Row 2: Email + Phone / WhatsApp */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {emailField ? <FormField {...emailField} /> : null}
                    {phoneField ? <FormField {...phoneField} /> : null}
                  </div>

                  {/* Row 3: What do you need? */}
                  {serviceField ? <FormField {...serviceField} /> : null}

                  {/* Row 4: Requirements Textarea */}
                  {reqField ? <FormField {...reqField} /> : null}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  label="Start a Conversation →"
                  variant="primary"
                  className="mt-8 w-full"
                />

                <p className="mt-3.5 text-center font-mono text-[11px] text-muted-foreground">
                  Your information stays private. We&apos;ll review your enquiry and get back to you.
                </p>
              </form>
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


