import Link from "next/link";

const variants = {
  accent:
    "bg-gradient-to-r from-accent to-accent-bright text-white shadow-[0_4px_20px_-4px_rgba(99,102,241,0.5)] hover:shadow-[0_6px_24px_-2px_rgba(99,102,241,0.65)] hover:-translate-y-0.5 active:translate-y-0",
  outlineLight:
    "border border-line-on-paper bg-paper-2/80 text-ink shadow-sm hover:border-accent/50 hover:bg-paper hover:text-accent hover:-translate-y-0.5 active:translate-y-0",
  textLight: "text-ink hover:text-accent font-medium",
};

export default function Button({
  href,
  variant = "accent",
  className = "",
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${variants[variant]} ${className}`;

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
