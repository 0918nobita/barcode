import { readLines } from "https://deno.land/std@0.138.0/io/mod.ts";

import { Digit } from "./digit.ts";
import { genBarcode } from "./genBarcode/mod.ts";
import { Tuple12 } from "./tuple.ts";

const line: string = (await readLines(Deno.stdin).next()).value;

if (line.match(/^\d{12}$/) === null) {
  console.error("Invalid input");
  Deno.exit(1);
}

const digits = [...line].map((c) => parseInt(c)) as Tuple12<Digit>;

console.log(genBarcode(...digits));
