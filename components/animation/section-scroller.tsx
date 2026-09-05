"use client";

import { useEffect } from "react";

export function SectionScroller({ targetId }: { targetId?: string }) {
  useEffect(() => {
    if (!targetId || targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const scrollToElement = () => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    scrollToElement();
    const timer = setTimeout(scrollToElement, 150);

    return () => clearTimeout(timer);
  }, [targetId]);

  return null;
}
