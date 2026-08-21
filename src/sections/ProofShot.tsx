import { motion } from "motion/react";
import { SquircleCard } from "../components/ui/SquircleCard";
import { StatDot, statusTextClass } from "../components/ui/StatDot";
import { SHOT_REVEAL } from "../lib/springs";
import { cn } from "../lib/cn";
import { obligations, proof } from "../content/copy";

const SUMMARY_CELLS = [
  { value: "110", label: "gültig", tone: "ok" as const },
  { value: "9", label: "überfällig", tone: "overdue" as const },
  { value: "15", label: "ohne Nachweis", tone: "missing" as const },
];

/**
 * Product proof: the Portfolio-Status panel as a structured mini-dashboard —
 * score card + portfolio summary card on top, aligned obligation table below.
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
            {/* top zone: score + summary */}
            <div className="grid gap-3 lg:grid-cols-[280px_1fr]">
              <div className="rounded-[16px] border border-border bg-card p-5 [corner-shape:squircle] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {proof.scoreLabel}
                </p>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-[44px] font-medium leading-none tracking-tight tabular-nums">
                    {proof.score}
                  </span>
                  <span className="text-sm text-muted-foreground tabular-nums">/10</span>
                </div>
                <div
                  className="mt-4 flex gap-1"
                  role="img"
                  aria-label={`${proof.score} von 10 Punkten`}
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "h-1.5 flex-1 rounded-full",
                        i < 8 ? "bg-primary" : i === 8 ? "bg-primary/40" : "bg-secondary",
                      )}
                    />
                  ))}
                </div>
                <p className="mt-3 text-[11px] leading-4 text-muted-foreground">
                  {proof.dimensions}
                </p>
              </div>

              <div className="flex flex-col justify-between rounded-[16px] border border-border bg-card p-5 [corner-shape:squircle] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
                <p className="text-sm text-muted-foreground">
                  <span className="mr-2 inline-block align-baseline font-mono text-[30px] font-medium leading-none tracking-tight tabular-nums text-foreground">
                    134
                  </span>
                  Prüfpflichten im Portfolio
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3 sm:max-md:grid-cols-3">
                  {SUMMARY_CELLS.map((c) => (
                    <div key={c.label}>
                      <p className="flex items-center gap-1.5">
                        <StatDot tone={c.tone} />
                        <span className="text-xl font-medium tabular-nums tracking-tight">
                          {c.value}
                        </span>
                      </p>
                      <p className="mt-0.5 pl-3.5 text-xs leading-4 text-muted-foreground">
                        {c.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* bottom zone: obligation table */}
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
