"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { site } from "@/content/site";

export function TopNav() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const heroName = document.getElementById("hero-name");
    if (!heroName) {
      setShowName(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShowName(!entry.isIntersecting),
      // Trigger once the hero name has scrolled up past the sticky nav zone.
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 },
    );

    observer.observe(heroName);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "color-mix(in srgb, var(--color-background) 85%, transparent)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <nav
        className="mx-auto flex items-center"
        style={{
          maxWidth: "var(--content-max)",
          padding: "0.9rem var(--spacing-outer)",
        }}
      >
        {/* Name — collapses to zero width when hidden, so the centered links
            slide right to make room as it fades in. */}
        <div
          className="shrink-0"
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            maxWidth: showName ? "260px" : "0px",
            opacity: showName ? 1 : 0,
            transition:
              "max-width 0.4s ease, opacity 0.35s ease",
          }}
        >
          <Link
            href="/#top"
            aria-hidden={!showName}
            tabIndex={showName ? 0 : -1}
            style={{
              display: "inline-block",
              paddingRight: "1.5rem",
              fontFamily: "var(--font-family-serif)",
              fontSize: "var(--font-size-large)",
              fontWeight: 500,
              textDecoration: "none",
              color: "var(--color-foreground)",
              pointerEvents: showName ? "auto" : "none",
            }}
          >
            {site.name}
          </Link>
        </div>

        <div style={{ flex: 1 }} />

        <ul
          className="hidden items-center min-[640px]:flex"
          style={{
            gap: "1.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontFamily: "var(--font-family-mono)",
            fontSize: "var(--font-size-tiny)",
          }}
        >
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-[var(--color-accent)]"
                style={{
                  textDecoration: "none",
                  color: "var(--color-secondary)",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ flex: 1 }} />

        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
