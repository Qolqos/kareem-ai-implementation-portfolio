import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../lib/data/portfolio-rebuild.ts", import.meta.url), "utf8");
const experience = readFileSync(new URL("../components/portfolio/PortfolioExperience.tsx", import.meta.url), "utf8");
const technical = readFileSync(new URL("../components/portfolio/WorkTechnical.tsx", import.meta.url), "utf8");
const header = readFileSync(new URL("../components/portfolio/SiteHeader.tsx", import.meta.url), "utf8");
const styles = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");

const required = [
  "HOME.HERO.HEADLINE", "HOME.SPIRAL.INTRO.08", "HOME.SPIRAL.SAVE.03", "HOME.BUILT_THROUGH.05", "HOME.CLOSING.03",
  "You get an offer: $8 for 4.2 miles and 24 minutes.", "Is that good?",
  "“Done” and “verified” are not the same thing.", "Fractal Holistic Recursive Audit", "Empirical Knowledge Ledger",
  "overhead around it.", "export const layer3",
];
for (const phrase of required) if (!source.includes(phrase)) throw new Error(`Missing approved copy or registry entry: ${phrase}`);
if (source.includes("You get an offer. $8. 24 minutes. 4.2 miles. Is that good?")) throw new Error("Deprecated Courier example remains in the registry.");
const ids = [...source.matchAll(/id: "(HOME\.[^"]+)"/g)].map((match) => match[1]);
if (new Set(ids).size !== ids.length) throw new Error("Duplicate approved-copy IDs detected.");
if (!experience.includes("approvedCopy") || !technical.includes("layer3")) throw new Error("Rendered components are not connected to the source registries.");
for (const behavior of ["popstate", "history.pushState", "spiral", "explore", "evidence"]) if (!experience.includes(behavior)) throw new Error(`Missing portfolio state-restoration behavior: ${behavior}`);
for (const behavior of ["architecture-disc", "hoveredLayer", "openLayer", "closeLayer"]) if (!experience.includes(behavior)) throw new Error(`Missing architecture-explorer behavior: ${behavior}`);
for (const behavior of ["architecture-annotation", "architecture-inspection", "navSummary", "inspectionRef"]) if (!experience.includes(behavior)) throw new Error(`Missing V9 architecture-explorer behavior: ${behavior}`);
for (const behavior of [".architecture-art{position:relative", ".architecture-inspection{align-self:start", ".project__header{grid-column:1/-1}"]) if (!styles.includes(behavior)) throw new Error(`Missing V9 architecture-explorer styling: ${behavior}`);
for (const behavior of ["aria-expanded={open}", "mobile-navigation", "document.body.style.overflow", "event.key === \"Escape\""]) if (!header.includes(behavior)) throw new Error(`Missing responsive mobile-navigation behavior: ${behavior}`);
for (const behavior of ["@media(max-width:900px)", ".site-menu-trigger{display:grid}", ".spiral-architecture{grid-template-columns:1fr"]) if (!styles.includes(behavior)) throw new Error(`Missing responsive layout guard: ${behavior}`);
if (!source.includes("#field-testing") || !source.includes('id: "field-testing"')) throw new Error("Broken technical-link target: #field-testing");
for (const anchor of ["models", "skills", "archive"]) if (!source.includes(`#${anchor}`) || !technical.includes(`\"${anchor}\"`)) throw new Error(`Broken technical-link target: #${anchor}`);
console.log(`Editorial integrity check passed: ${ids.length} approved home-copy IDs, Layer 3 connected, Courier example validated.`);

if(styles.includes('.architecture-art{position:sticky')||styles.includes('.architecture-inspection{position:fixed')||styles.includes('.spiral-architecture.is-inspecting{grid-template-columns:')) throw new Error('Unstable architecture layout remains.');
for(const behavior of ['aria-controls={detailId}','aria-expanded={openId===item.id}','project.title','preventScroll:true']) if(!experience.includes(behavior)) throw new Error('Missing finishing behavior: '+behavior);
