import { cn } from "../../lib/cn";

/** 8px status dot. Semantic colors are dots and words, never fills. */
export function StatDot({
  tone,
  className,
}: {
  tone: "overdue" | "soon" | "ok";
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-2 shrink-0 rounded-full",
        tone === "overdue" && "bg-destructive",
        tone === "soon" && "bg-warning",
        tone === "ok" && "bg-success",
        className,
      )}
    />
  );
}

export const statusTextClass = {
  overdue: "text-destructive-foreground",
  soon: "text-warning-foreground",
  ok: "text-success-foreground",
} as const;
