import Link from "next/link";
import { Chip } from "@/components/ui/Chip";
import { ProjectBullets } from "@/components/ui/ProjectBullets";

type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: readonly string[];
  links: { live?: string; repo?: string; repoLabel?: string };
  category?: string;
  role?: string;
  image?: string;
  highlights?: readonly string[];
  engineering?: readonly string[];
};

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  labels: { viewLive: string; viewCode: string };
};

export function ProjectCard({ project, featured = false, labels }: ProjectCardProps) {
  const { title, summary, stack, links, category, role, slug, image, highlights, engineering } =
    project;
  const bullets = engineering ?? highlights ?? [];

  return (
    <article
      className={`flex h-full w-full flex-col ${featured ? "sm:flex-row" : ""}`}
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "14px",
        overflow: "hidden",
      }}
    >
      {featured && image && (
        <div
          className="shrink-0"
          style={{
            flexBasis: "42%",
            backgroundColor: "var(--color-surface-2)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={`${title} screenshot`}
            className="h-full w-full object-cover"
            style={{ borderRadius: 0 }}
          />
        </div>
      )}

      <div
        className="flex min-w-0 flex-1 flex-col"
        style={{ gap: "1rem", padding: featured ? "2rem" : "1.5rem" }}
      >
        <div className="flex flex-wrap items-center" style={{ gap: "0.5rem" }}>
          {category && <Chip variant="accent">{category}</Chip>}
          {role && <Chip>{role}</Chip>}
          {links.live && <Chip>Live</Chip>}
        </div>

        <h3
          style={{
            fontFamily: "var(--font-family-serif)",
            fontSize: featured
              ? "var(--font-size-heading-4)"
              : "var(--font-size-heading-6)",
            fontWeight: 500,
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          <Link
            href={`/projects/${slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
            className="hover:text-[var(--color-accent)]"
          >
            {title}
          </Link>
        </h3>

        <p
          style={{
            color: "var(--color-secondary)",
            fontSize: "var(--font-size-small)",
            margin: 0,
          }}
        >
          {summary}
        </p>

        <ProjectBullets bullets={bullets} />

        <div
          className="flex flex-wrap"
          style={{ gap: "0.4rem", marginTop: "auto", paddingTop: "0.5rem" }}
        >
          {stack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        <div
          className="flex flex-wrap items-center"
          style={{
            gap: "1.25rem",
            fontFamily: "var(--font-family-mono)",
            fontSize: "var(--font-size-tiny)",
          }}
        >
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--color-accent)", textUnderlineOffset: "0.25em" }}
            >
              {labels.viewLive} ↗
            </a>
          )}
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--color-accent)", textUnderlineOffset: "0.25em" }}
            >
              {links.repoLabel ?? labels.viewCode} ↗
            </a>
          )}
          <Link
            href={`/projects/${slug}`}
            style={{ color: "var(--color-muted)", textUnderlineOffset: "0.25em" }}
          >
            View details →
          </Link>
        </div>
      </div>
    </article>
  );
}
