import { reverse } from "./reverse.ts";

const a = [1, 2, 3] as const;
const b = reverse(a);
console.log({ a, b });

const c = reverse([4, 5, 6]);
console.log({ c });
