"use client";

import { useEffect, useRef } from "react";

interface HeroOrbProps {
  className?: string;
}

interface NodePoint {
  lat: number;
  lon: number;
  radiusOffset: number;
  size: number;
  color: string;
  speed: number;
}

export function HeroOrbVisual({ className }: HeroOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      targetMouseY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    let rotationAngle = 0;

    // Node points orbiting the structure
    const nodes: NodePoint[] = [
      { lat: 0.15, lon: 0.2, radiusOffset: 1.02, size: 3.5, color: "#C47244", speed: 1.0 },
      { lat: -0.35, lon: 1.1, radiusOffset: 0.98, size: 3.0, color: "#22C55E", speed: 1.2 },
      { lat: 0.45, lon: 2.3, radiusOffset: 1.05, size: 4.0, color: "#C47244", speed: 0.9 },
      { lat: -0.2, lon: 3.6, radiusOffset: 1.0, size: 2.5, color: "#F4F0E8", speed: 1.1 },
      { lat: 0.6, lon: 4.4, radiusOffset: 0.95, size: 3.5, color: "#C47244", speed: 0.8 },
      { lat: -0.5, lon: 5.1, radiusOffset: 1.04, size: 3.0, color: "#22C55E", speed: 1.3 },
      { lat: 0.05, lon: 5.8, radiusOffset: 1.08, size: 4.0, color: "#C47244", speed: 0.95 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      if (!width || !height || width <= 0 || height <= 0) return;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const safeMouseX = Number.isFinite(mouseX) ? mouseX : 0;
      const safeMouseY = Number.isFinite(mouseY) ? mouseY : 0;

      const centerX = width * 0.52 + safeMouseX * 20;
      const centerY = height * 0.5 + safeMouseY * 20;
      const rawRadius = Math.min(width, height) * 0.36;
      const radius = Number.isFinite(rawRadius) && rawRadius > 0 ? rawRadius : 100;

      if (!Number.isFinite(centerX) || !Number.isFinite(centerY)) return;

      // 1. Core Deep Copper Radial Glow Atmosphere
      const r0 = Math.max(1, radius * 0.1);
      const r1 = Math.max(r0 + 1, radius * 1.5);

      if (Number.isFinite(r0) && Number.isFinite(r1) && r1 > r0) {
        const bgGlow = ctx.createRadialGradient(
          centerX,
          centerY,
          r0,
          centerX,
          centerY,
          r1
        );
        bgGlow.addColorStop(0, "rgba(196, 114, 68, 0.22)");
        bgGlow.addColorStop(0.35, "rgba(196, 114, 68, 0.09)");
        bgGlow.addColorStop(0.7, "rgba(196, 114, 68, 0.02)");
        bgGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = bgGlow;
        ctx.beginPath();
        ctx.arc(centerX, centerY, r1, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Concentric Tilted Orbital Arcs (Background Layers)
      const tiltedRings = [
        { tilt: -0.42, scaleY: 0.32, rFactor: 1.25, stroke: "rgba(196, 114, 68, 0.25)" },
        { tilt: 0.35, scaleY: 0.28, rFactor: 1.15, stroke: "rgba(196, 114, 68, 0.18)" },
        { tilt: -0.15, scaleY: 0.45, rFactor: 1.05, stroke: "rgba(244, 240, 232, 0.08)" },
        { tilt: 0.65, scaleY: 0.22, rFactor: 1.35, stroke: "rgba(196, 114, 68, 0.14)" },
      ];

      tiltedRings.forEach((ring) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(ring.tilt + safeMouseX * 0.05);
        ctx.beginPath();
        ctx.ellipse(0, 0, radius * ring.rFactor, radius * ring.rFactor * ring.scaleY, rotationAngle * 0.15, 0, Math.PI * 2);
        ctx.strokeStyle = ring.stroke;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      });

      // 3. 3D Wireframe Sphere Latitude Circles
      const latCount = 18;
      for (let i = 0; i < latCount; i++) {
        const phi = (i / latCount) * Math.PI - Math.PI / 2;
        const rY = Math.sin(phi) * radius;
        const rX = Math.cos(phi) * radius;

        if (rX > 2) {
          ctx.beginPath();
          ctx.ellipse(
            centerX,
            centerY + rY,
            rX,
            Math.max(0.1, rX * 0.26),
            rotationAngle * 0.1 + safeMouseX * 0.08,
            0,
            Math.PI * 2
          );
          if (i % 4 === 0) {
            ctx.strokeStyle = "rgba(196, 114, 68, 0.32)";
            ctx.lineWidth = 1.25;
          } else if (i % 2 === 0) {
            ctx.strokeStyle = "rgba(196, 114, 68, 0.15)";
            ctx.lineWidth = 1;
          } else {
            ctx.strokeStyle = "rgba(244, 240, 232, 0.04)";
            ctx.lineWidth = 0.75;
          }
          ctx.stroke();
        }
      }

      // 4. Rotating Longitude Meridian Curves
      const lonCount = 14;
      for (let j = 0; j < lonCount; j++) {
        const angle = rotationAngle + (j / lonCount) * Math.PI;
        const scaleX = Math.cos(angle);
        const radiusX = Math.max(0.1, Math.abs(scaleX) * radius);

        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          radiusX,
          radius,
          safeMouseY * 0.05,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = j % 3 === 0 ? "rgba(196, 114, 68, 0.28)" : "rgba(255, 255, 255, 0.035)";
        ctx.lineWidth = j % 3 === 0 ? 1.2 : 0.8;
        ctx.stroke();
      }

      // 5. Orbital Particles & Glowing Structural Nodes
      nodes.forEach((node) => {
        const curLon = node.lon + rotationAngle * node.speed;
        const nodeRad = radius * node.radiusOffset;
        const x = centerX + Math.cos(curLon) * Math.cos(node.lat) * nodeRad;
        const y = centerY + Math.sin(node.lat) * nodeRad;
        const visible = Math.sin(curLon) > -0.3;

        if (visible && Number.isFinite(x) && Number.isFinite(y)) {
          const haloR = Math.max(1, node.size * 3.5);
          // Node glow halo
          const haloGrad = ctx.createRadialGradient(x, y, 0.1, x, y, haloR);
          haloGrad.addColorStop(0, node.color === "#C47244" ? "rgba(196, 114, 68, 0.6)" : "rgba(34, 197, 94, 0.6)");
          haloGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

          ctx.fillStyle = haloGrad;
          ctx.beginPath();
          ctx.arc(x, y, haloR, 0, Math.PI * 2);
          ctx.fill();

          // Core node dot
          ctx.fillStyle = node.color;
          ctx.beginPath();
          ctx.arc(x, y, node.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 6. Outer Fine Equatorial Ring Highlight
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radius * 1.12, Math.max(0.1, radius * 0.3), rotationAngle * 0.05, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(196, 114, 68, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      if (!reduceMotion) {
        rotationAngle += 0.0035;
        animationFrameId = requestAnimationFrame(draw);
      }
    };


    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={className}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="h-full w-full pointer-events-none"
      />
    </div>
  );
}

