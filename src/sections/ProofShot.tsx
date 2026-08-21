import { motion } from "motion/react";
import { SquircleCard } from "../components/ui/SquircleCard";
import { StatDot, statusTextClass } from "../components/ui/StatDot";
import { SHOT_REVEAL } from "../lib/springs";
import { obligations, proof } from "../content/copy";

/**
 * Product proof: the Portfolio-Status panel in a squircle frame, entering
 * with the springier landing-shot reveal (420/32).
 */
export function ProofShot() {
  return (
    <section id="proof" className="mx-auto w-full max-w-[64rem]">
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
          <div className="p-5 sm:p-6">
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4 px-1 pb-5">
              <div>
                <p className="text-[44px] font-medium leading-none tracking-tight tabular-nums sm:text-[52px]">
                  {proof.score}
                  <span className="text-xl font-normal tracking-normal text-muted-foreground">
                    {" "}
                    /10
                  </span>
                </p>
                <p className="mt-1.5 text-[13px] text-muted-foreground">{proof.scoreLabel}</p>
              </div>
              <div className="flex flex-col items-end gap-0.5 text-right">
                {proof.stats.map((s) => (
                  <p key={s.strong} className="text-[13px] text-muted-foreground tabular-nums">
                    <span className="font-medium text-foreground">{s.strong}</span> {s.rest}
                  </p>
                ))}
                <p className="text-xs text-muted-foreground/80">{proof.dimensions}</p>
              </div>
            </div>

            <div role="status" aria-label="Prüfpflichten im Portfolio">
              {obligations.map((o) => (
                <div
                  key={o.name}
                  className="-mx-1.5 flex items-center gap-2.5 rounded-md px-3 py-2.5 transition-colors hover:bg-accent"
                >
                  <StatDot tone={o.tone} />
                  <span className="whitespace-nowrap text-sm font-medium">{o.name}</span>
                  <span className="min-w-0 flex-1 truncate text-[12.5px] text-muted-foreground">
                    {o.meta}
                  </span>
                  <span
                    className={`whitespace-nowrap text-[12.5px] font-medium tabular-nums ${statusTextClass[o.tone]}`}
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
