import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Kareem Singleton | AI Automation Engineer",
  description:
    "AI Automation Engineer portfolio featuring AI Lead Filter, AI Memory Card, Courier Copilot, and related automation systems.",
};

const otherBuilds = [
  {
    name: "Spiral One",
    copy:
      "a project memory system that captures build lessons and checkpoints so future work does not repeat past mistakes. 31 audits, 25 documented lessons logged internally.",
  },
  {
    name: "ARC System Family",
    copy:
      "evidence-based resume and cover letter generation, built to keep career claims defensible rather than just polished.",
  },
  {
    name: "Reseller Item Scanner",
    copy:
      "a sourcing workflow that scores resale opportunities using item data, OCR, and market assumptions.",
  },
  {
    name: "AI Concierge Web Assistant",
    copy: "a site assistant that helps visitors navigate products and get guided answers.",
  },
  {
    name: "Shorts Editor System",
    copy: "converts editing instructions into structured short-form video production steps.",
  },
  {
    name: "Social Copilot Observer",
    copy:
      "an on-device research prototype for capturing structured signal from social content without storing raw video.",
  },
];

const resumeContact = [
  {
    label: "Philadelphia, PA",
    href: null,
    icon: MapPin,
  },
  {
    label: "kareem.s.singleton@gmail.com",
    href: "mailto:kareem.s.singleton@gmail.com",
    icon: Mail,
  },
  {
    label: "267-546-7048",
    href: "tel:+12675467048",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kareem-singleton-5b795a386/",
    icon: Linkedin,
  },
];

const resumeSkills = [
  {
    group: "Automation & Integration",
    items: ["Make.com", "REST APIs", "webhooks", "OAuth/token auth", "Google Workspace automation", "Slack", "ClickUp", "Sheets", "email routing"],
  },
  {
    group: "Programming",
    items: ["Python", "TypeScript/Next.js", "Swift/iOS", "Google Apps Script"],
  },
  {
    group: "Testing & Reliability",
    items: ["end-to-end workflow testing", "dedupe/idempotency logic", "structured logging", "error handling", "debug exports", "field testing"],
  },
  {
    group: "AI-Assisted Development",
    items: ["AI coding tool direction", "prompt design", "output verification", "cross-model comparison", "ChatGPT", "Claude", "Gemini"],
  },
  {
    group: "Product & Documentation",
    items: ["MVP scoping", "setup flows", "onboarding", "README and support docs", "non-technical user packaging"],
  },
];

const resumeExperience = [
  {
    role: "Founder & Automation Engineer",
    company: "Capsule Foundry",
    dates: "Mar 2025 - Present",
    bullets: [
      "Design and build production automation systems for lead intake, data processing, conversation archiving, and mobile decision support.",
      "Built and launched AI Lead Filter, a Make.com automation that scores inbound leads and routes them across email, Slack, ClickUp, and Google Sheets in real time.",
      "Built and published AI Memory Card, a Python tool that converts ChatGPT, Claude, and Gemini exports into a searchable Excel archive and portable recall file, validated on 27,000+ parsed entries.",
      "Built Courier Copilot, a native iOS prototype using ReplayKit screen capture and Vision OCR to extract delivery-offer data and return GREEN/YELLOW/RED accept decisions in real time.",
      "Maintain a project audit and improvement system with 31 audits and 25 documented lessons used to catch recurring failure patterns and shorten ramp-up time on new builds.",
    ],
  },
  {
    role: "AI Automation Engineer (Freelance)",
    company: "Upwork",
    dates: "2026 - Present",
    bullets: [
      "Offer Make.com automation builds, API integrations, and workflow fixes to small business clients.",
    ],
  },
  {
    role: "Operations Manager",
    company: "Fairspot / Helium IoT Network",
    dates: "Jan 2021 - Aug 2022",
    bullets: [
      "Managed uptime and troubleshooting for a distributed network of 240+ IoT devices, maintaining 99%+ uptime.",
      "Built repeatable processes for remote diagnostics, issue escalation, and installation quality across a non-technical host base.",
    ],
  },
  {
    role: "Founder & Creative Director",
    company: "Bothered Otters",
    dates: "Aug 2021 - Dec 2021",
    bullets: [
      "Built and led an international creative team, growing a digital community to 150K followers and 70K+ Discord members at its peak.",
      "Used audience and engagement data to guide content strategy and prioritize what resonated with the community.",
    ],
  },
];

function VideoEmbed({
  videoId,
  title,
  variant,
  caption,
}: {
  videoId: string;
  title: string;
  variant: "horizontal" | "vertical";
  caption?: string;
}) {
  return (
    <figure className="my-6">
      <div className={`video-embed video-embed--${variant}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-center text-xs font-medium uppercase tracking-[0.14em] text-white/48">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function BuiltWith({ items }: { items: string[] }) {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/52">Built with</h4>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="rounded-2xl border border-white/10 bg-black/18 px-4 py-3 text-sm text-white/74">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProofRepoLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100/40 hover:bg-cyan-100/10"
    >
      <Github className="h-4 w-4" />
      Public proof repo
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}

export default function PortfolioPage() {
  return (
    <main className="cf-page-shell">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 cf-proof-grid opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <p className="cf-kicker">Kareem Singleton</p>
            <div className="space-y-4">
              <h1 className="cf-display text-5xl sm:text-6xl xl:text-7xl">
                AI Automation Engineer
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[var(--cf-text-soft)]">
                I build software and automation systems that remove repetitive work, organize
                information, and help people make better decisions.
              </p>
              <p className="max-w-3xl text-lg leading-8 text-[var(--cf-text-soft)]">
                Some projects use AI. Others use computer vision, structured data, or traditional
                software. The goal is always the same: build something useful that solves a real
                problem and prove it works.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#featured-projects" className="cf-button cf-button-primary">
                View Projects
              </a>
              <a href="#resume" className="cf-button cf-button-secondary">
                View Resume
              </a>
              <a href="https://calendly.com/capsulefoundry/ai-automation-discovery-call" className="cf-button cf-button-secondary" target="_blank" rel="noreferrer">
                Book a Call
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="mb-8">
          <p className="cf-micro-label">Featured Projects</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">Built systems</h2>
        </div>

        <div className="grid gap-8">
          <article className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="cf-micro-label">AI Lead Filter</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Automated lead scoring and routing for service businesses
            </h3>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">
              Status: Built / In Active Outreach
            </p>
            <div className="mt-5 space-y-4 text-base leading-8 text-[var(--cf-text-soft)]">
              <p>
                Trades and service businesses lose deals because inbound leads sit unread or get
                buried in email. AI Lead Filter is a Make.com automation that scores every inbound
                lead in real time and routes the good ones straight to the owner: email, Slack,
                ClickUp, or Google Sheets, whichever they already use.
              </p>
              <p>
                During a demo, a live test lead runs through the intake form and the scored result
                hits the prospect&apos;s inbox in real time, so they see the system work before they
                buy.
              </p>
            </div>
            <BuiltWith
              items={[
                "Make.com automation",
                "Lead scoring logic",
                "Multi-channel routing: email, Slack, ClickUp, Sheets",
                "Google Form intake",
                "Live demo workflow",
              ]}
            />
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/18 p-5">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/52">
                Current state
              </h4>
              <p className="mt-3 text-base leading-8 text-[var(--cf-text-soft)]">
                Fully built and demo-ready, with a setup fee plus optional monthly retainer.
                Currently running outreach to a targeted list of HVAC and trades businesses, built
                using an automated research workflow that identifies and qualifies prospects before
                first contact.{" "}
                <a href="https://aileadfilter.carrd.co" target="_blank" rel="noreferrer" className="font-semibold text-cyan-100 underline decoration-cyan-100/30 underline-offset-4">
                  See the offer
                </a>
              </p>
              <VideoEmbed
                videoId="Qx2_7A8TiLE"
                title="AI Lead Filter demo"
                variant="horizontal"
                caption="Demo video — no audio."
              />
              <ProofRepoLink href="https://github.com/Qolqos/ai-lead-filter-public" />
            </div>
          </article>

          <article className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="cf-micro-label">AI Memory Card</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Turning AI conversations into searchable knowledge
            </h3>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">
              Status: Shipped / Sold
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--cf-text-soft)]">
              AI conversations often contain useful ideas, research, and decisions, but finding that
              information later is hard. AI Memory Card is a local tool that converts ChatGPT,
              Claude, and Gemini exports into searchable spreadsheets and portable text archives.
            </p>
            <BuiltWith
              items={[
                "Multi-model export parsing",
                "Spreadsheet generation",
                "Duplicate detection",
                "Search and summary views",
                "Webhook support",
              ]}
            />
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/18 p-5">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/52">
                Current state
              </h4>
              <p className="mt-3 text-base leading-8 text-[var(--cf-text-soft)]">
                Validated on more than 27,000 parsed entries.{" "}
                <a href="https://capsuleforge.gumroad.com/l/ugwqei" target="_blank" rel="noreferrer" className="font-semibold text-cyan-100 underline decoration-cyan-100/30 underline-offset-4">
                  Available on Gumroad
                </a>
                .
              </p>
              <VideoEmbed videoId="szTUogYPFFM" title="AI Memory Card demo" variant="vertical" />
              <ProofRepoLink href="https://github.com/Qolqos/ai-memory-card-public" />
            </div>
          </article>

          <article className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="cf-micro-label">Courier Copilot</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              A mobile decision-support app for delivery drivers
            </h3>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">
              Status: Validated Prototype
            </p>
            <div className="mt-5 space-y-4 text-base leading-8 text-[var(--cf-text-soft)]">
              <p>
                Delivery drivers often have only a few seconds to decide whether an offer is worth
                accepting. Courier Copilot is an iOS app that reads delivery offer screens, extracts
                the details, calculates metrics, and returns a fast GREEN/YELLOW/RED recommendation.
              </p>
              <p>
                The app runs entirely on-device: ReplayKit captures the screen, Vision OCR extracts
                the data, and a rule-based scoring engine handles the decision — no cloud calls, no
                latency.
              </p>
              <p>
                The build includes a structured parser, scoring engine, local storage, CSV export,
                and a test scaffold for validating scoring accuracy against real offer data.
              </p>
            </div>
            <BuiltWith
              items={[
                "SwiftUI",
                "ReplayKit",
                "Apple Vision OCR",
                "Rule-based scoring engine",
                "Local storage + CSV export",
                "Test scaffold",
              ]}
            />
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/18 p-5">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/52">
                Current state
              </h4>
              <p className="mt-3 text-base leading-8 text-[var(--cf-text-soft)]">
                Field-tested as an alpha prototype, with ongoing accuracy and usability
                improvements.
              </p>
              <ProofRepoLink href="https://github.com/Qolqos/courier-copilot-public" />
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="mb-8">
          <p className="cf-micro-label">Other Builds</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Internal tools, prototypes, and workflow experiments
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--cf-text-soft)]">
            A few more systems built along the way.
          </p>
        </div>
        <div className="grid gap-3">
          {otherBuilds.map((build) => (
            <p key={build.name} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-7 text-white/74">
              <span className="font-semibold text-white">{build.name}</span> — {build.copy}
            </p>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 rounded-[28px] border border-white/10 bg-[#101722]/92 p-6 sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[24px] border border-white/12 bg-black/24 shadow-2xl shadow-black/30">
            <Image
              src="/images/kareem-singleton.jpg"
              alt="Kareem Singleton"
              width={1170}
              height={1532}
              sizes="(min-width: 1024px) 360px, 90vw"
              className="aspect-[4/5] w-full object-cover object-[50%_30%]"
              priority={false}
            />
          </div>
          <div>
            <p className="cf-micro-label">About Me</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              I build tools at the intersection of automation, software, and AI.
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[var(--cf-text-soft)]">
              My focus is practical implementation: taking a repetitive process, a messy workflow, or
              a slow decision, and turning it into a system that actually gets used. I&apos;ve shipped
              and sold products, built native mobile prototypes, and run live sales demos on my own
              automation systems — I like the whole path from idea to paying customer, not just the
              build.
            </p>
          </div>
        </div>
      </section>

      <section id="resume" className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="cf-micro-label">Resume</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Automation engineer with shipped systems and field-tested workflows
            </h2>
          </div>
          <a
            href="https://docs.google.com/document/d/1_U0RggvhI6zMjPSABVn0qdl7Y-QlNrxvJ8CfV3hPsRE/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="cf-button cf-button-secondary justify-center"
          >
            Source resume
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr]">
          <aside className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="cf-micro-label">Kareem Singleton</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              AI Automation Engineer
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--cf-text-soft)]">
              Workflow systems and integrations builder focused on Make.com automations, API
              integrations, AI-assisted workflows, and practical software that holds up in real use.
            </p>
            <div className="mt-6 grid gap-3">
              {resumeContact.map((item) => {
                const Icon = item.icon;
                const content = (
                  <span className="inline-flex min-w-0 items-center gap-3 text-sm text-white/74">
                    <Icon className="h-4 w-4 shrink-0 text-cyan-100/80" />
                    <span className="break-words">{item.label}</span>
                  </span>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-2xl border border-white/10 bg-black/18 px-4 py-3 transition hover:border-cyan-100/35 hover:bg-cyan-100/10"
                  >
                    {content}
                  </a>
                ) : (
                  <p key={item.label} className="rounded-2xl border border-white/10 bg-black/18 px-4 py-3">
                    {content}
                  </p>
                );
              })}
            </div>

            <div className="mt-8">
              <p className="cf-micro-label">Education</p>
              <p className="mt-3 text-base leading-7 text-white">
                B.A. Fine Arts, Technical & Production Focus
              </p>
              <p className="mt-1 text-sm text-white/58">Penn State Abington, 2015</p>
            </div>
          </aside>

          <div className="space-y-6">
            <article className="rounded-[28px] border border-white/10 bg-[#101722]/92 p-6 sm:p-8">
              <p className="cf-micro-label">Summary</p>
              <p className="mt-4 text-base leading-8 text-[var(--cf-text-soft)]">
                Automation engineer who builds and ships working systems, not just prototypes. I
                design and build Make.com automations, API integrations, and AI-assisted workflows,
                then test them until they hold up in real use. Recent work includes a lead-scoring
                and routing system for service businesses, a multi-platform AI conversation
                archiving tool validated on 27,000+ real entries, and a native iOS app using
                computer vision for real-time decision support.
              </p>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <p className="cf-micro-label">Core Skills</p>
              <div className="mt-5 grid gap-4">
                {resumeSkills.map((skill) => (
                  <div key={skill.group} className="rounded-2xl border border-white/10 bg-black/18 p-4">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">
                      {skill.group}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">{skill.items.join(" / ")}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <p className="cf-micro-label">Experience</p>
              <div className="mt-6 space-y-6">
                {resumeExperience.map((job) => (
                  <section key={`${job.company}-${job.role}`} className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-white">{job.role}</h3>
                        <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
                          {job.company}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-cyan-100/82">{job.dates}</p>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--cf-text-soft)]">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-100/70" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="rounded-[28px] border border-cyan-200/20 bg-cyan-200/10 p-6 sm:p-8">
          <p className="cf-micro-label">Let&apos;s Talk</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Have a workflow that takes too much time?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-cyan-50/78">
            A process that needs automating? An idea that needs to become a working system?
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://calendly.com/capsulefoundry/ai-automation-discovery-call" target="_blank" rel="noreferrer" className="cf-button cf-button-primary justify-center">
              Book a call
              <ExternalLink className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/kareem-singleton-5b795a386/" target="_blank" rel="noreferrer" className="cf-button cf-button-secondary justify-center">
              Connect on LinkedIn
              <ExternalLink className="h-4 w-4" />
            </a>
            <a href="mailto:capsulefoundry@gmail.com" className="cf-button cf-button-secondary justify-center">
              Send an email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
