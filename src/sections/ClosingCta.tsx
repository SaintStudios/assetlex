import { SquircleCard } from "../components/ui/SquircleCard";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { closingCta } from "../content/copy";

export function ClosingCta() {
  return (
    <section>
      <Reveal>
        <SquircleCard
          contentClassName="flex flex-col items-center gap-3 bg-background p-10 text-center sm:p-14"
          className="mx-auto max-w-[64rem]"
        >
          <h2 className="max-w-[24ch] text-balance text-[clamp(24px,3vw,34px)] font-medium tracking-tight">
            {closingCta.heading}
          </h2>
          <p className="text-muted-foreground">{closingCta.sub}</p>
          <Button href="#" className="mt-3">
            {closingCta.button}
          </Button>
        </SquircleCard>
      </Reveal>
    </section>
  );
}
