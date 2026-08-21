import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FLICK, PANEL } from "../../lib/springs";
import { cn } from "../../lib/cn";

/**
 * FAQ disclosure row: measured-height choreography (PANEL spring), chevron
 * on FLICK. No accordion library styling.
 */
export function AccordionRow({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:py-5"
      >
        <span className="text-sm font-medium text-foreground sm:text-[15px]">
          {question}
        </span>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={FLICK}
          className="shrink-0 text-muted-foreground"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={PANEL}
            className="overflow-hidden"
          >
            <p className={cn("max-w-[65ch] pb-5 text-sm leading-6 text-muted-foreground")}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
