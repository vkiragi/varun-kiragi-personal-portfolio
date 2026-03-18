import { Button } from "@/components/ui/Button";
import { AngledSeparator } from "@/components/ui/AngledSeparator";
import { site } from "@/content/site";

export default function ContactPage() {
  return (
    <div>
      <section style={{ paddingBottom: "2rem" }}>
        <h1>{site.sections.contact.title}</h1>
        <p style={{ fontSize: "var(--font-size-medium)", marginTop: "0.5rem" }}>
          {site.sections.contact.subtitle}
        </p>
      </section>

      <AngledSeparator wide />

      <section style={{ paddingTop: "3rem" }}>
        <p
          style={{
            fontSize: "var(--font-size-medium)",
            maxWidth: "var(--content-width)",
            marginBottom: "2rem",
          }}
        >
          {site.shortBio}
        </p>

        <div className="flex flex-wrap" style={{ gap: "1em" }}>
          {site.links.map((link, index) => (
            <Button
              key={link.href}
              href={link.href}
              variant={index === 0 ? "filled" : "primary"}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
}
