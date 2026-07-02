import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function Education() {
  return (
    <section id="education" style={{ scrollMarginTop: "5rem" }}>
      <SectionHeading number="04" title={site.sections.education.title} />

      <div className="flex flex-col">
        {site.education.map((item, i) => (
          <Reveal key={`${item.school}-${item.degree}`} delay={i * 0.05}>
            <div
              className="grid grid-cols-1 sm:grid-cols-[15rem_1fr]"
              style={{
                gap: "0.75rem",
                padding: "1.25rem 0",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-family-mono)",
                  fontSize: "var(--font-size-tiny)",
                  color: "var(--color-muted)",
                  margin: 0,
                }}
              >
                {item.dates}
              </p>
              <div style={{ margin: 0 }}>
                <p style={{ margin: 0, fontWeight: 600 }}>
                  {item.degree}
                  {"specialization" in item && item.specialization && (
                    <span
                      style={{
                        fontWeight: 400,
                        fontSize: "var(--font-size-small)",
                        color: "var(--color-secondary)",
                      }}
                    >
                      , ({item.specialization})
                    </span>
                  )}
                </p>
                <p
                  style={{
                    margin: "0.35rem 0 0",
                    fontSize: "var(--font-size-small)",
                    color: "var(--color-secondary)",
                  }}
                >
                  {item.school}
                  {item.location && (
                    <span style={{ color: "var(--color-muted)" }}>
                      {" "}
                      · {item.location}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
