import Link from "next/link";

const variants = {
  brass:
    "bg-brass text-ink hover:bg-brass-bright shadow-[0_1px_0_0_rgba(0,0,0,0.15)]",
  outlineDark:
    "border border-cream/30 text-cream hover:border-brass hover:text-brass",
  outlineLight:
    "border border-ink/25 text-ink hover:border-oxblood hover:text-oxblood",
  textDark: "text-cream hover:text-brass",
  textLight: "text-ink hover:text-oxblood",
};

export default function Button({
  href,
  variant = "brass",
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
