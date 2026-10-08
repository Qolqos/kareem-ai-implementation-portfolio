# Responsive Verification

Checked: 2026-10-07. The browser checks used Chrome DevTools device metrics, not a resized desktop window.

## Root causes repaired

- The global stylesheet had accumulated conflicting, duplicated generations of architecture, drawer, and mobile rules. Earlier fixed minimum column widths could survive at narrow sizes.
- The global header only had a desktop navigation; its links could exceed phone widths.
- The Spiral One introduction relied on implicit CSS-grid placement, which separated its eyebrow, heading, and explanatory copy more than intended.
- Existing mobile layouts needed explicit single-column rules, constrained media, and bounded sheet behavior rather than inheriting desktop dimensions.

## Measured viewport pass

Every viewport below reported `document.documentElement.scrollWidth === window.innerWidth` and `document.body.scrollWidth === window.innerWidth`.

| CSS viewport | Screenshot |
| --- | --- |
| 320px | `/tmp/portfolio-responsive-320-hero-cdp.png` |
| 375px | `/tmp/portfolio-responsive-375-hero-cdp.png` |
| 390px | `/tmp/portfolio-responsive-390-hero-cdp.png` |
| 430px | `/tmp/portfolio-responsive-430-hero-cdp.png` |
| 768px | `/tmp/portfolio-responsive-768-hero-cdp.png` |
| 1024px | `/tmp/portfolio-responsive-1024-hero-cdp.png` |
| 1440px | `/tmp/portfolio-responsive-1440-hero-cdp.png` |

## Inspected views

| View | Screenshot | Result |
| --- | --- | --- |
| 320px hero + navigation | `/tmp/portfolio-responsive-320-hero-cdp.png` | No clipping or horizontal overflow; compact trigger visible. |
| 1440px Spiral One intro | `/tmp/portfolio-1440-architecture-selected-final.png` | Heading and explanatory copy now share a deliberate two-column composition. |
| 1440px selected architecture workspace | `/tmp/portfolio-1440-architecture-selected-inspected.png` | Artwork, compact rows, and contained detail panel remain visible together. |
| 390px selected architecture sheet | `/tmp/portfolio-390-architecture-selected-final.png` | Detail panel becomes a scrollable bottom sheet. |
| 390px Courier stage | `/tmp/portfolio-390-courier-copilot-stage-final.png` | Portrait media slot and project copy remain contained. |
| 1024px Spiral One technical page | `/tmp/portfolio-1024-spiral-technical-final.png` | Header, metadata, technical rail, aside, and reading column are readable and contained. |

## Browser interaction pass

- Mobile menu: trigger opens a labelled dialog, locks document scrolling, focuses its first link, handles Escape, restores the trigger, and closes after a link follows.
- Architecture explorer: all seven layers opened with the matching inspection label; only one selected row appeared at a time; the technical link targeted the matching case-study anchor.
- Expanded explorer at 1440px retained `scrollWidth === innerWidth`; the 390px sheet also retained that equality.

## Remaining release consideration

The repository does not contain public-safe genuine captures for the project stages. Their specific slots remain intentionally restrained and are inventoried in [MEDIA-INVENTORY.md](./MEDIA-INVENTORY.md). No placeholder is represented as product evidence.
