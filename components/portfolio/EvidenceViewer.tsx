"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Artifact } from "@/lib/data/portfolio-rebuild";

export function EvidenceViewer({ artifact, onClose }: { artifact: Artifact | undefined; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!artifact) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const escape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", escape);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", escape); };
  }, [artifact, onClose]);
  if (!artifact) return null;
  return <div className="evidence-backdrop" role="presentation" onMouseDown={(e) => e.currentTarget === e.target && onClose()}>
    <section className="evidence-viewer" role="dialog" aria-modal="true" aria-labelledby="evidence-title">
      <header className="evidence-header"><div><p className="eyebrow">{artifact.project} · {artifact.type}</p><h2 id="evidence-title">{artifact.title}</h2></div><button ref={closeRef} type="button" className="icon-button" onClick={onClose} aria-label="Close evidence viewer"><X /></button></header>
      <div className="evidence-artifact"><div className="artifact-lines" aria-hidden="true"><i /><i /><i /><i /></div><p>{artifact.slot ?? "Artifact metadata and a reviewed public derivative are available for inspection."}</p></div>
      <div className="evidence-grid"><div><p className="eyebrow">Provenance</p><p>{artifact.provenance}</p></div><div><p className="eyebrow">Status</p><p>{artifact.status}</p></div></div>
      <div className="evidence-copy"><p>{artifact.description}</p><p><strong>Claim supported:</strong> {artifact.supports}</p><p><strong>Limitations:</strong> {artifact.limitations}</p></div>
    </section>
  </div>;
}
