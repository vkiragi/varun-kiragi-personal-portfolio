import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Chip } from "@/components/ui/Chip";
import { site } from "@/content/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return site.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = site.projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = site.projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const links = project.links as {
    appStore?: string;
    live?: string;
    repo?: string;
    repoLabel?: string;
  };
  const category = "category" in project ? project.category : undefined;
  const role = "role" in project ? project.role : undefined;
  const engineering =
    "engineering" in project
      ? (project.engineering as readonly string[])
      : undefined;

  return (
    <article>
      <p style={{ marginBottom: "2.5rem" }}>
        <Link
          href="/#work"
          style={{
            fontFamily: "var(--font-family-mono)",
            fontSize: "var(--font-size-tiny)",
            color: "var(--color-accent)",
            textDecoration: "none",
            textUnderlineOffset: "0.25em",
          }}
          className="hover:underline"
        >
          ← {site.labels.backToProjects}
        </Link>
      </p>

      {(category || role) && (
        <div
          className="flex flex-wrap items-center"
          style={{ gap: "0.5rem", marginBottom: "1.25rem" }}
        >
          {category && <Chip variant="accent">{category}</Chip>}
          {role && <Chip>{role}</Chip>}
        </div>
      )}

      <h1
        style={{
          fontFamily: "var(--font-family-serif)",
          fontWeight: 500,
        }}
      >
        {project.title}
      </h1>
      <p
        style={{
          fontSize: "var(--font-size-medium)",
          color: "var(--color-secondary)",
          marginTop: "1rem",
          maxWidth: "62ch",
        }}
      >
        {project.summary}
      </p>

      <hr className="hairline" style={{ margin: "2.5rem 0" }} />

      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        {/* Highlights */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-family-mono)",
              fontSize: "var(--font-size-tiny)",
              color: "var(--color-muted)",
              letterSpacing: "0.04em",
              margin: "0 0 1.5rem",
            }}
          >
            {site.labels.highlights}
          </h2>
          <ul
            className="flex flex-col"
            style={{
              gap: "1rem",
              fontSize: "var(--font-size-small)",
              color: "var(--color-secondary)",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {project.highlights.map((item) => (
              <li
                key={item}
                style={{ lineHeight: 1.6, display: "flex", gap: "0.75rem" }}
              >
                <span
                  aria-hidden="true"
                  style={{ color: "var(--color-accent-bright)" }}
                >
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stack & Links */}
        <div className="flex flex-col" style={{ gap: "2rem" }}>
          <div>
            <h2
              style={{
                fontFamily: "var(--font-family-mono)",
                fontSize: "var(--font-size-tiny)",
                color: "var(--color-muted)",
                letterSpacing: "0.04em",
                margin: "0 0 1rem",
              }}
            >
              {site.labels.stack}
            </h2>
            <div className="flex flex-wrap" style={{ gap: "0.4rem" }}>
              {project.stack.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>

          {(links.appStore || links.live || links.repo) && (
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-family-mono)",
                  fontSize: "var(--font-size-tiny)",
                  color: "var(--color-muted)",
                  letterSpacing: "0.04em",
                  margin: "0 0 1rem",
                }}
              >
                {site.labels.projectLinks}
              </h2>
              <div
                className="flex flex-wrap"
                style={{
                  gap: "1.25rem",
                  fontFamily: "var(--font-family-mono)",
                  fontSize: "var(--font-size-small)",
                }}
              >
                {links.appStore && (
                  <a
                    href={links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--color-accent)" }}
                  >
                    App Store ↗
                  </a>
                )}
                {links.live && (
                  <a
                    href={links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {new URL(links.live).hostname.replace("www.", "")} ↗
                  </a>
                )}
                {links.repo && (
                  <a
                    href={links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {links.repoLabel ?? site.labels.viewCode} ↗
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {engineering && engineering.length > 0 && (
        <>
          <hr className="hairline" style={{ margin: "2.5rem 0" }} />
          <div>
            <h2
              style={{
                fontFamily: "var(--font-family-mono)",
                fontSize: "var(--font-size-tiny)",
                color: "var(--color-muted)",
                letterSpacing: "0.04em",
                margin: "0 0 1.5rem",
              }}
            >
              Engineering
            </h2>
            <ul
              className="flex flex-col"
              style={{
                gap: "1rem",
                fontSize: "var(--font-size-small)",
                color: "var(--color-secondary)",
                listStyle: "none",
                padding: 0,
                margin: 0,
                maxWidth: "72ch",
              }}
            >
              {engineering.map((item) => (
                <li
                  key={item}
                  style={{ lineHeight: 1.6, display: "flex", gap: "0.75rem" }}
                >
                  <span
                    aria-hidden="true"
                    style={{ color: "var(--color-accent-bright)" }}
                  >
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </article>
  );
}
