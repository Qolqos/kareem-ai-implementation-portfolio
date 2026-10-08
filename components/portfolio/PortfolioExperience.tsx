"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, ExternalLink, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { EvidenceViewer } from "./EvidenceViewer";
import { approvedCopy, findArtifact, projects, spiralExplorations, type RichBlock } from "@/lib/data/portfolio-rebuild";

function RichText({ blocks }: { blocks: readonly RichBlock[] }) {
  return <>{blocks.map((block) => block.kind === "emphasis" ? <p key={block.id}><strong>{block.text}</strong></p> : <p key={block.id}>{block.text}</p>)}</>;
}

function Slot({ id, detail, kind }: { id: string; detail: string; kind: "landscape" | "portrait" | "transform" }) {
  return <div className={`media-slot media-slot--${kind}`}><div className="media-slot__screen"><span className="eyebrow">{id}</span><p>{detail}</p><small>CAPTURE REQUIRED</small></div></div>;
}

export function PortfolioExperience() {
  const [spiral, setSpiral] = useState<string | null>(null);
  const [openProject, setOpenProject] = useState<Record<string, string | undefined>>({});
  const [evidence, setEvidence] = useState<string | null>(null);
  const node = spiralExplorations.find((item) => item.id === spiral);
  const activeArtifact = findArtifact(evidence ?? "");
  const restoreFromLocation = () => {
    const parameters = new URLSearchParams(window.location.search);
    const requestedSpiral = parameters.get("spiral");
    const requestedEvidence = parameters.get("evidence");
    const [requestedProject, requestedPanel] = (parameters.get("explore") ?? "").split(":");
    setSpiral(spiralExplorations.some((item) => item.id === requestedSpiral) ? requestedSpiral : null);
    setEvidence(findArtifact(requestedEvidence ?? "") ? requestedEvidence : null);
    setOpenProject(projects.some((project) => project.slug === requestedProject && project.explorations.some((item) => item.id === requestedPanel)) ? { [requestedProject]: requestedPanel } : {});
  };
  useEffect(() => {
    restoreFromLocation();
    window.addEventListener("popstate", restoreFromLocation);
    return () => window.removeEventListener("popstate", restoreFromLocation);
  }, []);
  useEffect(() => {
    const url = new URL(window.location.href);
    spiral ? url.searchParams.set("spiral", spiral) : url.searchParams.delete("spiral");
    evidence ? url.searchParams.set("evidence", evidence) : url.searchParams.delete("evidence");
    const activeProject = Object.entries(openProject).find(([, panel]) => panel)?.join(":");
    activeProject ? url.searchParams.set("explore", activeProject) : url.searchParams.delete("explore");
    const nextUrl = `${url.pathname}${url.search}${url.hash}`;
    if (nextUrl !== `${window.location.pathname}${window.location.search}${window.location.hash}`) window.history.pushState({}, "", nextUrl);
  }, [spiral, openProject, evidence]);
  return <main>
    <section className="hero"><div className="shell hero__grid"><div className="hero__copy"><p className="eyebrow">KAREEM SINGLETON · PHILADELPHIA, PA</p><h1>{approvedCopy.hero[0].text}</h1><p className="hero__body">{approvedCopy.hero[1].text}</p><p className="identity">Kareem Singleton<br /><span>AI Systems Architect · Product Builder · Founder, Capsule Foundry</span></p><div className="actions"><a className="button button--gold" href="#spiral">Explore my work <ArrowDown /></a><a className="button button--quiet" href="#contact">Work with me <ArrowUpRight /></a><a className="text-link" href="/resume/Kareem_Singleton_Resume_2026.pdf" target="_blank">View résumé <Download /></a></div></div><div className="hero__stage"><Slot id="S1-C01" kind="landscape" detail="Spiral One control-plane stage. A reviewed, sanitized real-build capture belongs here." /><p className="provenance">CURRENT · REAL BUILD · SANITIZE BEFORE PUBLISHING</p></div></div></section>

    <section id="about" className="section section--about"><div className="shell about"><div className="about__image"><Image src="/images/kareem-singleton.jpg" alt="Kareem Singleton" width={1170} height={1532} sizes="(min-width: 900px) 36vw, 80vw" priority /></div><div className="about__copy"><p className="eyebrow">ABOUT</p><h2>I built my way in.</h2><RichText blocks={approvedCopy.about} /><a href="#spiral" className="text-link">Meet Spiral One <ArrowDown /></a></div></div></section>

    <section id="spiral" className="section spiral"><div className="shell"><div className="spiral__intro"><p className="eyebrow">THE SYSTEM BEHIND THE SYSTEMS</p><h2>The system I built to build systems.</h2><div className="prose"><RichText blocks={approvedCopy.spiralIntro} /></div></div><div className="spiral-stage"><Slot id="S1-C01" kind="landscape" detail="Wide Spiral One product stage. Sanitized real media will replace this exact slot." /><button type="button" className="evidence-link" onClick={() => setEvidence("s1-c01")}>Inspect evidence</button></div>
      <div className="spiral-architecture"><div className="architecture-art"><Image src="/images/spiral-one-architecture.png" alt="Seven holographic system layers connected by a luminous vertical beam and golden helix" width={1024} height={1536} sizes="(min-width: 900px) 48vw, 100vw" priority />{spiralExplorations.map((item, index) => <span key={item.id} className={`architecture-art__label architecture-art__label--${index + 1}`}><b>{String(index + 1).padStart(2, "0")}</b>{item.label}</span>)}</div><div className="architecture-explorer"><div className="architecture-copy"><p className="eyebrow">SPIRAL ONE ARCHITECTURE</p><h3>Choose a system layer to explore how it carries the work.</h3><RichText blocks={approvedCopy.saveThinking} /></div><div className="architecture-map" aria-label="Spiral One architecture explorer">{spiralExplorations.map((item, index) => <button key={item.id} type="button" className={`architecture-node ${spiral === item.id ? "is-selected" : ""}`} onClick={() => setSpiral(item.id)} aria-pressed={spiral === item.id}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.label}</strong><small>{item.copy[0]}</small><ArrowUpRight /></button>)}</div>
        {node ? <aside className="spiral-panel" aria-live="polite"><button className="icon-button" type="button" onClick={() => setSpiral(null)} aria-label="Close Spiral One detail"><X /></button><p className="eyebrow">{node.label}</p><h3>{node.heading}</h3>{node.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="panel-actions"><Link className="text-link" href={node.technical}>Go deeper <ArrowUpRight /></Link><button type="button" className="evidence-link" onClick={() => setEvidence(node.artifact)}>Inspect evidence</button></div></aside> : null}</div></div></div></section>

    <section className="section loop"><div className="shell"><p className="eyebrow">THE LOOP</p><h2>I want the build to teach the builder.</h2><div className="loop__line"><span>Council</span><i /> <span>Build</span><i /> <span>Verification</span><i /> <span>FHRA</span><i /> <span>Knowledge</span><i /> <span>Next build</span></div><p className="loop__body">Council can expose something we didn&apos;t consider. The build tests the idea against reality. Verification checks what actually happened. FHRA steps back and looks at the whole thing. The Empirical Knowledge Ledger keeps what was worth learning.</p><p className="loop__statement">The next problem shouldn&apos;t always start from zero.</p><Link href="/work/spiral-one" className="text-link">Go deeper into Spiral One <ArrowUpRight /></Link></div></section>

    <section id="work" className="section built"><div className="shell"><div className="built__heading"><p className="eyebrow">BUILT THROUGH SPIRAL ONE</p><h2>The proof is in what it builds.</h2><RichText blocks={approvedCopy.builtThrough} /></div>{projects.filter((project) => project.slug !== "spiral-one").map((project, index) => { const openId = openProject[project.slug]; const exploration = project.explorations.find((item) => item.id === openId); return <article key={project.slug} className={`project project--${project.slug}`} id={project.slug}><div className="project__media"><Slot id={project.media[0].id.toUpperCase()} kind={project.media[0].orientation === "transform" ? "transform" : "portrait"} detail={project.media[0].detail} /></div><div className="project__content"><p className="eyebrow">0{index + 1} · {project.eyebrow}</p><h2>{project.thesis}</h2>{project.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<p className="technologies">{project.technologies.join(" · ")}</p><div className="explore-list">{project.explorations.map((item) => <button type="button" key={item.id} className={openId === item.id ? "is-open" : ""} onClick={() => setOpenProject((state) => ({ ...state, [project.slug]: state[project.slug] === item.id ? undefined : item.id }))}>{item.label}<Plus /></button>)}</div>{exploration ? <div className="project-explore"><p className="eyebrow">{exploration.label}</p><h3>{exploration.heading}</h3>{exploration.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="panel-actions"><Link className="text-link" href={exploration.technical}>Technical details <ArrowUpRight /></Link><button type="button" className="evidence-link" onClick={() => setEvidence(exploration.artifact)}>Inspect evidence</button></div></div> : null}<Link href={`/work/${project.slug}`} className="project-deep-link">Open the hood <ArrowUpRight /></Link></div></article> })}</div></section>

    <section className="section thesis"><div className="shell thesis__inner"><p className="eyebrow">DIFFERENT PROBLEMS. SAME INSTINCT.</p><h2>What can the system handle so the person can spend their intelligence on what actually needs them?</h2><p>That&apos;s the kind of software I want to build.</p></div></section>
    <section className="section closing"><div className="shell"><p className="eyebrow">A NOTE TO THE BUILDER</p><h2>Let the dreamers keep dreaming.</h2><div className="closing__copy"><RichText blocks={approvedCopy.closing} /></div></div></section>
    <section id="contact" className="contact"><div className="shell contact__inner"><div><p className="eyebrow">WORK WITH ME</p><h2>Let&apos;s build around the idea.</h2></div><div className="actions"><a className="button button--gold" href="https://calendly.com/capsulefoundry/ai-automation-discovery-call" target="_blank">Work with me <ExternalLink /></a><a className="button button--quiet" href="/resume/Kareem_Singleton_Resume_2026.pdf" target="_blank">View résumé <Download /></a></div></div></section>
    <EvidenceViewer artifact={activeArtifact} onClose={() => setEvidence(null)} />
  </main>;
}
