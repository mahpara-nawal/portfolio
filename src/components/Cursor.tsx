"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const trail = trailRef.current;
    if (!dot || !ring || !trail) return;

    let tx = 0, ty = 0;
    let dx = 0, dy = 0;
    let rx = 0, ry = 0;
    let ttx = 0, tty = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const animate = () => {
      dx += (tx - dx) * 0.25;
      dy += (ty - dy) * 0.25;
      rx += (tx - rx) * 0.06;
      ry += (ty - ry) * 0.06;
      ttx += (tx - ttx) * 0.03;
      tty += (ty - tty) * 0.03;

      dot.style.transform = `translate(${dx - 6}px, ${dy - 6}px)`;
      ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      trail.style.transform = `translate(${ttx - 2}px, ${tty - 2}px)`;
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onHoverIn = () => ring.classList.add("hovering");
    const onHoverOut = () => ring.classList.remove("hovering");

    document.addEventListener("mousemove", onMove);
    const els = document.querySelectorAll("a, button, input, textarea");
    els.forEach((el) => {
      el.addEventListener("mouseenter", onHoverIn);
      el.addEventListener("mouseleave", onHoverOut);
    });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverIn);
        el.removeEventListener("mouseleave", onHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div ref={trailRef} className="cursor-trail" />
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
