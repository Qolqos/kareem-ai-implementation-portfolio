import { notFound, redirect } from "next/navigation";
import { findProject } from "@/lib/data/portfolio-rebuild";

export default async function LegacyPortfolioRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!findProject(slug)) notFound();
  redirect(`/work/${slug}`);
}
