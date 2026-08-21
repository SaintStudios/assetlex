import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "motion/react";
import { SquircleCard } from "../components/ui/SquircleCard";
import { StatDot, statusTextClass } from "../components/ui/StatDot";
import { SHOT_REVEAL } from "../lib/springs";
import { cn } from "../lib/cn";
import { obligations, proof } from "../content/copy";

const MORPH_EASE = [0.32, 0.72, 0, 1] as const;

function fmtDe(v: number, decimals = 0) {
  return v.toLocaleString("de-DE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

/** Odometer count-up on first view; tabular-nums upstream keeps zero jitter. */
function CountUp({
  value,
  decimals = 0,
  duration = 1,
  className,
}: {
  value: number;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduced = usePrefersReducedMotion();
  const [text, setText] = useState(() => fmtDe(0, decimals));

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setText(fmtDe(value, decimals));
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: MORPH_EASE,
      onUpdate: (v) => setText(fmtDe(v, decimals)),
    });
    return () => controls.stop();
  }, [inView, reduced, value, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}

const SUMMARY_CELLS = [
  { value: 110, label: "gültig", tone: "ok" as const },
  { value: 9, label: "überfällig", tone: "overdue" as const },
  { value: 15, label: "ohne Nachweis", tone: "missing" as const },
];

const STRIP = [
  { pct: 82.1, cls: "bg-success" },
  { pct: 6.7, cls: "bg-destructive" },
  { pct: 11.2, cls: "bg-muted-foreground/50" },
];

/**
 * Product proof: the Portfolio-Status panel as a structured mini-dashboard.
 * Upper zone: score card + portfolio summary with odometer count-ups and
 * staggered bars. Lower zone: aligned obligation table (static).
 * Enters with the springier landing-shot reveal (420/32).
 */
export function ProofShot() {
  return (
    <section id="proof" className="mx-auto w-full max-w-[68rem]">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={SHOT_REVEAL}
      >
        <SquircleCard
          title={proof.title}
          chip={
            <span className="whitespace-nowrap rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {proof.chip}
            </span>
          }
        >
          <div className="flex flex-col gap-3 p-4 sm:p-5">
            {/* ── upper zone: score + summary ─────────────────────────── */}
            <div className="grid gap-3 lg:grid-cols-[280px_1fr]">
              {/* score card */}
              <div className="rounded-[16px] border border-border bg-card p-5 [corner-shape:squircle] shadow-[0_1px_2px_rgba(0,0,0,0.06)] sm:p-6">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {proof.scoreLabel}
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <CountUp
                    value={8.4}
                    decimals={1}
                    duration={1.2}
                    className="text-[48px] font-medium leading-none tracking-tight tabular-nums"
                  />
                  <span className="text-sm text-muted-foreground tabular-nums">/10</span>
                </div>
                <div
                  className="mt-5 flex gap-1"
                  role="img"
                  aria-label={`${proof.score} von 10 Punkten`}
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                        delay: 0.35 + i * 0.06,
                      }}
                      className={cn(
                        "h-1.5 flex-1 origin-left rounded-full",
                        i < 8 ? "bg-primary" : i === 8 ? "bg-primary/40" : "bg-secondary",
                      )}
                    />
                  ))}
                </div>
                <p className="mt-4 text-[11px] leading-4 text-muted-foreground">
                  {proof.dimensions}
                </p>
              </div>

              {/* portfolio summary card */}
              <div className="rounded-[16px] border border-border bg-card p-5 [corner-shape:squircle] shadow-[0_1px_2px_rgba(0,0,0,0.06)] sm:p-6">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  Prüfpflichten im Portfolio
                </p>
                <CountUp
                  value={134}
                  duration={1.1}
                  className="mt-3 block text-[48px] font-medium leading-none tracking-tight tabular-nums"
                />
                <div className="mt-5 flex gap-1" role="img" aria-label="Zusammensetzung der Prüfpflichten">
                  {STRIP.map((s, i) => (
                    <motion.span
                      key={s.cls}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                      transition={{
                        duration: 0.55,
                        ease: MORPH_EASE,
                        delay: 0.3 + i * 0.09,
                      }}
                      style={{ width: `${s.pct}%` }}
                      className={cn("h-1.5 origin-left rounded-full", s.cls)}
                    />
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {SUMMARY_CELLS.map((c) => (
                    <p key={c.label} className="flex items-center gap-1.5 whitespace-nowrap">
                      <StatDot tone={c.tone} />
                      <CountUp
                        value={c.value}
                        className="text-lg font-medium tabular-nums"
                      />
                      <span className="text-xs text-muted-foreground">{c.label}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* ── lower zone: obligation table (unchanged) ─────────────── */}
            <div role="status" aria-label="Prüfpflichten im Portfolio">
              <div
                aria-hidden="true"
                className="hidden grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_11rem] gap-x-6 px-3 pb-1 pt-2 text-[11px] uppercase tracking-[0.12em] text-muted-foreground sm:grid"
              >
                <span>Anlage &amp; Standort</span>
                <span>Rechtsgrundlage</span>
                <span className="justify-self-end">Status</span>
              </div>
              {obligations.map((o) => (
                <div
                  key={o.name}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-0.5 rounded-md px-3 py-3 transition-colors hover:bg-accent sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_11rem]"
                >
                  <div className="col-start-1 row-start-1 flex min-w-0 items-center gap-2.5">
                    <StatDot tone={o.tone} />
                    <span className="truncate text-sm font-medium">{o.name}</span>
                    <span className="hidden truncate text-xs text-muted-foreground lg:inline">
                      · {o.meta.split(" · ")[0]}
                    </span>
                  </div>
                  <span className="col-start-1 row-start-2 min-w-0 truncate text-xs text-muted-foreground sm:col-start-2 sm:row-start-1">
                    {o.meta}
                  </span>
                  <span
                    className={cn(
                      "col-start-2 row-start-1 whitespace-nowrap text-right text-[13px] font-medium tabular-nums sm:col-start-3 sm:justify-self-end",
                      statusTextClass[o.tone],
                    )}
                  >
                    {o.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SquircleCard>
      </motion.div>
      <p className="mt-3.5 text-center text-xs text-muted-foreground">{proof.caption}</p>
    </section>
  );
}
