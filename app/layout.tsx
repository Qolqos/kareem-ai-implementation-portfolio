import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kareem-ai-implementation-portfolio.vercel.app"),
  title: {
    default: "Kareem Singleton | AI Implementation Portfolio",
    template: "%s | Kareem Singleton"
  },
  description:
    "AI implementation portfolio covering recursive build systems, mobile screen intelligence, automation pipelines, and proof-driven product workflows.",
  openGraph: {
    title: "Kareem Singleton | AI Implementation Portfolio",
    description:
      "Proof-driven AI implementation systems, case studies, and recruiter-friendly architecture diagrams.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#06090f",
  colorScheme: "dark"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06090f]/88 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
            <Link href="/" className="text-sm font-semibold tracking-[0.22em] text-white uppercase">
              Kareem Singleton
            </Link>
            <nav className="flex items-center gap-5 text-sm text-white/68">
              <Link className="transition hover:text-white" href="/portfolio">
                Home
              </Link>
              <Link className="transition hover:text-white" href="/portfolio#featured-work">
                Projects
              </Link>
              <Link className="transition hover:text-white" href="/portfolio#capabilities">
                Capabilities
              </Link>
              <Link className="transition hover:text-white" href="/portfolio#about">
                About
              </Link>
              <Link className="transition hover:text-white" href="/resume/Kareem_Singleton_Resume_2026.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </Link>
              <Link className="transition hover:text-white" href="/portfolio#contact">
                Contact
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-white/10 bg-[#05070c]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/52 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>AI implementation portfolio by Kareem Singleton.</p>
            <p>Built for Vercel with Next.js.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
