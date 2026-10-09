"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Artifact } from "@/lib/data/portfolio-rebuild";

export function EvidenceViewer({ artifact, onClose }: { artifact: Artifact | undefined; onClose: () => void }) {
  const onCloseRef = useRef(onClose); onCloseRef.current = onClose;
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const originRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!artifact) return;
    originRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); event.stopImmediatePropagation(); onCloseRef.current(); }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button, [href], iframe, input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((item) => !item.hasAttribute("disabled"));
      if (!focusable.length) return;
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", keyboard);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", keyboard); originRef.current?.focus(); };
  }, [artifact?.id]);
  if (!artifact) return null;
  const media = artifact.media;
  return <div className="evidence-backdrop" role="presentation" onMouseDown={(e) => e.currentTarget === e.target && onClose()}>
    <section ref={dialogRef} className="evidence-viewer" role="dialog" aria-modal="true" aria-labelledby="evidence-title">
      <header className="evidence-header"><div><p className="eyebrow">{artifact.project} · {media?.kind === "capture" ? "Interface capture" : media?.kind === "demonstration" ? "Product demonstration" : "Verification receipt"}</p><h2 id="evidence-title">{artifact.title}</h2></div><button ref={closeRef} type="button" className="icon-button" onClick={onClose} aria-label="Close evidence viewer"><X /></button></header>
      <div className={`evidence-artifact evidence-artifact--${artifact.type} ${media ? "evidence-artifact--media" : ""}`}>
        {media?.publication === "approved" && media.assetPath && media.width && media.height ? <figure className="evidence-media"><Image src={media.assetPath} alt={media.alt} width={media.width} height={media.height} sizes="(max-width:600px) 95vw,850px"/><figcaption>{media.caption}</figcaption><a className="text-link" href={media.assetPath} target="_blank" rel="noopener noreferrer">Open full-resolution image ↗</a></figure> : media?.publication === "approved" && media.youtubeId ? <figure className="evidence-media"><div className={`demo-player demo-player--${media.orientation}`}><iframe src={`https://www.youtube-nocookie.com/embed/${media.youtubeId}?autoplay=0&controls=1&playsinline=1`} title={media.title} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/></div><figcaption>{media.caption}</figcaption><a className="text-link" href={`https://www.youtube.com/watch?v=${media.youtubeId}`} target="_blank" rel="noopener noreferrer">Open on YouTube ↗</a><small>If the embedded player is unavailable, use the direct YouTube link.</small></figure> : media ? <p>{media.caption}. No capture is attached.</p> : artifact.slot ? <><div className="artifact-lines" aria-hidden="true"><i /><i /><i /><i /></div><p>{artifact.slot}</p><small>This is an exact reserved capture slot, not a substitute artifact.</small></> : artifact.type === "TestArtifact" ? <><div className="artifact-test" aria-hidden="true"><i>✓</i><span>fixture / source-inspection receipt</span><i>✓</i><span>claim and limitation retained</span></div><p>Reviewed test evidence is described below. The raw test artifact is intentionally not embedded as a generic visual proxy.</p></> : artifact.type === "DataArtifact" ? <><div className="artifact-data" aria-hidden="true"><span>MODEL</span><span>DEVICE</span><span>RUN</span><span>RESULT</span></div><p>Structured benchmark evidence is available for review; raw run records remain withheld until identifier review is complete.</p></> : artifact.type === "PipelineArtifact" ? <><div className="artifact-pipeline" aria-hidden="true"><span>INPUT</span><i /> <span>PROCESS</span><i /> <span>OUTPUT</span></div><p>Pipeline evidence requires the specified controlled, synthetic demonstration.</p></> : <><div className="artifact-lines" aria-hidden="true"><i /><i /><i /><i /></div><p>Evidence is cataloged below; no public-safe derivative is attached to this record.</p></>}
      </div>
      <div className="evidence-grid"><div><p className="eyebrow">Provenance</p><p>{artifact.provenance}</p></div><div><p className="eyebrow">Status</p><p>{artifact.status}</p></div></div>
      <div className="evidence-copy"><p>{artifact.description}</p><p><strong>Claim supported:</strong> {artifact.supports}</p><p><strong>Limitations:</strong> {artifact.limitations}</p></div>
    </section>
  </div>;
}
