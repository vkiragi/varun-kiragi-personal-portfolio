import Link from "next/link";
import { Chip } from "@/components/ui/Chip";
import { ProjectBullets } from "@/components/ui/ProjectBullets";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

type Venture = {
  slug: string;
  title: string;
  summary: string;
  stack: readonly string[];
  links: { appStore?: string; live?: string; repo?: string };
  role?: string;
  status?: string;
  timeframe?: string;
  highlights: readonly string[];
  engineering?: readonly string[];
};

export function Venture() {
  const project = site.projects.find(
    (p) => "featured" in p && p.featured,
  ) as Venture | undefined;

  if (!project) return null;

  const { title, summary, stack, links, role, status, timeframe, highlights, engineering, slug } =
    project;
  const bullets = engineering ?? highlights;

  return (
    <section id="venture" style={{ scrollMarginTop: "5rem" }}>
      <SectionHeading number="01" title={site.sections.venture.title} />

      <Reveal>
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "16px",
            padding: "2.5rem",
          }}
        >
          <div
            className="flex flex-wrap items-center justify-between"
            style={{ gap: "1rem", marginBottom: "1.5rem" }}
          >
            <div className="flex flex-wrap items-center" style={{ gap: "0.5rem" }}>
              {role && <Chip variant="accent">{role}</Chip>}
              {status && <Chip>{status}</Chip>}
            </div>
            {timeframe && (
              <span
                style={{
                  fontFamily: "var(--font-family-mono)",
                  fontSize: "var(--font-size-tiny)",
                  color: "var(--color-muted)",
                }}
              >
                {timeframe}
              </span>
            )}
          </div>

          <h3
            style={{
              fontFamily: "var(--font-family-serif)",
              fontSize: "var(--font-size-heading-3)",
              fontWeight: 500,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {title}
          </h3>

          <p
            style={{
              fontSize: "var(--font-size-medium)",
              color: "var(--color-secondary)",
              margin: "1rem 0 0",
              maxWidth: "70ch",
            }}
          >
            {summary}
          </p>

          <div style={{ marginTop: "1.75rem" }}>
            <ProjectBullets bullets={bullets} limit={3} />
          </div>

          <div
            className="flex flex-wrap"
            style={{ gap: "0.4rem", margin: "1.75rem 0 0" }}
          >
            {stack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>

          <div
            className="flex flex-wrap items-center"
            style={{
              gap: "1.5rem",
              margin: "1.75rem 0 0",
              fontFamily: "var(--font-family-mono)",
              fontSize: "var(--font-size-small)",
            }}
          >
            {links.appStore && (
              <a
                href={links.appStore}
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--color-accent)" }}
              >
                App Store ↗
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--color-accent)" }}
              >
                Live site ↗
              </a>
            )}
            {links.repo && (
              <a
                href={links.repo}
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--color-accent)" }}
              >
                GitHub ↗
              </a>
            )}
            <Link
              href={`/projects/${slug}`}
              style={{ color: "var(--color-muted)" }}
            >
              View details →
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
