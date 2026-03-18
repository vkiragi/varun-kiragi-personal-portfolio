"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/content/site";

export function MobileHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="min-[782px]:hidden"
      style={{ padding: "var(--spacing-outer)" }}
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          style={{
            fontSize: "var(--font-size-heading-5)",
            fontWeight: 400,
            letterSpacing: "var(--letter-spacing-heading)",
            lineHeight: "var(--line-height-headings-small)",
            textDecoration: "none",
          }}
        >
          {site.name}
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          style={{
            fontSize: "var(--font-size-small)",
            fontWeight: 500,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-foreground)",
          }}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="flex flex-col"
          style={{
            gap: "0.25em",
            paddingTop: "1.5em",
          }}
        >
          {site.nav.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "var(--font-size-large)",
                  textDecoration: "none",
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
