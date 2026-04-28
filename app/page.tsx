"use client";

import Image from "next/image";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";

type Tab = "about" | "resume" | "portfolio";
type StackKey =
  | "python"
  | "rust"
  | "typescript"
  | "fastapi"
  | "nextjs"
  | "docker"
  | "postgresql"
  | "redis";

const navItems: Array<[string, Tab]> = [
  ["About me", "about"],
  ["Tech Stack", "resume"],
  ["Projects", "portfolio"],
];

const services = [
  {
    title: "Self-hosted systems",
    text: "Panels, dashboards and internal tools that run on private infrastructure.",
  },
  {
    title: "Backend architecture",
    text: "APIs, data flow, service boundaries and logic that stays maintainable.",
  },
  {
    title: "Infrastructure",
    text: "Docker, PostgreSQL, Redis and production-focused operational workflows.",
  },
  {
    title: "Developer tooling",
    text: "CLI utilities and automation tools for cleaner engineering work.",
  },
];

const projects = [
  {
    title: "Yunexal Panel",
    href: "https://github.com/nestorchurin/yunexal-panel",
    category: "Self-hosted",
    description:
      "Panel for managing Docker containers with an operator-first control surface.",
    stack: ["Docker", "Backend", "Panel"],
  },
  {
    title: "ChatManager",
    href: "https://github.com/INetrois/ChatManager",
    category: "Plugin",
    description: "Minecraft chat manager with LuckPerms and Vault support.",
    stack: ["Java", "Permissions", "Minecraft"],
  },
  {
    title: "ThLun",
    href: "https://github.com/Ashreach/ThLun",
    category: "CLI",
    description:
      "Python CLI library for stylish and convenient terminal output.",
    stack: ["Python", "CLI", "Terminal"],
  },
  {
    title: "lazyreq",
    href: "https://github.com/INetrois/lazyreq",
    category: "Library",
    description: "Python library for managing dependencies.",
    stack: ["Python", "Dependencies", "DX"],
  },
  {
    title: "shellscope",
    href: "https://github.com/INetrois/shellscope",
    category: "CLI",
    description:
      "Runs shell commands and presents execution in a clean, structured format.",
    stack: ["Shell", "CLI", "Observability"],
  },
];

const stack: Array<{
  description: string;
  icon: StackKey;
  name: string;
}> = [
  {
    name: "Python",
    icon: "python",
    description: "Backend services, libraries, automation",
  },
  {
    name: "Rust",
    icon: "rust",
    description: "System tools and performance-oriented logic",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    description: "Typed web interfaces and project glue",
  },
  {
    name: "FastAPI",
    icon: "fastapi",
    description: "HTTP APIs and backend services",
  },
  {
    name: "Next.js",
    icon: "nextjs",
    description: "Web panels and portfolio interfaces",
  },
  {
    name: "Docker",
    icon: "docker",
    description: "Self-hosted deployment workflows",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    description: "Relational data modeling",
  },
  {
    name: "Redis",
    icon: "redis",
    description: "Cache, queues and fast state",
  },
];

const stackIcons: Record<
  Exclude<StackKey, "fastapi">,
  { className?: string; src: string }
> = {
  python: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  rust: {
    className: "invert",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
  },
  typescript: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  nextjs: {
    className: "invert",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  docker: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  postgresql: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  redis: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

   return (
     <main className="relative min-h-screen bg-background px-3 py-3 text-foreground sm:px-6 sm:py-6 lg:px-8">
       {/* Fixed ambient glow — no clipping ever */}
       <div className="surface-glow" aria-hidden="true" />
       <div className="noise-overlay" aria-hidden="true" />

       <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-3 sm:gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="lg:sticky lg:top-6 lg:h-fit">
          <ProfileCard />
        </aside>

        <section className="main-panel overflow-hidden rounded-xl border border-border bg-card sm:rounded-2xl reveal reveal-2">
          <HeaderNav activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="p-4 sm:p-8 lg:p-10">
            <div className="tab-panel" key={activeTab}>
              {activeTab === "about" && <AboutPanel />}
              {activeTab === "resume" && <ResumePanel />}
              {activeTab === "portfolio" && <PortfolioPanel />}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ─── About ──────────────────────────────────────────────────────────────── */

function AboutPanel() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section>
        <SectionTitle title="About me" />
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
          <p className="reveal reveal-1">
            I am Netrois, a Backend Developer / Engineer working with
            self-hosted systems, backend architecture and infrastructure. I like
            building the parts of a product that users do not always see, but
            immediately feel when they are slow, fragile or hard to operate.
          </p>
          <p className="reveal reveal-2">
            My focus is practical engineering: clear APIs, predictable data
            flow, Docker-based deployment, PostgreSQL-backed services, caching,
            queues, CLI tools and internal panels that are easy to reason about.
          </p>
          <p className="reveal reveal-3">
            This portfolio is a compact collection of tools and systems I have
            built around control, maintainability and infrastructure ownership.
          </p>
        </div>
      </section>

      <section>
        <SectionTitle title="How I approach backend work" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((service, i) => (
            <article
              className={`soft-card rounded-xl border border-border bg-background p-4 sm:p-5 reveal reveal-${i + 1}`}
              key={service.title}
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ─── Resume ─────────────────────────────────────────────────────────────── */

function ResumePanel() {
  return (
    <section>
      <SectionTitle title="Tech Stack" />
      <div className="mt-6 grid gap-3">
        {stack.map((item, i) => (
          <div
            className={`soft-card grid gap-3 rounded-xl border border-border bg-background p-4 sm:grid-cols-[190px_1fr] sm:items-center reveal reveal-${Math.min(i + 1, 8)}`}
            key={item.name}
          >
            <span className="flex items-center gap-3 font-medium text-foreground">
              <StackIcon icon={item.icon} name={item.name} />
              {item.name}
            </span>
            <span className="text-sm text-muted-foreground">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Portfolio ──────────────────────────────────────────────────────────── */

function PortfolioPanel() {
  return (
    <section>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionTitle title="Projects" />
        <ButtonLink
          className="soft-hover w-full rounded-md sm:w-auto reveal reveal-1"
          href="https://github.com/INetrois"
          rel="noreferrer"
          size="sm"
          target="_blank"
          variant="outline"
        >
          <GithubIcon className="size-4" />
          All repositories
        </ButtonLink>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <a
            className={`project-tile soft-card group rounded-xl border border-border bg-background p-4 sm:p-5 reveal reveal-${Math.min(i + 1, 8)}`}
            href={project.href}
            key={project.title}
            rel="noreferrer"
            target="_blank"
          >
            <div className="flex items-center justify-between gap-4">
              <Badge className="badge-glow border-border bg-card text-muted-foreground">
                {project.category}
              </Badge>
              <span className="text-lg text-muted-foreground transition-all duration-200 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </div>
            <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Badge
                  className="badge-glow border-border bg-card text-muted-foreground"
                  key={item}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ─── Profile card ───────────────────────────────────────────────────────── */

function ProfileCard() {
  return (
    <section className="profile-card rounded-xl border border-border bg-card p-4 sm:rounded-2xl sm:p-5 reveal reveal-1">
      <div className="flex items-center gap-4 lg:flex-col lg:text-center">
        {/* Floating avatar */}
        <div className="avatar-float shrink-0">
          <Image
            alt="Netrois GitHub avatar"
            className="size-16 rounded-xl border border-border bg-background object-cover sm:size-20 sm:rounded-2xl lg:size-28"
            height="224"
            src="https://github.com/INetrois.png?size=224"
            width="224"
          />
        </div>

        <div className="min-w-0">
          <h1 className="truncate text-xl font-semibold sm:text-2xl">
            Netrois
          </h1>
          <Badge className="badge-glow mt-2 border-border bg-background text-muted-foreground sm:mt-3">
            Backend Developer / Engineer
          </Badge>
          {/* Status dot */}
          {/*<div className="mt-3 flex items-center justify-start gap-2 lg:justify-center">
            <span className="status-dot" aria-hidden="true" />
            <span className="text-xs text-muted-foreground">Available</span>
          </div>*/}
        </div>
      </div>

      <div className="mt-4 h-px bg-border sm:mt-6" />

      <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4">
        <a
          className="soft-hover inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-accent reveal reveal-2"
          href="https://github.com/INetrois"
          rel="noreferrer"
          target="_blank"
        >
          <GithubIcon className="size-4" />
          GitHub
        </a>
        <a
          className="soft-hover inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-accent reveal reveal-3"
          href="https://www.reddit.com/user/INetrois/"
          rel="noreferrer"
          target="_blank"
        >
          <RedditIcon className="size-4" />
          Reddit
        </a>
        <a
          className="soft-hover inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-accent reveal reveal-4"
          href="https://dev.to/inetrois"
          rel="noreferrer"
          target="_blank"
        >
          <DevIcon className="h-4 w-5" />
          DEV
        </a>
      </div>
    </section>
  );
}

/* ─── Header nav ─────────────────────────────────────────────────────────── */

function HeaderNav({
  activeTab,
  setActiveTab,
}: {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-card/88 backdrop-blur-xl">
      <div className="grid gap-3 px-4 py-3 sm:px-8 sm:py-4 md:flex md:items-center md:justify-between">
        <div className="min-w-0">
          <div className="text-sm font-semibold">Netrois Portfolio</div>
          <div className="truncate text-xs text-muted-foreground">
            Backend systems and infrastructure
          </div>
        </div>
        <nav className="no-scrollbar -mx-1 flex min-w-0 items-center gap-1 overflow-x-auto px-1">
          {navItems.map(([label, tab]) => (
            <TabButton
              activeTab={activeTab}
              key={tab}
              label={label}
              setActiveTab={setActiveTab}
              tab={tab}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ─── Tab button with animated indicator ─────────────────────────────────── */

function TabButton({
  activeTab,
  label,
  setActiveTab,
  tab,
}: {
  activeTab: Tab;
  label: string;
  setActiveTab: (tab: Tab) => void;
  tab: Tab;
}) {
  const isActive = activeTab === tab;

  return (
    <button
      aria-current={isActive ? "page" : undefined}
      className={[
        "tab-btn relative shrink-0 px-3 py-2 text-sm transition-colors duration-200",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
      ].join(" ")}
      onClick={() => setActiveTab(tab)}
      type="button"
    >
      {isActive && <span className="tab-active-indicator" aria-hidden="true" />}
      <span className="relative z-10">{label}</span>
    </button>
  );
}

/* ─── Section title ──────────────────────────────────────────────────────── */

function SectionTitle({ title }: { title: string }) {
  return (
    <div>
      <h2 className="section-title text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

/* ─── Stack icon ─────────────────────────────────────────────────────────── */

function StackIcon({ icon, name }: { icon: StackKey; name: string }) {
  return (
    <span
      aria-label={`${name} icon`}
      className="stack-icon-wrap grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-card shadow-sm"
      role="img"
    >
      {icon === "fastapi" ? (
        <FastApiIcon />
      ) : (
        <RemoteStackIcon icon={icon} />
      )}
    </span>
  );
}

function RemoteStackIcon({ icon }: { icon: Exclude<StackKey, "fastapi"> }) {
  const iconConfig = stackIcons[icon];

  return (
    <Image
      alt=""
      className={["size-7 object-contain", iconConfig.className]
        .filter(Boolean)
        .join(" ")}
      height="28"
      src={iconConfig.src}
      unoptimized
      width="28"
    />
  );
}

/* ─── SVG icons ──────────────────────────────────────────────────────────── */

function FastApiIcon() {
  return (
    <svg aria-hidden="true" className="size-7" viewBox="0 0 24 24">
      <circle cx="12" cy="12" fill="#009688" r="11" />
      <path
        d="M13.7 3.8 6.8 13h4.2l-1.1 7.2 7.3-9.8h-4.3l.8-6.6Z"
        fill="#fff"
      />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.51.47-3.16-.63-3.36-1.21-.11-.3-.6-1.21-1.03-1.45-.35-.19-.85-.66-.01-.67.79-.01 1.35.74 1.54 1.05.9 1.55 2.34 1.11 2.91.85.09-.67.35-1.11.64-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.11.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.28 9.28 0 0 1 12 6.91c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.05.36.32.68.93.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21.7 11.5a2.4 2.4 0 0 0-4.1-1.7 11.8 11.8 0 0 0-4.7-1.3l.8-3.7 2.6.6a1.7 1.7 0 1 0 .2-1.1l-3.2-.7a.6.6 0 0 0-.7.4l-.9 4.5a12 12 0 0 0-5.2 1.3 2.4 2.4 0 1 0-2.6 3.9 4.2 4.2 0 0 0-.1.9c0 3.4 3.7 6.1 8.2 6.1s8.2-2.7 8.2-6.1c0-.3 0-.6-.1-.9.9-.4 1.6-1.2 1.6-2.2ZM7.6 13.5a1.4 1.4 0 1 1 2.8 0 1.4 1.4 0 0 1-2.8 0Zm7.6 3.7c-.9.9-2.2 1.3-3.7 1.3s-2.8-.5-3.7-1.3a.6.6 0 0 1 .8-.8c.7.6 1.7 1 2.9 1s2.2-.3 2.9-1a.6.6 0 0 1 .8.8Zm-.4-2.3a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Z" />
    </svg>
  );
}

function DevIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 32 20"
    >
      <rect fill="currentColor" height="20" rx="4" width="32" />
      <path
        d="M6.1 14.2V5.8h2.4c2.4 0 3.9 1.5 3.9 4.2s-1.5 4.2-3.9 4.2H6.1Zm1.7-1.5h.6c1.3 0 2.2-.8 2.2-2.7s-.9-2.7-2.2-2.7h-.6v5.4Zm6.1 1.5V5.8h5.2v1.5h-3.5v1.8h2.9v1.5h-2.9v2.1h3.7v1.5h-5.4Zm8.5 0-2.6-8.4h1.8l1 3.9c.2.9.4 1.8.6 2.7.2-.9.4-1.8.6-2.7l1-3.9h1.7l-2.6 8.4h-1.5Z"
        fill="var(--background)"
      />
    </svg>
  );
}
