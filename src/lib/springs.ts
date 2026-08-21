/**
 * The seven springs of the AssetLex design vocabulary, in `motion` format.
 * Do not invent an eighth. Micro fades are plain CSS (≤0.2s ease-out).
 */
import type { Transition } from "motion/react";

export const PANEL: Transition = { type: "spring", stiffness: 550, damping: 38 };
export const LAYOUT: Transition = { type: "spring", stiffness: 550, damping: 40 };
export const POP: Transition = { type: "spring", stiffness: 400, damping: 26 };
export const POP_EXIT: Transition = { type: "spring", stiffness: 380, damping: 28 };
export const BANNER: Transition = { type: "spring", stiffness: 400, damping: 30 };
export const FLICK: Transition = { type: "spring", stiffness: 900, damping: 50 };
export const CHART: Transition = { type: "spring", stiffness: 300, damping: 28 };

/** Landing product-shot entrance: slightly springier than a reveal. */
export const SHOT_REVEAL: Transition = { type: "spring", stiffness: 420, damping: 32 };

/** The header morph / scroll clock. */
export const MORPH_EASE = [0.32, 0.72, 0, 1] as const;
