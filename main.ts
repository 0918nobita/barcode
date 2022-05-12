import { genDataChars } from "./genDataChars.ts";
import { renderBarcode } from "./renderBarcode.ts";

const [left, right] = genDataChars(4, 9, 0, 1, 3, 6, 0, 3, 3, 5, 8, 5);
console.log(renderBarcode(left, right));
