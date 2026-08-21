import * as React from "react";
import { cn } from "../../lib/cn";

/**
 * The OA button: a pill that physically presses.
 * - active:translate-y-px active:scale-[0.98] on every variant; the press is
 *   the only geometry change a pointer causes in this system.
 * - The primary bevel color-mixes the accent toward its deep anchor; for the
 *   emerald brand the anchor is deep green (#064e3b) instead of indigo.
 * - Loading keeps the label and adds a spinner beside it; width never jumps.
 */

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm" | "xs";
type As = "button" | "a";

const BASE =
  "inline-flex cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-full font-medium outline-none transition-all " +
  "focus-visible:ring-[3px] focus-visible:ring-ring/50 " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "active:translate-y-px active:scale-[0.98]";

const VARIANTS: Record<Variant, string> = {
  primary:
    "border border-[color-mix(in_srgb,var(--primary)_80%,#064e3b)] " +
    "bg-[color-mix(in_srgb,var(--primary)_90%,#064e3b)] text-primary-foreground " +
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(6,78,59,0.35),0_1px_2px_rgba(0,0,0,0.06)] " +
    "hover:bg-primary hover:border-[color-mix(in_srgb,var(--primary)_70%,#064e3b)]",
  secondary:
    "border border-transparent bg-secondary text-secondary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.06)] " +
    "hover:bg-[color-mix(in_srgb,var(--secondary)_95%,var(--ink))]",
  ghost:
    "text-muted-foreground shadow-none hover:bg-accent hover:text-accent-foreground",
};

const SIZES: Record<Size, string> = {
  md: "h-10 px-5 text-sm sm:text-[15px]",
  sm: "h-8 px-3.5 text-sm",
  xs: "h-7 px-3 text-xs",
};

export function Spinner({ className }: { className?: string }) {
  return (
    <span
      aria-label="Loading"
      role="status"
      className={cn(
        "inline-block size-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent",
        className,
      )}
    />
  );
}

export interface ButtonProps {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement & HTMLButtonElement>;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  href,
  className,
  children,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);
  const inner = (
    <>
      {loading ? <Spinner className="pointer-events-none size-3.5" /> : null}
      {children}
    </>
  );
  if (href !== undefined) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={classes}
      disabled={loading}
      aria-disabled={loading || undefined}
      aria-label={ariaLabel}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
    >
      {inner}
    </button>
  );
}
