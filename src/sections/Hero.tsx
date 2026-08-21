import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { hero } from "../content/copy";

export function Hero() {
  return (
    <section className="pt-16 pb-4 text-center sm:pt-24" id="produkt">
      <Reveal as="p" className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
        {hero.eyebrow}
      </Reveal>
      <Reveal delay={80}>
        <h1 className="mx-auto mt-6 max-w-[22ch] text-balance text-[clamp(34px,5.4vw,58px)] font-medium leading-[1.05] tracking-tight">
          {hero.titleLead}{" "}
          <span className="font-normal text-muted-foreground">{hero.titleMuted}</span>
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mx-auto mt-4 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
          {hero.sub}
        </p>
      </Reveal>
      <Reveal delay={320}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          <Button href="#preise">{hero.ctaPrimary}</Button>
          <Button href="#proof" variant="secondary">
            {hero.ctaSecondary}
          </Button>
        </div>
      </Reveal>
      <p className="mt-3.5 text-[13px] text-muted-foreground">{hero.microcopy}</p>
    </section>
  );
}
