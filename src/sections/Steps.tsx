import { SquircleCard } from "../components/ui/SquircleCard";
import { Reveal } from "../components/ui/Reveal";
import { steps } from "../content/copy";

/** „Drei Schritte bis zur grünen Ampel.“ — numbered sequence plates. */
export function Steps() {
  return (
    <section>
      <Reveal as="h2" className="text-balance text-center text-[clamp(24px,3vw,34px)] font-medium tracking-tight">
        {steps.heading}
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {steps.items.map((s, i) => (
          <Reveal key={s.nr} delay={i * 80}>
            <SquircleCard
              className="h-full"
              contentClassName="flex min-h-44 flex-col gap-2 p-5"
            >
              <p className="font-mono text-sm font-medium tabular-nums text-primary">{s.nr}</p>
              <h3 className="text-[15px] font-medium leading-snug">{s.title}</h3>
              <p className="mt-auto text-sm leading-6 text-muted-foreground">{s.body}</p>
            </SquircleCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
