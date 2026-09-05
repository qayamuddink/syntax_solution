"use client";

import { useEffect, useRef } from "react";

interface TechnicalTopologyProps {
  className?: string;
}

const nodes = [
  { x: 0.12, y: 0.28, label: "EDGE" },
  { x: 0.31, y: 0.56, label: "API" },
  { x: 0.52, y: 0.22, label: "WEB" },
  { x: 0.68, y: 0.69, label: "DATA" },
  { x: 0.86, y: 0.38, label: "CDN" },
  { x: 0.74, y: 0.12, label: "AUTH" },
];

export function TechnicalTopology({ className }: TechnicalTopologyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = bounds.width * ratio;
      canvas.height = bounds.height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const time = reduceMotion ? 0 : frame * 0.008;
      const points = nodes.map((node) => ({ x: node.x * width, y: node.y * height }));

      context.lineWidth = 1;
      context.strokeStyle = "rgba(185, 120, 74, 0.22)";
      for (let index = 0; index < points.length; index += 1) {
        const point = points[index];
        const next = points[(index + 1) % points.length];
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(next.x, next.y);
        context.stroke();
      }

      context.strokeStyle = "rgba(244, 240, 232, 0.08)";
      context.setLineDash([3, 9]);
      context.beginPath();
      context.moveTo(0, height * 0.82);
      context.lineTo(width, height * 0.16);
      context.stroke();
      context.setLineDash([]);

      points.forEach((point, index) => {
        const pulse = 3 + Math.sin(time + index) * 1.2;
        context.beginPath();
        context.arc(point.x, point.y, pulse + 4, 0, Math.PI * 2);
        context.fillStyle = "rgba(185, 120, 74, 0.07)";
        context.fill();
        context.beginPath();
        context.arc(point.x, point.y, pulse, 0, Math.PI * 2);
        context.fillStyle = index === 2 ? "#B9784A" : "#F4F0E8";
        context.fill();
      });

      if (!reduceMotion) {
        frame += 1;
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className={className}>
      <canvas aria-label="Technical system topology visualization" className="h-full w-full" ref={canvasRef} role="img" />
      <div className="pointer-events-none absolute inset-0">
        {nodes.map((node) => <span className="absolute font-mono text-[9px] tracking-[0.12em] text-muted-foreground" key={node.label} style={{ left: `${node.x * 100}%`, top: `${node.y * 100}%`, transform: "translate(9px, -20px)" }}>{node.label}</span>)}
      </div>
    </div>
  );
}
