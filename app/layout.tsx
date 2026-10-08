import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/portfolio/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://kareem-ai-implementation-portfolio.vercel.app"),
  title: {
    default: "Kareem Singleton | AI Systems Architect",
    template: "%s | Kareem Singleton"
  },
  description:
    "Systems, products, and evidence built around a simple idea: complexity belongs inside the system, not on the person using it.",
  openGraph: {
    title: "Kareem Singleton | AI Implementation Portfolio",
    description:
      "A progressive-disclosure portfolio of systems built by Kareem Singleton.",
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
        <SiteHeader />
        {children}
        <footer className="border-t border-white/10 bg-[#05070c]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/52 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>Kareem Singleton · AI Systems Architect · Product Builder</p>
            <p>Complexity belongs inside the system.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
