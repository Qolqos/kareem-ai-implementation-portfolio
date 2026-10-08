"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { EvidenceViewer } from "./EvidenceViewer";
import { findArtifact, layer3, projects, type Project } from "@/lib/data/portfolio-rebuild";

const spiralIds: Record<string, string> = { context: "context", council: "council", build: "routing", verify: "verify", fhra: "fhra", learn: "learn", recovery: "recovery" };
const technicalAliases: Record<string, Record<string, string[]>> = {
  "pocket-spiral": { inference: ["models"] },
  quel: { "interaction-model": ["skills"] },
  "ai-memory-card": { ingestion: ["archive"] },
};

export function WorkTechnical({ project }: { project: Project }) {
  const [evidence, setEvidence] = useState<string | null>(null);
  const sections = layer3[project.slug] ?? [];
  const next = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];
  return <main className="technical"><header className="technical-hero"><div className="shell"><Link href="/#work" className="back"><ArrowLeft /> Back to the work</Link><p className="eyebrow">{project.eyebrow}</p><h1>{project.title}</h1><p className="technical-hero__thesis">{project.thesis}</p><div className="technical-meta"><div><span>MY ROLE</span><p>{project.role}</p></div><div><span>OUTCOME / WHAT CHANGED</span><p>{project.outcome}</p></div></div></div></header>
    <div className="technical-rail"><div className="shell">{sections.map((section) => <a key={section.id} href={`#${project.slug === "spiral-one" ? spiralIds[section.id] ?? section.id : section.id}`}>{section.title}</a>)}<a href="#boundaries">Boundaries</a><a href="#direction">Direction</a></div></div>
    <div className="shell technical-layout"><aside className="technical-aside"><p className="eyebrow">CURRENT</p><ul>{project.current.map((item) => <li key={item}>{item}</li>)}</ul></aside><div className="technical-body"><section id="overview"><p className="eyebrow">OVERVIEW</p><h2>{project.thesis}</h2>{project.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>{sections.map((section) => <section key={section.id} id={project.slug === "spiral-one" ? spiralIds[section.id] ?? section.id : section.id}>{(technicalAliases[project.slug]?.[section.id] ?? []).map((alias) => <span key={alias} id={alias} aria-hidden="true" />)}<p className="eyebrow">IMPLEMENTATION NOTES</p><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<button type="button" className="evidence-link" onClick={() => setEvidence(section.artifact)}>Open evidence</button></section>)}<section id="boundaries" className="boundary"><p className="eyebrow">BOUNDARIES</p><h2>What this is not claiming.</h2><p>The evidence viewer keeps the limitation attached to each artifact. Current capability is shown separately from future direction so the technical story stays useful without getting ahead of the work.</p></section><section id="direction" className="direction"><p className="eyebrow">DIRECTION</p><h2>What I am still testing.</h2><ul>{project.direction.map((item) => <li key={item}>{item}</li>)}</ul></section></div></div>
    <section className="next-system"><div className="shell"><p className="eyebrow">NEXT SYSTEM</p><Link href={`/work/${next.slug}`}>{next.title}<ArrowRight /></Link></div></section>
    <EvidenceViewer artifact={findArtifact(evidence ?? "")} onClose={() => setEvidence(null)} />
  </main>;
}
