"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "var(--font-size-small)",
        color: "var(--color-foreground)",
        padding: 0,
        textDecoration: "underline",
        textUnderlineOffset: "0.2em",
      }}
      className="hover:no-underline"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
