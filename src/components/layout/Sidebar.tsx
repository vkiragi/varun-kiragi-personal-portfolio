"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden min-[782px]:flex flex-col justify-between"
      style={{
        position: "sticky",
        top: "var(--spacing-outer)",
        minHeight: "calc(100vh - 2 * var(--spacing-outer))",
      }}
    >
      <div className="flex flex-col" style={{ gap: "2em" }}>
        <Link
          href="/"
          className="no-underline"
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

        <nav className="flex flex-col" style={{ gap: "0.25em" }}>
          {site.nav.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontSize: "var(--font-size-large)",
                  textDecoration: "none",
                  fontWeight: isActive ? 600 : 400,
                }}
                className="hover:underline"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center" style={{ gap: "1em" }}>
        {site.links
          .filter((l) => l.label === "LinkedIn" || l.label === "Email")
          .map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "var(--font-size-small)",
                textDecoration: "none",
              }}
              className="hover:underline"
            >
              {link.label}
            </a>
          ))}
      </div>
    </aside>
  );
}
