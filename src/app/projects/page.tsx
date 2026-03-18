import Link from "next/link";
import { AngledSeparator } from "@/components/ui/AngledSeparator";
import { site } from "@/content/site";

export default function ProjectsPage() {
  return (
    <div>
      <section style={{ paddingBottom: "2rem" }}>
        <h1>{site.sections.projects.title}</h1>
        <p style={{ fontSize: "var(--font-size-medium)", marginTop: "0.5rem" }}>
          {site.sections.projects.subtitle}
        </p>
      </section>

      <AngledSeparator wide />

      <div
        className="flex flex-col"
        style={{ paddingTop: "3rem", gap: "3rem" }}
      >
        {site.projects.map((project, i) => (
          <div key={project.slug}>
            <h6 style={{ margin: 0 }}>{project.title}</h6>
            <p
              style={{
                fontSize: "var(--font-size-medium)",
                marginTop: "0.75rem",
                maxWidth: "var(--content-width)",
              }}
            >
              {project.summary}
            </p>
            <div
              className="flex flex-wrap"
              style={{
                gap: "0.5rem",
                marginTop: "1rem",
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
            <p style={{ marginTop: "1rem" }}>
              <Link
                href={`/projects/${project.slug}`}
                style={{ fontSize: "var(--font-size-small)" }}
              >
                {site.labels.viewProject} &rarr;
              </Link>
            </p>
            {i < site.projects.length - 1 && (
              <AngledSeparator wide className="mt-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
