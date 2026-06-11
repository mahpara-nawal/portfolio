"use client";

import { useEffect, useRef, useState } from "react";

const projects: any[] = [
  {
    title: "ProstateNet",
    tag: "Healthcare · Ensemble deep learning for cancer detection",
    problem: "MRI-based detection has high false positives and negatives.",
    solution: "Ensemble of ResNet50, DenseNet121, and Vision Transformer with weighted voting.",
    result: "94.2% accuracy, 91.5% sensitivity across 1,200+ scans.",
    metrics: [{ label: "Accuracy", value: "94.2%" }, { label: "Sensitivity", value: "91.5%" }],
    tech: ["Python", "TensorFlow", "PyTorch", "MONAI"],
    dept: "Healthcare",
  },
  {
    title: "LexiQuery",
    tag: "Legal · AI-powered contract analysis platform",
    problem: "Legal teams spend 40% of billable hours reviewing contracts.",
    solution: "Fine-tuned LLM with clause extraction and risk scoring pipeline.",
    result: "70% faster review, 96% clause detection accuracy on 10k+ contracts.",
    metrics: [{ label: "Speed Gain", value: "70%" }, { label: "Accuracy", value: "96%" }],
    tech: ["Python", "OpenAI", "LangChain", "PostgreSQL"],
    dept: "Legal",
  },
  {
    title: "StyleLens",
    tag: "E-commerce · Visual search & recommendation engine",
    problem: "Shoppers struggle to find products that match their style.",
    solution: "CLIP-based visual similarity search with real-time personalization.",
    result: "32% increase in conversion, 2.8x higher avg order value.",
    metrics: [{ label: "Conversion", value: "+32%" }, { label: "AOV", value: "2.8x" }],
    tech: ["Python", "PyTorch", "CLIP", "Elasticsearch", "React"],
    dept: "E-commerce",
  },
  {
    title: "PulseSync",
    tag: "Media · Real-time content moderation pipeline",
    problem: "User-generated content platforms face toxic content at scale.",
    solution: "Multi-modal (text+image) toxicity classifier with human-in-the-loop.",
    result: "99.1% harmful content blocked, 87% fewer human moderator hours.",
    metrics: [{ label: "Block Rate", value: "99.1%" }, { label: "Mod Hours", value: "-87%" }],
    tech: ["Python", "TensorFlow", "AWS Rekognition", "Kafka", "React"],
    dept: "Media",
  },
  {
    title: "GuardRail",
    tag: "Autonomous · Predictive safety system for fleet vehicles",
    problem: "Fleet operators lack real-time collision risk awareness.",
    solution: "On-device computer vision + telemetry fusion for 200ms hazard detection.",
    result: "58% fewer incidents, 3.2s avg warning lead time across 500 vehicles.",
    metrics: [{ label: "Incidents", value: "-58%" }, { label: "Lead Time", value: "3.2s" }],
    tech: ["Python", "ONNX", "C++", "NVIDIA Jetson", "MQTT"],
    dept: "Autonomous",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, show] as const;
}

export default function Projects({ onOpenModal }: { onOpenModal: (p: any) => void }) {
  const [titleRef, titleShow] = useReveal();
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
    <section className="relative py-16 overflow-hidden" id="projects">
      {/* Diagonal overlay */}
      <div className="bg-diagonal absolute inset-0 z-0 pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-px pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(176,38,255,0.03), transparent)" }} />

      <div ref={wrapperRef} className="max-w-[1300px] mx-auto px-8 mb-16 relative z-10 glass p-8 md:p-12 rounded-3xl transition-all duration-1000" style={{ opacity: wrapperVisible ? 1 : 0, transform: wrapperVisible ? "translateY(0)" : "translateY(20px)" }}>
        <div
          ref={titleRef}
          className="grid md:grid-cols-12 gap-8"
          style={{ opacity: titleShow ? 1 : 0, transform: titleShow ? "translateY(0)" : "translateY(24px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-[2px]" style={{ background: "var(--accent)" }} />
              <span className="section-label">Projects</span>
            </div>
            <h2 className="heading-lg text-[clamp(2.5rem,6vw,4.5rem)]">
              <span style={{ whiteSpace: "nowrap" }}>Creating <span style={{ color: "var(--accent)" }}>impact</span></span>
              <br />
              <span style={{ whiteSpace: "nowrap" }}>across <span style={{ color: "var(--accent)" }}>all essential</span></span>
              <br />
              industries
            </h2>
            <p className="text-sm leading-relaxed tracking-wide mt-6" style={{ color: "#999", fontFamily: "'JetBrains Mono', 'Chakra Petch', monospace", textShadow: "0 0 12px rgba(176,38,255,0.03)" }}>
              Want to see how I turn design problems into AI solutions? &darr;
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
          </div>
        </div>
      </div>

      <div className="marquee-container relative z-10">
        <div className="marquee-track">
          {[...projects, ...projects].map((p, i) => (
            <MarqueeCard
              key={`${p.title}-${i}`}
              project={p}
              index={i % projects.length}
              onOpen={() => onOpenModal(p)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeCard({ project, index, onOpen }: { project: (typeof projects)[0]; index: number; onOpen: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="p-8 shrink-0 cursor-pointer transition-all duration-500 relative rounded-3xl"
      style={{
        width: 400,
        background: "rgba(18,18,18,0.85)",
        border: "1px solid rgba(176,38,255,0.15)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 24px 80px rgba(0,0,0,0.5)" : "0 0 0 1px rgba(176,38,255,0.04)",
      }}
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs px-2 py-0.5 rounded tracking-[0.15em]" style={{ background: "rgba(176,38,255,0.08)", color: "var(--accent)", fontFamily: "'ASTONIX', 'Orbitron', 'Audiowide', sans-serif" }}>
              {project.dept}
            </span>
            <span className="text-xs tracking-[0.1em]" style={{ color: "#bbb", fontFamily: "'ASTONIX', 'Orbitron', 'Audiowide', sans-serif" }}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-2" style={{ fontFamily: "'ASTONIX', 'Orbitron', 'Audiowide', sans-serif", textShadow: "0 0 8px rgba(176,38,255,0.04)" }}>
            {project.title}
          </h3>
          <p className="text-sm mt-1 tracking-[0.05em]" style={{ color: "#999", fontFamily: "'ASTONIX', 'Orbitron', 'Audiowide', sans-serif" }}>{project.tag}</p>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {project.metrics.map((m: any) => (
          <div key={m.label} className="metric-box flex-1 p-3">
            <div className="text-base font-bold" style={{ color: "var(--accent)", fontFamily: "'ASTONIX', 'Orbitron', 'Audiowide', sans-serif" }}>{m.value}</div>
            <div className="text-xs mt-1" style={{ color: "#bbb", fontFamily: "'ASTONIX', 'Orbitron', 'Audiowide', sans-serif" }}>{m.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.slice(0, 3).map((t: string) => (<span key={t} className="text-[10px] px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", color: "#999", fontFamily: "'ASTONIX', 'Orbitron', 'Audiowide', sans-serif" }}>{t}</span>))}
      </div>

      <div
        className="w-full py-3 text-sm font-medium rounded-lg transition-all duration-200 uppercase text-center"
        style={{
          background: hovered ? "rgba(176,38,255,0.12)" : "rgba(176,38,255,0.06)",
          border: `1px solid ${hovered ? "rgba(176,38,255,0.3)" : "rgba(176,38,255,0.12)"}`,
          color: "var(--accent)",
          fontFamily: "'ASTONIX', 'Orbitron', 'Audiowide', sans-serif",
          letterSpacing: "0.1em",
        }}
      >
        View Case Study →
      </div>
    </div>
  );
}
