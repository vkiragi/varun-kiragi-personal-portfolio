type AngledSeparatorProps = {
  wide?: boolean;
  className?: string;
};

export function AngledSeparator({
  wide = false,
  className,
}: AngledSeparatorProps) {
  return (
    <hr
      className={`angled-separator ${wide ? "angled-separator-wide" : ""} ${className ?? ""}`.trim()}
    />
  );
}
