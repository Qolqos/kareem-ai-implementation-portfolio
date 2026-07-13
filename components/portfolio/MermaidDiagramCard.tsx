import type { PortfolioDiagram } from "@/lib/data/portfolio-projects";

interface MermaidDiagramCardProps {
  diagram: PortfolioDiagram;
  compact?: boolean;
}

export function MermaidDiagramCard({ diagram, compact = false }: MermaidDiagramCardProps) {
  return (
    <section className="rounded-[24px] border border-white/10 bg-[#0b1019] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 px-5 py-4">
        <div>
          <p className="cf-micro-label">Architecture</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">{diagram.title}</h2>
        </div>
        <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
          System flow
        </span>
      </div>
      <div className="grid gap-0 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
          <pre
            className={`overflow-x-auto rounded-2xl border border-white/10 bg-black/35 p-4 font-mono text-[12px] leading-6 text-slate-100 ${
              compact ? "max-h-[360px]" : "max-h-[520px]"
            }`}
          >
            <code>{diagram.mermaid}</code>
          </pre>
        </div>
        <div className="p-5">
          <p className="cf-micro-label">What this proves</p>
          <p className="mt-3 text-base leading-7 text-[var(--cf-text-soft)]">{diagram.proves}</p>
          <div className="mt-6 rounded-2xl border border-amber-200/20 bg-amber-200/10 p-4">
            <p className="text-sm font-semibold text-amber-100">Why it matters</p>
            <p className="mt-2 text-sm leading-6 text-amber-50/78">
              The diagram makes the core workflow visible: where information enters, how it is
              processed, and what decision or artifact comes out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
