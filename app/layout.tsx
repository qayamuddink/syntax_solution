import type { Metadata } from "next";
import { Schibsted_Grotesk, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://syntaxlabsolutions.com"),
  title: "SyntaxLab Solutions",
  description: "Web design, software development, and digital solutions for local and growing businesses.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "SyntaxLab Solutions",
    description: "Web design, software development, and digital solutions for local and growing businesses.",
    url: "https://syntaxlabsolutions.com",
    siteName: "SyntaxLab Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SyntaxLab Solutions",
    description: "Web design, software development, and digital solutions for local and growing businesses.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${schibstedGrotesk.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

