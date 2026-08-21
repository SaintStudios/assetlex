import { Reveal } from "../components/ui/Reveal";
import {
  ArchiveIcon,
  CalendarIcon,
  FileIcon,
  SearchIcon,
  SparkleIcon,
} from "../components/ui/icons";
import { features } from "../content/copy";

const ICONS = [SearchIcon, CalendarIcon, FileIcon, ArchiveIcon, SparkleIcon];

/** „Mehr als eine Fristenliste.“ — one quiet plate of rows, KI carries the accent. */
export function Features() {
  return (
    <section className="mx-auto w-full max-w-[64rem]">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
          {features.eyebrow}
        </p>
        <h2 className="mt-3 max-w-[24ch] text-balance text-[clamp(24px,3vw,34px)] font-medium tracking-tight">
          {features.heading}
        </h2>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-6 rounded-[22px] border border-border bg-card p-2 shadow-[0_1px_2px_rgba(0,0,0,0.06)] [corner-shape:squircle] sm:rounded-[44px] sm:p-3">
          <ul role="list" className="flex flex-col">
            {features.items.map((item, i) => {
              const Icon = ICONS[i];
              const isFlagship = i === ICONS.length - 1;
              return (
                <li
                  key={item.title}
                  className="group flex items-start gap-4 rounded-[18px] p-4 transition-colors hover:bg-accent sm:items-center sm:gap-5 sm:p-5 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-border"
                >
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
                      isFlagship
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground/70"
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-medium leading-snug">{item.title}</h3>
                    <p className="mt-1 max-w-[70ch] text-sm leading-6 text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
