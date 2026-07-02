import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

const CONTACT_LINKS = ["GitHub", "LinkedIn", "Resume"];

export function Contact() {
  const email = site.links.find((l) => l.label === "Email");
  const socials = site.links.filter((l) => CONTACT_LINKS.includes(l.label));

  return (
    <section id="contact" style={{ scrollMarginTop: "5rem" }}>
      <SectionHeading number="05" title={site.sections.contact.title} />

      <Reveal className="flex flex-col" style={{ gap: "1.5rem" }}>
        <p
          style={{
            fontFamily: "var(--font-family-serif)",
            fontSize: "var(--font-size-heading-5)",
            fontWeight: 400,
            maxWidth: "24ch",
            margin: 0,
          }}
        >
          {site.sections.contact.subtitle}
        </p>

        {email && (
          <div>
            <a
              href={email.href}
              className="group hover:border-[var(--color-accent)]"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                fontFamily: "var(--font-family-mono)",
                fontSize: "var(--font-size-small)",
                color: "var(--color-foreground)",
                border: "1px solid var(--color-border)",
                borderRadius: "6px",
                padding: "0.75rem 1.1rem",
                textDecoration: "none",
                transition:
                  "border-color 0.2s ease, background-color 0.2s ease",
              }}
            >
              <span>{email.href.replace("mailto:", "")}</span>
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
                style={{ color: "var(--color-accent)" }}
              >
                →
              </span>
            </a>
          </div>
        )}

        <div
          className="flex flex-wrap items-center"
          style={{
            gap: "1.5rem",
            fontFamily: "var(--font-family-mono)",
            fontSize: "var(--font-size-small)",
          }}
        >
          {socials.map((link) => {
            const external =
              link.href.startsWith("http") || link.href.endsWith(".pdf");
            return (
              <a
                key={link.href}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="hover:text-[var(--color-accent)]"
                style={{
                  color: "var(--color-foreground)",
                  textUnderlineOffset: "0.3em",
                }}
              >
                {link.label} ↗
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
