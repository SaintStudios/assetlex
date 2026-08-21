import { HeaderMorph } from "./components/ui/HeaderMorph";
import { Button } from "./components/ui/Button";
import { nav } from "./content/copy";
import { Hero } from "./sections/Hero";
import { ProofShot } from "./sections/ProofShot";
import { DashboardGrid } from "./sections/DashboardGrid";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <>
      <HeaderMorph>
        <a href="#produkt" className="text-[15px] font-medium tracking-tight">
          AssetLex
        </a>
        <nav className="hidden items-center gap-1 sm:flex" aria-label="Hauptnavigation">
          {nav.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-full px-2.5 py-1.5 text-sm text-foreground/70 outline-none transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <Button href="#" variant="ghost" size="xs">
            {nav.login}
          </Button>
          <Button href="#preise" size="xs">
            {nav.cta}
          </Button>
        </div>
      </HeaderMorph>

      <main className="mx-auto flex max-w-[76rem] flex-col gap-12 px-4 pb-12 sm:gap-20 sm:px-6 sm:pb-20">
        <Hero />
        <ProofShot />
        <DashboardGrid />
      </main>

      <Footer />
    </>
  );
}
