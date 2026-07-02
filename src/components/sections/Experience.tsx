import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function Experience() {
  return (
    <section id="experience" style={{ scrollMarginTop: "5rem" }}>
      <SectionHeading number="03" title={site.sections.experience.title} />

      <div className="flex flex-col">
        {site.experience.map((item, i) => (
          <Reveal key={`${item.company}-${item.role}`} delay={i * 0.05}>
            <div
              className="flex flex-col sm:flex-row"
              style={{
                gap: "0.75rem",
                padding: "1.25rem 0",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              <p
                className="shrink-0"
                style={{
                  fontFamily: "var(--font-family-mono)",
                  fontSize: "var(--font-size-tiny)",
                  color: "var(--color-muted)",
                  margin: 0,
                  minWidth: "11rem",
                }}
              >
                {item.dates}
              </p>
              <div style={{ margin: 0 }}>
                <p style={{ margin: 0, fontWeight: 600 }}>
                  {item.role}
                  <span style={{ color: "var(--color-muted)" }}> · {item.company}</span>
                </p>
                <p
                  style={{
                    margin: "0.35rem 0 0",
                    fontSize: "var(--font-size-small)",
                    color: "var(--color-secondary)",
                  }}
                >
                  {item.highlights[0]}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
