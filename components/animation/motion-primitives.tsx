"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { PropsWithChildren } from "react";

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } },
};

export const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export const imageRevealVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

export function SectionReveal({ children, className }: PropsWithChildren<{ className?: string }>) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
      variants={revealVariants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, className }: PropsWithChildren<{ className?: string }>) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
      variants={staggerVariants}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({ children, className }: PropsWithChildren<{ className?: string }>) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
      variants={imageRevealVariants}
    >
      {children}
    </motion.div>
  );
}

