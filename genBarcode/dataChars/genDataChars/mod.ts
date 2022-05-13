import { pipe } from "https://deno.land/x/compose@1.3.2/index.js";

import { _, I } from "../../barcodeModule.ts";
import { computeCheckDigit } from "./checkDigit.ts";
import { LeftDataChars, RightDataChars } from "../dataChars.ts";
import { Digit } from "../../../digit.ts";
import { toEvenParity } from "./toEvenParity.ts";
import { mapTuple6, reverseTuple7, Tuple12 } from "../../../tuple.ts";

const oddParity = {
  0: [_, _, _, I, I, _, I],
  1: [_, _, I, I, _, _, I],
  2: [_, _, I, _, _, I, I],
  3: [_, I, I, I, I, _, I],
  4: [_, I, _, _, _, I, I],
  5: [_, I, I, _, _, _, I],
  6: [_, I, _, I, I, I, I],
  7: [_, I, I, I, _, I, I],
  8: [_, I, I, _, I, I, I],
  9: [_, _, _, I, _, I, I],
} as const;

const whichParityToChange = {
  0: [],
  1: [2, 4, 5],
  2: [2, 3, 5],
  3: [2, 3, 4],
  4: [1, 4, 5],
  5: [1, 2, 5],
  6: [1, 2, 3],
  7: [1, 3, 5],
  8: [1, 3, 4],
  9: [1, 2, 4],
} as const;

export const genDataChars = (
  ...d: Tuple12<Digit>
): [LeftDataChars, RightDataChars] => {
  const leftDataChars: LeftDataChars = mapTuple6(
    [d[1], d[2], d[3], d[4], d[5], d[6]],
    (digit) => oddParity[digit],
  );

  const parityIndices = whichParityToChange[d[0]];
  for (const i of parityIndices) {
    leftDataChars[i] = pipe(leftDataChars[i], toEvenParity, reverseTuple7);
  }

  const checkDigit = computeCheckDigit(...d);

  const rightDataChars: RightDataChars = mapTuple6(
    [d[7], d[8], d[9], d[10], d[11], checkDigit],
    (digit) => toEvenParity(oddParity[digit]),
  );

  return [leftDataChars, rightDataChars];
};
