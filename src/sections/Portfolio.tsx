import { SquircleCard } from "../components/ui/SquircleCard";
import { StatDot, statusTextClass } from "../components/ui/StatDot";
import { Reveal } from "../components/ui/Reveal";
import { cityCards, portfolio } from "../content/copy";

/** „So sieht Ihr Portfolio mit AssetLex aus.“ — stats + seven city cards. */
export function Portfolio() {
  return (
    <section>
      <Reveal className="text-center">
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{portfolio.chip}</p>
        <h2 className="mx-auto mt-4 max-w-[26ch] text-balance text-[clamp(24px,3vw,34px)] font-medium tracking-tight">
          {portfolio.heading}
        </h2>
        <p className="mt-3 text-muted-foreground">{portfolio.sub}</p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mx-auto mt-8 grid w-fit max-w-full grid-cols-3 items-center gap-3 rounded-full border border-border bg-card px-6 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.06)] [corner-shape:squircle] sm:gap-6 sm:px-10">
          {portfolio.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-xl font-medium tabular-nums tracking-tight">{s.value}</p>
              <p className="mt-0.5 whitespace-nowrap text-xs leading-5 text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cityCards.map((c, i) => (
          <Reveal key={c.city} delay={(i % 4) * 80}>
            <SquircleCard className="h-full" contentClassName="flex h-full flex-col p-0">
              <img
                src={c.image}
                alt={`Gebäudeansicht ${c.city}`}
                width="600"
                height="338"
                loading="lazy"
                className="h-36 w-full object-cover"
              />
              <div className="flex min-h-32 flex-col gap-1 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{c.city}</p>
                <p className="text-sm font-medium">{c.system}</p>
                <p className="text-xs text-muted-foreground">{c.address}</p>
                <p
                  className={`mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-medium ${statusTextClass[c.tone]}`}
                >
                  <StatDot tone={c.tone} /> {c.status}
                </p>
              </div>
            </SquircleCard>
          </Reveal>
        ))}
      </div>

      <p className="mt-3.5 text-center text-xs text-muted-foreground">{portfolio.disclaimer}</p>
    </section>
  );
}
