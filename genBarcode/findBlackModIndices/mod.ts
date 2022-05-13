import { I, Mod } from "../barcodeModule.ts";
import { findIndices } from "./findIndices.ts";

export const findBlackModIndices = (
  mods: readonly Mod[],
) => findIndices((mod) => mod === I)(mods);
