import { Digit } from "./digit.ts";
import { Tuple12 } from "./tuple.ts";

export const computeCheckDigit = (
  ...[d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12]: Tuple12<Digit>
): Digit => {
  const evenSum = d2 + d4 + d6 + d8 + d10 + d12;
  const oddSum = d1 + d3 + d5 + d7 + d9 + d11;
  return (10 - ((evenSum * 3 + oddSum) % 10)) as Digit;
};
