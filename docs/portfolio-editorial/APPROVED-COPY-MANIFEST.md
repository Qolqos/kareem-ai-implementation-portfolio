# Approved Copy Manifest

The typed registry lives in `lib/data/portfolio-rebuild.ts` as `approvedCopy` and `layer3`. Each home-copy record includes a stable ID, source reference, rich-text kind, and approved wording.

| Prefix | Route/component | Layer | Source |
| --- | --- | --- | --- |
| `HOME.HERO.*` | `/`, hero | 1 | Top Layer · HERO |
| `HOME.ABOUT.*` | `/`, about | 1 | Top Layer · ABOUT |
| `HOME.SPIRAL.INTRO.*` | `/`, Spiral intro | 1 | Top Layer · SPIRAL ONE |
| `HOME.SPIRAL.SAVE.*` | `/`, architecture intro | 1 | Top Layer · INSIDE SPIRAL ONE |
| `HOME.BUILT_THROUGH.*` | `/`, project transition | 1 | Top Layer · BUILT THROUGH SPIRAL ONE |
| `HOME.CLOSING.*` | `/`, closing | 1 | Top Layer · CLOSING; directive-approved mechanical correction |
| `layer3[project]` | `/work/[slug]` | 3 | Approved Layer 3 PDF, page range stored per section |

Approved exception registry: `HOME.CLOSING.02` changes the supplied word “bullshit” to “overhead” under Systems Directive §6. No other semantic rewrite is authorized by this registry.
