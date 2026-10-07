import type { Metadata } from "next";
import { PortfolioExperience } from "@/components/portfolio/PortfolioExperience";

export const metadata: Metadata = {
  title: "Kareem Singleton | AI Systems Architect",
  description: "A portfolio of systems built to keep complexity inside the system and attention with the person using it.",
};

export default function PortfolioPage() { return <PortfolioExperience />; }
