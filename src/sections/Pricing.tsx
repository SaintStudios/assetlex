import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { pricing, tierFor } from "../content/copy";
import { cn } from "../lib/cn";

const de = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

/** „Ab 6,99 € im Monat.“ — featured card with stepper + tier table. */
export function Pricing() {
  const [count, setCount] = useState(1);
  const tier = tierFor(count);
  const perUnit = count > 0 ? Number(tier.total.replace(",", ".").replace(" €", "")) / count : 0;

  return (
    <section id="preise">
      <Reveal className="text-center">
        <h2 className="text-balance text-[clamp(24px,3vw,34px)] font-medium tracking-tight">
          {pricing.heading}
        </h2>
        <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
          {pricing.badge}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mx-auto mt-8 max-w-md rounded-[22px] border border-primary/40 bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.06)] [corner-shape:squircle] sm:rounded-[44px] sm:p-8">
          <p className="text-sm font-medium text-muted-foreground">{tier.name}</p>
          <p className="mt-2 flex items-baseline gap-1.5">
            <span className="text-[40px] font-medium leading-none tracking-tight tabular-nums">
              {tier.total}
            </span>
            <span className="text-sm text-muted-foreground"> {pricing.perMonth}</span>
          </p>

          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="text-sm text-muted-foreground">{pricing.stepperLabel}</span>
            <div className="flex items-center gap-2" role="group" aria-label={pricing.stepperLabel}>
              <button
                type="button"
                aria-label="Weniger Immobilien"
                onClick={() => setCount((c) => Math.max(1, c - 1))}
                className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-secondary text-sm font-medium tabular-nums outline-none transition-colors hover:bg-[color-mix(in_srgb,var(--secondary)_95%,var(--ink))] focus-visible:ring-[3px] focus-visible:ring-ring/50 active:translate-y-px active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
                disabled={count <= 1}
              >
                −
              </button>
              <span className="w-10 text-center text-sm font-medium tabular-nums" aria-live="polite">
                {count}
              </span>
              <button
                type="button"
                aria-label="Mehr Immobilien"
                onClick={() => setCount((c) => Math.min(50, c + 1))}
                className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-secondary text-sm font-medium outline-none transition-colors hover:bg-[color-mix(in_srgb,var(--secondary)_95%,var(--ink))] focus-visible:ring-[3px] focus-visible:ring-ring/50 active:translate-y-px active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
                disabled={count >= 50}
              >
                +
              </button>
            </div>
          </div>

          <p className="mt-3 min-h-5 text-xs text-muted-foreground tabular-nums" role="status">
            {count === 50
              ? "Ab 51 Immobilien: Sprechen Sie mit uns."
              : `entspricht ${de.format(perUnit)} pro Immobilie`}
          </p>

          <Button href="#" className="mt-6 w-full">
            {pricing.cta}
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">{pricing.vatNote}</p>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div className="mx-auto mt-4 grid max-w-4xl gap-4 sm:grid-cols-[1fr_1fr]" >
          <div className="rounded-[22px] border border-border bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.06)] [corner-shape:squircle]">
            <h3 className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {pricing.includedTitle}
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2.5">
              {pricing.included.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/80">
                  <span aria-hidden="true" className="text-sm font-medium text-primary">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[22px] border border-border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.06)] [corner-shape:squircle] overflow-hidden">
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {pricing.tiers.map((t, i) => (
                  <tr
                    key={t.name}
                    className={cn(
                      "border-b border-border last:border-b-0",
                      i === 0 && "border-l-2 border-l-primary",
                    )}
                  >
                    <th scope="row" className="px-5 py-4 align-top">
                      <span className="block font-medium">{t.name}</span>
                      <span className="block text-xs text-muted-foreground">{t.range}</span>
                    </th>
                    <td className="px-5 py-4 text-right align-top">
                      <span className="block font-medium tabular-nums">{t.total}</span>
                      <span className="block text-xs text-muted-foreground tabular-nums">
                        {t.perUnit}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t border-border px-5 py-3.5 text-xs text-muted-foreground">
              {pricing.moreLine}{" "}
              <a
                href={pricing.moreHref}
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                {pricing.moreLink}
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
