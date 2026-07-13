import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import type { PortfolioProject } from "@/lib/data/portfolio-projects";

interface ProjectCardProps {
  project: PortfolioProject;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group rounded-[24px] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.055] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="cf-micro-label">{project.eyebrow}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{project.name}</h2>
        </div>
        <span className="rounded-full border border-white/12 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/66">
          {project.status}
        </span>
      </div>
      <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--cf-text-soft)]">{project.summary}</p>
      <div className="mt-4 rounded-2xl border border-white/8 bg-black/15 p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/46">Problem</p>
        <p className="mt-2 text-sm leading-6 text-white/74">{project.problem}</p>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {project.proof.slice(0, featured ? 3 : 2).map((item) => (
          <div key={item} className="flex gap-3 rounded-2xl border border-white/8 bg-black/15 p-3">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--cf-highlight)]" />
            <p className="text-sm leading-6 text-white/74">{item}</p>
          </div>
        ))}
      </div>
      <Link
        href={`/portfolio/${project.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition group-hover:text-white"
      >
        Open case study
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
