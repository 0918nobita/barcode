import { _, I, Mod } from "./barcodeModule.ts";
import { LeftDataChars, RightDataChars } from "./dataChars.ts";

export const concatDataChars = (
  left: LeftDataChars,
  right: RightDataChars,
): Mod[] => [...left.flat(), _, I, _, I, _, ...right.flat()];
