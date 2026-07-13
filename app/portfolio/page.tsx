import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck, Workflow } from "lucide-react";

import { MermaidDiagramCard } from "@/components/portfolio/MermaidDiagramCard";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import {
  featuredPortfolioProjects,
  portfolioProjects,
} from "@/lib/data/portfolio-projects";

export const metadata: Metadata = {
  title: "Kareem Singleton | AI Automation Engineer",
  description:
    "AI automation portfolio covering mobile AI prototypes, workflow automation, data transformation pipelines, and practical product systems.",
};

const proofStats = [
  { label: "Featured builds", value: "4" },
  { label: "Systems mapped", value: "10" },
  { label: "Contact paths", value: "3" },
];

const capabilities = [
  "AI automation systems",
  "Agent workflows",
  "AI product prototyping",
  "Data transformation pipelines",
  "Mobile AI applications",
  "Workflow optimization",
];

export default function PortfolioPage() {
  return (
    <main className="cf-page-shell">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 cf-proof-grid opacity-25" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-8 lg:py-24">
          <div className="space-y-7">
            <span className="cf-kicker">Kareem Singleton</span>
            <div className="max-w-4xl space-y-5">
              <h1 className="cf-display text-5xl sm:text-6xl xl:text-7xl">
                AI Automation Engineer
                <span className="cf-display-serif block text-[1.04em] text-[var(--cf-cta)]">
                  and product systems builder.
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--cf-text-soft)]">
                I design and build practical AI systems, from automation pipelines and decision
                engines to mobile AI prototypes, with an emphasis on reliability, explainability,
                and real-world workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="#featured-work" className="cf-button cf-button-primary">
                View projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#capabilities" className="cf-button cf-button-secondary">
                Capabilities
                <Workflow className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="rounded-[28px] border border-white/10 bg-[#101722]/92 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="cf-micro-label">Focus</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  AI systems that move from prototype to usable workflow.
                </h2>
              </div>
              <ShieldCheck className="h-9 w-9 text-[var(--cf-highlight)]" />
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--cf-text-soft)]">
              The work below emphasizes implementation, architecture, and clear evidence: what was
              built, what problem it solves, and how the system operates.
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
            <p className="cf-micro-label">Featured projects</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Systems that show implementation depth
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[var(--cf-text-soft)]">
            A focused selection of AI workflows, automation systems, and product prototypes across
            mobile AI, data transformation, career automation, and AI-assisted development.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {featuredPortfolioProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
      </section>

      <section id="diagram-system" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="cf-micro-label">Architecture</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            How the systems work
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--cf-text-soft)]">
            Each diagram shows the main path from input to processing to output, so the technical
            shape of the project is easy to understand before reading the deeper case study.
          </p>
        </div>
        <div className="grid gap-6">
          {featuredPortfolioProjects.map((project) => (
            <MermaidDiagramCard key={project.slug} diagram={project.primaryDiagram} compact />
          ))}
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="cf-micro-label">Capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Practical AI implementation across product and workflow systems
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--cf-text-soft)]">
            The projects combine AI models, structured data flows, interface design, automation
            logic, and deployment-aware software engineering.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability) => (
            <div key={capability} className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5">
              <p className="text-lg font-semibold text-white">{capability}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="cf-micro-label">Additional systems</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              More workflow and product experiments
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

      <section id="about" className="mx-auto max-w-7xl px-6 pb-14 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-[#101722]/92 p-6 sm:p-8">
          <p className="cf-micro-label">About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            I build AI systems that bridge prototypes and usable products.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[var(--cf-text-soft)]">
            My work focuses on practical implementation: combining AI models, automation tooling,
            software engineering, and structured workflows to create systems people can actually
            use. The portfolio emphasizes clear problem framing, visible architecture, and evidence
            of the workflow behind each build.
          </p>
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
