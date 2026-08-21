import { SquircleCard } from "../components/ui/SquircleCard";
import { Reveal } from "../components/ui/Reveal";
import { features } from "../content/copy";

/** „AssetLex: mehr als eine Fristenliste.“ — five feature plates. */
export function Features() {
  return (
    <section>
      <Reveal as="h2" className="text-balance text-center text-[clamp(24px,3vw,34px)] font-medium tracking-tight">
        {features.heading}
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {features.items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 2) * 80}
            className={i === features.items.length - 1 ? "sm:col-span-2" : undefined}
          >
            <SquircleCard
              title={item.title}
              className="h-full"
              contentClassName="flex min-h-36 flex-col justify-center p-5"
            >
              <p className="max-w-[70ch] text-sm leading-6 text-muted-foreground">{item.body}</p>
            </SquircleCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
