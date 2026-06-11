"use client";

import { useEffect, useRef } from "react";

const chars = ["0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "∥", "//", "▌", "░"];
const sizes = [10, 14, 18, 22, 28, 34];

export default function BinaryRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let cols: number;
    let drops: number[];
    let colSizes: number[];
    let colX: number[];
    let speeds: number[];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = 60;
      drops = Array(cols).fill(1);
      colSizes = Array.from({ length: cols }, () => sizes[Math.floor(Math.random() * sizes.length)]);
      colX = Array.from({ length: cols }, () => Math.random() * canvas.width);
      speeds = Array.from({ length: cols }, () => 0.5 + Math.random() * 0.7);
    };

    resize();

    const draw = () => {
      animId = requestAnimationFrame(draw);
      ctx.fillStyle = "rgba(11, 11, 11, 0.015)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = "center";

      for (let i = 0; i < cols; i++) {
        const size = colSizes[i];
        const x = colX[i];
        const speed = speeds[i];
        ctx.font = `bold ${size}px 'JetBrains Mono', monospace`;
        const c = chars[Math.floor(Math.random() * chars.length)];
        const opacity = 0.5 + Math.random() * 0.4;
        ctx.fillStyle = `rgba(176, 38, 255, ${opacity})`;
        ctx.fillText(c, x, drops[i] * size * 0.5 * speed);

        if (drops[i] * size * 0.5 * speed > canvas.height && Math.random() > 0.97) drops[i] = 0;
        drops[i]++;
      }
    };

    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1, opacity: 1 }}
    />
  );
}
