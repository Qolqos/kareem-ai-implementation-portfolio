import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck, Workflow } from "lucide-react";

import { MermaidDiagramCard } from "@/components/portfolio/MermaidDiagramCard";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import {
  homepagePortfolioProjects,
  portfolioHomepageRecommendations,
  portfolioProjects,
} from "@/lib/data/portfolio-projects";

export const metadata: Metadata = {
  title: "AI Implementation Portfolio",
  description:
    "A portfolio of AI implementation systems, recursive build infrastructure, iOS prototypes, automation workflows, and inspectable Mermaid architecture diagrams.",
};

const proofStats = [
  { label: "Priority case studies", value: "4" },
  { label: "System diagrams", value: "10" },
  { label: "Truth labels", value: "Every project" },
];

export default function PortfolioPage() {
  return (
    <main className="cf-page-shell">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 cf-proof-grid opacity-25" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-8 lg:py-24">
          <div className="space-y-7">
            <span className="cf-kicker">AI implementation portfolio</span>
            <div className="max-w-4xl space-y-5">
              <h1 className="cf-display text-5xl sm:text-6xl xl:text-7xl">
                Product systems
                <span className="cf-display-serif block text-[1.04em] text-[var(--cf-cta)]">
                  with inspectable proof.
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--cf-text-soft)]">
                A curated portfolio for AI implementation work: recursive build systems, mobile
                screen-intelligence prototypes, automation pipelines, and productized workflow
                infrastructure.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="#featured-work" className="cf-button cf-button-primary">
                Featured work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#diagram-system" className="cf-button cf-button-secondary">
                Diagram system
                <Workflow className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="rounded-[28px] border border-white/10 bg-[#101722]/92 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="cf-micro-label">Positioning</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  Built to read like a product proof room.
                </h2>
              </div>
              <ShieldCheck className="h-9 w-9 text-[var(--cf-highlight)]" />
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--cf-text-soft)]">
              Each project separates what is verified, what is implemented, and what is planned.
              That makes the work feel more credible because the claims are visible instead of
              inflated.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {proofStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/52">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="featured-work" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="cf-micro-label">Homepage case studies</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Show these four first
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[var(--cf-text-soft)]">
            Recommended homepage set: {portfolioHomepageRecommendations.join(", ")}. These give the
            strongest spread across operating system, career automation, data workflow, and mobile
            implementation.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {homepagePortfolioProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
      </section>

      <section id="diagram-system" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="cf-micro-label">Recruiter-friendly architecture</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Primary diagrams for fast comprehension
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--cf-text-soft)]">
            The diagram layer is intentionally simple: input, process, output, proof. The goal is
            five-second comprehension, with enough technical shape to earn credibility.
          </p>
        </div>
        <div className="grid gap-6">
          {homepagePortfolioProjects.map((project) => (
            <MermaidDiagramCard key={project.slug} diagram={project.primaryDiagram} compact />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="cf-micro-label">Detail-page systems</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Keep the rest on project pages
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
            Request walkthrough
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolioProjects
            .filter((project) => !project.homepagePriority)
            .map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-[28px] border border-cyan-200/20 bg-cyan-200/10 p-6 sm:p-8">
          <p className="cf-micro-label">Next step</p>
          <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Ready for a walkthrough, interview loop, or project review.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-cyan-50/78">
                Book a discovery call, review the LinkedIn profile, or send a direct note about AI
                automation, product systems, and implementation work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="https://calendly.com/capsulefoundry/ai-automation-discovery-call"
                target="_blank"
                rel="noreferrer"
                className="cf-button cf-button-primary justify-center"
              >
                Book a call
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/kareem-singleton-5b795a386/"
                target="_blank"
                rel="noreferrer"
                className="cf-button cf-button-secondary justify-center"
              >
                LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="mailto:capsulefoundry@gmail.com"
                className="cf-button cf-button-secondary justify-center"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
