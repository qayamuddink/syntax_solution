"use client";

import { useEffect, useRef } from "react";

interface HeroOrbProps {
  className?: string;
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

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const centerX = width / 2 + mouseX * 15;
      const centerY = height / 2 + mouseY * 15;
      const radius = Math.min(width, height) * 0.38;

      // Ambient radial lighting behind sphere
      const ambientGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.2,
        centerX,
        centerY,
        radius * 1.4
      );
      ambientGrad.addColorStop(0, "rgba(185, 120, 74, 0.16)");
      ambientGrad.addColorStop(0.5, "rgba(185, 120, 74, 0.04)");
      ambientGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = ambientGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.4, 0, Math.PI * 2);
      ctx.fill();

      // Outer latitude rings (3D wireframe sphere approximation)
      const ringCount = 14;
      ctx.lineWidth = 1;

      for (let i = 0; i < ringCount; i++) {
        const phi = (i / ringCount) * Math.PI - Math.PI / 2;
        const rY = Math.sin(phi) * radius;
        const rX = Math.cos(phi) * radius;

        if (rX > 2) {
          ctx.beginPath();
          ctx.ellipse(
            centerX,
            centerY + rY,
            rX,
            rX * 0.28,
            rotationAngle * 0.2 + mouseX * 0.1,
            0,
            Math.PI * 2
          );
          ctx.strokeStyle = i % 3 === 0 ? "rgba(185, 120, 74, 0.25)" : "rgba(244, 240, 232, 0.06)";
          ctx.stroke();
        }
      }

      // Rotating longitude meridian arcs
      const meridianCount = 10;
      for (let j = 0; j < meridianCount; j++) {
        const angle = rotationAngle + (j / meridianCount) * Math.PI;
        const scaleX = Math.cos(angle);

        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          Math.abs(scaleX) * radius,
          radius,
          0,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = j % 2 === 0 ? "rgba(185, 120, 74, 0.2)" : "rgba(255, 255, 255, 0.04)";
        ctx.stroke();
      }

      // Spherical nodes & data highlights
      const nodePoints = [
        { lat: 0.2, lon: 0.5 },
        { lat: -0.4, lon: 1.2 },
        { lat: 0.6, lon: 2.1 },
        { lat: -0.1, lon: 3.4 },
        { lat: 0.3, lon: 4.5 },
        { lat: -0.5, lon: 5.2 },
      ];

      nodePoints.forEach((node, idx) => {
        const curLon = node.lon + rotationAngle;
        const x = centerX + Math.cos(curLon) * Math.cos(node.lat) * radius;
        const y = centerY + Math.sin(node.lat) * radius;
        const visible = Math.sin(curLon) > -0.2;

        if (visible) {
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = idx % 2 === 0 ? "#B9784A" : "#22C55E";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fillStyle = idx % 2 === 0 ? "rgba(185, 120, 74, 0.2)" : "rgba(34, 197, 94, 0.2)";
          ctx.fill();
        }
      });

      if (!reduceMotion) {
        rotationAngle += 0.004;
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
