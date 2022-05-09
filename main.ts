import { reverse } from "./reverse.ts";
import { F0 } from "./barcodeModule.ts";

const a = [1, 2, 3] as const;
const b = reverse(a);
const c = reverse([4, 5, 6]);
console.log({ a, b, c, F0 });
