import { _, I, Mod } from "./barcodeModule.ts";
import { computeCheckDigit } from "./checkDigit.ts";
import { Digit } from "./digit.ts";
import { toEvenParity } from "./toEvenParity.ts";
import { Tuple12, Tuple6, Tuple7, mapTuple6, reverseTuple7 } from "./tuple.ts";

type DataChar = Readonly<Tuple7<Mod>>;

type LeftDataChars = Tuple6<DataChar>;

type RightDataChars = Tuple6<DataChar>;

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

export const genBarcode = (
  ...d: Tuple12<Digit>
): [LeftDataChars, RightDataChars] => {
  const leftDataChars: LeftDataChars = mapTuple6(
    [d[1], d[2], d[3], d[4], d[5], d[6]],
    (digit) => oddParity[digit]
  );

  const parityIndices = whichParityToChange[d[0]];
  for (const i of parityIndices) {
    leftDataChars[i] = reverseTuple7(toEvenParity(leftDataChars[i]));
  }

  const checkDigit = computeCheckDigit(...d);

  const rightDataChars: RightDataChars = mapTuple6(
    [d[7], d[8], d[9], d[10], d[11], checkDigit],
    (digit) => toEvenParity(oddParity[digit])
  );

  return [leftDataChars, rightDataChars];
};
