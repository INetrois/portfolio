import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const variants = {
  default:
    "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
  outline:
    "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

const sizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-11 px-6",
  icon: "size-10",
};

type ButtonStyleProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

function buttonClasses({
  className,
  size = "default",
  variant = "default",
}: ButtonStyleProps & { className?: string }) {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({
  className,
  size,
  variant,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleProps) {
  return (
    <button
      className={buttonClasses({ className, size, variant })}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  size,
  variant,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & ButtonStyleProps) {
  return (
    <a className={buttonClasses({ className, size, variant })} {...props} />
  );
}
