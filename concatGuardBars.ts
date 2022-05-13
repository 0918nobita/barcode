import { _, I, Mod } from "./barcodeModule.ts";

export const concatGuardBars = (
  innerMods: readonly Mod[],
): Mod[] => [I, _, I, ...innerMods, I, _, I];
