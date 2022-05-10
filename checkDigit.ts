type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export const computeCheckDigit = (
  d1: Digit,
  d2: Digit,
  d3: Digit,
  d4: Digit,
  d5: Digit,
  d6: Digit,
  d7: Digit,
  d8: Digit,
  d9: Digit,
  d10: Digit,
  d11: Digit,
  d12: Digit
): Digit => {
  const evenSum = d2 + d4 + d6 + d8 + d10 + d12;
  const oddSum = d1 + d3 + d5 + d7 + d9 + d11;
  return (10 - ((evenSum * 3 + oddSum) % 10)) as Digit;
};
