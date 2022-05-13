import { pipe } from "https://deno.land/x/compose@1.3.2/index.js";

import { concatDataChars, genDataChars } from "./dataChars/mod.ts";
import { concatGuardBars } from "./concatGuardBars.ts";
import { concatMargins } from "./concatMargins.ts";
import { Digit } from "../digit.ts";
import { findBlackModIndices } from "./findBlackModIndices/mod.ts";
import { groupContiguousIndices } from "./groupContiguousIndices.ts";
import { renderBarcode } from "./renderBarcode/mod.ts";
import { Tuple12 } from "../tuple.ts";

export const genBarcode = (...digits: Tuple12<Digit>): string => {
  const [left, right] = genDataChars(...digits);

  return pipe(
    concatDataChars(left, right),
    concatGuardBars,
    concatMargins,
    findBlackModIndices,
    groupContiguousIndices,
    renderBarcode,
  );
};
