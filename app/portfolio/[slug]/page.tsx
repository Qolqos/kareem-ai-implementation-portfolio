import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Layers3 } from "lucide-react";

import { MermaidDiagramCard } from "@/components/portfolio/MermaidDiagramCard";
import { getPortfolioProject, portfolioProjects } from "@/lib/data/portfolio-projects";

interface PortfolioProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PortfolioProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    return {
      title: "Portfolio Project",
    };
  }

  return {
    title: `${project.name} Case Study`,
    description: project.summary,
  };
}

export default async function PortfolioProjectPage({ params }: PortfolioProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="cf-page-shell">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-18">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/64 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Portfolio
          </Link>
          <div className="mt-9 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="cf-micro-label">{project.eyebrow}</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                {project.name}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--cf-text-soft)]">
                {project.summary}
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
              <p className="cf-micro-label">Build status</p>
              <p className="mt-3 text-2xl font-semibold text-white">{project.status}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--cf-text-soft)]">{project.value}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-6 py-10 md:grid-cols-3 lg:px-8">
        {[
          ["Problem", project.problem],
          ["Solution", project.solution],
          ["Outcome", project.outcome],
        ].map(([label, copy]) => (
          <div key={label} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
            <p className="cf-micro-label">{label}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--cf-text-soft)]">{copy}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <aside className="space-y-5">
          <div className="rounded-[24px] border border-white/10 bg-[#101722] p-5">
            <p className="cf-micro-label">My role</p>
            <p className="mt-3 text-base leading-7 text-[var(--cf-text-soft)]">{project.role}</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
            <p className="cf-micro-label">Stack and surfaces</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
          <p className="cf-micro-label">Evidence</p>
          <div className="mt-5 grid gap-3">
            {project.proof.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-white/8 bg-black/15 p-4">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--cf-highlight)]" />
                <p className="text-sm leading-6 text-white/76">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <MermaidDiagramCard diagram={project.primaryDiagram} />
      </section>

      {project.secondaryDiagram ? (
        <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <MermaidDiagramCard diagram={project.secondaryDiagram} />
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-[#0e1621] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="cf-micro-label">Evidence assets</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Proof artifacts
              </h2>
            </div>
            <Layers3 className="h-8 w-8 text-[var(--cf-highlight)]" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {project.visuals.map((visual) => (
              <div key={visual} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm font-semibold leading-6 text-white/84">{visual}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
