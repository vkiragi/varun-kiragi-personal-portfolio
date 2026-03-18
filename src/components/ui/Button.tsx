import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "filled";

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full transition-opacity duration-200 hover:opacity-70";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-[0.1em] border-current bg-transparent text-[var(--color-foreground)]",
  outline:
    "border-[0.1em] border-current bg-transparent text-[var(--color-foreground)]",
  filled:
    "bg-[var(--color-foreground)] text-[var(--color-background)] border-[0.1em] border-[var(--color-foreground)]",
};

const sizes: Record<ButtonVariant, string> = {
  primary: "px-[1em] py-[0.5em] font-semibold",
  outline: "px-[1em] py-[0.5em] font-semibold",
  filled: "px-[1em] py-[0.5em] font-semibold",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
}: ButtonProps) {
  const classes =
    `${baseClasses} ${variants[variant]} ${sizes[variant]} ${className ?? ""}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} style={{ textDecoration: "none" }}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
