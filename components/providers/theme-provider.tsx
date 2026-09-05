"use client";

import { useEffect, type PropsWithChildren } from "react";
import { useThemeStore } from "@/lib/stores/theme-store";

export function ThemeProvider({ children }: PropsWithChildren) {
  const mode = useThemeStore((state) => state.mode);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  return children;
}
