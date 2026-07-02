import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function Work() {
  const featured = site.projects.find((p) => "featured" in p && p.featured);
  const projects = site.projects.filter((p) => p !== featured).slice(0, 3);
  const labels = {
    viewLive: site.labels.viewLive,
    viewCode: site.labels.viewCode,
  };

  return (
    <section id="work" style={{ scrollMarginTop: "5rem" }}>
      <SectionHeading number="02" title={site.sections.projects.title} />

      <p
        style={{
          color: "var(--color-secondary)",
          fontSize: "var(--font-size-small)",
          maxWidth: "60ch",
          margin: "-1rem 0 2rem",
        }}
      >
        {site.sections.projects.subtitle}
      </p>

      <div className="flex flex-col" style={{ gap: "1.5rem" }}>
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08} className="flex">
            <ProjectCard project={project} labels={labels} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
