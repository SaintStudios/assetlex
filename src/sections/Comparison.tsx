import { Reveal } from "../components/ui/Reveal";
import { comparison } from "../content/copy";
import { cn } from "../lib/cn";

/** „Kein CAFM-System. Keine Excel-Tabelle.“ — Excel/CAFM/AssetLex matrix. */
export function Comparison() {
  return (
    <section id="vergleich">
      <Reveal className="text-center">
        <h2 className="mx-auto max-w-[24ch] text-balance text-[clamp(24px,3vw,34px)] font-medium tracking-tight">
          {comparison.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-[52ch] text-muted-foreground">{comparison.sub}</p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mx-auto mt-8 max-w-[64rem] overflow-hidden rounded-[22px] border border-border bg-[#f6f6f6] shadow-[0_1px_2px_rgba(0,0,0,0.06)] [corner-shape:squircle] sm:rounded-[44px]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="w-32 px-4 py-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground sm:px-6">
                  </th>
                  {comparison.columns.map((c) => (
                    <th
                      key={c}
                      scope="col"
                      className={cn(
                        "px-4 py-4 text-sm font-medium",
                        c === "AssetLex"
                          ? "border-x border-primary/30 text-primary"
                          : "text-muted-foreground",
                      )}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.label} className="border-b border-border last:border-b-0">
                    <th scope="row" className="px-4 py-4 align-top text-sm font-medium sm:px-6">
                      {row.label}
                    </th>
                    {row.cells.map((cell, i) => (
                      <td
                        key={comparison.columns[i]}
                        className={cn(
                          "px-4 py-4 align-top text-sm leading-6",
                          i === 2
                            ? "border-x border-primary/30 font-medium text-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
