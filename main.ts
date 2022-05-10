import { reverse } from "./reverse.ts";
import { F0 } from "./evenParity1st.ts";
import { computeCheckDigit } from "./checkDigit.ts";

const a = [1, 2, 3] as const;
const b = reverse(a);
const c = reverse([4, 5, 6]);
const checkDigit = computeCheckDigit(0, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5);
console.log({ a, b, c, F0, checkDigit });
