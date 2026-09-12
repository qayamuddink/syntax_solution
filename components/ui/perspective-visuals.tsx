"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

interface VisualProps {
  className?: string;
  isHovered?: boolean;
}

/**
 * 01: Masterfully Engineered Laptop & Browser Interface Visual (Business Websites)
 * Features a high-resolution isometric laptop chassis, dark web application canvas,
 * interactive gliding cursor, animated metric bars, live SSL & telemetry beacons,
 * specular reflection beam, and dynamic ambient depth glow.
 */
export function LaptopBrowserVisual({ className = "", isHovered = false }: VisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveHovered = shouldReduceMotion ? false : isHovered;

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      <motion.svg
        width="760"
        height="500"
        viewBox="0 0 760 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_16px_36px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_20px_48px_rgba(0,0,0,0.65)]"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          {/* Screen glass */}
          <linearGradient id="screenFrame" x1="380" y1="55" x2="380" y2="360" gradientUnits="userSpaceOnUse">
            <stop stopColor="#20242A" />
            <stop offset="1" stopColor="#080A0D" />
          </linearGradient>

          <linearGradient id="screenSurface" x1="180" y1="100" x2="580" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#15181D" />
            <stop offset="1" stopColor="#080A0D" />
          </linearGradient>

          {/* Laptop body */}
          <linearGradient id="body" x1="120" y1="345" x2="640" y2="430" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8F8F6" />
            <stop offset="0.5" stopColor="#D9DADF" />
            <stop offset="1" stopColor="#AEB1B7" />
          </linearGradient>

          <linearGradient id="keyboard" x1="170" y1="350" x2="590" y2="405" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1B1E23" />
            <stop offset="1" stopColor="#090B0E" />
          </linearGradient>

          {/* Accent */}
          <linearGradient id="orange" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#F06A3B" />
            <stop offset="1" stopColor="#C94F28" />
          </linearGradient>

          {/* Screen glow */}
          <filter id="screenGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="18" />
          </filter>

          {/* Laptop shadow */}
          <filter id="shadow" x="-30%" y="-50%" width="160%" height="220%">
            <feGaussianBlur stdDeviation="18" />
          </filter>

          {/* Small soft shadow */}
          <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" />
          </filter>

          <clipPath id="screenClip">
            <rect x="177" y="96" width="406" height="242" rx="5" />
          </clipPath>
        </defs>

        {/* Ground shadow (Micro-breathes with float and reacts on hover) */}
        <motion.ellipse
          cx="380"
          cy="448"
          rx="245"
          ry="25"
          fill="#000000"
          filter="url(#shadow)"
          initial={{ opacity: 0.18, scaleX: 1, scaleY: 1 }}
          animate={shouldReduceMotion ? {} : {
            scaleX: effectiveHovered ? 0.93 : [1, 0.96, 1],
            scaleY: effectiveHovered ? 0.85 : [1, 0.92, 1],
            opacity: effectiveHovered ? 0.12 : [0.18, 0.14, 0.18],
          }}
          transition={effectiveHovered ? { duration: 0.5, ease: "easeOut" } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "380px 448px" }}
        />

        {/* Ambient screen glow (Subtly breathes with float cycle, intensifies on hover) */}
        <motion.ellipse
          cx="380"
          cy="240"
          rx="205"
          ry="145"
          fill="#D85A32"
          filter="url(#screenGlow)"
          initial={{ opacity: 0.10 }}
          animate={shouldReduceMotion ? {} : {
            opacity: effectiveHovered ? 0.22 : [0.08, 0.14, 0.08],
            scale: effectiveHovered ? 1.04 : [1, 1.02, 1],
          }}
          transition={effectiveHovered ? { duration: 0.5 } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "380px 240px" }}
        />

        {/* Subtle construction guides */}
        <path
          d="M112 185V325"
          stroke="#D65B34"
          strokeOpacity="0.18"
          strokeDasharray="4 8"
        />
        <path
          d="M648 185V325"
          stroke="#D65B34"
          strokeOpacity="0.18"
          strokeDasharray="4 8"
        />

        {/* MAIN LAPTOP HARDWARE & SCREEN (Continuous 6s Floating Motion + Hover Elevation) */}
        <motion.g
          animate={shouldReduceMotion ? {} : {
            y: effectiveHovered ? -6 : [0, -4, 0],
            scale: effectiveHovered ? 1.03 : 1,
          }}
          transition={effectiveHovered ? { duration: 0.5, ease: [0.22, 1, 0.36, 1] } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "380px 250px" }}
        >
          {/* ========================= */}
          {/* DISPLAY                   */}
          {/* ========================= */}

          {/* Outer display */}
          <path
            d="M169 75 C171 65 180 58 191 58 H569 C580 58 589 65 591 75 L618 343 H142 L169 75Z"
            fill="url(#screenFrame)"
            stroke="#3B3E43"
            strokeWidth="3"
          />

          {/* Display highlight */}
          <path
            d="M191 64H569C576 64 581 69 582 76L609 335H151L178 76C179 69 184 64 191 64Z"
            stroke="#FFFFFF"
            strokeOpacity="0.10"
          />

          {/* Inner screen */}
          <rect
            x="177"
            y="96"
            width="406"
            height="242"
            rx="5"
            fill="url(#screenSurface)"
          />

          {/* Screen UI */}
          <g clipPath="url(#screenClip)">
            {/* Browser top bar */}
            <rect x="177" y="96" width="406" height="31" fill="#101216" />

            {/* Traffic lights */}
            <circle cx="191" cy="111" r="4" fill="#F06448" />
            <circle cx="204" cy="111" r="4" fill="#E6B84B" />
            <circle cx="217" cy="111" r="4" fill="#4DBA73" />

            {/* URL */}
            <rect
              x="239"
              y="103"
              width="190"
              height="15"
              rx="7.5"
              fill="#20242A"
              stroke="#343840"
            />
            <text
              x="253"
              y="114"
              fontFamily="monospace"
              fontSize="7"
              fill="#A9ADB4"
            >
              https://syntaxlab.dev/core
            </text>

            {/* Status with gentle pulsating LIVE dot */}
            <rect
              x="458"
              y="103"
              width="53"
              height="15"
              rx="7"
              fill="#123522"
            />
            <motion.circle
              cx="469"
              cy="110.5"
              r="3"
              fill="#35C878"
              animate={shouldReduceMotion ? {} : {
                scale: [1, 1.25, 1],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "469px 110.5px" }}
            />
            <text
              x="477"
              y="114"
              fontFamily="monospace"
              fontSize="7"
              fill="#51D98D"
            >
              LIVE
            </text>

            {/* Main nav */}
            <rect x="177" y="127" width="406" height="30" fill="#0D0F13" />
            <rect x="191" y="137" width="56" height="7" rx="2" fill="#F4F4F1" />
            <rect x="255" y="138" width="38" height="5" rx="2" fill="#565B64" />
            <rect x="303" y="138" width="45" height="5" rx="2" fill="#565B64" />

            <rect x="505" y="134" width="55" height="13" rx="6.5" fill="#123522" />
            <circle cx="516" cy="140.5" r="3" fill="#31C878" />
            <text
              x="524"
              y="143"
              fontFamily="monospace"
              fontSize="6"
              fill="#45D98A"
            >
              VERIFIED
            </text>

            {/* Hero heading */}
            <rect x="191" y="171" width="145" height="10" rx="3" fill="#F3F3F0" />
            <rect x="191" y="187" width="110" height="8" rx="3" fill="#F3F3F0" />

            {/* Orange highlight CTA button */}
            <motion.g
              animate={{
                scale: effectiveHovered ? [1, 1.04, 1] : 1,
                opacity: effectiveHovered ? 1 : 0.95,
              }}
              transition={{
                duration: 1.8,
                repeat: effectiveHovered && !shouldReduceMotion ? Infinity : 0,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "229px 217px" }}
            >
              <rect x="191" y="207" width="76" height="20" rx="4" fill="url(#orange)" />
              <text
                x="202"
                y="220"
                fontFamily="monospace"
                fontSize="8"
                fontWeight="700"
                fill="#FFFFFF"
              >
                EXPLORE →
              </text>
            </motion.g>

            {/* Dashboard panel */}
            <rect
              x="354"
              y="167"
              width="210"
              height="118"
              rx="7"
              fill="#1B1E24"
              stroke="#30343A"
            />
            {/* Panel heading */}
            <rect x="370" y="181" width="63" height="7" rx="2" fill="#7C818A" />
            <rect x="370" y="195" width="96" height="5" rx="2" fill="#444850" />

            {/* Chart line (Draws/reveals on entrance) */}
            <motion.path
              d="M371 258 L398 239 L425 249 L454 218 L482 232 L511 204 L543 220"
              stroke="#F06A3B"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0.7 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Chart baseline */}
            <path
              d="M370 267H548"
              stroke="#3B3F46"
              strokeWidth="2"
            />

            {/* Metric blocks (Staggered entrance) */}
            <motion.g
              initial={{ opacity: 0, y: 3 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            >
              <rect x="370" y="211" width="37" height="18" rx="3" fill="#292D34" />
              <rect x="378" y="218" width="17" height="4" rx="2" fill="#F06A3B" />
            </motion.g>

            <motion.g
              initial={{ opacity: 0, y: 3 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
            >
              <rect x="414" y="211" width="37" height="18" rx="3" fill="#292D34" />
              <rect x="422" y="218" width="17" height="4" rx="2" fill="#7C818A" />
            </motion.g>

            <motion.g
              initial={{ opacity: 0, y: 3 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
            >
              <rect x="458" y="211" width="37" height="18" rx="3" fill="#292D34" />
              <rect x="466" y="218" width="17" height="4" rx="2" fill="#7C818A" />
            </motion.g>

            <motion.g
              initial={{ opacity: 0, y: 3 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.4, ease: "easeOut" }}
            >
              <rect x="502" y="211" width="46" height="18" rx="3" fill="#143724" />
              <circle cx="512" cy="220" r="3" fill="#38D07B" />
            </motion.g>

            {/* Bottom performance row */}
            <circle cx="191" cy="309" r="5" fill="#35C878" />
            <text
              x="203"
              y="312"
              fontFamily="monospace"
              fontSize="7"
              fill="#C8CBD0"
            >
              CORE WEB VITALS: 99+
            </text>

            <text
              x="330"
              y="312"
              fontFamily="monospace"
              fontSize="7"
              fill="#676C75"
            >
              ZERO LAYOUT SHIFT
            </text>

            <text
              x="443"
              y="312"
              fontFamily="monospace"
              fontSize="7"
              fill="#676C75"
            >
              HIGH CONVERSION
            </text>
          </g>

          {/* Screen bottom bevel */}
          <path
            d="M142 343H618L631 360H129L142 343Z"
            fill="#15171B"
          />

          {/* ========================= */}
          {/* LAPTOP BASE               */}
          {/* ========================= */}

          <path
            d="M129 360 H631 L684 407 C690 412 686 421 678 422 H82 C74 422 70 412 76 407 L129 360Z"
            fill="url(#body)"
            stroke="#A9ABB0"
            strokeWidth="2"
          />

          {/* Base top */}
          <path
            d="M139 365H621L664 404H96L139 365Z"
            fill="#BFC1C6"
          />

          {/* Keyboard */}
          <path
            d="M168 373 H592 L624 403 H136 L168 373Z"
            fill="url(#keyboard)"
            stroke="#292D32"
          />

          {/* Keyboard rows */}
          <g opacity="0.82">
            {/* Row 1 */}
            <g fill="#34383F">
              <rect x="180" y="378" width="27" height="5" rx="1" />
              <rect x="211" y="378" width="27" height="5" rx="1" />
              <rect x="242" y="378" width="27" height="5" rx="1" />
              <rect x="273" y="378" width="27" height="5" rx="1" />
              <rect x="304" y="378" width="27" height="5" rx="1" />
              <rect x="335" y="378" width="27" height="5" rx="1" />
              <rect x="366" y="378" width="27" height="5" rx="1" />
              <rect x="397" y="378" width="27" height="5" rx="1" />
              <rect x="428" y="378" width="27" height="5" rx="1" />
              <rect x="459" y="378" width="27" height="5" rx="1" />
              <rect x="490" y="378" width="27" height="5" rx="1" />
              <rect x="521" y="378" width="27" height="5" rx="1" />
              <rect x="552" y="378" width="27" height="5" rx="1" />
            </g>

            {/* Row 2 */}
            <g fill="#30343A">
              <rect x="171" y="387" width="36" height="5" rx="1" />
              <rect x="211" y="387" width="27" height="5" rx="1" />
              <rect x="242" y="387" width="27" height="5" rx="1" />
              <rect x="273" y="387" width="27" height="5" rx="1" />
              <rect x="304" y="387" width="27" height="5" rx="1" />
              <rect x="335" y="387" width="27" height="5" rx="1" />
              <rect x="366" y="387" width="27" height="5" rx="1" />
              <rect x="397" y="387" width="27" height="5" rx="1" />
              <rect x="428" y="387" width="27" height="5" rx="1" />
              <rect x="459" y="387" width="27" height="5" rx="1" />
              <rect x="490" y="387" width="27" height="5" rx="1" />
              <rect x="521" y="387" width="27" height="5" rx="1" />
              <rect x="552" y="387" width="42" height="5" rx="1" />
            </g>

            {/* Row 3 */}
            <g fill="#30343A">
              <rect x="166" y="396" width="43" height="5" rx="1" />
              <rect x="214" y="396" width="27" height="5" rx="1" />
              <rect x="245" y="396" width="27" height="5" rx="1" />
              <rect x="276" y="396" width="27" height="5" rx="1" />
              <rect x="307" y="396" width="27" height="5" rx="1" />
              <rect x="338" y="396" width="120" height="5" rx="2" />
              <rect x="462" y="396" width="27" height="5" rx="1" />
              <rect x="493" y="396" width="27" height="5" rx="1" />
              <rect x="524" y="396" width="27" height="5" rx="1" />
              <rect x="555" y="396" width="40" height="5" rx="1" />
            </g>
          </g>

          {/* Trackpad */}
          <path
            d="M319 382H441L454 405H306L319 382Z"
            fill="#17191D"
            stroke="#45484E"
            strokeWidth="1.5"
          />
          <path
            d="M323 384H437"
            stroke="#FFFFFF"
            strokeOpacity="0.08"
          />

          {/* Front edge */}
          <path
            d="M76 407H684L678 422H82L76 407Z"
            fill="#D7D8DB"
          />

          {/* Center notch */}
          <path
            d="M349 412H411L405 418H355L349 412Z"
            fill="#A9ABB0"
          />

          {/* Bottom front highlight */}
          <path
            d="M92 420H668"
            stroke="#FFFFFF"
            strokeOpacity="0.65"
            strokeWidth="2"
          />
        </motion.g>

        {/* Floating status indicators (Parallax depth motion) */}
        <g>
          {/* Left: LIVE STATUS badge */}
          <motion.g
            animate={shouldReduceMotion ? {} : {
              y: effectiveHovered ? -8 : [0, -6, 0],
              x: effectiveHovered ? -4 : 0,
            }}
            transition={effectiveHovered ? { duration: 0.45, ease: "easeOut" } : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect
              x="115"
              y="111"
              width="72"
              height="18"
              rx="4"
              fill="#F5F4F0"
              stroke="#D9D6CF"
            />
            <circle cx="125" cy="120" r="3" fill="#34C878" />
            <text
              x="134"
              y="123"
              fontFamily="monospace"
              fontSize="7"
              fill="#363A40"
            >
              LIVE STATUS
            </text>
          </motion.g>

          {/* Right: 99+ SCORE badge */}
          <motion.g
            animate={shouldReduceMotion ? {} : {
              y: effectiveHovered ? -8 : [0, -6, 0],
              x: effectiveHovered ? 4 : 0,
            }}
            transition={effectiveHovered ? { duration: 0.45, ease: "easeOut" } : { duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <rect
              x="573"
              y="143"
              width="68"
              height="18"
              rx="4"
              fill="#F5F4F0"
              stroke="#D9D6CF"
            />
            <circle cx="583" cy="152" r="3" fill="#F06A3B" />
            <text
              x="592"
              y="155"
              fontFamily="monospace"
              fontSize="7"
              fill="#363A40"
            >
              99+ SCORE
            </text>
          </motion.g>
        </g>
      </motion.svg>
    </div>
  );
}

export const LaptopPerspectiveVisual = LaptopBrowserVisual;

/**
 * 02: E-Commerce Product Cube & Instant Checkout Visual
 * Features a multi-layered isometric product tile, floating cart badge with item counter,
 * and an animated sub-second checkout indicator.
 */
export function CommerceCheckoutVisual({ className = "", isHovered = false }: VisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveHovered = shouldReduceMotion ? false : isHovered;

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      <motion.svg
        viewBox="0 0 170 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_8px_20px_rgba(0,0,0,0.14)] dark:drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <linearGradient id="v2BoxTop" x1="30" y1="20" x2="140" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fafbfe" />
            <stop offset="100%" stopColor="#d3d7e5" />
          </linearGradient>
          <linearGradient id="v2BoxLeft" x1="30" y1="50" x2="85" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#b3b9cc" />
            <stop offset="100%" stopColor="#7a8195" />
          </linearGradient>
          <linearGradient id="v2BoxRight" x1="85" y1="50" x2="140" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e3e6f2" />
            <stop offset="100%" stopColor="#a9afc2" />
          </linearGradient>
          <linearGradient id="v2CopperBadge" x1="60" y1="35" x2="110" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e28956" />
            <stop offset="100%" stopColor="#9c4c1e" />
          </linearGradient>
          <radialGradient id="v2BoxGlow" cx="85" cy="65" r="55" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c47244" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#c47244" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Faint Architectural Guide Lines */}
        <ellipse cx="85" cy="65" rx="55" ry="32" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.12" />

        {/* Ambient Depth Glow */}
        <ellipse cx="85" cy="65" rx="50" ry="30" fill="url(#v2BoxGlow)" opacity={effectiveHovered ? 0.35 : 0.1} />

        {/* Ambient Ground Shadow */}
        <motion.ellipse
          cx="85"
          cy="104"
          rx="58"
          ry="13"
          fill="rgba(0,0,0,0.22)"
          initial={{ opacity: 0.6, scaleX: 1, scaleY: 1 }}
          animate={{
            scaleX: effectiveHovered ? 0.9 : 1,
            scaleY: effectiveHovered ? 0.77 : 1,
            opacity: effectiveHovered ? 0.35 : 0.6,
          }}
          style={{ transformOrigin: "85px 104px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Isometric Package Chassis (Elevates on hover) */}
        <motion.g
          animate={{ y: effectiveHovered ? -6 : 0, scale: effectiveHovered ? 1.02 : 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "85px 65px" }}
        >
          {/* Top Face */}
          <path d="M 85 22 L 138 45 L 85 68 L 32 45 Z" fill="url(#v2BoxTop)" stroke="rgba(255,255,255,0.8)" strokeWidth="0.8" />
          {/* Left Face */}
          <path d="M 32 45 L 85 68 L 85 106 L 32 83 Z" fill="url(#v2BoxLeft)" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
          {/* Right Face */}
          <path d="M 85 68 L 138 45 L 138 83 L 85 106 Z" fill="url(#v2BoxRight)" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />

          {/* Grid lines on isometric top */}
          <path d="M 58 33 L 111 57" stroke="rgba(0,0,0,0.08)" strokeWidth="0.75" />
          <path d="M 111 33 L 58 57" stroke="rgba(0,0,0,0.08)" strokeWidth="0.75" />

          {/* Floating Copper Cart Badge */}
          <motion.g
            animate={{
              y: effectiveHovered ? -7 : 0,
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            transform="translate(66, 42)"
          >
            <rect
              width="38"
              height="38"
              rx="9"
              fill="url(#v2CopperBadge)"
              stroke="#ffc4a3"
              strokeWidth="0.8"
              className="drop-shadow-[0_6px_16px_rgba(196,114,68,0.55)]"
            />
            {/* Shopping Cart Icon */}
            <path
              d="M 11 13 L 14 13 L 17 24 L 27 24 L 29 16 L 15 16"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="18" cy="28" r="1.5" fill="#ffffff" />
            <circle cx="26" cy="28" r="1.5" fill="#ffffff" />

            {/* Notification Badge counter (1) */}
            <circle cx="30" cy="11" r="4.5" fill="#08090a" stroke="#ffffff" strokeWidth="0.8" />
            <text x="28.2" y="13" fill="#22c55e" fontSize="5.5" fontFamily="monospace" fontWeight="bold">1</text>
          </motion.g>

          {/* Sub-second Checkout Pulse Pill */}
          <motion.g
            animate={{
              x: effectiveHovered ? 2 : 0,
              opacity: effectiveHovered ? 1 : 0.88,
            }}
            transition={{ duration: 0.4 }}
            transform="translate(95, 74)"
          >
            <rect width="44" height="16" rx="8" fill="#08090a" stroke="#c47244" strokeWidth="0.8" />
            <circle cx="104" cy="82" r="2" fill="#22c55e" />
            <text x="109" y="85.5" fill="#ffffff" fontSize="7" fontFamily="monospace" fontWeight="bold">&lt;0.8s</text>
          </motion.g>
        </motion.g>
      </motion.svg>
    </div>
  );
}

export const CommercePerspectiveVisual = CommerceCheckoutVisual;

/**
 * 03: Business Tools Dashboard Analytics Visual
 * Floating dark multi-window panel with rising metric chart columns, curved trend line, and live database sync node.
 */
export function DashboardAnalyticsVisual({ className = "", isHovered = false }: VisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveHovered = shouldReduceMotion ? false : isHovered;

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      <motion.svg
        viewBox="0 0 150 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_8px_20px_rgba(0,0,0,0.14)] dark:drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <linearGradient id="v2DashCard" x1="10" y1="10" x2="140" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e222b" />
            <stop offset="100%" stopColor="#0b0d12" />
          </linearGradient>
          <linearGradient id="v2BarGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e08a58" />
            <stop offset="100%" stopColor="#c47244" />
          </linearGradient>
        </defs>

        {/* Faint Blueprint Guide Line */}
        <line x1="75" y1="5" x2="75" y2="95" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.12" />

        {/* Floating Base Frame (Elevates on hover) */}
        <motion.g
          animate={{ y: effectiveHovered ? -5 : 0, scale: effectiveHovered ? 1.02 : 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "75px 52px" }}
        >
          {/* Base Window Frame */}
          <rect x="10" y="10" width="130" height="82" rx="8" fill="url(#v2DashCard)" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />

          {/* Window Header */}
          <circle cx="22" cy="20" r="1.75" fill="#e06c75" opacity="0.85" />
          <circle cx="28" cy="20" r="1.75" fill="#e5c07b" opacity="0.85" />
          <circle cx="34" cy="20" r="1.75" fill="#98c379" opacity="0.85" />
          <line x1="42" y1="20" x2="128" y2="20" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />

          {/* Sidebar Nav Items */}
          <rect x="18" y="28" width="18" height="4" rx="1" fill="#c47244" opacity="0.85" />
          <rect x="18" y="36" width="14" height="3" rx="1" fill="rgba(255,255,255,0.2)" />
          <rect x="18" y="43" width="16" height="3" rx="1" fill="rgba(255,255,255,0.2)" />
          <rect x="18" y="50" width="12" height="3" rx="1" fill="rgba(255,255,255,0.2)" />

          {/* Vertical Divider */}
          <line x1="42" y1="26" x2="42" y2="84" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />

          {/* Metric Bar Columns with Dynamic Expansion */}
          <g transform="translate(52, 36)">
            {/* Bar 1 */}
            <motion.rect
              x="0"
              width="8"
              rx="1.5"
              fill="rgba(255,255,255,0.15)"
              animate={{
                height: effectiveHovered ? 30 : 22,
                y: effectiveHovered ? 12 : 20,
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
            {/* Bar 2 (Active Copper Bar) */}
            <motion.rect
              x="14"
              width="8"
              rx="1.5"
              fill="url(#v2BarGlow)"
              animate={{
                height: effectiveHovered ? 40 : 30,
                y: effectiveHovered ? 2 : 12,
              }}
              transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
            />
            {/* Bar 3 */}
            <motion.rect
              x="28"
              width="8"
              rx="1.5"
              fill="rgba(255,255,255,0.18)"
              animate={{
                height: effectiveHovered ? 28 : 18,
                y: effectiveHovered ? 14 : 24,
              }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            />
            {/* Bar 4 */}
            <motion.rect
              x="42"
              width="8"
              rx="1.5"
              fill="#c47244"
              opacity="0.9"
              animate={{
                height: effectiveHovered ? 38 : 28,
                y: effectiveHovered ? 4 : 14,
              }}
              transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
            />
            {/* Bar 5 */}
            <motion.rect
              x="56"
              width="8"
              rx="1.5"
              fill="rgba(255,255,255,0.12)"
              animate={{
                height: effectiveHovered ? 32 : 22,
                y: effectiveHovered ? 10 : 20,
              }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
            />
          </g>

          {/* Trend Line Connecting Top */}
          <motion.path
            d="M 56 56 L 70 48 L 84 60 L 98 50 L 112 58"
            stroke="#c47244"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              opacity: effectiveHovered ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Live Sync Beacon */}
          <circle cx="126" cy="32" r="2.5" fill="#22c55e" />
          <motion.circle
            cx="126"
            cy="32"
            r="4.5"
            stroke="#22c55e"
            strokeWidth="0.8"
            animate={{ r: [2.5, 6, 2.5], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" }}
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}

export const DashboardPerspectiveVisual = DashboardAnalyticsVisual;

/**
 * 04: Landing Pages Analytics & Conversion Graph Visual
 * Ascending curve with copper gradient area fill and target conversion apex marker.
 */
export function CampaignConversionVisual({ className = "", isHovered = false }: VisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveHovered = shouldReduceMotion ? false : isHovered;

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      <motion.svg
        viewBox="0 0 140 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_6px_14px_rgba(0,0,0,0.14)]"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <linearGradient id="v2CurveFill" x1="20" y1="20" x2="20" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c47244" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c47244" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        <motion.g
          animate={{ y: effectiveHovered ? -4 : 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Grid Lines */}
          <line x1="15" y1="75" x2="125" y2="75" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" />
          <line x1="15" y1="52" x2="125" y2="52" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="15" y1="30" x2="125" y2="30" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" strokeDasharray="3 3" />

          {/* Filled Curve Area */}
          <path
            d="M 18 74 C 45 70, 60 55, 80 42 C 100 28, 110 18, 122 14 L 122 75 L 18 75 Z"
            fill="url(#v2CurveFill)"
          />

          {/* Ascending Stroke Line */}
          <path
            d="M 18 74 C 45 70, 60 55, 80 42 C 100 28, 110 18, 122 14"
            stroke="#c47244"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Intermediate Data Dots */}
          <circle cx="50" cy="64" r="2" fill="#c47244" opacity="0.8" />
          <circle cx="80" cy="42" r="2.5" fill="#c47244" />

          {/* Apex Target Node (+142%) */}
          <circle cx="122" cy="14" r="3" fill="#ffffff" stroke="#c47244" strokeWidth="1.5" />
          <motion.circle
            cx="122"
            cy="14"
            r="6"
            stroke="#c47244"
            strokeWidth="1"
            animate={{
              r: effectiveHovered ? [3, 9, 3] : [3, 7, 3],
              opacity: [0.9, 0, 0.9],
            }}
            transition={{
              duration: effectiveHovered ? 1.4 : 2.2,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: "easeOut",
            }}
          />

          {/* Conversion Pill */}
          <motion.g
            transform="translate(85, 2)"
            animate={{ x: effectiveHovered ? 2 : 0 }}
            transition={{ duration: 0.35 }}
          >
            <rect width="34" height="13" rx="3.5" fill="#0c0e12" stroke="#c47244" strokeWidth="0.8" />
            <text x="5" y="9.5" fill="#c47244" fontSize="7" fontFamily="monospace" fontWeight="bold">+142%</text>
          </motion.g>
        </motion.g>
      </motion.svg>
    </div>
  );
}

/**
 * 05: Modernization Tiered Architectural Layers Visual
 * 3 stacked isometric planes (Legacy -> Refactor -> Modern) that separate vertically on hover
 * with an upward migrating data packet.
 */
export function ModernizationLayersVisual({ className = "", isHovered = false }: VisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveHovered = shouldReduceMotion ? false : isHovered;

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      <motion.svg
        viewBox="0 0 130 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_6px_16px_rgba(0,0,0,0.14)]"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <linearGradient id="v2LayerTop" x1="30" y1="10" x2="100" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e28956" />
            <stop offset="100%" stopColor="#9e4b1c" />
          </linearGradient>
          <linearGradient id="v2LayerMid" x1="30" y1="30" x2="100" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2c3240" />
            <stop offset="100%" stopColor="#181b22" />
          </linearGradient>
          <linearGradient id="v2LayerBot" x1="30" y1="50" x2="100" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1c202a" />
            <stop offset="100%" stopColor="#0f1116" />
          </linearGradient>
        </defs>

        {/* Bottom Legacy Layer */}
        <g>
          <path d="M 65 52 L 108 68 L 65 84 L 22 68 Z" fill="url(#v2LayerBot)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
          <circle cx="65" cy="68" r="1.5" fill="#e06c75" opacity="0.8" />
        </g>

        {/* Middle API / Bridge Layer (Separates on hover) */}
        <motion.g
          animate={{ y: effectiveHovered ? -5 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <path d="M 65 34 L 108 50 L 65 66 L 22 50 Z" fill="url(#v2LayerMid)" stroke="rgba(255,255,255,0.14)" strokeWidth="0.75" />
          <circle cx="65" cy="50" r="1.5" fill="#e5c07b" opacity="0.8" />
        </motion.g>

        {/* Top Modern Headless Layer (Separates highest on hover) */}
        <motion.g
          animate={{ y: effectiveHovered ? -11 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <path d="M 65 14 L 108 30 L 65 46 L 22 30 Z" fill="url(#v2LayerTop)" stroke="#ffb38a" strokeWidth="0.8" />
          <circle cx="65" cy="30" r="2" fill="#ffffff" />
        </motion.g>

        {/* Vertical Connecting Structural Laser Lines */}
        <line x1="22" y1="30" x2="22" y2="68" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="108" y1="30" x2="108" y2="68" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="65" y1="46" x2="65" y2="84" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" strokeDasharray="2 2" />

        {/* Upward Traveling Data Pulse */}
        <motion.circle
          cx="65"
          r="2.5"
          fill="#ffffff"
          stroke="#c47244"
          strokeWidth="1"
          animate={{
            cy: [70, 48, 26, 70],
            opacity: [0.2, 0.9, 1, 0.2],
          }}
          transition={{
            duration: effectiveHovered ? 1.8 : 3,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
}

/**
 * 06: Continuous Support & Uptime SLA Visual
 * Shield geometry with inner heartbeat/pulse line and 99.9% uptime beacon.
 */
export function SupportShieldVisual({ className = "", isHovered = false }: VisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveHovered = shouldReduceMotion ? false : isHovered;

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      <motion.svg
        viewBox="0 0 130 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_6px_16px_rgba(0,0,0,0.14)]"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <linearGradient id="v2ShieldGrad" x1="30" y1="10" x2="100" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e222b" />
            <stop offset="100%" stopColor="#0a0c10" />
          </linearGradient>
        </defs>

        <motion.g
          animate={{ y: effectiveHovered ? -4 : 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Shield Outer Shell */}
          <path
            d="M 65 12 L 98 22 C 98 52 82 72 65 82 C 48 72 32 52 32 22 Z"
            fill="url(#v2ShieldGrad)"
            stroke={effectiveHovered ? "#c47244" : "rgba(255,255,255,0.18)"}
            strokeWidth="0.8"
            className="transition-colors duration-300"
          />

          {/* Inner Radar Wave Rings */}
          <circle cx="65" cy="46" r="16" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
          <motion.circle
            cx="65"
            cy="46"
            r="10"
            stroke="#c47244"
            strokeWidth="0.75"
            animate={{
              r: effectiveHovered ? [6, 22, 6] : [6, 16, 6],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: effectiveHovered ? 1.6 : 2.4,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: "easeOut",
            }}
          />

          {/* ECG Heartbeat Uptime Line */}
          <path
            d="M 42 46 L 54 46 L 58 36 L 63 56 L 68 40 L 72 48 L 76 46 L 88 46"
            stroke="#c47244"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Live Status Beacon */}
          <circle cx="65" cy="24" r="2.5" fill="#22c55e" />
          <motion.circle
            cx="65"
            cy="24"
            r="5"
            stroke="#22c55e"
            strokeWidth="0.8"
            animate={{ r: [2.5, 6, 2.5], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" }}
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}
