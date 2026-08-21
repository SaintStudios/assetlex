import { useEffect, useState, type ReactNode } from "react";
import { cn } from "../../lib/cn";

/**
 * The landing header's signature: a transparent full-width bar that morphs
 * into a floating glass pill on scroll (recipe 11, verbatim values).
 * Driven by data-scrolled + CSS transitions; the wrapper keeps a constant
 * flow height so the page never reflows under it.
 */
export function HeaderMorph({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="group sticky top-0 z-40 h-[68px] pt-3 sm:h-24 sm:pt-4"
    >
      <div
        className={cn(
          "relative mx-auto flex h-14 w-full max-w-full items-center justify-between rounded-full border border-transparent px-0 sm:h-16 sm:max-w-4xl sm:px-4",
          "transition-[max-width,height,margin,padding,background-color,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
          "group-data-[scrolled=true]:mt-3 group-data-[scrolled=true]:h-11 sm:group-data-[scrolled=true]:h-12",
          "group-data-[scrolled=true]:max-w-[calc(100%-1.5rem)] sm:group-data-[scrolled=true]:max-w-2xl",
          "group-data-[scrolled=true]:border-[#8f8f8f]/30 group-data-[scrolled=true]:bg-[#d9d9d9]/50",
          "group-data-[scrolled=true]:px-2 sm:group-data-[scrolled=true]:px-2.5",
          "group-data-[scrolled=true]:backdrop-blur-xl group-data-[scrolled=true]:backdrop-saturate-125",
          "group-data-[scrolled=true]:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.12),0_1px_1px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.10)]",
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 rounded-full opacity-0 mix-blend-overlay transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
            "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.4%22/></svg>')]",
            "group-data-[scrolled=true]:opacity-55",
          )}
        />
        {children}
      </div>
    </header>
  );
}
