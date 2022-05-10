import { computeCheckDigit } from "./checkDigit.ts";
import { genBarcode } from "./genBarcode.ts";

const digits = [0, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5] as const;
const checkDigit = computeCheckDigit(...digits);
console.log(checkDigit);

const barcode = genBarcode(...digits);
console.log(barcode);
