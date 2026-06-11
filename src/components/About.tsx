"use client";

import { useEffect, useRef, useState } from "react";

const journey = [
  { year: "2021 – 2024", title: "UI/UX & Frontend", desc: "Design systems, pixel-perfect interfaces, and frontend development." },
  { year: "2024 – 2026", title: "AI Engineering", desc: "Deep learning, NLP, and production AI systems." },
];

const skillCats = [
  { cat: "Design", skills: [{ n: "Product Design", l: 95 }, { n: "Figma", l: 90 }, { n: "Design Systems", l: 85 }] },
  { cat: "AI & ML", skills: [{ n: "Deep Learning", l: 92 }, { n: "Computer Vision", l: 88 }, { n: "NLP", l: 82 }] },
  { cat: "Engineering", skills: [{ n: "Python", l: 90 }, { n: "TensorFlow/PyTorch", l: 88 }, { n: "React/Next.js", l: 85 }] },
];

const techs = ["Python", "TensorFlow", "PyTorch", "MONAI", "LangChain", "FastAPI", "Docker", "React", "Next.js", "TypeScript", "OpenAI", "AWS", "PostgreSQL"];

function SkillBar({ level }: { level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setW(level); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level]);
  return (
    <div ref={ref} className="w-full h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.03)" }}>
      <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${w}%`, background: "var(--accent)" }} />
    </div>
  );
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function AnimateIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return <div ref={ref} className={className} style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}>{children}</div>;
}

export default function About() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [wrapperVisible, setWrapperVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setWrapperVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    if (wrapperRef.current) obs.observe(wrapperRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-16 px-4 sm:px-8 overflow-hidden" id="about">
      {/* Decorative elements */}
      <div className="bg-diagonal absolute inset-0 z-0 pointer-events-none" />
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(176,38,255,0.03), transparent)" }} />
      <div className="hidden md:block absolute right-8 top-[30%] w-6 h-px pointer-events-none" style={{ background: "linear-gradient(to left, var(--accent), transparent)" }} />
      <div className="hidden md:block absolute left-0 top-[70%] w-6 h-px pointer-events-none" style={{ background: "linear-gradient(to right, var(--accent), transparent)" }} />

      <div ref={wrapperRef} className="max-w-[1300px] mx-auto relative z-10 glass p-4 sm:p-6 md:p-12 rounded-3xl transition-all duration-1000" style={{ opacity: wrapperVisible ? 1 : 0, transform: wrapperVisible ? "translateY(0)" : "translateY(20px)" }}>
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-5">
            <AnimateIn>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-[2px]" style={{ background: "var(--accent)" }} />
                <span className="section-label">About</span>
              </div>
              <h2 className="heading-lg text-[clamp(2.5rem,6vw,4.5rem)] mb-8">
                From
                <br />
                <span><span style={{ color: "var(--accent)" }}>pixels</span> to</span>
                <br />
                <span style={{ color: "var(--accent)" }}>prediction</span>
              </h2>

              <AnimateIn>
                <div className="glass p-4 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-4 h-[2px]" style={{ background: "var(--accent)" }} />
                    <h3 className="text-[10px] font-semibold text-white uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', 'Chakra Petch', monospace" }}>Timeline</h3>
                  </div>
                  <div className="space-y-0">
                    {journey.map((item, i) => (
                      <div key={item.year} className="flex gap-3 pb-4 last:pb-0 relative">
                        <div className="flex flex-col items-center">
                          <div className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ background: "var(--accent)", boxShadow: "0 0 6px var(--accent)" }} />
                          {i < journey.length - 1 && <div className="w-px flex-1 mt-1" style={{ background: "var(--border)" }} />}
                        </div>
                        <div>
                          <span className="text-[10px] font-mono tracking-wider" style={{ color: "#bbb", fontFamily: "'JetBrains Mono', monospace" }}>{item.year}</span>
                          <h4 className="text-sm font-semibold text-white mt-0.5" style={{ fontFamily: "'JetBrains Mono', 'Chakra Petch', monospace", textShadow: "0 0 8px rgba(176,38,255,0.04)" }}>{item.title}</h4>
                          <p className="text-xs mt-0.5" style={{ color: "#999", fontFamily: "'JetBrains Mono', monospace" }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn>
                <div className="text-center mb-3 mt-8">
                  <span className="section-label">Technologies</span>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {techs.map((t) => (<span key={t} className="chip">{t}</span>))}
                </div>
              </AnimateIn>
            </AnimateIn>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-8">
            {skillCats.map((c) => (
              <AnimateIn key={c.cat}>
                <div className="glass p-6 relative">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-5 h-[2px]" style={{ background: "var(--accent)" }} />
                    <h3 className="text-xs font-semibold text-white uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', 'Chakra Petch', monospace" }}>{c.cat}</h3>
                  </div>
                  <div className="space-y-3">
                    {c.skills.map((s) => (
                      <div key={s.n}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-white/80" style={{ fontFamily: "'JetBrains Mono', 'Chakra Petch', monospace", textShadow: "0 0 8px rgba(176,38,255,0.03)" }}>{s.n}</span>
                          <span className="text-xs font-mono" style={{ color: "#bbb", fontFamily: "'JetBrains Mono', monospace" }}>{s.l}%</span>
                        </div>
                        <SkillBar level={s.l} />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
