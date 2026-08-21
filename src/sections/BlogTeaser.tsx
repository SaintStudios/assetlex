import { SquircleCard } from "../components/ui/SquircleCard";
import { Reveal } from "../components/ui/Reveal";
import { blogTeaser } from "../content/copy";

/** Blog teaser: one card, real article. */
export function BlogTeaser() {
  return (
    <section className="mx-auto w-full max-w-[48rem]">
      <Reveal as="h2" className="text-balance text-center text-[clamp(24px,3vw,34px)] font-medium tracking-tight">
        Neuigkeiten & Blog
      </Reveal>
      <Reveal delay={80}>
        <SquircleCard
          seeAllHref="#"
          contentClassName="flex flex-col p-0 sm:flex-row"
          className="group cursor-pointer transition-shadow hover:shadow-[0_1px_2px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.08)]"
        >
          <img
            src={blogTeaser.image}
            alt=""
            aria-hidden="true"
            width="480"
            height="360"
            loading="lazy"
            className="h-40 w-full object-cover sm:h-auto sm:w-56 sm:shrink-0 sm:self-stretch"
          />
          <div className="flex flex-col gap-1.5 p-5">
            <p className="text-xs text-muted-foreground">{blogTeaser.date}</p>
            <h3 className="max-w-[52ch] text-[15px] font-medium leading-snug">
              {blogTeaser.title}
            </h3>
            <p className="mt-1 line-clamp-3 text-sm leading-6 text-muted-foreground">
              {blogTeaser.excerpt}
            </p>
            <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-primary">
              {blogTeaser.more}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                ›
              </span>
            </span>
          </div>
        </SquircleCard>
      </Reveal>
    </section>
  );
}
