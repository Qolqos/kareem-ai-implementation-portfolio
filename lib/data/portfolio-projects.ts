export type PortfolioProjectStatus =
  | "Built"
  | "Validated"
  | "Designed"
  | "Exploring";

export interface PortfolioDiagram {
  title: string;
  mermaid: string;
  proves: string;
}

export interface PortfolioProject {
  slug: string;
  name: string;
  shortName: string;
  status: PortfolioProjectStatus;
  homepagePriority: boolean;
  eyebrow: string;
  summary: string;
  role: string;
  problem: string;
  solution: string;
  outcome: string;
  value: string;
  proof: string[];
  stack: string[];
  visuals: string[];
  primaryDiagram: PortfolioDiagram;
  secondaryDiagram?: PortfolioDiagram;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "spiral-one",
    name: "Spiral One",
    shortName: "Spiral One",
    status: "Built",
    homepagePriority: true,
    eyebrow: "Recursive build operating system",
    summary:
      "A development system that captures lessons from completed work and turns them into reusable improvements for future builds.",
    role: "Product systems architect, workflow designer, and implementation partner through Codex.",
    problem:
      "AI-assisted builds can move quickly, but decisions, failures, and lessons often disappear after the session ends.",
    solution:
      "Spiral One preserves handoffs, audits, improvement logs, and project state so each build can improve the next one.",
    outcome:
      "The system creates a repeatable way to track what changed, why it changed, and how future work should adapt.",
    value:
      "Turns one-off build lessons into reusable project memory so future systems start with better defaults.",
    proof: [
      "Active build mode and handoff files are persisted in .spiral-one.",
      "Improvement lessons are logged as reusable project guidance instead of staying only in conversation context.",
      "FHRA, Packsmith, routing, council, and precedent surfaces exist as inspectable project files.",
    ],
    stack: ["Next.js", "TypeScript", "local JSON stores", "Codex workflow", "audit logs"],
    visuals: [
      "Control-room screenshot showing current session and handoff state",
      "Improvement-log excerpt with before/after/gain structure",
      "Learning loop diagram",
    ],
    primaryDiagram: {
      title: "Spiral One Learning Loop",
      mermaid: `flowchart TD
  A[Project build] --> B[Audit the work]
  B --> C[Find failure pattern]
  C --> D[Write improvement lesson]
  D --> E[Checkpoint and handoff]
  E --> F[Reusable doctrine]
  F --> G[Future project]
  G --> A`,
      proves:
        "This shows how completed work turns into reusable improvements for the next project.",
    },
  },
  {
    slug: "arc-system-family",
    name: "ARC System Family",
    shortName: "ARC",
    status: "Built",
    homepagePriority: true,
    eyebrow: "Evidence-backed career document engine",
    summary:
      "A resume and cover-letter system family that uses job targets, evidence packs, validation gates, and lint scoring to produce defensible career artifacts.",
    role: "System designer for tailoring logic, validation gates, scoring criteria, and artifact QA.",
    problem:
      "Career documents often sound polished while making claims that are hard to verify or defend in an interview.",
    solution:
      "ARC connects job targets, source resumes, and evidence packs to tailoring logic, claim checks, and artifact gates.",
    outcome:
      "The output is a stronger resume or cover letter with clearer evidence, role fit, and quality checks.",
    value:
      "Improves career documents without sacrificing truthfulness, role clarity, or interview defensibility.",
    proof: [
      "ARCworks is tracked as an external system alias in Spiral One.",
      "Stress, guardrail, resume lint, cover-letter lint, and artifact-gate scripts exist in this repo.",
      "The project framing separates polished claims from supporting evidence.",
    ],
    stack: ["Node scripts", "Next.js shell", "TypeScript", "DOCX/PDF export concepts", "quality gates"],
    visuals: [
      "Before/after resume positioning panel",
      "Guardrail score output",
      "Evidence-to-claim architecture diagram",
    ],
    primaryDiagram: {
      title: "ARC Evidence-To-Artifact Pipeline",
      mermaid: `flowchart LR
  A[Source resume] --> D[Tailoring logic]
  B[Job description] --> D
  C[Evidence pack] --> D
  D --> E[Claim validation]
  E --> F[Lint and fit scoring]
  F --> G[Artifact gates]
  G --> H[Final resume]
  G --> I[Cover letter]`,
      proves:
        "This shows that ARC is designed around evidence and validation, not just prettier wording.",
    },
  },
  {
    slug: "ai-memory-card",
    name: "AI Memory Card",
    shortName: "AI Memory Card",
    status: "Built",
    homepagePriority: true,
    eyebrow: "Portable AI conversation archive",
    summary:
      "A local workflow that turns exported ChatGPT, Claude, and Gemini histories into searchable workbook memory and portable text artifacts.",
    role: "Workflow designer for parsing, normalization, dedupe, privacy posture, and artifact packaging.",
    problem:
      "Useful ideas and decisions get trapped inside exported AI chat histories where they are hard to search or reuse.",
    solution:
      "AI Memory Card parses conversation exports, normalizes entries, removes duplicates, and produces portable knowledge artifacts.",
    outcome:
      "The workflow turns messy chat history into a searchable memory base without requiring a cloud database.",
    value:
      "Rescues useful ideas, decisions, and language from dead chat exports without forcing the user into a cloud database.",
    proof: [
      "Conversation-to-spreadsheet offer copy is present in the site data.",
      "Spiral One has multiple persisted AI Memory Card lessons around packaging, workbook UX, and webhook paths.",
      "The local-first posture is explicitly documented as a buyer trust feature.",
    ],
    stack: ["Python workflow", "spreadsheet output", "TXT export", "optional webhook", "Google Sheets path"],
    visuals: [
      "Export-to-workbook flow diagram",
      "Workbook tabs and filters screenshot",
      "Portable TXT output sample",
    ],
    primaryDiagram: {
      title: "AI Memory Card Export Pipeline",
      mermaid: `flowchart LR
  A[ChatGPT export] --> D[Parser]
  B[Claude export] --> D
  C[Gemini export] --> D
  D --> E[Normalize fields]
  E --> F[Dedupe entries]
  F --> G[Workbook memory]
  F --> H[Portable TXT output]
  F --> I[Optional webhook]
  I --> J[Google Sheets]`,
      proves:
        "This shows a practical data product: messy exports become reusable memory artifacts.",
    },
  },
  {
    slug: "courier-copilot",
    name: "Courier Copilot",
    shortName: "Courier Copilot",
    status: "Validated",
    homepagePriority: true,
    eyebrow: "iOS delivery-offer decision assistant",
    summary:
      "A native iOS prototype that reads delivery-offer screens through ReplayKit and Vision OCR, extracts trip metrics, and scores offers with deterministic GREEN/YELLOW/RED decisions.",
    role: "iOS systems designer and implementation lead for app shell, broadcast extension, parser, scorer, logs, and export flow.",
    problem:
      "Delivery drivers make fast acceptance decisions with incomplete information while the offer screen is changing in real time.",
    solution:
      "Courier Copilot captures the screen, extracts offer fields with OCR, calculates trip metrics, and returns an explainable score.",
    outcome:
      "The prototype turns a high-pressure decision into a visible recommendation backed by local logs for later calibration.",
    value:
      "Compresses a high-pressure delivery decision into an explainable signal while preserving local logs for calibration.",
    proof: [
      "The repo contains a Courier Copilot Xcode project.",
      "The build includes ReplayKit, Vision OCR, parser, scoring, local storage, CSV export, and test scaffold work.",
      "The scoring doctrine is captured as calibratable hypothesis, not fixed truth.",
    ],
    stack: ["SwiftUI", "ReplayKit", "Vision OCR", "broadcast extension", "CSV export", "local storage"],
    visuals: [
      "Offer screen to decision flow",
      "GREEN/YELLOW/RED scoring screen",
      "Local log/export evidence",
    ],
    primaryDiagram: {
      title: "Courier Copilot Live Decision Flow",
      mermaid: `flowchart LR
  A[Live offer screen] --> B[ReplayKit]
  B --> C[Vision OCR]
  C --> D[Extract offer fields]
  D --> E[Calculate metrics]
  E --> F[Scoring engine]
  F --> G[GREEN decision]
  F --> H[YELLOW decision]
  F --> I[RED decision]
  F --> J[Local log and export]`,
      proves:
        "This shows the built mobile architecture from screen capture through explainable driver decision.",
    },
  },
  {
    slug: "reseller-item-scanner",
    name: "Reseller Item Scanner",
    shortName: "Reseller Scanner",
    status: "Built",
    homepagePriority: false,
    eyebrow: "Resale sourcing triage system",
    summary:
      "A scanner workflow for turning item evidence, OCR/manual fields, and market assumptions into ROI scoring and exportable sourcing evidence.",
    role: "Product workflow designer for item triage, decision framing, and builder-pack implementation surfaces.",
    problem:
      "Resellers need quick buy/skip decisions, but item evidence and market assumptions are often scattered.",
    solution:
      "The scanner organizes item evidence, normalizes fields, scores ROI, and exports scan/debug information.",
    outcome:
      "The workflow gives resellers a clearer sourcing decision and a record of why the decision was made.",
    value:
      "Helps resellers decide what to buy, list, skip, or investigate further without hiding the assumptions behind the recommendation.",
    proof: [
      "A reseller item scanner service, schemas, fixtures, capsule, and builder pack exist in the repo.",
      "The product differentiation lesson is persisted in Spiral One.",
      "The live build-pack instance uses the embedded workspace pattern.",
    ],
    stack: ["Next.js", "TypeScript", "schemas", "fixtures", "build pack", "export artifacts"],
    visuals: [
      "Item evidence to ROI card",
      "Debug/export panel",
      "Marketplace decision states",
    ],
    primaryDiagram: {
      title: "Reseller Scanner Evidence Flow",
      mermaid: `flowchart LR
  A[Item photo] --> D[Evidence intake]
  B[Screen evidence] --> D
  C[Manual entry] --> D
  D --> E[OCR and normalization]
  E --> F[ROI scoring]
  F --> G[Buy or skip signal]
  F --> H[Scan export]
  F --> I[Evidence export]
  F --> J[Debug export]`,
      proves:
        "This shows the scanner as a sourcing decision workflow with inspectable evidence outputs.",
    },
  },
  {
    slug: "social-copilot-observer",
    name: "Social Copilot Observer",
    shortName: "Social Observer",
    status: "Exploring",
    homepagePriority: false,
    eyebrow: "Privacy-conscious market observation loop",
    summary:
      "A Courier Copilot-derived concept for screen-broadcast observation that samples social content, suppresses duplicates, and exports structured market intelligence for later analysis.",
    role: "Architecture transfer and product concept designer.",
    problem:
      "Social research often happens passively, making useful hooks, comments, and audience signals difficult to capture.",
    solution:
      "The workflow adapts screen-intelligence patterns into a duplicate-suppressed observation export.",
    outcome:
      "The concept shows how social browsing could become structured market research without storing raw video.",
    value:
      "Transforms passive feed scrolling into structured research without relying on platform automation or raw video storage.",
    proof: [
      "Spiral One records this as a reusable architecture family derived from Courier Copilot.",
      "The current state is workflow architecture, not a fully shipped app build.",
      "The output is positioned as observations for later Spiral One analysis.",
    ],
    stack: ["ReplayKit concept", "OCR sampling", "duplicate suppression", "CSV/JSON export", "Spiral analysis"],
    visuals: [
      "Observation capture loop",
      "Structured field sample",
      "CSV/JSON export example",
    ],
    primaryDiagram: {
      title: "Social Copilot Observer Conceptual Workflow",
      mermaid: `flowchart LR
  A[Screen broadcast] --> B[OCR sampling]
  B --> C[Duplicate suppression]
  C --> D[Structured observation fields]
  D --> E[CSV export]
  D --> F[JSON export]
  E --> G[Later Spiral One analysis]
  F --> G`,
      proves:
        "This truthfully presents Social Copilot Observer as a planned architecture derived from a verified screen-intelligence pattern.",
    },
  },
  {
    slug: "ai-lead-intake-funnel",
    name: "AI Lead Intake & Qualification Funnel",
    shortName: "Lead Funnel",
    status: "Designed",
    homepagePriority: false,
    eyebrow: "AI-assisted intake routing",
    summary:
      "A lead-intake workflow for cleaning form/webhook submissions, qualifying fit, routing priority, and handing records to operational tools.",
    role: "Workflow architect for intake quality, routing logic, and handoff surfaces.",
    problem:
      "Lead forms and webhook submissions can be messy, incomplete, and hard to prioritize quickly.",
    solution:
      "The funnel cleans fields, qualifies fit, routes priority, and sends the record to the right handoff surface.",
    outcome:
      "The architecture shows how raw intake can become an operational next action.",
    value:
      "Makes lead capture more operational by turning messy submissions into prioritized next actions.",
    proof: [
      "The architecture is presented as a designed workflow rather than a deployed CRM integration.",
      "The routing model is simple enough for a hiring manager to understand quickly.",
      "The routing model is simple enough for a hiring manager to understand quickly.",
    ],
    stack: ["web form", "webhook", "AI qualification", "Sheets/datastore", "Slack/email", "ClickUp"],
    visuals: [
      "Lead priority router",
      "Handoff destination map",
      "Qualification field schema",
    ],
    primaryDiagram: {
      title: "AI Lead Funnel Planned Architecture",
      mermaid: `flowchart LR
  A[Form or webhook intake] --> B[Clean fields]
  B --> C[AI qualification]
  C --> D[Priority router]
  D --> E[High priority]
  D --> F[Standard priority]
  D --> G[Low priority]
  E --> H[Slack or email alert]
  F --> I[Sheets or datastore]
  G --> I
  E --> J[ClickUp handoff]`,
      proves:
        "This shows how a messy lead turns into a clean operational handoff without overstating implementation status.",
    },
  },
  {
    slug: "ai-concierge-web-assistant",
    name: "AI Concierge Web Assistant",
    shortName: "AI Concierge",
    status: "Built",
    homepagePriority: false,
    eyebrow: "Guided site assistant",
    summary:
      "A web assistant surface for user interaction, intent detection, guarded product guidance, behavior tracking, and audit-aware support.",
    role: "Experience designer for assistant entry points, guidance flow, and trust boundaries.",
    problem:
      "Visitors often need help choosing the right product or workflow without reading every page.",
    solution:
      "The assistant routes user intent into guarded guidance, product direction, behavior tracking, and audit-aware support.",
    outcome:
      "The result is a guided support layer that helps users move through a product site without becoming an unbounded chatbot.",
    value:
      "Helps visitors navigate products and workflows while keeping the assistant framed as a guided support surface.",
    proof: [
      "Concierge components, store hooks, message UI, and behavior tracking files exist in the repo.",
      "The assistant is integrated into header, footer, and mobile entry points.",
      "The diagram keeps tool execution generic unless a specific integration is verified.",
    ],
    stack: ["React", "Next.js", "client state", "behavior tracking", "guarded assistant UX"],
    visuals: [
      "Concierge widget screenshot",
      "Intent-to-guidance sequence",
      "Audit log/control surface",
    ],
    primaryDiagram: {
      title: "AI Concierge Interaction Flow",
      mermaid: `sequenceDiagram
  participant User
  participant Widget
  participant Intent
  participant GuardedAI
  participant Tools
  participant Logs
  User->>Widget: Ask for help
  Widget->>Intent: Detect need
  Intent->>GuardedAI: Request guided response
  GuardedAI->>Tools: Product guidance or tool action
  Tools->>Widget: Return next step
  Widget->>Logs: Track behavior and audit event`,
      proves:
        "This shows the concierge as a controlled product guidance layer rather than an unbounded chatbot.",
    },
  },
  {
    slug: "shorts-editor-system",
    name: "Shorts Editor System",
    shortName: "Shorts Editor",
    status: "Built",
    homepagePriority: false,
    eyebrow: "Instruction-driven short-form video pipeline",
    summary:
      "A media automation system that decomposes long-form video and edit instructions into crop, motion, caption, overlay, post-copy, and FFmpeg render steps.",
    role: "Creative-automation system designer for explicit primitives, presets, and render artifacts.",
    problem:
      "Short-form video production is hard to automate when edit direction stays vague and subjective.",
    solution:
      "The system breaks instructions into parser steps, crop/motion presets, captions, overlays, copy, and FFmpeg rendering.",
    outcome:
      "Creative direction becomes a set of testable production steps that can be previewed and repeated.",
    value:
      "Turns editing taste into testable production primitives instead of relying on vague creative direction.",
    proof: [
      "A shorts director script exists in the repo tooling.",
      "The build process captured a reusable lesson about decomposing creative automation into explicit primitives.",
      "The architecture is presented as an instruction-driven system, not a full NLE replacement.",
    ],
    stack: ["Node tooling", "FFmpeg render path", "edit presets", "caption/overlay artifacts", "post copy"],
    visuals: [
      "Instruction-to-render pipeline",
      "Preset matrix",
      "Rendered short plus post-copy output",
    ],
    primaryDiagram: {
      title: "Shorts Editor Render Pipeline",
      mermaid: `flowchart LR
  A[Long-form video] --> C[Instruction parser]
  B[Edit instructions] --> C
  C --> D[Crop and motion presets]
  C --> E[Transition presets]
  D --> F[Captions and overlays]
  E --> F
  F --> G[Post copy]
  F --> H[FFmpeg render]
  H --> I[Exported short]`,
      proves:
        "This shows the editor as a composable media pipeline with explicit artifacts.",
    },
  },
  {
    slug: "freebie-forge-capsule-packsmith",
    name: "Freebie Forge / Capsule Packsmith",
    shortName: "Packsmith",
    status: "Built",
    homepagePriority: false,
    eyebrow: "Product packaging and build-pack generation loop",
    summary:
      "A packaging system for turning topics, pain points, and capsule logic into scored product ideas, assets, builder packs, and feedback loops.",
    role: "System designer for productization workflow, build-pack doctrine, and reusable acceptance gates.",
    problem:
      "AI workflow ideas can stay stuck as prompts unless they are packaged into usable product assets and build instructions.",
    solution:
      "Freebie Forge and Packsmith turn topics and pain points into scored ideas, assets, build packs, and review loops.",
    outcome:
      "The system helps move from raw workflow idea to packaged product surface with clearer acceptance criteria.",
    value:
      "Bridges raw AI workflow ideas and packaged sellable systems with clearer assets, acceptance gates, and buyer-facing surfaces.",
    proof: [
      "Freebie Forge code, inventory utilities, Packsmith panel, and build-packet content exist in the repo.",
      "Recent build-pack upgrades were reverse-engineered into canonical and packaged builder instructions.",
      "The current site has embedded live workspaces for build-pack instances.",
    ],
    stack: ["Next.js", "TypeScript", "capsule processor", "build packets", "Canva/listing assets", "audit loop"],
    visuals: [
      "Idea-to-asset pipeline",
      "Build-pack acceptance gate excerpt",
      "Embedded live workspace screenshot",
    ],
    primaryDiagram: {
      title: "Freebie Forge / Packsmith Product Loop",
      mermaid: `flowchart TD
  A[Product topic or pain point] --> B[Idea generation]
  B --> C[Duplicate check]
  C --> D[Value scoring]
  D --> E[Canva and listing assets]
  E --> F[Build pack]
  F --> G[Audit and feedback]
  G --> B`,
      proves:
        "This shows the packaging loop that turns product ideas into reviewed, reusable build assets.",
    },
  },
];

export const homepagePortfolioProjects = portfolioProjects.filter((project) => project.homepagePriority);

export const portfolioHomepageRecommendations = [
  "Courier Copilot",
  "AI Memory Card",
  "Spiral One",
  "ARC System Family",
];

export const featuredPortfolioProjects = portfolioHomepageRecommendations
  .map((name) => portfolioProjects.find((project) => project.name === name))
  .filter((project): project is PortfolioProject => Boolean(project));

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
