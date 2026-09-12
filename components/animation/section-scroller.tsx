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
        const navOffset = window.innerWidth >= 768 ? 32 : 24;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
    };

    scrollToElement();
    const timer = setTimeout(scrollToElement, 150);

    return () => clearTimeout(timer);
  }, [targetId]);

  return null;
}
