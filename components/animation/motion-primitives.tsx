"use client";

import { motion, type Variants } from "motion/react";
import type { PropsWithChildren } from "react";

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const imageRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

export function SectionReveal({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={revealVariants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={staggerVariants}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({ children, className }: PropsWithChildren<{ className?: string }>) {
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

