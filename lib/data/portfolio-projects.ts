export type PortfolioProjectStatus = "Implemented" | "Prototype" | "Pilot";

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
  evidenceNote: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "spiral-one", name: "Spiral One", shortName: "Spiral One", status: "Implemented", homepagePriority: true,
    eyebrow: "Local AI build control plane",
    summary: "A local operator console for bounded AI-assisted work: durable objectives, heuristic model routing, provenance-aware context, verification receipts, and recovery-aware runtime state.",
    role: "Product systems architect and implementation lead for the local control plane, evidence model, routing policy, and operator experience.",
    problem: "AI-assisted implementation can lose context, progress, and evidence between runs.",
    solution: "Spiral One stores bounded objectives and sequential units locally, compiles task-specific context, and keeps verification evidence alongside execution state.",
    outcome: "One local workbench for progress, provenance, routing policy, and verification status.",
    value: "Makes AI-assisted work inspectable and recoverable without claiming autonomous operation or learned optimization.",
    proof: ["Working local screens cover work, reference intelligence, empirical records, verification, system health, and resumable work.", "The inspected reference store records 18 source manifests, 1,187 atomic objects, and 2,334 relationships; task briefs are bounded and provenance-aware.", "Verification distinguishes provider terminal state from command exits and inspected artifacts.", "A scoped FHRA fixture records finding, cause, repair, local checks, and re-audit; it is a fixture, not a production incident."],
    stack: ["Next.js", "TypeScript", "Codex App Server path", "local JSON stores", "event replay", "verification receipts"],
    visuals: ["Sanitized objective, unit timeline, and evidence state", "Bounded source-to-brief provenance trace", "Verification receipt with command, exit status, artifact, and evidence label"],
    evidenceNote: "Evidence supports a local, sequential, heuristic system—not cloud hosting, parallel autonomous workers, learned routing, or validated source rollback.",
    primaryDiagram: { title: "Spiral One Operator Evidence Loop", mermaid: `flowchart LR
  A[Operator objective] --> B[Bounded units]
  B --> C[Context compiler]
  C --> D[Sequential execution]
  D --> E[Verification evidence]
  E --> F[Durable state and replay]
  F --> G[Resume or inspect]
  G --> B`, proves: "The local loop is bounded work, evidence, and recoverable state." },
  },
  {
    slug: "courier-copilot", name: "Courier Copilot", shortName: "Courier Copilot", status: "Prototype", homepagePriority: true,
    eyebrow: "iOS delivery-offer decision support",
    summary: "An iOS prototype that uses ReplayKit and Apple Vision to interpret visible delivery-offer screens, calculate trip metrics, apply user-configured rules, and create a local advisory record.",
    role: "iOS systems designer and implementation lead for the broadcast extension, OCR pipeline, parser, scoring rules, stabilization behavior, and local logging.",
    problem: "Delivery offers are brief and information-dense; drivers need a fast, understandable evaluation of payout, distance, and time assumptions.",
    solution: "A ReplayKit sample feeds throttled frames to Vision OCR; a deterministic parser and scorer calculate $/mile and approximate $/hour, then assign a GREEN, YELLOW, or RED advisory.",
    outcome: "Code and tests demonstrate an explainable decision pipeline rather than an automatic accept/reject system.",
    value: "Turns a rapid screen-reading task into an inspectable, user-configured advisory signal.",
    proof: ["Implemented pipeline: ReplayKit sample → Vision OCR → parser → scorer → local notification and structured local log.", "Synthetic tests cover parsing, $/mile and approximate $/hour calculations, scoring, OCR correction stabilization, and log reconciliation.", "A correction fixture verifies a 12-minute OCR candidate updated to 72 minutes is stabilized before its corrected observation is committed."],
    stack: ["SwiftUI", "ReplayKit", "Apple Vision", "broadcast extension", "deterministic scoring", "local notifications"],
    visuals: ["Controlled synthetic offer paired with an advisory result", "Matching local log row with parsed metrics and confidence", "Fixture receipt for OCR correction and reconciliation"],
    evidenceNote: "The implementation and fixtures are strong; a public-safe end-to-end field capture is not yet established. No earnings uplift, automatic acceptance, or field-reliability claim is made.",
    primaryDiagram: { title: "Courier Copilot Advisory Pipeline", mermaid: `flowchart LR
  A[Visible offer screen] --> B[ReplayKit sample]
  B --> C[Vision OCR]
  C --> D[Parse payout, distance, duration]
  D --> E[Metrics and user rules]
  E --> F[GREEN / YELLOW / RED advisory]
  F --> G[Local notification]
  F --> H[Structured local log]`, proves: "This is a deterministic advisory path, not automatic acceptance." },
  },
  {
    slug: "pocket-spiral", name: "Pocket Spiral", shortName: "Pocket Spiral", status: "Implemented", homepagePriority: true,
    eyebrow: "On-device language-model runtime",
    summary: "A mobile local-inference project built around llama.cpp and GGUF models, with model identity, benchmark runs, bounded tool/network surfaces, and a native chat experience.",
    role: "Product and runtime architect for model selection, on-device evaluation, local interaction boundaries, and evidence-led mobile UX.",
    problem: "Local AI on a phone needs model, device, performance, and optional-network context to remain legible.",
    solution: "Pocket Spiral packages GGUF-based local inference with model metadata, evaluation records, native UI flows, and explicit boundaries between local generation and optional retrieval.",
    outcome: "Physical-device benchmark records establish bounded real inference on an iPhone 16e; the app UI is separately validated through XCTest artifacts.",
    value: "Makes local model execution inspectable instead of treating ‘on-device’ as a marketing label.",
    proof: ["Benchmark records and acceptance documentation identify physical iPhone 16e runs with real GGUF inference.", "Small exact-fixture suites record Qwen3 Q8 at 10/10 and Q4 at 9/10; these are bounded evaluations, not general-quality claims.", "Portrait XCTest artifacts show model, chat, Lab, and persisted-chat surfaces, but are labeled simulator/test UI evidence."],
    stack: ["SwiftUI", "llama.cpp", "GGUF", "on-device inference", "XCTest", "benchmark records"],
    visuals: ["Physical-device chat capture paired with its benchmark summary", "Model identity and quantization card", "Local-tool and optional-network boundary view"],
    evidenceNote: "Physical-device inference is evidenced by benchmark records. Current screenshots are test/simulator UI, and sustained comfort, battery, and broad answer quality remain open.",
    primaryDiagram: { title: "Pocket Spiral Local Inference Boundary", mermaid: `flowchart LR
  A[GGUF model] --> B[llama.cpp runtime]
  B --> C[Native chat]
  C --> D[Local response]
  C --> E[Registered local tool]
  F[Optional retrieval] -. explicit permission .-> C
  B --> G[Benchmark and model record]`, proves: "On-device inference is distinct from optional retrieval and benchmark evidence." },
  },
  {
    slug: "quel", name: "Levo", shortName: "Levo", status: "Pilot", homepagePriority: true,
    eyebrow: "DBT-informed reflection and skills app",
    summary: "A local-first iOS app with an Android pilot for moving from a self-reported intensity state to bounded skills, optional reflection, and private event history.",
    role: "Product systems designer for state flow, local persistence, migration safety, and cross-platform implementation boundaries.",
    problem: "When someone is overwhelmed, a broad library is hard to navigate; a reflection tool needs a clear interaction path and careful safety boundaries.",
    solution: "Levo routes an intensity/profile input to bounded skill options, supports optional after-state and effectiveness reflection, and stores a local event history with versioned migration.",
    outcome: "Source and tests support local persistence and migration behavior on iOS and an Android pilot, while outstanding parity work remains visible.",
    value: "A focused personal-reflection flow—not therapy, diagnosis, crisis response, or proven clinical care.",
    proof: ["Implemented flow: intensity/profile zone → bounded skill options → steps → event log → optional after-state → local history/patterns.", "Versioned iOS and Android event/draft stores and migration tests establish a local data boundary.", "A dated build log records 21/21 iOS simulator tests and 16/16 Android migration/unit tests at the inspected checkpoint."],
    stack: ["SwiftUI", "Jetpack Compose pilot", "local event store", "versioned migrations", "unit tests"],
    visuals: ["Synthetic iOS Now → skill → reflection → history sequence", "Sanitized event schema and migration receipt", "Dated iOS/Android parity matrix"],
    evidenceNote: "Current app screenshots were not located. Android is a pilot and the parity audit lists gaps; no full-parity or clinical-effectiveness claim is made.",
    primaryDiagram: { title: "Levo Reflection Flow", mermaid: `flowchart LR
  A[Intensity / profile] --> B[Bounded zone]
  B --> C[Skill options]
  C --> D[Skill steps]
  D --> E[Event log]
  E --> F[Optional after-state]
  F --> G[Local history and patterns]`, proves: "A bounded personal-reflection flow with a local data path." },
  },
  {
    slug: "ai-memory-card", name: "AI Memory Card", shortName: "AI Memory Card", status: "Implemented", homepagePriority: true,
    eyebrow: "Portable conversation archive",
    summary: "A local workflow that turns downloaded ChatGPT, Claude, and Gemini exports into normalized workbook archives, filtered search views, a recall index, and portable text output.",
    role: "Workflow designer and implementation lead for export parsing, normalization, deduplication, workbook structure, and privacy boundaries.",
    problem: "Useful decisions and research are difficult to recover when trapped inside separate AI-provider exports.",
    solution: "AI Memory Card accepts common export formats, normalizes provider records, removes duplicates by message ID or content hash, and produces local workbook and text artifacts.",
    outcome: "An implemented local-default transformation workflow; webhook delivery is a separately configured path.",
    value: "Makes exported conversation history searchable and portable without claiming semantic search, provider sync, or provider-memory writes.",
    proof: ["Supports .zip, .json, .html, and .htm inputs across ChatGPT, Claude, and Gemini parsers.", "Implements normalization, filtering, deduplication, workbook archive/search/summary/run log, recall index, and portable TXT output.", "The local-default posture is explicit; a webhook/hybrid route is optional and user-configured."],
    stack: ["Python", "provider export parsers", "content-hash dedupe", "XLSX", "portable TXT", "optional webhook"],
    visuals: ["Clearly labeled synthetic export set entering the local workflow", "Synthetic workbook search and memory-entry views", "Portable recall-text output and local-default boundary"],
    evidenceNote: "Real outputs contain private conversations and are intentionally not portfolio media. The appropriate public demonstration is a clearly labeled synthetic run.",
    primaryDiagram: { title: "AI Memory Card Local Archive Pipeline", mermaid: `flowchart LR
  A[ChatGPT export] --> D[Provider parsers]
  B[Claude export] --> D
  C[Gemini export] --> D
  D --> E[Normalize metadata]
  E --> F[Filter and dedupe]
  F --> G[Workbook archive and search]
  F --> H[Recall index]
  F --> I[Portable TXT]
  F -. opt-in .-> J[Configured webhook]`, proves: "A local transformation workflow with an explicit optional sharing branch." },
  },
];

export const homepagePortfolioProjects = portfolioProjects.filter((project) => project.homepagePriority);
export const featuredPortfolioProjects = homepagePortfolioProjects;
export function getPortfolioProject(slug: string) { return portfolioProjects.find((project) => project.slug === slug); }
