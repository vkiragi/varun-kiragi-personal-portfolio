import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

const HERO_LINKS = ["Email", "GitHub", "LinkedIn", "Resume"];

export function Hero() {
  const links = site.links.filter((l) => HERO_LINKS.includes(l.label));

  return (
    <section id="top" className="flex flex-col" style={{ paddingTop: "1rem" }}>
      <Reveal className="flex flex-col" style={{ gap: "1.75rem" }}>
        <h1
          id="hero-name"
          style={{
            fontFamily: "var(--font-family-serif)",
            fontWeight: 500,
            fontSize: "var(--font-size-heading-1)",
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          {site.name}
        </h1>

        <p
          style={{
            fontSize: "var(--font-size-large)",
            color: "var(--color-foreground)",
            maxWidth: "40ch",
            margin: 0,
          }}
        >
          {site.headline}
        </p>

        <p
          style={{
            fontSize: "var(--font-size-medium)",
            color: "var(--color-secondary)",
            maxWidth: "62ch",
            margin: 0,
          }}
        >
          {site.hero.intro}
        </p>

        <div
          className="flex flex-wrap items-center"
          style={{
            gap: "1.5rem",
            fontFamily: "var(--font-family-mono)",
            fontSize: "var(--font-size-small)",
            marginTop: "0.5rem",
          }}
        >
          {links.map((link) => {
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
