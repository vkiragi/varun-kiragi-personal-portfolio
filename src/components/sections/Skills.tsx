import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

const GROUP_LABELS: Record<keyof typeof site.skills, string> = {
  languages: "Languages",
  frameworks: "Frameworks",
  tools: "Tools",
};

export function Skills() {
  const groups = Object.entries(site.skills) as [
    keyof typeof site.skills,
    readonly string[],
  ][];

  return (
    <section id="skills" style={{ scrollMarginTop: "5rem" }}>
      <SectionHeading number="04" title={site.sections.skills.title} />

      <div className="flex flex-col" style={{ gap: "1.75rem" }}>
        {groups.map(([key, items], i) => (
          <Reveal key={key} delay={i * 0.06}>
            <div
              className="flex flex-col sm:flex-row"
              style={{ gap: "1rem" }}
            >
              <p
                className="shrink-0"
                style={{
                  fontFamily: "var(--font-family-mono)",
                  fontSize: "var(--font-size-tiny)",
                  color: "var(--color-muted)",
                  minWidth: "8rem",
                  margin: 0,
                  paddingTop: "0.3em",
                }}
              >
                {GROUP_LABELS[key]}
              </p>
              <div className="flex flex-wrap" style={{ gap: "0.4rem" }}>
                {items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
