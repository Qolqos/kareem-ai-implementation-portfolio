"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { VerificationReceipt } from "@/lib/data/verification-receipts";
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
    closeRef.current?.focus({preventScroll:true});
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
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", keyboard); originRef.current?.focus({preventScroll:true}); };
  }, [artifact?.id]);
  if (!artifact) return null;
  const media = artifact.media;
  return <div className="evidence-backdrop" role="presentation" onMouseDown={(e) => e.currentTarget === e.target && onClose()}>
    <section ref={dialogRef} className="evidence-viewer" role="dialog" aria-modal="true" aria-labelledby="evidence-title">
      <header className="evidence-header"><div><p className="eyebrow">{artifact.project} · {media?.kind === "capture" ? "Interface capture" : media?.kind === "demonstration" ? "Product demonstration" : "Verification receipt"}</p><h2 id="evidence-title">{artifact.title}</h2></div><button ref={closeRef} type="button" className="icon-button" onClick={onClose} aria-label="Close evidence viewer"><X /></button></header>
      <div className={`evidence-artifact evidence-artifact--${artifact.type} ${media ? "evidence-artifact--media" : ""}`}>
        {artifact.receipt ? <Receipt receipt={artifact.receipt}/> : media?.publication === "approved" && media.assetPath && media.width && media.height ? <figure className="evidence-media"><Image src={media.assetPath} alt={media.alt} width={media.width} height={media.height} sizes="(max-width:600px) 95vw,850px"/><figcaption>{media.caption}</figcaption><a className="text-link" href={media.assetPath} target="_blank" rel="noopener noreferrer">Open full-resolution image ↗</a></figure> : media?.publication === "approved" && media.youtubeId ? <figure className="evidence-media"><div className={`demo-player demo-player--${media.orientation}`}><iframe src={`https://www.youtube-nocookie.com/embed/${media.youtubeId}?autoplay=0&controls=1&playsinline=1`} title={media.title} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/></div><figcaption>{media.caption}</figcaption><a className="text-link" href={`https://www.youtube.com/watch?v=${media.youtubeId}`} target="_blank" rel="noopener noreferrer">Open on YouTube ↗</a><small>If the embedded player is unavailable, use the direct YouTube link.</small></figure> : media ? <p>{media.caption}. No capture is attached.</p> : artifact.slot ? <><div className="artifact-lines" aria-hidden="true"><i /><i /><i /><i /></div><p>{artifact.slot}</p><small>This is an exact reserved capture slot, not a substitute artifact.</small></> : <p>No reviewed execution receipt is attached to this record.</p>}
      </div>
      <div className="evidence-grid"><div><p className="eyebrow">Provenance</p><p>{artifact.provenance}</p></div><div><p className="eyebrow">Status</p><p>{artifact.status}</p></div></div>
      <div className="evidence-copy"><p>{artifact.description}</p><p><strong>Claim supported:</strong> {artifact.supports}</p><p><strong>Limitations:</strong> {artifact.limitations}</p></div>
    </section>
  </div>;
}

function Receipt({receipt}: {receipt: VerificationReceipt}) {
 return <div className="verification-receipt">
   <dl className="receipt-facts">{[["Execution date",receipt.executionDate],["Run",receipt.runId],["Environment",receipt.environment],["Result",receipt.result],["Scope",receipt.scope],["Version binding",receipt.versionBinding],["Evidence quality",receipt.evidenceGrade]].filter(([,value])=>value).map(([name,value])=><div key={name}><dt>{name}</dt><dd>{value}</dd></div>)}</dl>
   {receipt.metrics&&<dl className="receipt-metrics">{receipt.metrics.map(metric=><div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>}
   {receipt.checks&&<section><h3>Recorded checks</h3><ul className="receipt-checks">{receipt.checks.map((check,index)=><li key={index}><code>{check.name}</code><span>{check.result}</span></li>)}</ul></section>}
   {receipt.tables?.map(table=><section key={table.title}><h3>{table.title}</h3><div className="receipt-table" tabIndex={0} role="region" aria-label={table.title+" table; scroll horizontally for additional columns"}><table><caption className="sr-only">{table.title}</caption><thead><tr>{table.columns.map(column=><th key={column} scope="col">{column}</th>)}</tr></thead><tbody>{table.rows.map((row,index)=><tr key={index}>{row.map((cell,i)=><td key={i}>{cell}</td>)}</tr>)}</tbody></table></div></section>)}
   {receipt.excerpts?.map(excerpt=><section key={excerpt.title}><h3>{excerpt.title}</h3><pre>{excerpt.text}</pre></section>)}
   {receipt.conditions&&<section><h3>Measurement and execution conditions</h3><ul>{receipt.conditions.map(condition=><li key={condition}>{condition}</li>)}</ul></section>}
   <section><h3>Limitations retained</h3><ul>{receipt.limitations.map(limit=><li key={limit}>{limit}</li>)}</ul></section>
   <section><h3>Source fingerprints</h3><p>Reviewed excerpts and aggregates are shown here. Private originals are retained for provenance review and are not public downloads.</p><ul className="receipt-sources">{receipt.sources.map(source=><li key={source.hash}><strong>{source.label}</strong><span>{source.hashMethod}</span><code>{source.hash}</code></li>)}</ul></section>
 </div>;
}
