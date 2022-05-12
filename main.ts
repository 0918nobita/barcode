import { readLines } from "https://deno.land/std@0.138.0/io/mod.ts";

import { Digit } from "./digit.ts";
import { genDataChars } from "./genDataChars.ts";
import { renderBarcode } from "./renderBarcode.ts";
import { Tuple12 } from "./tuple.ts";

const line: string = (await readLines(Deno.stdin).next()).value;

if (line.match(/^\d{12}$/) === null) {
  console.error("Invalid input");
  Deno.exit(1);
}

const digits = [...line].map((c) => parseInt(c)) as Tuple12<Digit>;

const [left, right] = genDataChars(...digits);

console.log(renderBarcode(left, right));
