import { site } from "@/content/site";

export function Footer() {
  return (
    <footer
      className="flex flex-wrap items-center justify-between"
      style={{
        paddingTop: "var(--spacing-70)",
        fontSize: "var(--font-size-small)",
      }}
    >
      <p>
        &copy; 2026 {site.name}
      </p>
    </footer>
  );
}
