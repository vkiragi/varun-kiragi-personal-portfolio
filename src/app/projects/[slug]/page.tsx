import Link from "next/link";
import { notFound } from "next/navigation";
import { AngledSeparator } from "@/components/ui/AngledSeparator";
import { site } from "@/content/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = site.projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <p style={{ marginBottom: "2rem" }}>
        <Link
          href="/projects"
          style={{ fontSize: "var(--font-size-small)" }}
        >
          &larr; {site.labels.backToProjects}
        </Link>
      </p>

      <h1>{project.title}</h1>
      <p
        style={{
          fontSize: "var(--font-size-medium)",
          marginTop: "0.5rem",
        }}
      >
        {project.summary}
      </p>

      <AngledSeparator wide className="my-8" />

      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        {/* Highlights */}
        <div>
          <h6 style={{ marginBottom: "1.5rem" }}>{site.labels.highlights}</h6>
          <ul
            className="flex flex-col"
            style={{
              gap: "0.75rem",
              fontSize: "var(--font-size-small)",
              paddingLeft: "1.25em",
              margin: 0,
            }}
          >
            {project.highlights.map((item) => (
              <li key={item} style={{ lineHeight: 1.6 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Stack & Links */}
        <div className="flex flex-col" style={{ gap: "2rem" }}>
          <div>
            <h6 style={{ marginBottom: "1rem" }}>{site.labels.stack}</h6>
            <div
              className="flex flex-wrap"
              style={{
                gap: "0.5rem",
                fontSize: "var(--font-size-tiny)",
              }}
            >
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full"
                  style={{
                    border: "1px solid var(--color-foreground)",
                    padding: "0.3em 0.75em",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {(project.links as { live?: string; repo?: string }).live ||
          (project.links as { live?: string; repo?: string }).repo ? (
            <div>
              <h6 style={{ marginBottom: "1rem" }}>
                {site.labels.projectLinks}
              </h6>
              <div
                className="flex flex-wrap"
                style={{
                  gap: "1rem",
                  fontSize: "var(--font-size-small)",
                }}
              >
                {(project.links as { live?: string; repo?: string }).live && (
                  <a
                    href={
                      (project.links as { live?: string; repo?: string }).live
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {new URL((project.links as { live?: string; repo?: string }).live!).hostname.replace("www.", "")}
                  </a>
                )}
                {(project.links as { live?: string; repo?: string }).repo && (
                  <a
                    href={
                      (project.links as { live?: string; repo?: string }).repo
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.labels.viewCode}
                  </a>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
