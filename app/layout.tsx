import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

