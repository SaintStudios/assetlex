import { SquircleCard } from "../components/ui/SquircleCard";
import { StatDot } from "../components/ui/StatDot";
import { Reveal } from "../components/ui/Reveal";
import { dashboardGrid } from "../content/copy";

/** „AssetLex Dashboard. Alles sofort im Blick.“ — six Q&A plates. */
export function DashboardGrid() {
  return (
    <section id="funktionen">
      <Reveal as="h2" className="text-balance text-center text-[clamp(24px,3vw,34px)] font-medium tracking-tight">
        {dashboardGrid.heading}
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dashboardGrid.cards.map((card, i) => (
          <Reveal key={card.title} delay={(i % 3) * 80}>
            <SquircleCard
              title={card.title}
              className="h-full"
              contentClassName="flex min-h-40 flex-col gap-2 p-5"
            >
              {"num" in card && card.num ? (
                <p className="font-mono text-[26px] font-medium tracking-tight tabular-nums text-primary">
                  {card.num}
                </p>
              ) : null}
              <p className="text-xs leading-5 text-muted-foreground">{card.q}</p>
              <p className="mt-auto text-sm leading-6 text-foreground/80">{card.a}</p>
              {card.title === "Handlungsbedarf" ? (
                <div className="flex gap-4 pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <StatDot tone="overdue" /> überfällig
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <StatDot tone="soon" /> bald fällig
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <StatDot tone="ok" /> gültig
                  </span>
                </div>
              ) : null}
            </SquircleCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
