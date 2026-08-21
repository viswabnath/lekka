import Link from "next/link";

const variants = {
  accent:
    "bg-accent text-white hover:bg-accent-bright shadow-[0_1px_0_0_rgba(0,0,0,0.15)]",
  outlineDark:
    "border border-cream/30 text-cream hover:border-accent hover:text-accent",
  outlineLight:
    "border border-ink/25 text-ink hover:border-danger hover:text-danger",
  textDark: "text-cream hover:text-accent",
  textLight: "text-ink hover:text-danger",
};

export default function Button({
  href,
  variant = "accent",
  className = "",
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
