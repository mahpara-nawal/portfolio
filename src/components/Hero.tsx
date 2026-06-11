"use client";

import { useEffect, useState } from "react";

const roles = ["UI/UX Designer?", "Fullstack Developer?", "AI Engineer"];

const para1 = "As a UI/UX designer, I lived in Figma and Zeplin. Every pixel aligned, every micro‑interaction accounted for. I built design systems so teams could scale without breaking.";
const para2 = "As an AI engineer, I live in Jupyter and FastAPI. I write loss functions that punish wrong answers, build inference pipelines that run in under 200ms, and validate models the same way I used to user‑test prototypes that too relentlessly.";
const tagline = "Same craft. Different tools.";

export default function Hero() {
  const [roleText, setRoleText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [descPhase, setDescPhase] = useState(0);
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");
  const [desc3, setDesc3] = useState("");

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const current = roles[roleIdx];
    if (!deleting && roleText.length < current.length) {
      t = setTimeout(() => setRoleText(current.slice(0, roleText.length + 1)), 70);
    } else if (!deleting && roleText.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && roleText.length > 0) {
      t = setTimeout(() => setRoleText(roleText.slice(0, -1)), 30);
    } else if (deleting && roleText.length === 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [roleText, deleting, roleIdx]);

  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!contentVisible) return;
    let t: ReturnType<typeof setTimeout>;
    if (descPhase === 0 && desc1.length < para1.length) {
      t = setTimeout(() => setDesc1(para1.slice(0, desc1.length + 1)), 20);
    } else if (descPhase === 0 && desc1.length === para1.length) {
      t = setTimeout(() => setDescPhase(1), 600);
    } else if (descPhase === 1 && desc2.length < para2.length) {
      t = setTimeout(() => setDesc2(para2.slice(0, desc2.length + 1)), 20);
    } else if (descPhase === 1 && desc2.length === para2.length) {
      t = setTimeout(() => setDescPhase(2), 600);
    } else if (descPhase === 2 && desc3.length < tagline.length) {
      t = setTimeout(() => setDesc3(tagline.slice(0, desc3.length + 1)), 40);
    } else if (descPhase === 2 && desc3.length === tagline.length) {
      setDescPhase(3);
    }
    return () => clearTimeout(t);
  }, [contentVisible, descPhase, desc1, desc2, desc3]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="work"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 overflow-hidden pt-24"
    >
      {/* Decorative lines - hide on mobile */}
      <div className="hidden md:block absolute left-12 top-0 bottom-0 w-px pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(176,38,255,0.04), transparent)" }} />
      <div className="hidden md:block absolute left-12 top-[20%] w-4 h-px pointer-events-none" style={{ background: "var(--accent)" }} />
      <div className="hidden md:block absolute left-12 top-[60%] w-8 h-px pointer-events-none" style={{ background: "linear-gradient(to right, var(--accent), transparent)" }} />

      {/* Diagonal overlay */}
      <div className="bg-diagonal absolute inset-0 z-0 pointer-events-none" />

      {/* Floating dot */}
      <div className="absolute pointer-events-none" style={{ top: "25%", right: "15%", width: 3, height: 3, borderRadius: "50%", background: "var(--accent)", opacity: 0.12, boxShadow: "0 0 20px var(--accent)", animation: "float 4s ease-in-out infinite" }} />

      {/* Initial processing text over binary rain */}
      {!contentVisible && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="glass px-10 py-6 rounded-3xl pointer-events-auto">
            <span
              className="text-3xl sm:text-4xl tracking-[0.25em] animate-pulse"
              style={{ color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              PROCESSING...
            </span>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-[1300px] mx-auto w-full glass p-4 sm:p-6 md:p-12 rounded-3xl transition-all duration-1000" style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? "translateY(0)" : "translateY(12px)" }}>
        <div className="grid md:grid-cols-12 gap-4 sm:gap-6 items-center">
          <div className="md:col-span-7 flex flex-col items-center md:items-start">
            <div className="mb-4 flex items-center gap-2">
              <span className="w-6 h-[2px]" style={{ background: "var(--accent)" }} />
              <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: "var(--text-muted)", fontFamily: "'ASTONIX', 'Audiowide', 'Chakra Petch', sans-serif" }}>
                Mahpara Nawal
              </span>
            </div>

            <div
              className="mb-6 overflow-hidden w-full max-w-[400px] sm:max-w-[500px] aspect-square mx-auto md:mx-0"
              style={{
                clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0 100%, 0 16%)",
                boxShadow: "0 0 0 1px rgba(176,38,255,0.25), 0 0 20px rgba(176,38,255,0.08), 0 8px 32px rgba(0,0,0,0.5)",
                borderRadius: "0",
              }}
            >
              <img
                src="/portrait.jpg"
                alt="Mahpara Nawal"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-10 flex items-center mb-2 w-full overflow-hidden">
              <span
                className="text-lg sm:text-xl md:text-2xl tracking-wider truncate"
                style={{ color: "var(--text-muted)", fontFamily: "'ASTONIX', 'Orbitron', 'Audiowide', sans-serif", textShadow: "0 0 8px rgba(176,38,255,0.04)" }}
              >
                {roleText}
                <span className="ml-0.5" style={{ color: "var(--accent)" }}>|</span>
              </span>
            </div>
          </div>

            <div className="md:col-span-5">
            <h2 className="heading-lg text-[clamp(2rem,6vw,4.5rem)] mb-6 text-center md:text-left" style={{ fontFamily: "'ASTONIX', 'Orbitron', 'Audiowide', sans-serif", textShadow: "0 0 12px rgba(176,38,255,0.06)" }}>
              Profile
            </h2>
            <div className="text-sm sm:text-base leading-relaxed space-y-5" style={{ color: "#999", fontFamily: "'JetBrains Mono', 'Chakra Petch', monospace", textShadow: "0 0 12px rgba(176,38,255,0.03)" }}>
              <p className="tracking-wide min-h-[1.5em] break-words">{desc1}{descPhase === 0 && desc1.length < para1.length ? <span className="ml-0.5" style={{ color: "var(--accent)" }}>|</span> : null}</p>
              <p className="tracking-wide min-h-[1.5em] break-words">{desc2}{descPhase === 1 && desc2.length < para2.length ? <span className="ml-0.5" style={{ color: "var(--accent)" }}>|</span> : null}</p>
              <p className="text-xs tracking-[0.2em] uppercase pt-3 min-h-[1.5em] break-words text-center md:text-left" style={{ color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace" }}>{desc3}{descPhase === 2 && desc3.length < tagline.length ? <span className="ml-0.5" style={{ color: "var(--accent)" }}>|</span> : null}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full sm:w-auto">
              <a href="#projects" className="btn-primary w-full sm:w-auto text-center"><span>View Projects</span></a>
              <a href="#contact" className="btn-ghost w-full sm:w-auto text-center">Get in Touch</a>
            </div>

            <div className="flex items-center justify-center gap-4 mt-12">
              <a href="mailto:mahpara.fariba@gmail.com" className="hover:text-[var(--accent)] transition-colors text-[var(--text-muted)]" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
              <span className="w-px h-3" style={{ background: "var(--border)" }} />
              <a href="https://www.linkedin.com/in/mahpara-nawal-b96964239" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors text-[var(--text-muted)]" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <span className="w-px h-3" style={{ background: "var(--border)" }} />
              <a href="https://github.com/mahpara-nawal" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors text-[var(--text-muted)]" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {!scrolled && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="scroll-mouse" />
        </div>
      )}
    </section>
  );
}
