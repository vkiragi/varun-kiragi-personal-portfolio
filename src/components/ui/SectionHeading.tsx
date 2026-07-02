type SectionHeadingProps = {
  number: string;
  title: string;
  id?: string;
};

export function SectionHeading({ number, title, id }: SectionHeadingProps) {
  return (
    <div
      className="flex items-baseline"
      style={{ gap: "0.75rem", marginBottom: "var(--spacing-small)" }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-tiny)",
          fontWeight: 500,
          color: "var(--color-accent-bright)",
          letterSpacing: "0.02em",
        }}
      >
        {number} —
      </span>
      <h2
        id={id}
        style={{
          fontFamily: "var(--font-family-serif)",
          fontSize: "var(--font-size-heading-4)",
          fontWeight: 500,
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
