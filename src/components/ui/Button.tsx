import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "filled" | "ghost";

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-lg px-[1.1em] py-[0.6em] font-semibold transition-colors duration-200";

const variants: Record<ButtonVariant, string> = {
  // Solid teal primary
  primary:
    "bg-[var(--color-accent)] text-[var(--color-background)] border border-[var(--color-accent)] hover:bg-[var(--color-accent-bright)] hover:border-[var(--color-accent-bright)]",
  filled:
    "bg-[var(--color-accent)] text-[var(--color-background)] border border-[var(--color-accent)] hover:bg-[var(--color-accent-bright)] hover:border-[var(--color-accent-bright)]",
  // Ghost secondary
  outline:
    "bg-transparent text-[var(--color-foreground)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  ghost:
    "bg-transparent text-[var(--color-foreground)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
};

export function Button({
  href,
  variant = "primary",
  external,
  className,
  children,
}: ButtonProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className ?? ""}`.trim();

  if (href) {
    const isExternal =
      external ?? /^(https?:|mailto:|tel:)/.test(href);
    return (
      <Link
        href={href}
        className={classes}
        style={{ textDecoration: "none" }}
        {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
