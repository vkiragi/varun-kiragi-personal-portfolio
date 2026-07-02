type ProjectBulletsProps = {
  bullets: readonly string[];
  limit?: number;
};

export function ProjectBullets({ bullets, limit = 3 }: ProjectBulletsProps) {
  if (bullets.length === 0) return null;

  return (
    <ul
      className="flex flex-col"
      style={{
        gap: "0.75rem",
        listStyle: "none",
        padding: 0,
        margin: 0,
        fontSize: "var(--font-size-small)",
        color: "var(--color-secondary)",
      }}
    >
      {bullets.slice(0, limit).map((item) => (
        <li key={item} style={{ display: "flex", gap: "0.75rem", lineHeight: 1.6 }}>
          <span
            aria-hidden="true"
            style={{ color: "var(--color-accent-bright)", flexShrink: 0 }}
          >
            —
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
