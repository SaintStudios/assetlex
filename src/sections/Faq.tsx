import { AccordionRow } from "../components/ui/AccordionRow";
import { Reveal } from "../components/ui/Reveal";
import { faqGroups } from "../content/faq";
import { faqHeading } from "../content/copy";

/** „Häufige Fragen“ — four groups of disclosure rows. */
export function Faq() {
  return (
    <section id="faq" className="mx-auto w-full max-w-[48rem]">
      <Reveal as="h2" className="text-balance text-center text-[clamp(24px,3vw,34px)] font-medium tracking-tight">
        {faqHeading}
      </Reveal>
      <div className="mt-8 flex flex-col gap-10">
        {faqGroups.map((group, gi) => (
          <Reveal key={group.title} delay={Math.min(gi, 2) * 80}>
            <h3 className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {group.title}
            </h3>
            <div className="mt-2 rounded-[22px] border border-border bg-card px-5 shadow-[0_1px_2px_rgba(0,0,0,0.06)] [corner-shape:squircle] sm:rounded-[44px] sm:px-7">
              {group.items.map((item) => (
                <AccordionRow key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
