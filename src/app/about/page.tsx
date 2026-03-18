import { AngledSeparator } from "@/components/ui/AngledSeparator";
import { site } from "@/content/site";

export default function AboutPage() {
  return (
    <div>
      <section style={{ paddingBottom: "2rem" }}>
        <h1>{site.sections.about.title}</h1>
        <p style={{ fontSize: "var(--font-size-medium)", marginTop: "0.5rem" }}>
          {site.sections.about.subtitle}
        </p>
      </section>

      <AngledSeparator wide />

      {/* Bio */}
      <section style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <p
          style={{
            fontSize: "var(--font-size-medium)",
            maxWidth: "var(--content-width)",
          }}
        >
          {site.longBio}
        </p>
      </section>

      {/* Education */}
      <section style={{ paddingBottom: "3rem" }}>
        <h6 style={{ marginBottom: "1.5rem" }}>
          {site.sections.education.title}
        </h6>
        <div className="flex flex-col" style={{ gap: "1.5rem" }}>
          {site.education.map((item) => (
            <div key={item.school}>
              <p style={{ fontWeight: 600, margin: 0 }}>{item.school}</p>
              <p style={{ margin: 0 }}>{item.degree}</p>
              <p
                style={{
                  fontSize: "var(--font-size-small)",
                  margin: 0,
                  marginTop: "0.25rem",
                }}
              >
                {item.dates}
              </p>
            </div>
          ))}
        </div>
      </section>

      <AngledSeparator wide />

      {/* Experience */}
      <section style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <h6 style={{ marginBottom: "1.5rem" }}>
          {site.sections.experience.title}
        </h6>
        <div className="flex flex-col" style={{ gap: "2.5rem" }}>
          {site.experience.map((item) => (
            <div key={`${item.company}-${item.role}`}>
              <p style={{ fontWeight: 600, margin: 0 }}>{item.role}</p>
              <p style={{ margin: 0 }}>{item.company}</p>
              <p
                style={{
                  fontSize: "var(--font-size-small)",
                  margin: "0.25rem 0 1rem",
                }}
              >
                {item.dates}
              </p>
              <ul
                className="flex flex-col"
                style={{
                  gap: "0.5rem",
                  fontSize: "var(--font-size-small)",
                  paddingLeft: "1.25em",
                  margin: 0,
                }}
              >
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <AngledSeparator wide />

      {/* Skills */}
      <section style={{ paddingTop: "3rem" }}>
        <h6 style={{ marginBottom: "1.5rem" }}>
          {site.sections.skills.title}
        </h6>
        <div className="flex flex-wrap" style={{ gap: "0.75rem" }}>
          {site.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full"
              style={{
                border: "1px solid var(--color-foreground)",
                padding: "0.4em 1em",
                fontSize: "var(--font-size-tiny)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
