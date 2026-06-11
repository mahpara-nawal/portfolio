"use client";

import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-16 px-8 overflow-hidden" id="contact">
      <div className="bg-grid absolute inset-0 z-0" />
      <div className="bg-diagonal absolute inset-0 z-0 pointer-events-none opacity-50" />

      {/* Orbital rings */}
      <div className="orbit-ring" style={{ width: 500, height: 500, top: "5%", right: "-5%" }} />
      <div className="orbit-ring orbit-ring-dashed" style={{ width: 350, height: 350, top: "15%", right: "2%" }} />
      <div className="orbit-ring" style={{ width: 300, height: 300, bottom: "10%", left: "-3%" }} />
      <div className="orbit-ring orbit-ring-dashed" style={{ width: 180, height: 180, bottom: "25%", left: "10%" }} />

      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 w-px h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }} />

      {/* Corner brackets */}
      <div className="absolute top-8 right-8 w-12 h-12 pointer-events-none z-[2]">
        <div className="absolute top-0 right-0 w-6 h-px" style={{ background: "var(--accent)" }} />
        <div className="absolute top-0 right-0 w-px h-6" style={{ background: "var(--accent)" }} />
      </div>
      <div className="absolute bottom-8 left-8 w-12 h-12 pointer-events-none z-[2]">
        <div className="absolute bottom-0 left-0 w-6 h-px" style={{ background: "var(--accent)" }} />
        <div className="absolute bottom-0 left-0 w-px h-6" style={{ background: "var(--accent)" }} />
      </div>

      {/* Floating dots */}
      <div className="absolute pointer-events-none z-[2]" style={{ top: "20%", left: "8%", width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", opacity: 0.15, boxShadow: "0 0 20px var(--accent)", animation: "float 5s ease-in-out infinite" }} />
      <div className="absolute pointer-events-none z-[2]" style={{ top: "60%", right: "12%", width: 3, height: 3, borderRadius: "50%", background: "var(--accent)", opacity: 0.1, boxShadow: "0 0 15px var(--accent)", animation: "float 4s ease-in-out infinite 1s" }} />
      <div className="absolute pointer-events-none z-[2]" style={{ bottom: "30%", left: "15%", width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", opacity: 0.08, boxShadow: "0 0 25px var(--accent)", animation: "float 6s ease-in-out infinite 0.5s" }} />

      <div
        ref={ref}
        className="relative z-10 max-w-[1300px] mx-auto glass p-8 md:p-12 rounded-3xl"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-[2px]" style={{ background: "var(--accent)" }} />
              <span className="section-label">Contact</span>
            </div>
            <h2 className="heading-lg text-[clamp(2.5rem,6vw,4.5rem)]">
              Let&apos;s
              <br />
              <span style={{ color: "var(--accent)" }}>build</span>
            </h2>
            <p className="text-xs mt-4 leading-relaxed" style={{ color: "#aaa", maxWidth: 280, fontFamily: "'JetBrains Mono', monospace" }}>
              &gt; Have a project, idea, or just want to chat? Contact me &rarr;
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-3">
            <div className="flex items-center gap-3 text-[10px] font-mono mb-4" style={{ color: "var(--accent)" }}>
              <span className="inline-block w-2 h-2 rounded-full" style={{ background: "var(--accent)", animation: "pulse 2s ease-in-out infinite" }} />
              <span>AVAILABLE FOR PROJECTS</span>
            </div>
            {[
              { label: "Email", value: "mahpara.fariba@gmail.com", href: "mailto:mahpara.fariba@gmail.com" },
              { label: "LinkedIn", value: "linkedin.com/in/mahpara-nawal", href: "https://www.linkedin.com/in/mahpara-nawal-b96964239" },
              { label: "GitHub", value: "github.com/mahpara-nawal", href: "https://github.com/mahpara-nawal" },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="glass p-4 block transition-all duration-300 hover:border-[var(--accent)] hover:translate-x-1">
                <div className="text-[9px] tracking-[0.15em] uppercase font-mono mb-0.5" style={{ color: "var(--accent)" }}>{c.label}</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{c.value}</div>
                <div className="mt-1.5 text-[8px] font-mono tracking-wider" style={{ color: "var(--text-muted)" }}>
                  {c.label === "Email" ? "⟶ send a message" : "⟶ open profile"}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
