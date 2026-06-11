"use client";

export default function CaseStudyModal({ project, onClose }: { project: any; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      onClick={onClose}
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
    >
      <div
        className="w-full max-w-2xl p-10 md:p-12 relative glass rounded-3xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "modalIn 0.3s ease-out",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xs font-mono hover:text-white transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          ✕ CLOSE
        </button>

        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded" style={{ background: "rgba(176,38,255,0.1)", color: "var(--accent)" }}>
            {project.dept}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mt-3 mb-1" style={{ fontFamily: "'Orbitron', 'Chakra Petch', sans-serif" }}>
          {project.title}
        </h3>
        <p className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>{project.tag}</p>

        <div className="space-y-5 text-sm leading-relaxed mb-6">
          <div className="glass p-4 rounded-xl">
            <div className="text-xs font-bold font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--accent)" }}>▸ Problem</div>
            <p style={{ color: "#aaa" }}>{project.problem}</p>
          </div>
          <div className="glass p-4 rounded-xl">
            <div className="text-xs font-bold font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--accent)" }}>▸ Solution</div>
            <p style={{ color: "#aaa" }}>{project.solution}</p>
          </div>
          <div className="glass p-4 rounded-xl">
            <div className="text-xs font-bold font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--accent)" }}>▸ Result</div>
            <p style={{ color: "#aaa" }}>{project.result}</p>
          </div>
        </div>

        <div className="flex gap-2 mb-5">
          {project.metrics.map((m: any) => (
            <div key={m.label} className="glass metric-box flex-1">
              <div className="text-sm font-bold" style={{ color: "var(--accent)" }}>{m.value}</div>
              <div className="text-[9px] font-mono mt-0.5" style={{ color: "var(--text-muted)" }}>{m.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t: string) => (<span key={t} className="tag-sm">{t}</span>))}
        </div>
      </div>
    </div>
  );
}
