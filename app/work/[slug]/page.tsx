import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkTechnical } from "@/components/portfolio/WorkTechnical";
import { findProject, projects } from "@/lib/data/portfolio-rebuild";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const project = findProject(slug); return { title: project ? `${project.title} | Kareem Singleton` : "Work | Kareem Singleton", description: project?.thesis }; }
export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = findProject(slug); if (!project) notFound(); return <WorkTechnical project={project} />; }
