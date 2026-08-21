import { SquircleCard } from "../components/ui/SquircleCard";
import { StatDot } from "../components/ui/StatDot";
import { Reveal } from "../components/ui/Reveal";
import {
  GaugeIcon,
  MapPinIcon,
  RowsIcon,
  SignalIcon,
  UploadIcon,
  UserIcon,
} from "../components/ui/icons";
import { dashboardGrid, proof } from "../content/copy";
import type { ReactNode } from "react";

/** „Alles sofort im Blick.“ — bento of Q&A plates with icons and mini visuals. */
export function DashboardGrid() {
  return (
    <section id="funktionen">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
          {dashboardGrid.eyebrow}
        </p>
        <h2 className="mt-3 max-w-[24ch] text-balance text-[clamp(24px,3vw,34px)] font-medium tracking-tight">
          {dashboardGrid.heading}
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Portfolio-Status — spans two columns, carries the score visual */}
        <Reveal className="lg:col-span-2">
          <SquircleCard
            icon={<GaugeIcon />}
            title={dashboardGrid.cards[0].title}
            className="h-full"
            contentClassName="flex min-h-40 flex-col justify-between gap-4 p-5"
          >
            <p className="text-xs leading-5 text-muted-foreground">{dashboardGrid.cards[0].q}</p>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[28px] font-medium leading-none tracking-tight tabular-nums">
                  {proof.score}
                </span>
                <span className="text-xs text-muted-foreground tabular-nums"> /10</span>
              </div>
              <div
                className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary"
                role="img"
                aria-label={`${proof.score} von 10 Punkten`}
              >
                <div className="h-full w-[84%] rounded-full bg-primary" />
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">{dashboardGrid.cards[0].a}</p>
            </div>
          </SquircleCard>
        </Reveal>

        {/* Verantwortlichkeit */}
        <Reveal delay={80}>
          <QACard card={dashboardGrid.cards[1]} icon={<UserIcon />} />
        </Reveal>

        {/* Datenerfassung */}
        <Reveal>
          <QACard card={dashboardGrid.cards[2]} icon={<UploadIcon />} />
        </Reveal>

        {/* Landesrecht — the number is the visual */}
        <Reveal delay={80}>
          <SquircleCard
            icon={<MapPinIcon />}
            title={dashboardGrid.cards[3].title}
            className="h-full"
            contentClassName="flex min-h-40 flex-col gap-2 p-5"
          >
            <p className="font-mono text-[34px] font-medium leading-none tracking-tight tabular-nums">
              {dashboardGrid.cards[3].num}
            </p>
            <p className="text-xs leading-5 text-muted-foreground">{dashboardGrid.cards[3].q}</p>
            <p className="mt-auto text-sm leading-6 text-foreground/80">{dashboardGrid.cards[3].a}</p>
          </SquircleCard>
        </Reveal>

        {/* Handlungsbedarf — the legend is the visual */}
        <Reveal delay={160}>
          <SquircleCard
            icon={<SignalIcon />}
            title={dashboardGrid.cards[4].title}
            className="h-full"
            contentClassName="flex min-h-40 flex-col gap-2 p-5"
          >
            <p className="text-xs leading-5 text-muted-foreground">{dashboardGrid.cards[4].q}</p>
            <p className="text-sm leading-6 text-foreground/80">{dashboardGrid.cards[4].a}</p>
            <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1.5 pt-1">
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
          </SquircleCard>
        </Reveal>

        {/* Details — full width: „alles in einer Zeile“, shown as one line */}
        <Reveal className="lg:col-span-3" delay={80}>
          <SquircleCard
            icon={<RowsIcon />}
            title={dashboardGrid.cards[5].title}
            contentClassName="flex flex-col gap-3 p-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6"
          >
            <div className="flex items-center gap-2.5 rounded-md bg-card px-3 py-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              <StatDot tone="overdue" />
              <span className="whitespace-nowrap text-sm font-medium">Aufzug Ost</span>
              <span className="min-w-0 truncate font-mono text-xs text-muted-foreground">
                Lindenstr. 12 · PrüfVO (SV) · 12 Mon.
              </span>
              <span className="ml-auto hidden shrink-0 whitespace-nowrap text-xs font-medium text-destructive-foreground sm:inline">
                Frist 14 Tage
              </span>
            </div>
            <p className="max-w-[52ch] shrink-0 text-sm leading-6 text-muted-foreground">
              {dashboardGrid.cards[5].a}
            </p>
          </SquircleCard>
        </Reveal>
      </div>
    </section>
  );
}

function QACard({ card, icon }: { card: (typeof dashboardGrid.cards)[number]; icon: ReactNode }) {
  return (
    <SquircleCard
      icon={icon}
      title={card.title}
      className="h-full"
      contentClassName="flex min-h-40 flex-col gap-2 p-5"
    >
      <p className="text-xs leading-5 text-muted-foreground">{card.q}</p>
      <p className="mt-auto text-sm leading-6 text-foreground/80">{card.a}</p>
    </SquircleCard>
  );
}
