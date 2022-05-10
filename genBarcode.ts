import { _, I, Mod } from "./barcodeModule.ts";
import { Digit } from "./digit.ts";
import { toEvenParity } from "./toEvenParity.ts";
import { Tuple12, Tuple6, Tuple7 } from "./tuple.ts";
import { reverse } from "./reverse.ts";
import { computeCheckDigit } from "./checkDigit.ts";

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

const evenParity = {
  0: toEvenParity(oddParity[0]),
  1: toEvenParity(oddParity[1]),
  2: toEvenParity(oddParity[2]),
  3: toEvenParity(oddParity[3]),
  4: toEvenParity(oddParity[4]),
  5: toEvenParity(oddParity[5]),
  6: toEvenParity(oddParity[6]),
  7: toEvenParity(oddParity[7]),
  8: toEvenParity(oddParity[8]),
  9: toEvenParity(oddParity[9]),
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
  const oddParities: LeftDataChars = [
    oddParity[d[1]],
    oddParity[d[2]],
    oddParity[d[3]],
    oddParity[d[4]],
    oddParity[d[5]],
    oddParity[d[6]],
  ];

  const parityIndices = whichParityToChange[d[0]];
  for (const i of parityIndices) {
    oddParities[i] = reverse(toEvenParity(oddParities[i]));
  }

  const checkDigit = computeCheckDigit(...d);

  const evenParities: RightDataChars = [
    evenParity[d[7]],
    evenParity[d[8]],
    evenParity[d[9]],
    evenParity[d[10]],
    evenParity[d[11]],
    evenParity[checkDigit],
  ];

  return [oddParities, evenParities];
};
