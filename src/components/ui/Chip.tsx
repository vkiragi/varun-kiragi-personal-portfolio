type ChipProps = {
  children: React.ReactNode;
  variant?: "outline" | "accent";
};

export function Chip({ children, variant = "outline" }: ChipProps) {
  const isAccent = variant === "accent";

  return (
    <span
      className="inline-flex items-center rounded-md"
      style={{
        fontFamily: "var(--font-family-mono)",
        fontSize: "var(--font-size-tiny)",
        padding: "0.3em 0.7em",
        lineHeight: 1.2,
        color: isAccent
          ? "var(--color-accent-soft-fg)"
          : "var(--color-secondary)",
        backgroundColor: isAccent
          ? "var(--color-accent-soft-bg)"
          : "transparent",
        border: isAccent ? "none" : "1px solid var(--color-border)",
      }}
    >
      {children}
    </span>
  );
}
