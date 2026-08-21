import { footer } from "../content/copy";

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-foreground/70 outline-none transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
              {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[76rem] px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[15px] font-medium tracking-tight">AssetLex</p>
            <p className="mt-2 max-w-[24ch] text-sm leading-5 text-muted-foreground">
              Betreiberpflichten. Endlich im Griff.
            </p>
          </div>
          <LinkColumn title={footer.produktTitle} links={footer.produktLinks} />
          <LinkColumn title={footer.rechtlichesTitle} links={footer.rechtlichesLinks} />
          <div>
            <h3 className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {footer.kontaktTitle}
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`mailto:${footer.email}`}
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {footer.email}
                </a>
              </li>
              <li>
                <a
                  href={footer.linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {footer.linkedin}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-xs text-muted-foreground">{footer.copyright}</p>
      </div>
    </footer>
  );
}
