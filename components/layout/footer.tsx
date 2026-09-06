import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  const footer = siteConfig.footer;

  return (
    <footer className="bg-background" id="footer">
      <Container className="grid gap-12 px-6 py-16 md:grid-cols-12 md:px-16 md:py-20">
        {/* Col 1 — Logo + Description + Latency (5 cols) */}
        <div className="flex flex-col justify-between md:col-span-5">
          <div>
            <Link href="/home" className="flex items-center gap-2.5">
              <span className="flex size-6 items-center justify-center border border-accent font-mono text-[11px] font-semibold text-accent">→</span>
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                SyntaxLab <span className="text-accent">Solutions</span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-xs leading-6 text-muted-foreground">
              Web design and software development for local and growing businesses.
            </p>
          </div>

          <div className="mt-8 font-mono text-[10px] font-medium text-muted-foreground">
            {footer.latency}
          </div>
        </div>

        {/* Col 2 — Quick Links (3 cols) */}
        <div className="md:col-span-3">
          <TechnicalLabel className="text-foreground">{footer.groups[0]?.label ?? "NAVIGATION"}</TechnicalLabel>
          <div className="mt-6 flex flex-col items-start gap-3">
            {footer.groups[0]?.links.map((link) => (
              <Link
                className="font-mono text-xs font-medium text-muted-foreground transition-colors duration-150 hover:text-accent"
                href={link.href}
                key={link.id}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3 — Contact (4 cols) */}
        <div className="md:col-span-4">
          <TechnicalLabel className="text-foreground">CONTACT</TechnicalLabel>
          <p className="mt-4 font-mono text-xs font-semibold text-muted-foreground">EMAIL:</p>
          <a
            href={`mailto:${footer.email}`}
            className="mt-1 inline-block font-mono text-xs font-semibold text-accent transition-opacity duration-150 hover:opacity-80 hover:underline"
          >
            {footer.email}
          </a>

          <div className="mt-5 space-y-1 font-mono text-xs text-muted-foreground">
            <p className="font-semibold text-foreground">PHONE / WHATSAPP:</p>
            <p className="text-accent">+91 XXXXX XXXXX</p>
          </div>

          <div className="mt-5 space-y-1 font-mono text-xs font-muted-foreground">
            {footer.addresses.map((addr, idx) => (
              <p key={idx}>{addr}</p>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom Telemetry Bar */}
      <div className="bg-surface/50">
        <Container className="px-6 md:px-16">
          <Divider />
        </Container>
        <Container className="flex flex-col gap-3 px-6 py-5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-16">
          <span>{footer.copyright}</span>
          <span>{footer.security}</span>
        </Container>
      </div>
    </footer>
  );
}

