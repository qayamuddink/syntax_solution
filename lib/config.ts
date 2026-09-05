import type { ThemeMode, ThemeTokens } from "@/lib/types";

export const themeTokens: Record<ThemeMode, ThemeTokens> = {
  dark: {
    background: "#0B0C0E",
    surface: "#111316",
    surfaceElevated: "#15171A",
    foreground: "#F4F0E8",
    mutedForeground: "#9A9B98",
    border: "#222629",
    accent: "#B9784A",
    success: "#7C9B82",
  },
  light: {
    background: "#F3F0E8",
    surface: "#FAF8F5",
    surfaceElevated: "#FFFFFF",
    foreground: "#171817",
    mutedForeground: "#686965",
    border: "#D6D0C4",
    accent: "#A9663D",
    success: "#55775D",
  },
};

export const layoutTokens = {
  contentWidth: "1280px",
  contentInnerWidth: "1152px",
  navigationHeight: "80px",
  desktopSidePadding: "64px",
  sectionVerticalPadding: "80px",
  heroGridGap: "48px",
  coreSolutionsColumns: "4fr 5fr 3fr",
} as const;
