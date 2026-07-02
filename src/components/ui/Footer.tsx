import { site } from "@/content/site";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-surface-2)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div
        className="mx-auto flex flex-wrap items-center justify-between"
        style={{
          maxWidth: "var(--content-max)",
          padding: "var(--spacing-70) var(--spacing-outer)",
          gap: "1rem",
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-tiny)",
          color: "var(--color-muted)",
        }}
      >
        <p style={{ margin: 0 }}>© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
