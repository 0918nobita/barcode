import { _, Mod } from "./barcodeModule.ts";

export const concatMargins = (
  innerMods: readonly Mod[],
): Mod[] => [...new Array(11).fill(_), ...innerMods, ...new Array(7).fill(_)];
